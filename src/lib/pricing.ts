export const PRICING_LABELS = {
  free: 'Free',
  freemium: 'Freemium',
  paid: 'Paid',
  byok: 'BYOK',
  'top-up': 'Top-up',
} as const;

export type PricingType = keyof typeof PRICING_LABELS;

// schema.org Offer.category values for courses. Google stopped showing course rich results in 2025,
// so this only serves other consumers of the markup.
export const COURSE_OFFER_CATEGORIES: Record<PricingType, 'Free' | 'Partially Free' | 'Paid'> = {
  free: 'Free',
  freemium: 'Partially Free',
  paid: 'Paid',
  byok: 'Paid',
  'top-up': 'Paid',
};

const FREE_PRICES = new Set(['$0', '0', 'free']);

export function isFreeOnly(pricing: { type: PricingType; tiers: Array<{ price: string }> }): boolean {
  return pricing.type === 'free' && pricing.tiers.every(tier => FREE_PRICES.has(tier.price.trim().toLowerCase()));
}
