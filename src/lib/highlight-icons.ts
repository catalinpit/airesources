// Icon names a resource `highlights[].icon` may use; rendered by Highlight-Icon.astro.
export const HIGHLIGHT_ICONS = [
  'check',
  'clock',
  'code',
  'cpu',
  'cursor',
  'fork',
  'globe',
  'lock',
  'mic',
  'shield',
  'sparkles',
  'terminal',
  'zap',
] as const;

export type HighlightIconName = (typeof HIGHLIGHT_ICONS)[number];
