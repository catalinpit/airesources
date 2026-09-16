import type { CollectionEntry } from 'astro:content';
import type { Resource } from './resources';

// Only type imports from astro:content: the builder's client script imports the
// handle rules from this module, so it must stay free of server-only code.

export type Category = CollectionEntry<'categories'>['data'];
export type StackData = CollectionEntry<'stacks'>['data'];
type StackEntry = CollectionEntry<'stacks'>;

/** A stack entry with its resource resolved. `note` replaces the description on the stack page. */
export interface StackItem {
  resource: Resource;
  note?: string;
}

export interface StackSection {
  category: Category;
  items: StackItem[];
}

export interface Stack {
  /** URL segment, taken from the file name: src/content/stacks/<handle>.json → /stack/<handle>/ */
  handle: string;
  data: StackData;
  /** Every item in the author's order. */
  items: StackItem[];
  /** Items grouped by category, in STACK_SECTION_ORDER. */
  sections: StackSection[];
  avatarUrl?: string;
}

// Handles double as URL segments, so they follow GitHub username rules:
// lowercase letters, digits and inner hyphens, 1–39 characters.
export const HANDLE_PATTERN = /^[a-z0-9](?:[a-z0-9-]{0,37}[a-z0-9])?$/;

// Routes under /stack/ that a handle must not shadow.
export const RESERVED_HANDLES = new Set(['new', 'index']);

/**
 * Categories in the order a stack page lists them: the tools you live in first,
 * then what you plug into them, then what you copy into them. Categories not
 * listed follow alphabetically.
 */
export const STACK_SECTION_ORDER = [
  'coding-tools',
  'cli-assistants',
  'agents',
  'extensions',
  'terminals',
  'desktop-assistants',
  'chat-bots',
  'web-assistants',
  'code-review',
  'testing',
  'git-clients',
  'skills',
  'prompts',
  'courses',
];

export function stackPath(handle: string): string {
  return `/stack/${handle}/`;
}

export function compareStackCategories(a: Category, b: Category): number {
  const rank = (category: Category) => {
    const index = STACK_SECTION_ORDER.indexOf(category.categorySlug);
    return index === -1 ? STACK_SECTION_ORDER.length : index;
  };
  return rank(a) - rank(b) || a.title.localeCompare(b.title);
}

function stackFile(entry: StackEntry): string {
  return entry.filePath ?? `src/content/stacks/${entry.id}.json`;
}

function resolveStack(
  entry: StackEntry,
  resourcesById: Map<string, Resource>,
  categoriesBySlug: Map<string, Category>,
): Stack {
  const file = stackFile(entry);
  const handle = entry.id;

  if (!HANDLE_PATTERN.test(handle)) {
    throw new Error(
      `${file}: the file name becomes the URL /stack/${handle}/, so it must use only lowercase letters, digits and inner hyphens (1–39 characters).`,
    );
  }
  if (RESERVED_HANDLES.has(handle)) {
    throw new Error(`${file}: "${handle}" is reserved for /stack/${handle}/. Pick another file name.`);
  }

  const seen = new Set<string>();
  const items = entry.data.stack.map(({ resource: ref, note }): StackItem => {
    const resource = resourcesById.get(ref.id);
    if (!resource) {
      throw new Error(
        `${file}: unknown resource "${ref.id}". Use the resource's path under src/content/resources without the extension, e.g. "coding-tools/cursor".`,
      );
    }
    if (seen.has(ref.id)) {
      throw new Error(`${file}: "${ref.id}" is listed twice.`);
    }
    seen.add(ref.id);
    return note ? { resource, note } : { resource };
  });

  const bySlug = new Map<string, StackSection>();
  for (const item of items) {
    const slug = item.resource.categorySlug;
    const category = categoriesBySlug.get(slug);
    if (!category) {
      throw new Error(`${file}: "${item.resource.name}" belongs to the unknown category "${slug}".`);
    }
    const section = bySlug.get(slug) ?? { category, items: [] };
    section.items.push(item);
    bySlug.set(slug, section);
  }
  const sections = [...bySlug.values()].sort((a, b) => compareStackCategories(a.category, b.category));

  const github = entry.data.links?.github;
  const avatarUrl = entry.data.avatar ?? (github ? `https://github.com/${github}.png` : undefined);

  return { handle, data: entry.data, items, sections, avatarUrl };
}

/** Every stack with its resources resolved, sorted by name. Throws (failing the build) on a bad reference. */
export function resolveStacks(
  entries: StackEntry[],
  resources: CollectionEntry<'resources'>[],
  categories: CollectionEntry<'categories'>[],
): Stack[] {
  const resourcesById = new Map(resources.map((resource) => [resource.id, resource.data]));
  const categoriesBySlug = new Map(categories.map((category) => [category.data.categorySlug, category.data]));

  return entries
    .map((entry) => resolveStack(entry, resourcesById, categoriesBySlug))
    .sort((a, b) => a.data.name.localeCompare(b.data.name));
}

/** "Cursor, Claude Code, Warp and 10 more" */
export function stackSummary(stack: Stack, shown = 3): string {
  const names = stack.items.map((item) => item.resource.name);
  const head = names.slice(0, shown);
  const rest = names.length - head.length;
  if (rest > 0) return `${head.join(', ')} and ${rest} more`;
  if (head.length <= 1) return head.join('');
  return `${head.slice(0, -1).join(', ')} and ${head[head.length - 1]}`;
}

export function pluralize(count: number, singular: string, plural = `${singular}s`): string {
  return `${count} ${count === 1 ? singular : plural}`;
}

/** Meta description for a stack page. */
export function stackDescription(stack: Stack): string {
  const scope = `${pluralize(stack.items.length, 'resource')} across ${pluralize(stack.sections.length, 'category', 'categories')}`;
  return `${stack.data.name}'s AI stack: ${stackSummary(stack, 4)}. ${scope}, hand-picked on AI Resources.`;
}

/** Text for the share button; the page URL is appended by the share target. */
export function stackShareText(stack: Stack): string {
  return `${stack.data.name}'s AI stack: ${stackSummary(stack)}`;
}

/** "Sep 2026" from a YYYY-MM-DD string. */
export function formatMonthYear(date: string): string {
  return new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(date));
}
