import { styled } from './stitches.config.ts'
import { Reader } from './components/Reader'

const Main = styled('main', {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$6 $4',
  position: 'relative',
  overflow: 'hidden',
  background: 'radial-gradient(ellipse at 50% 15%, rgba(15, 118, 110, 0.18) 0%, $bgBase 70%)',
})

const HeroSection = styled('section', {
  width: '100%',
  maxWidth: '$heroMax',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '$5',
  zIndex: 1,
})

const Eyebrow = styled('span', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$2',
  fontFamily: '$ui',
  fontSize: '$xs',
  fontWeight: '$semibold',
  letterSpacing: '$widest',
  textTransform: 'uppercase',
  color: '$accentWaterGlow',
  backgroundColor: 'rgba(15, 118, 110, 0.14)',
  border: '1px solid rgba(20, 184, 166, 0.28)',
  borderRadius: '$full',
  padding: '$1 $3',
})

const HeroTitle = styled('h1', {
  fontFamily: '$literary',
  fontSize: '$4xl',
  fontWeight: '$bold',
  lineHeight: '$tight',
  color: '$textPrimary',
  letterSpacing: '$tight',
  textShadow: '0 2px 20px rgba(0, 0, 0, 0.6)',

  '@bp2': {
    fontSize: '$5xl',
  },
  '@bp3': {
    fontSize: '$6xl',
  },
})

const HeroLead = styled('p', {
  fontFamily: '$literary',
  fontStyle: 'italic',
  fontSize: '$lg',
  lineHeight: '$relaxed',
  color: '$textMuted',
  maxWidth: '$readerMax',
  margin: '0 auto',

  '@bp2': {
    fontSize: '$xl',
  },
})

const ActionGroup = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$4',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '$4',
})

const PrimaryButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '$touchTarget',
  minWidth: '$touchTarget',
  padding: '0 $6',
  fontFamily: '$ui',
  fontSize: '$sm',
  fontWeight: '$medium',
  color: '$textPrimary',
  backgroundColor: '$accentWater',
  border: '1px solid rgba(20, 184, 166, 0.4)',
  borderRadius: '$md',
  boxShadow: '$waterAura',
  cursor: 'pointer',
  transition: '$standard',

  '&:hover': {
    backgroundColor: '#115e59',
    boxShadow: '$waterGlow',
    transform: 'translateY(-1px)',
  },

  '&:active': {
    transform: 'translateY(0)',
  },
})

export default function App() {
  return (
    <Main>
      <HeroSection aria-labelledby="hero-title">
        <Eyebrow>Récit sensoriel • Immersion maritime</Eyebrow>
        <HeroTitle id="hero-title">Port-Mystral</HeroTitle>
        <HeroLead>
          « Là où la brume ne retombe jamais tout à fait, l&apos;eau possède une mémoire qui s&apos;accroche à la peau des marins. »
        </HeroLead>
        <ActionGroup>
          <PrimaryButton type="button">
            Commencer l&apos;exploration
          </PrimaryButton>
        </ActionGroup>

        {/* Liseuse immersive interactive */}
        <Reader />
      </HeroSection>
    </Main>
  )
}

