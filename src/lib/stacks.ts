import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import { basename } from 'node:path';
import { pluralize } from './format';
import { groupByCategory } from './resources';
import type { Category, CategoryGroup, Resource } from './resources';
import { HANDLE_PATTERN, RESERVED_HANDLES } from './stack-rules';

export type StackData = CollectionEntry<'stacks'>['data'];
type StackEntry = CollectionEntry<'stacks'>;

export interface StackItem {
  resource: Resource;
  note?: string;
}

export type StackSection = CategoryGroup<StackItem>;

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

function assertSectionOrderIsCurrent(categories: Category[]) {
  const slugs = new Set(categories.map((category) => category.categorySlug));
  const stale = STACK_SECTION_ORDER.filter((slug) => !slugs.has(slug));
  if (stale.length > 0) {
    throw new Error(`STACK_SECTION_ORDER in src/lib/stacks.ts names categories that no longer exist: ${stale.join(', ')}`);
  }
}

function resolveStack(entry: StackEntry, resourcesById: Map<string, Resource>, categories: Category[]): Stack {
  const handle = entry.id;
  const file = entry.filePath;
  if (!file) throw new Error(`Stack "${handle}" was not loaded from a file.`);

  // The loader derives the id from the file name (lowercasing it, among other
  // things), so the two can disagree; the URL must come from the literal name.
  if (basename(file) !== `${handle}.json`) {
    throw new Error(`${file}: rename the file to "${handle}.json"; the file name is the URL (/stack/${handle}/).`);
  }
  if (!HANDLE_PATTERN.test(handle)) {
    throw new Error(
      `${file}: the file name becomes the URL /stack/${handle}/, so it must use only lowercase letters, digits and inner hyphens (1–39 characters).`,
    );
  }
  if (RESERVED_HANDLES.has(handle)) {
    throw new Error(`${file}: "${handle}" is reserved for /stack/${handle}/. Pick another file name.`);
  }

  const seen = new Set<string>();
  const items = entry.data.stack.map(({ resource: id, note }): StackItem => {
    const resource = resourcesById.get(id);
    if (!resource) {
      throw new Error(
        `${file}: unknown resource "${id}". Use the resource's path under src/content/resources without the extension, e.g. "coding-tools/cursor".`,
      );
    }
    if (seen.has(id)) throw new Error(`${file}: "${id}" is listed twice.`);
    seen.add(id);
    return note ? { resource, note } : { resource };
  });

  const sections = groupByCategory(items, (item) => item.resource.categorySlug, categories).sort((a, b) =>
    compareStackCategories(a.category, b.category),
  );

  const github = entry.data.links?.github;
  const avatarUrl = entry.data.avatar ?? (github ? `https://github.com/${github}.png` : undefined);

  return { handle, data: entry.data, items, sections, avatarUrl };
}

/** Every stack with its resources resolved, sorted by name. Throws (failing the build) on a bad file. */
export async function getStacks(): Promise<Stack[]> {
  const [entries, resources, categories] = await Promise.all([
    getCollection('stacks'),
    getCollection('resources'),
    getCollection('categories'),
  ]);
  const categoryData = categories.map((category) => category.data);
  assertSectionOrderIsCurrent(categoryData);
  const resourcesById = new Map(resources.map((resource) => [resource.id, resource.data]));

  return entries
    .map((entry) => resolveStack(entry, resourcesById, categoryData))
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

/** Meta description for a stack page. */
export function stackDescription(stack: Stack): string {
  const scope = `${pluralize(stack.items.length, 'resource')} across ${pluralize(stack.sections.length, 'category', 'categories')}`;
  return `${stack.data.name}'s AI stack: ${stackSummary(stack, 4)}. ${scope}, hand-picked on AI Resources.`;
}

/** Text for the share button; the page URL is appended by the share target. */
export function stackShareText(stack: Stack): string {
  return `${stack.data.name}'s AI stack: ${stackSummary(stack)}`;
}
