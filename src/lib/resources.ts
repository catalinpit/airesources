import type { CollectionEntry } from 'astro:content';

export type Resource = CollectionEntry<'resources'>['data'];

/**
 * How a resource is presented:
 * - `course`: a curriculum with an external "View course" link
 * - `reusable`: text the visitor copies (a skill, prompt, or use case)
 * - `tool`: a product with a "Check out site" link
 */
export type ResourceKind = 'course' | 'reusable' | 'tool';

export function reusableContentOf(item: Resource): string | undefined {
  return item.skill || item.prompt || item.useCase;
}

export function resourceKind(item: Resource): ResourceKind {
  if (item.type === 'course') return 'course';
  if (reusableContentOf(item)) return 'reusable';
  return 'tool';
}

export function resourceSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export function resourcePath(item: Pick<Resource, 'name' | 'categorySlug'>): string {
  return `/${item.categorySlug}/${resourceSlug(item.name)}/`;
}

/** "5 modules · 25 lessons", or "7 episodes" for a single-module curriculum. */
export function curriculumSummary(item: Pick<Resource, 'curriculum' | 'lessonLabel'>): string | undefined {
  const modules = item.curriculum ?? [];
  if (modules.length === 0) return undefined;
  const lessonCount = modules.reduce((count, module) => count + module.lessons.length, 0);
  const lessons = `${lessonCount} ${item.lessonLabel}`;
  return modules.length === 1 ? lessons : `${modules.length} modules · ${lessons}`;
}
