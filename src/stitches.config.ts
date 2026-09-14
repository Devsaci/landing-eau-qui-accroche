import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      bgPrimary: '#0F172A',       // Bleu Ardoise / Granit
      bgOcean: '#0E3A36',         // Vert Océan Profond
      textPrimary: '#F8FAFC',     // Blanc Écume / Sel
      textMuted: '#64748B',       // Gris Zinc / Brume
      accentCopper: '#F97316',    // Orange Cuivre / 15 Hz
      borderSubtle: 'rgba(100, 116, 139, 0.25)',
      cardGlass: 'rgba(15, 23, 42, 0.75)',
    },
    fonts: {
      literary: "'Merriweather', Georgia, serif",
      ui: "'Inter', system-ui, sans-serif",
      mono: "'JetBrains Mono', monospace",
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    fontWeights: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeights: {
      tight: '1.2',
      snug: '1.35',
      normal: '1.5',
      relaxed: '1.7',
      literary: '1.8',
    },
    letterSpacings: {
      tight: '-0.02em',
      normal: '0',
      wide: '0.03em',
      widest: '0.08em',
    },
    space: {
      1: '0.25rem',  // 4px
      2: '0.5rem',   // 8px
      3: '0.75rem',  // 12px
      4: '1rem',     // 16px
      5: '1.25rem',  // 20px
      6: '1.5rem',   // 24px
      8: '2rem',     // 32px
      10: '2.5rem',  // 40px
      12: '3rem',    // 48px
      16: '4rem',    // 64px
      20: '5rem',    // 80px
      24: '6rem',    // 96px
    },
    sizes: {
      touchTarget: '44px',     // Cibles tactiles mobile-first (min 44px)
      containerMax: '1200px',
      heroMax: '860px',
      readerMax: '680px',
    },
    radii: {
      sm: '4px',
      md: '8px',
      lg: '12px',
      xl: '16px',
      '2xl': '24px',
      full: '9999px',
    },
    shadows: {
      card: '0 4px 20px -2px rgba(0, 0, 0, 0.4)',
      elevation: '0 12px 32px -4px rgba(0, 0, 0, 0.5)',
      waterAura: '0 0 35px -5px rgba(15, 118, 110, 0.4)',
      waterGlow: '0 0 50px rgba(20, 184, 166, 0.25)',
      readerPaper: '0 10px 30px rgba(0, 0, 0, 0.25)',
    },
    transitions: {
      fast: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
      standard: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      smooth: 'all 400ms cubic-bezier(0.16, 1, 0.3, 1)',
    },
  },
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
    bp4: '(min-width: 1280px)',
    reducedMotion: '(prefers-reduced-motion: reduce)',
  },
})

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  'html, body': {
    margin: 0,
    padding: 0,
    height: '100%',
    backgroundColor: '$bgPrimary',
    color: '$textPrimary',
    fontFamily: '$ui',
    lineHeight: '$normal',
    overscrollBehavior: 'none',
    WebkitTapHighlightColor: 'transparent',
  },
  '#root': {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    isolation: 'isolate',
  },
  'button, a, input, textarea, select': {
    fontFamily: 'inherit',
  },
  'button, a': {
    minHeight: '$touchTarget',
    touchAction: 'manipulation',
  },
  ':focus-visible': {
    outline: '2px solid $accentCopper',
    outlineOffset: '3px',
  },
  '@media (prefers-reduced-motion: reduce)': {
    '*, *::before, *::after': {
      animationDuration: '0.01ms !important',
      animationIterationCount: '1 !important',
      transitionDuration: '0.01ms !important',
      scrollBehavior: 'auto !important',
    },
  },
})
