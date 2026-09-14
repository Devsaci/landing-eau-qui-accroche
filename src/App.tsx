import { useEffect, useState } from 'react'
import { styled } from './stitches.config.ts'
import { Reader } from './components/Reader'
import heroArt from './assets/port-mystral-art.jpg'

/* ==========================================================================
   GLOBAL LAYOUT & CONTAINERS
   ========================================================================== */

const PageWrapper = styled('div', {
  minHeight: '100vh',
  backgroundColor: '$bgPrimary',
  color: '$textPrimary',
  position: 'relative',
  overflowX: 'hidden',
})

const SectionContainer = styled('div', {
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 $4',

  '@bp2': {
    padding: '0 $6',
  },
  '@bp3': {
    padding: '0 $8',
  },
})

const SectionHeader = styled('header', {
  textAlign: 'center',
  maxWidth: '720px',
  margin: '0 auto $10 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$3',
  scrollMarginTop: '80px',
})

const SectionEyebrow = styled('span', {
  fontFamily: '$mono',
  fontSize: '$xs',
  letterSpacing: '$widest',
  textTransform: 'uppercase',
  color: '$accentCopper',
  fontWeight: '$semibold',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$2',
})

const SectionTitle = styled('h2', {
  fontFamily: '$literary',
  fontSize: '$3xl',
  fontWeight: '$bold',
  letterSpacing: '$tight',
  color: '$textPrimary',
  lineHeight: '$tight',
  scrollMarginTop: '80px',

  '@bp2': {
    fontSize: '$4xl',
  },
})

const SectionSubtitle = styled('p', {
  fontFamily: '$literary',
  fontSize: '$base',
  lineHeight: '$relaxed',
  color: '$textMuted',
  fontStyle: 'italic',

  '@bp2': {
    fontSize: '$lg',
  },
})

/* ==========================================================================
   1. HEADER (Fixe / Flouté)
   ========================================================================== */

const HeaderNav = styled('header', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  height: '72px',
  zIndex: 100,
  backgroundColor: 'rgba(15, 23, 42, 0.82)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  borderBottom: '1px solid $borderSubtle',
  display: 'flex',
  alignItems: 'center',
  transition: '$fast',
})

const HeaderInner = styled('div', {
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 $4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$4',

  '@bp2': {
    padding: '0 $6',
  },
})

const BrandBlock = styled('a', {
  textDecoration: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  minHeight: 'auto',
})

const BrandTitle = styled('span', {
  fontFamily: '$ui',
  fontWeight: '$bold',
  fontSize: '$sm',
  letterSpacing: '$wide',
  color: '$textPrimary',
  textTransform: 'uppercase',
})

const BrandSubtitle = styled('span', {
  fontFamily: '$mono',
  fontSize: '0.625rem',
  color: '$accentCopper',
  letterSpacing: '$widest',
  textTransform: 'uppercase',
})

const NavLinks = styled('nav', {
  display: 'none',
  alignItems: 'center',
  gap: '$6',

  '@bp3': {
    display: 'flex',
  },
})

const NavLink = styled('a', {
  fontFamily: '$ui',
  fontSize: '$sm',
  fontWeight: '$medium',
  color: '$textMuted',
  textDecoration: 'none',
  minHeight: 'auto',
  transition: 'color 150ms ease',

  '&:hover': {
    color: '$textPrimary',
  },
  variants: {
    active: {
      true: {
        color: '#F97316',
        borderBottom: '2px solid #F97316',
      },
    },
  },
})

const HeaderAction = styled('a', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$accentCopper',
  color: '#FFFFFF',
  fontFamily: '$ui',
  fontSize: '$xs',
  fontWeight: '$semibold',
  padding: '0 $4',
  minHeight: '38px',
  borderRadius: '$md',
  textDecoration: 'none',
  boxShadow: '0 2px 14px rgba(249, 115, 22, 0.35)',
  transition: '$fast',
  whiteSpace: 'nowrap',

  '&:hover': {
    backgroundColor: '#EA580C',
    boxShadow: '0 4px 20px rgba(249, 115, 22, 0.55)',
    transform: 'translateY(-1px)',
  },
})

/* ==========================================================================
   2. HERO SECTION (Layout 2 colonnes Desktop)
   ========================================================================== */

const HeroSectionWrapper = styled('section', {
  position: 'relative',
  paddingTop: '120px',
  paddingBottom: '$16',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',

  '@bp2': {
    paddingTop: '144px',
    paddingBottom: '$20',
  },
})

const HeroBackdrop = styled('div', {
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  zIndex: 0,
  overflow: 'hidden',
})

const HeroArtImage = styled('img', {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center 32%',
  opacity: 0.28,
  filter: 'saturate(1.25) brightness(0.85)',
  maskImage:
    'radial-gradient(ellipse 80% 70% at 50% 30%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 60%, transparent 100%), linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 65%, transparent 100%)',
  WebkitMaskImage:
    'radial-gradient(ellipse 80% 70% at 50% 30%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 60%, transparent 100%), linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 65%, transparent 100%)',
})

const HeroGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$8',
  alignItems: 'center',
  position: 'relative',
  zIndex: 1,

  '@bp3': {
    gridTemplateColumns: '1.15fr 0.85fr',
    gap: '$12',
  },
})

const HeroLeftCol = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  textAlign: 'left',
  gap: '$5',
})

const HeroBadge = styled('span', {
  fontFamily: '$mono',
  fontSize: '0.72rem',
  fontWeight: '$semibold',
  letterSpacing: '$wider',
  textTransform: 'uppercase',
  color: '$accentCopper',
  backgroundColor: 'rgba(249, 115, 22, 0.08)',
  border: '1px solid $accentCopper',
  borderRadius: '$sm',
  padding: '6px 12px',
  boxShadow: '0 0 16px -2px rgba(249, 115, 22, 0.25)',
})

const HeroHeading = styled('h1', {
  fontFamily: '$literary',
  fontSize: '$3xl',
  fontWeight: '$bold',
  lineHeight: '1.18',
  color: '$textPrimary',
  letterSpacing: '$tight',
  textShadow: '0 2px 20px rgba(0, 0, 0, 0.7)',

  '@bp2': {
    fontSize: '$4xl',
  },
  '@bp3': {
    fontSize: '$5xl',
  },
})

const CopperEmphasis = styled('em', {
  fontStyle: 'italic',
  fontWeight: '$bold',
  color: '$accentCopper',
  textShadow: '0 0 24px rgba(249, 115, 22, 0.45)',
})

const HeroParagraph = styled('p', {
  fontFamily: '$literary',
  fontSize: '$base',
  lineHeight: '$relaxed',
  color: '#94A3B8',

  '@bp2': {
    fontSize: '$lg',
  },
})

const TelemetryInline = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '$2',
  fontFamily: '$mono',
  fontSize: '$xs',
  color: '$textMuted',
  backgroundColor: '$cardGlass',
  backdropFilter: 'blur(8px)',
  border: '1px solid $borderSubtle',
  borderRadius: '$md',
  padding: '8px 14px',
})

const TelemetryHighlight = styled('span', {
  color: '$accentCopper',
  fontWeight: '$semibold',
})

const HeroActionGroup = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$4',
  alignItems: 'center',
  marginTop: '$2',
})

const PrimaryCtaButton = styled('a', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  minHeight: '$touchTarget',
  padding: '0 $6',
  fontFamily: '$ui',
  fontSize: '$sm',
  fontWeight: '$semibold',
  color: '#FFFFFF',
  backgroundColor: '$accentCopper',
  borderRadius: '$md',
  textDecoration: 'none',
  boxShadow: '0 4px 20px rgba(249, 115, 22, 0.35)',
  transition: '$standard',
  border: '1px solid rgba(255, 255, 255, 0.2)',

  '&:hover': {
    backgroundColor: '#EA580C',
    boxShadow: '0 6px 28px rgba(249, 115, 22, 0.55)',
    transform: 'translateY(-1px)',
  },
})

const SecondaryOutlineButton = styled('a', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '$touchTarget',
  padding: '0 $6',
  fontFamily: '$ui',
  fontSize: '$sm',
  fontWeight: '$medium',
  color: '$textPrimary',
  backgroundColor: '$cardGlass',
  backdropFilter: 'blur(8px)',
  border: '1px solid $borderSubtle',
  borderRadius: '$md',
  textDecoration: 'none',
  transition: '$standard',

  '&:hover': {
    borderColor: '$textMuted',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    transform: 'translateY(-1px)',
  },
})

const HeroRightCol = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const BookCoverFrame = styled('div', {
  position: 'relative',
  width: '100%',
  maxWidth: '420px',
  aspectRatio: '1 / 1',
  borderRadius: '$xl',
  backgroundColor: '$cardGlass',
  border: '1px solid $borderSubtle',
  padding: '$3',
  boxShadow:
    '0 24px 60px -12px rgba(0, 0, 0, 0.85), 0 0 30px -5px rgba(249, 115, 22, 0.2)',
  overflow: 'hidden',
  transition: '$smooth',

  '&:hover': {
    borderColor: 'rgba(249, 115, 22, 0.4)',
    boxShadow:
      '0 28px 70px -10px rgba(0, 0, 0, 0.9), 0 0 45px -5px rgba(249, 115, 22, 0.35)',
    transform: 'translateY(-3px)',
  },
})

const BookCoverImage = styled('img', {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '$lg',
  filter: 'contrast(1.05) saturate(1.15)',
})

const BookCoverBadge = styled('div', {
  position: 'absolute',
  bottom: '$6',
  left: '$6',
  right: '$6',
  backgroundColor: 'rgba(15, 23, 42, 0.88)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(249, 115, 22, 0.3)',
  borderRadius: '$md',
  padding: '$2 $3',
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  textAlign: 'left',
})

const BookCoverTag = styled('span', {
  fontFamily: '$mono',
  fontSize: '0.625rem',
  color: '$accentCopper',
  letterSpacing: '$widest',
  textTransform: 'uppercase',
})

const BookCoverTitle = styled('span', {
  fontFamily: '$literary',
  fontSize: '$xs',
  color: '$textPrimary',
  fontWeight: '$bold',
})

/* ==========================================================================
   3. PILLARS SECTION (Les Piliers de l'Univers)
   ========================================================================== */

const PillarsSectionWrapper = styled('section', {
  padding: '$16 0',
  position: 'relative',
  borderTop: '1px solid $borderSubtle',
  backgroundColor: 'rgba(15, 23, 42, 0.4)',

  '@bp2': {
    padding: '$24 0',
  },
})

const PillarsGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$6',

  '@bp2': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
})

const PillarCard = styled('article', {
  backgroundColor: '$cardGlass',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: '1px solid $borderSubtle',
  borderRadius: '$xl',
  padding: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  textAlign: 'left',
  transition: '$standard',
  position: 'relative',
  overflow: 'hidden',

  '&:hover': {
    borderColor: 'rgba(249, 115, 22, 0.4)',
    transform: 'translateY(-3px)',
    boxShadow: '0 16px 36px -10px rgba(0, 0, 0, 0.6), 0 0 20px rgba(249, 115, 22, 0.15)',
  },
})

const PillarNumber = styled('span', {
  fontFamily: '$mono',
  fontSize: '$xs',
  fontWeight: '$bold',
  letterSpacing: '$widest',
  color: '$accentCopper',
})

const PillarTitle = styled('h3', {
  fontFamily: '$literary',
  fontSize: '$xl',
  fontWeight: '$bold',
  color: '$textPrimary',
  lineHeight: '$snug',
})

const PillarDescription = styled('p', {
  fontFamily: '$ui',
  fontSize: '$sm',
  lineHeight: '$relaxed',
  color: '$textMuted',
  flexGrow: 1,
})

const PillarTag = styled('div', {
  fontFamily: '$mono',
  fontSize: '0.68rem',
  color: '$accentCopper',
  backgroundColor: 'rgba(249, 115, 22, 0.08)',
  border: '1px solid rgba(249, 115, 22, 0.2)',
  borderRadius: '$sm',
  padding: '4px 8px',
  alignSelf: 'flex-start',
})

/* Bandeau télémétrique onde sinusoïdale */
const TelemetryStrip = styled('div', {
  marginTop: '$10',
  backgroundColor: '$cardGlass',
  backdropFilter: 'blur(12px)',
  border: '1px solid $borderSubtle',
  borderRadius: '$lg',
  padding: '$4 $6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  alignItems: 'center',

  '@bp2': {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

const TelemetryStripMeta = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  fontFamily: '$mono',
  fontSize: '$xs',
  color: '$textPrimary',
})

const PulsingIndicator = styled('span', {
  width: '8px',
  height: '8px',
  borderRadius: '$full',
  backgroundColor: '$accentCopper',
  boxShadow: '0 0 10px $accentCopper',
  animation: 'pulse 2s infinite',
})

const WaveSvg = styled('svg', {
  width: '100%',
  maxWidth: '460px',
  height: '36px',
})

/* ==========================================================================
   4. READER SECTION (Démonstrateur Liseuse PWA)
   ========================================================================== */

const ReaderSectionWrapper = styled('section', {
  padding: '$16 0',
  position: 'relative',
  borderTop: '1px solid $borderSubtle',

  '@bp2': {
    padding: '$24 0',
  },
})

/* ==========================================================================
   5. CHARACTERS SECTION (Les protagonistes de Port-Mystral)
   ========================================================================== */

const CharactersSectionWrapper = styled('section', {
  padding: '$16 0',
  position: 'relative',
  borderTop: '1px solid $borderSubtle',
  backgroundColor: 'rgba(15, 23, 42, 0.5)',

  '@bp2': {
    padding: '$24 0',
  },
})

const CharactersHeader = styled(SectionHeader, {
  maxWidth: '860px',
})

const CharactersTitle = styled('h2', {
  fontFamily: '$literary',
  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
  fontWeight: '$bold',
  letterSpacing: '$tight',
  color: '$textPrimary',
  lineHeight: '1.25',
  whiteSpace: 'normal',
  textWrap: 'balance',
})

const CharactersGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$6',

  '@bp1': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@bp3': {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
})

const CharacterCard = styled('article', {
  backgroundColor: '$cardGlass',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: '1px solid $borderSubtle',
  borderRadius: '$xl',
  padding: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  textAlign: 'left',
  transition: '$standard',

  '&:hover': {
    borderColor: 'rgba(249, 115, 22, 0.45)',
    transform: 'translateY(-3px)',
    boxShadow: '0 16px 32px -8px rgba(0, 0, 0, 0.6), 0 0 20px rgba(249, 115, 22, 0.12)',
  },
})

const CharacterRole = styled('span', {
  fontFamily: '$mono',
  fontSize: '0.65rem',
  fontWeight: '$bold',
  letterSpacing: '$widest',
  textTransform: 'uppercase',
  color: '$accentCopper',
})

const CharacterName = styled('h3', {
  fontFamily: '$literary',
  fontSize: '$xl',
  fontWeight: '$bold',
  color: '$textPrimary',
})

const CharacterBio = styled('p', {
  fontFamily: '$ui',
  fontSize: '$sm',
  lineHeight: '$relaxed',
  color: '$textMuted',
  flexGrow: 1,
})

const CharacterDetail = styled('div', {
  fontFamily: '$mono',
  fontSize: '0.68rem',
  color: '$textMuted',
  paddingTop: '$3',
  borderTop: '1px solid $borderSubtle',
})

/* ==========================================================================
   6. CTA SECTION (Rejoindre l'enquête)
   ========================================================================== */

const CtaSectionWrapper = styled('section', {
  padding: '$16 0',
  position: 'relative',

  '@bp2': {
    padding: '$24 0',
  },
})

const CtaBox = styled('div', {
  backgroundColor: '$bgOcean', // Vert océan profond #0E3A36
  border: '1px solid rgba(249, 115, 22, 0.35)',
  borderRadius: '$2xl',
  padding: '$8 $6',
  textAlign: 'center',
  maxWidth: '860px',
  margin: '0 auto',
  position: 'relative',
  overflow: 'hidden',
  boxShadow:
    '0 24px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px -5px rgba(249, 115, 22, 0.25)',

  '@bp2': {
    padding: '$12 $10',
  },
})

const CtaTitle = styled('h2', {
  fontFamily: '$literary',
  fontSize: '$2xl',
  fontWeight: '$bold',
  color: '$textPrimary',
  marginBottom: '$3',

  '@bp2': {
    fontSize: '$4xl',
  },
})

const CtaSubtitle = styled('p', {
  fontFamily: '$literary',
  fontStyle: 'italic',
  fontSize: '$base',
  lineHeight: '$relaxed',
  color: '$textPrimary',
  opacity: 0.85,
  maxWidth: '600px',
  margin: '0 auto $8 auto',

  '@bp2': {
    fontSize: '$lg',
  },
})

const CtaForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  maxWidth: '520px',
  margin: '0 auto',

  '@bp1': {
    flexDirection: 'row',
  },
})

const CtaInput = styled('input', {
  flex: 1,
  minHeight: '$touchTarget',
  padding: '0 $4',
  backgroundColor: 'rgba(15, 23, 42, 0.75)',
  border: '1px solid $borderSubtle',
  borderRadius: '$md',
  fontFamily: '$ui',
  fontSize: '$sm',
  color: '$textPrimary',
  outline: 'none',
  transition: '$fast',

  '&::placeholder': {
    color: '$textMuted',
  },

  '&:focus': {
    borderColor: '$accentCopper',
    boxShadow: '0 0 0 3px rgba(249, 115, 22, 0.25)',
  },
})

const CtaButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '$touchTarget',
  padding: '0 $6',
  backgroundColor: '$accentCopper',
  color: '#FFFFFF',
  fontFamily: '$ui',
  fontSize: '$sm',
  fontWeight: '$semibold',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '$md',
  cursor: 'pointer',
  boxShadow: '0 4px 18px rgba(249, 115, 22, 0.4)',
  transition: '$standard',
  whiteSpace: 'nowrap',

  '&:hover': {
    backgroundColor: '#EA580C',
    boxShadow: '0 6px 26px rgba(249, 115, 22, 0.6)',
    transform: 'translateY(-1px)',
  },
})

const CtaDisclaimer = styled('p', {
  fontFamily: '$mono',
  fontSize: '0.65rem',
  color: '$textPrimary',
  opacity: 0.6,
  marginTop: '$4',
  letterSpacing: '$wide',
})

/* ==========================================================================
   7. FOOTER
   ========================================================================== */

const FooterWrapper = styled('footer', {
  borderTop: '1px solid $borderSubtle',
  backgroundColor: '#0A0F1D',
  padding: '$12 0 $8 0',
  position: 'relative',
})

const FooterGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$8',
  textAlign: 'left',
  marginBottom: '$10',

  '@bp2': {
    gridTemplateColumns: '1.2fr 1fr 1fr',
  },
})

const FooterBrand = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})

const FooterHeading = styled('h4', {
  fontFamily: '$ui',
  fontSize: '$xs',
  fontWeight: '$bold',
  letterSpacing: '$widest',
  textTransform: 'uppercase',
  color: '$accentCopper',
  marginBottom: '$2',
})

const FooterText = styled('p', {
  fontFamily: '$ui',
  fontSize: '$sm',
  lineHeight: '$relaxed',
  color: '$textMuted',
})

const FooterLinkList = styled('ul', {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})

const FooterAnchor = styled('a', {
  fontFamily: '$ui',
  fontSize: '$sm',
  color: '$textMuted',
  textDecoration: 'none',
  minHeight: 'auto',
  transition: 'color 150ms ease',

  '&:hover': {
    color: '$textPrimary',
  },
})

const FooterCoordinates = styled('div', {
  fontFamily: '$mono',
  fontSize: '0.72rem',
  lineHeight: '1.7',
  color: '$textMuted',
  backgroundColor: 'rgba(15, 23, 42, 0.6)',
  border: '1px solid $borderSubtle',
  borderRadius: '$md',
  padding: '$3 $4',
})

const FooterBottomBar = styled('div', {
  paddingTop: '$6',
  borderTop: '1px solid rgba(100, 116, 139, 0.15)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$3',
  fontFamily: '$mono',
  fontSize: '0.68rem',
  color: '$textMuted',

  '@bp2': {
    flexDirection: 'row',
  },
})

/* ==========================================================================
   APPLICATION COMPONENT
   ========================================================================== */

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('')

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const sectionIds = ['hero', 'univers', 'protagonistes', 'liseuse', 'capteurs'];

    const observer = new IntersectionObserver(
      (entries) => {
        // 1. Filtrer uniquement les sections en intersection
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;

        // 2. Trier par ratio d'intersection décroissant (la plus visible gagne)
        visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const activeId = visible[0].target.id;

        if (activeId === 'hero') {
          setActiveSection('');
        } else {
          setActiveSection(activeId);
        }
      },
      {
        // Zone d'observation équilibrée
        rootMargin: '-80px 0px -30% 0px',
        threshold: [0.1, 0.3, 0.6],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Écouteur de sécurité pour le sommet absolu de la page
    const handleScrollTop = () => {
      if ((window.scrollY || window.pageYOffset) < 150) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScrollTop, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollTop);
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])

  return (
    <PageWrapper>
      {/* 1. HEADER (Fixe / Flouté) */}
      <HeaderNav role="banner">
        <HeaderInner>
          <BrandBlock href="#hero" aria-label="Retour à l'accueil" onClick={() => handleNavClick('')}>
            <BrandTitle>L&apos;EAU QUI ACCROCHE</BrandTitle>
            <BrandSubtitle>LA VÉRITÉ SOUS LA SURFACE</BrandSubtitle>
          </BrandBlock>

          <NavLinks role="navigation" aria-label="Navigation principale">
            <NavLink 
              href="#univers" 
              onClick={() => handleNavClick('univers')}
              active={activeSection === 'univers'}
              style={{
                color: activeSection === 'univers' ? '#F97316' : undefined,
                borderBottom: activeSection === 'univers' ? '2px solid #F97316' : '2px solid transparent',
                fontWeight: activeSection === 'univers' ? 600 : 500,
                paddingBottom: '4px',
                transition: 'all 0.2s ease',
              }}
            >L&apos;Univers</NavLink>
            <NavLink 
              href="#protagonistes" 
              onClick={() => handleNavClick('protagonistes')}
              active={activeSection === 'protagonistes'}
              style={{
                color: activeSection === 'protagonistes' ? '#F97316' : undefined,
                borderBottom: activeSection === 'protagonistes' ? '2px solid #F97316' : '2px solid transparent',
                fontWeight: activeSection === 'protagonistes' ? 600 : 500,
                paddingBottom: '4px',
                transition: 'all 0.2s ease',
              }}
            >Protagonistes</NavLink>
            <NavLink 
              href="#liseuse" 
              onClick={() => handleNavClick('liseuse')}
              active={activeSection === 'liseuse'}
              style={{
                color: activeSection === 'liseuse' ? '#F97316' : undefined,
                borderBottom: activeSection === 'liseuse' ? '2px solid #F97316' : '2px solid transparent',
                fontWeight: activeSection === 'liseuse' ? 600 : 500,
                paddingBottom: '4px',
                transition: 'all 0.2s ease',
              }}
            >Liseuse PWA</NavLink>
            <NavLink 
              href="#capteurs" 
              onClick={() => handleNavClick('capteurs')}
              active={activeSection === 'capteurs'}
              style={{
                color: activeSection === 'capteurs' ? '#F97316' : undefined,
                borderBottom: activeSection === 'capteurs' ? '2px solid #F97316' : '2px solid transparent',
                fontWeight: activeSection === 'capteurs' ? 600 : 500,
                paddingBottom: '4px',
                transition: 'all 0.2s ease',
              }}
            >Données &amp; Capteurs</NavLink>
          </NavLinks>

          <HeaderAction href="#liseuse">
            Accéder à la Liseuse
          </HeaderAction>
        </HeaderInner>
      </HeaderNav>

      {/* 2. HERO SECTION (Layout 2 colonnes Desktop) */}
      <HeroSectionWrapper id="hero" aria-labelledby="hero-title">
        <HeroBackdrop aria-hidden="true">
          <HeroArtImage
            src={heroArt}
            alt="Port-Mystral sous la brume crépusculaire"
          />
        </HeroBackdrop>

        <SectionContainer>
          <HeroGrid>
            {/* Colonne Gauche */}
            <HeroLeftCol>
              <HeroBadge>
                [ ROMAN D&apos;AVENTURE &amp; D&apos;ENQUÊTE SCIENTIFIQUE ]
              </HeroBadge>

              <HeroHeading id="hero-title">
                À Port-Mystral, l&apos;eau ne se contente plus de couler.{' '}
                <CopperEmphasis>Elle retient.</CopperEmphasis>
              </HeroHeading>

              <HeroParagraph>
                Une brume dense et tiède noie les falaises granitiques de la rade. Lorsque Luna Mercier,
                étudiante en hydrostatique, trempe ses doigts dans l&apos;eau du môle nord, elle découvre une anomalie
                inouïe : le liquide refuse de s&apos;écouler. Il s&apos;accroche avec une viscosité vivante.
              </HeroParagraph>

              <TelemetryInline>
                <span>Secteur : <TelemetryHighlight>Port-Nord</TelemetryHighlight></span>
                <span>|</span>
                <span>Fréquence : <TelemetryHighlight>14.82 Hz</TelemetryHighlight></span>
                <span>|</span>
                <span>Viscosité : <TelemetryHighlight>ρ = 1.052 g/cm³</TelemetryHighlight></span>
              </TelemetryInline>

              <HeroActionGroup>
                <PrimaryCtaButton href="#liseuse">
                  <span>Lire le Chapitre 1 (Gratuit)</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </PrimaryCtaButton>

                <SecondaryOutlineButton href="#capteurs">
                  Explorer les données de la baie
                </SecondaryOutlineButton>
              </HeroActionGroup>
            </HeroLeftCol>

            {/* Colonne Droite : Couverture officielle du livre */}
            <HeroRightCol>
              <BookCoverFrame>
                <BookCoverImage
                  src={heroArt}
                  alt="Couverture officielle du roman L'Eau qui Accroche — Port-Mystral"
                />
                <BookCoverBadge>
                  <BookCoverTag>ÉDITION OFFICIELLE — PORT&#8209;MYSTRAL</BookCoverTag>
                  <BookCoverTitle>L&apos;EAU QUI ACCROCHE • TOME 1</BookCoverTitle>
                </BookCoverBadge>
              </BookCoverFrame>
            </HeroRightCol>
          </HeroGrid>
        </SectionContainer>
      </HeroSectionWrapper>

      {/* 3. PILLARS SECTION (Les Piliers de l'Univers) */}
      <PillarsSectionWrapper id="univers" aria-labelledby="pillars-title">
        <SectionContainer>
          <SectionHeader>
            <SectionEyebrow>Architecture Narrative</SectionEyebrow>
            <SectionTitle id="pillars-title">Les Piliers de l&apos;Univers</SectionTitle>
            <SectionSubtitle>
              Trois fondations indissociables où la physique marine se heurte aux secrets les plus enfouis de la côte.
            </SectionSubtitle>
          </SectionHeader>

          <PillarsGrid>
            {/* Carte 1 */}
            <PillarCard>
              <PillarNumber>01 — PROTOCOLE</PillarNumber>
              <PillarTitle>La Méthode contre la Panique</PillarTitle>
              <PillarDescription>
                Quand les équations de Navier-Stokes sont réfutées en pleine mer, seuls les instruments de mesure,
                les viscosimètres étalonnés et les capteurs piézoélectriques permettent de garder la raison.
              </PillarDescription>
              <PillarTag>Capteurs piézoélectriques • Rhéologie marine</PillarTag>
            </PillarCard>

            {/* Carte 2 */}
            <PillarCard>
              <PillarNumber>02 — ENQUÊTE</PillarNumber>
              <PillarTitle>La Vérité contre l&apos;Effacement</PillarTitle>
              <PillarDescription>
                Face au verrouillage imposé par la capitainerie et à la disparition inexpliquée des carottages sédimentaires,
                les carnets de terrain clandestins deviennent l&apos;unique mémoire contre le silence.
              </PillarDescription>
              <PillarTag>Notes de terrain • Échantillons scellés</PillarTag>
            </PillarCard>

            {/* Carte 3 */}
            <PillarCard>
              <PillarNumber>03 — ACOUSTIQUE</PillarNumber>
              <PillarTitle>La Perception &amp; la Recevabilité</PillarTitle>
              <PillarDescription>
                L&apos;onde infrasonore continue à 15 Hz synchronise la tension de surface de la baie avec la présence humaine.
                L&apos;océan ne se contente plus de subir : il observe et réagit au toucher.
              </PillarDescription>
              <PillarTag>Onde acoustique 15 Hz • Tension de surface</PillarTag>
            </PillarCard>
          </PillarsGrid>
        </SectionContainer>
      </PillarsSectionWrapper>

      {/* 4. CHARACTERS SECTION (Les protagonistes) */}
      <CharactersSectionWrapper id="protagonistes" aria-labelledby="characters-title">
        <SectionContainer>
          <CharactersHeader>
            <SectionEyebrow>Dramatis Personae</SectionEyebrow>
            <CharactersTitle id="characters-title">
              Les protagonistes de l&apos;anomalie de Port&#8209;Mystral
            </CharactersTitle>
            <SectionSubtitle>
              Quatre regards, quatre obsessions, face à un océan qui refuse d&apos;obéir aux lois connues de la physique.
            </SectionSubtitle>
          </CharactersHeader>

          <CharactersGrid>
            {/* Luna Mercier */}
            <CharacterCard>
              <CharacterRole>TÉLÉMÉTRIE &amp; RHÉOLOGIE</CharacterRole>
              <CharacterName>Luna Mercier</CharacterName>
              <CharacterBio>
                Étudiante en hydrostatique marine. Armée de ses viscosimètres oscillatoires, elle est la première
                à consigner la pulsation vivante de l&apos;eau dans son laboratoire improvisé du phare.
              </CharacterBio>
              <CharacterDetail>Rôle : Découvreuse de l&apos;anomalie</CharacterDetail>
            </CharacterCard>

            {/* Théo Delvaux */}
            <CharacterCard>
              <CharacterRole>MÉMOIRE DU PORT</CharacterRole>
              <CharacterName>Théo Delvaux</CharacterName>
              <CharacterBio>
                Veilleur des bassins et ancien quartier-maître. Témoin des chalutiers qui n&apos;ont jamais pu décoller
                leurs quilles du fond de cale par nuit d&apos;équinoxe.
              </CharacterBio>
              <CharacterDetail>Rôle : Témoin des marées noires du passé</CharacterDetail>
            </CharacterCard>

            {/* Dr. Archambault */}
            <CharacterCard>
              <CharacterRole>CAPITAINERIE DU PORT</CharacterRole>
              <CharacterName>Dr. Archambault</CharacterName>
              <CharacterBio>
                Directeur des opérations portuaires. Tiraillé entre la sauvegarde des liaisons marchandes vitales
                pour la ville et l&apos;impossibilité de masquer plus longtemps les avaries de coques.
              </CharacterBio>
              <CharacterDetail>Rôle : Ordre établi &amp; classification</CharacterDetail>
            </CharacterCard>

            {/* Élise Ternon */}
            <CharacterCard>
              <CharacterRole>ACOUSTIQUE MARINE</CharacterRole>
              <CharacterName>Élise Ternon</CharacterName>
              <CharacterBio>
                Océanographe dissidente radiée de l&apos;institut national. Elle traque depuis dix ans la source sous-marine
                du grondement à 15 Hz dans les abysses de la fosse ouest.
              </CharacterBio>
              <CharacterDetail>Rôle : Enquêteuse clandestine</CharacterDetail>
            </CharacterCard>
          </CharactersGrid>
        </SectionContainer>
      </CharactersSectionWrapper>

      {/* 5. READER SECTION (Démonstrateur Liseuse PWA) */}
      <ReaderSectionWrapper id="liseuse" aria-labelledby="reader-title">
        <SectionContainer>
          <SectionHeader>
            <SectionEyebrow>Expérience de Lecture</SectionEyebrow>
            <SectionTitle id="reader-title">Démonstrateur Liseuse PWA</SectionTitle>
            <SectionSubtitle>
              Plongez directement dans le premier chapitre. Ajustez la typographie, basculez entre les ambiances
              Papier et Nuit Océanique, et observez les relevés de laboratoire en temps réel.
            </SectionSubtitle>
          </SectionHeader>

          {/* Composant Reader avec encart télémétrique intégré */}
          <Reader />
        </SectionContainer>
      </ReaderSectionWrapper>

      {/* 6. TELEMETRY & CTA SECTION (Capteurs) */}
      <div id="capteurs" style={{ scrollMarginTop: '100px' }}>
        <SectionContainer>
          {/* Bandeau télémétrique */}
          <TelemetryStrip>
          <TelemetryStripMeta>
            <PulsingIndicator aria-hidden="true" />
            <span>FRÉQUENCE ENREGISTRÉE : <TelemetryHighlight>15.12 HZ</TelemetryHighlight></span>
            <span>•</span>
            <span style={{ color: '#64748B' }}>CAPTEUR HYDRO-PHONIQUE EN IMMERSION (-24M)</span>
          </TelemetryStripMeta>

          <WaveSvg viewBox="0 0 460 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Signal sinusoïdal de l'onde 15 Hz">
            <path
              d="M 0 18 Q 28 0, 57 18 T 114 18 T 171 18 T 228 18 T 285 18 T 342 18 T 400 18 T 460 18"
              stroke="#F97316"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M 0 18 Q 28 6, 57 18 T 114 18 T 171 18 T 228 18 T 285 18 T 342 18 T 400 18 T 460 18"
              stroke="#64748B"
              strokeWidth="1"
              strokeDasharray="4 4"
              fill="none"
              opacity="0.5"
            />
          </WaveSvg>
        </TelemetryStrip>
      </SectionContainer>

      {/* 6. CTA SECTION (Rejoindre l'enquête) */}
      <CtaSectionWrapper id="rejoindre" aria-labelledby="cta-title">
        <SectionContainer>
          <CtaBox>
            <CtaTitle id="cta-title">Rejoindre l&apos;enquête de Port-Mystral</CtaTitle>
            <CtaSubtitle>
              Recevez les carnets de bord déclassifiés de Luna Mercier, les relevés de capteurs en temps réel
              et l&apos;accès immédiat aux chapitres de la liseuse.
            </CtaSubtitle>

            <CtaForm onSubmit={(e) => e.preventDefault()}>
              <CtaInput
                type="email"
                placeholder="Votre adresse email..."
                required
                aria-label="Adresse email"
              />
              <CtaButton type="submit">
                Rejoindre l&apos;enquête
              </CtaButton>
            </CtaForm>

            <CtaDisclaimer>
              TRANSMISSION SÉCURISÉE • DÉSINSCRIPTION EN 1 CLIC • RELEVÉS CRYPTÉS EN 15 HZ
            </CtaDisclaimer>
          </CtaBox>
        </SectionContainer>
      </CtaSectionWrapper>
      </div>

      {/* 7. FOOTER */}
      <FooterWrapper role="contentinfo">
        <SectionContainer>
          <FooterGrid>
            <FooterBrand>
              <BrandTitle>L&apos;EAU QUI ACCROCHE</BrandTitle>
              <BrandSubtitle>PORT&#8209;MYSTRAL — ROMAN D&apos;ENQUÊTE SCIENTIFIQUE</BrandSubtitle>
              <FooterText>
                Une expérience littéraire sensorielle explorant la frontière entre rigueur hydrostatique
                et mystère maritime abyssal.
              </FooterText>
            </FooterBrand>

            <div>
              <FooterHeading>Exploration</FooterHeading>
              <FooterLinkList>
                <li><FooterAnchor href="#univers">L&apos;Univers &amp; Piliers</FooterAnchor></li>
                <li><FooterAnchor href="#protagonistes">Les Protagonistes</FooterAnchor></li>
                <li><FooterAnchor href="#liseuse">Liseuse PWA Interactive</FooterAnchor></li>
                <li><FooterAnchor href="#capteurs">Télémétrie en Direct</FooterAnchor></li>
              </FooterLinkList>
            </div>

            <div>
              <FooterHeading>Station Hydrographique</FooterHeading>
              <FooterCoordinates>
                <div>COORDONNÉES : 47°14&apos;22&quot;N 02°58&apos;45&quot;W</div>
                <div>RADIONAVIGATION : CANAL 15 HZ</div>
                <div>SURVEILLANCE : BASSIN NORD — PHARE SUD</div>
              </FooterCoordinates>
            </div>
          </FooterGrid>

          <FooterBottomBar>
            <span>&copy; 2026 L&apos;Eau qui Accroche. Tous droits réservés.</span>
            <span>« L&apos;eau ne se contente plus de couler. Elle retient. »</span>
          </FooterBottomBar>
        </SectionContainer>
      </FooterWrapper>
    </PageWrapper>
  )
}
