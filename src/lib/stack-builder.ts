// Logic for the stack builder (src/pages/stack/new.astro). The page renders the
// form from PROFILE_FIELDS and its client script runs the rest, so this module
// must stay free of server-only imports.
import {
  HANDLE_PATTERN,
  HTTP_URL_PATTERN,
  RESERVED_HANDLES,
  STACK_LIMITS,
  USERNAME_PATTERN,
  stripAt,
} from './stack-rules';

export interface ProfileField<K extends string = string> {
  key: K;
  label: string;
  placeholder: string;
  type?: 'text' | 'url';
  required?: boolean;
  maxlength?: number;
  hint?: string;
  /** Spans both form columns. */
  wide?: boolean;
}

// Keeps the keys as a literal union (for ProfileKey) while typing every entry as a plain ProfileField.
const defineProfileFields = <const K extends string>(fields: readonly ProfileField<K>[]) => fields;

export const PROFILE_FIELDS = defineProfileFields([
  { key: 'handle', label: 'Handle', placeholder: 'you', required: true, maxlength: STACK_LIMITS.handle, wide: true },
  { key: 'name', label: 'Name', placeholder: 'Ada Lovelace', required: true, maxlength: STACK_LIMITS.name },
  { key: 'bio', label: 'Bio', placeholder: 'One line about what you build.', maxlength: STACK_LIMITS.bio, wide: true },
  { key: 'website', label: 'Website', placeholder: 'https://', type: 'url' },
  { key: 'github', label: 'GitHub username', placeholder: 'octocat', hint: 'Also used for your avatar.' },
  { key: 'x', label: 'X username', placeholder: 'octocat' },
  { key: 'avatar', label: 'Avatar URL', placeholder: 'https://', type: 'url', hint: 'Optional. Defaults to your GitHub avatar.' },
]);

export type ProfileKey = (typeof PROFILE_FIELDS)[number]['key'];
export type Profile = Record<ProfileKey, string>;

export interface PickedResource {
  id: string;
  note: string;
}

export interface Draft {
  profile: Partial<Profile>;
  /** Resource id → note ('' for none). */
  picks: Record<string, string>;
}

// GitHub answers 414 somewhere above ~8,200 characters.
export const MAX_NEW_FILE_URL_LENGTH = 8000;

const labelOf = (key: ProfileKey) => PROFILE_FIELDS.find((field) => field.key === key)?.label ?? key;

/** A handle derived from a username: lowercased and reduced to the allowed characters. */
export function suggestHandle(username: string): string {
  return stripAt(username)
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, STACK_LIMITS.handle);
}

export function validateProfile(profile: Profile, takenHandles: ReadonlySet<string>): string[] {
  const problems: string[] = [];
  if (!profile.handle) problems.push('Choose a handle for your URL.');
  else if (!HANDLE_PATTERN.test(profile.handle)) problems.push('Handles use lowercase letters, digits and hyphens only.');
  else if (RESERVED_HANDLES.has(profile.handle)) problems.push(`"${profile.handle}" is reserved. Pick another handle.`);
  else if (takenHandles.has(profile.handle)) problems.push(`"${profile.handle}" is already taken. Pick another handle.`);
  if (!profile.name) problems.push('Add your name.');
  for (const key of ['website', 'avatar'] as const) {
    if (profile[key] && !HTTP_URL_PATTERN.test(profile[key])) problems.push(`${labelOf(key)} must start with https://.`);
  }
  for (const key of ['github', 'x'] as const) {
    if (profile[key] && !USERNAME_PATTERN.test(profile[key])) problems.push(`${labelOf(key)} should be the bare username, not a URL.`);
  }
  return problems;
}

/** The stack file's contents, matching the schema in src/content.config.ts. */
export function buildStackJson(profile: Profile, picks: PickedResource[], today = new Date()): string {
  const links = {
    ...(profile.website && { website: profile.website }),
    ...(profile.github && { github: stripAt(profile.github) }),
    ...(profile.x && { x: stripAt(profile.x) }),
  };
  const stack = {
    name: profile.name,
    ...(profile.bio && { bio: profile.bio }),
    ...(profile.avatar && { avatar: profile.avatar }),
    ...(Object.keys(links).length > 0 && { links }),
    updatedAt: today.toISOString().slice(0, 10),
    stack: picks.map(({ id, note }) => (note ? { resource: id, note } : id)),
  };
  return `${JSON.stringify(stack, null, 2)}\n`;
}

/** GitHub's "create new file" page, prefilled. Without write access GitHub forks the repo and offers a pull request. */
export function newFileUrl(repoUrl: string, handle: string, json: string): string {
  const params = new URLSearchParams({ filename: `src/content/stacks/${handle}.json`, value: json });
  return `${repoUrl}/new/main?${params}`;
}

export interface Submission {
  json: string;
  url: string;
  problems: string[];
}

export function prepareSubmission(
  profile: Profile,
  picks: PickedResource[],
  takenHandles: ReadonlySet<string>,
  repoUrl: string,
): Submission {
  const problems = validateProfile(profile, takenHandles);
  if (picks.length === 0) problems.push('Pick at least one resource.');
  const json = buildStackJson(profile, picks);
  const url = newFileUrl(repoUrl, profile.handle || 'you', json);
  if (url.length > MAX_NEW_FILE_URL_LENGTH) {
    problems.push('Too long for a prefilled GitHub link. Copy the JSON and add the file to the repository yourself.');
  }
  return { json, url, problems };
}

export function serializeDraft(profile: Profile, picks: PickedResource[]): string {
  const draft: Draft = { profile, picks: Object.fromEntries(picks.map(({ id, note }) => [id, note])) };
  return JSON.stringify(draft);
}

const isRecord = (value: unknown): value is Record<string, unknown> => typeof value === 'object' && value !== null;

/** Reads a draft written by `serializeDraft`; anything else (corrupt, foreign, missing) yields undefined. */
export function parseDraft(raw: string | null): Draft | undefined {
  if (!raw) return undefined;
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return undefined;
  }
  if (!isRecord(parsed) || !isRecord(parsed.profile) || !isRecord(parsed.picks)) return undefined;

  const profile: Partial<Profile> = {};
  for (const field of PROFILE_FIELDS) {
    const value = parsed.profile[field.key];
    if (typeof value === 'string') profile[field.key] = value;
  }
  const picks: Record<string, string> = {};
  for (const [id, note] of Object.entries(parsed.picks)) {
    if (typeof note === 'string') picks[id] = note;
  }
  return { profile, picks };
}
