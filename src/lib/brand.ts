// ── Marisma Brand Tokens ─────────────────────────────────────────────
// Single source of truth — logo-aligned colors, bypass Spark overrides
// Import this instead of defining const C = {...} in each component

export const C = {
  primary:     '#0d3d4a',
  accent:      '#c9a96e',
  tealLight:   '#3a8a8a',
  background:  '#f5f0e8',
  card:        '#faf7f2',
  cardFg:      '#1a2e2e',
  border:      '#c5d8d8',
  mutedBg:     '#e8f0f0',
  mutedFg:     '#4a6a6a',
  cream:       '#f5e6c8',
  creamMuted:  'rgba(245,230,200,0.70)',
  creamFaint:  'rgba(245,230,200,0.40)',
  secondaryBg: 'rgba(214,234,234,0.30)',
  headerGrad:  'linear-gradient(135deg, #0d3d4a 0%, #1a5568 50%, #3a8a8a 100%)',
  footerGrad:  'linear-gradient(135deg, #0a2d38 0%, #0d3d4a 60%, #1a5568 100%)',
  wavePattern: [
    'repeating-linear-gradient(',
    '  45deg,',
    '  transparent,',
    '  transparent 10px,',
    '  rgba(58,138,138,0.06) 10px,',
    '  rgba(58,138,138,0.06) 20px',
    ')',
  ].join(''),
  border_footer:   'rgba(245,230,200,0.15)',
  separator:       'rgba(58,138,138,0.25)',
  overlayDark:     'rgba(13,61,74,0.92)',
  glassBg:         'rgba(255,255,255,0.10)',
  glassBorder:     'rgba(245,230,200,0.80)',
  accentFg:        '#1a1a0e',
} as const

export type BrandColors = typeof C