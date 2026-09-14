import type { Resource } from './resources';

export interface RelatedResources {
  label: string;
  items: Resource[];
  /** True when every item has the current item's author, so rows don't need to repeat the name. */
  sameAuthor: boolean;
}

interface RelatedOptions {
  limit: number;
  categoryTitle: string;
}

function nameHash(name: string): number {
  return Array.from(name).reduce((hash, char) => (hash * 31 + char.charCodeAt(0)) >>> 0, 7);
}

/**
 * Other resources to show under `item`. Prefers the same author and falls back to the same category.
 * When the pool exceeds the limit, each item starts the list at a different offset, so the limit
 * never hides the same entries on every page.
 */
export function relatedResources(item: Resource, all: Resource[], { limit, categoryTitle }: RelatedOptions): RelatedResources {
  const others = all.filter(other => other.name !== item.name || other.categorySlug !== item.categorySlug);
  const authorName = item.author?.name;
  const byAuthor = authorName ? others.filter(other => other.author?.name === authorName) : [];

  const sameAuthor = byAuthor.length > 0;
  const pool = (sameAuthor ? byAuthor : others.filter(other => other.categorySlug === item.categorySlug))
    .sort((a, b) => a.name.localeCompare(b.name));
  const label = sameAuthor ? `More from ${authorName}` : `More in ${categoryTitle}`;

  if (pool.length <= limit) return { label, items: pool, sameAuthor };

  const start = nameHash(item.name) % pool.length;
  const rotated = [...pool.slice(start), ...pool.slice(0, start)];
  return { label, items: rotated.slice(0, limit), sameAuthor };
}
