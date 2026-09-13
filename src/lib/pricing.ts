export const PRICING_LABELS = {
  free: 'Free',
  freemium: 'Freemium',
  paid: 'Paid',
  byok: 'BYOK',
  'top-up': 'Top-up',
} as const;

export type PricingType = keyof typeof PRICING_LABELS;

const FREE_PRICES = new Set(['$0', '0', 'free']);

export function isFreeOnly(pricing: { type: PricingType; tiers: Array<{ price: string }> }): boolean {
  return pricing.type === 'free' && pricing.tiers.every(tier => FREE_PRICES.has(tier.price.trim().toLowerCase()));
}
