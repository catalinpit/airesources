import { PRICING_LABELS } from './pricing';
import type { Resource } from './resources';

/**
 * Facets the resource list can be filtered by. Each one is rendered onto a
 * row as a comma-separated `data-<type>` attribute (see Resource-Row) and read
 * back by FilterBar's client script, so a value must never contain a comma
 * (the content schema enforces this).
 */
export const FILTER_TYPES = ['pricing', 'features'] as const;

export type FilterType = (typeof FILTER_TYPES)[number];

export type FilterOption = { value: string; label: string };

export function facetsOf(item: Pick<Resource, 'pricing' | 'features'>): Record<FilterType, string[]> {
  return {
    pricing: item.pricing ? [item.pricing.type] : [],
    features: item.features ?? [],
  };
}

export const FACETS: Record<FilterType, { label: string; options: (values: Set<string>) => FilterOption[] }> = {
  pricing: {
    label: 'Pricing',
    // Keep the curated order of PRICING_LABELS rather than sorting alphabetically.
    options: (values) =>
      Object.entries(PRICING_LABELS)
        .filter(([value]) => values.has(value))
        .map(([value, label]) => ({ value, label })),
  },
  features: {
    label: 'Features',
    options: (values) => [...values].sort().map((value) => ({ value, label: value })),
  },
};
