import { useState } from 'react'
import { styled } from '../stitches.config'

export type ReadingTheme = 'paper' | 'dark'
export type FontSize = 16 | 18 | 20

const ReaderContainer = styled('article', {
  width: '100%',
  maxWidth: '680px',
  margin: '$8 auto 0 auto',
  borderRadius: '$xl',
  transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms cubic-bezier(0.4, 0, 0.2, 1), border-color 300ms ease, box-shadow 300ms ease',
  boxSizing: 'border-box',
  overflow: 'hidden',
  position: 'relative',
  textAlign: 'left',

  variants: {
    themeMode: {
      paper: {
        backgroundColor: '#FDFBF7',
        color: '#1E293B',
        border: '1px solid rgba(30, 41, 59, 0.09)',
        boxShadow: '0 20px 45px -12px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(0, 0, 0, 0.04)',
      },
      dark: {
        backgroundColor: '#0F172A',
        color: '#E2E8F0',
        border: '1px solid rgba(249, 115, 22, 0.25)',
        boxShadow: '0 24px 50px -15px rgba(0, 0, 0, 0.75), 0 0 35px -5px rgba(249, 115, 22, 0.15)',
      },
    },
  },
  defaultVariants: {
    themeMode: 'paper',
  },
})

const Toolbar = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  padding: '$4 $5',
  borderBottom: '1px solid',
  transition: 'border-color 300ms ease, background-color 300ms ease',

  '@bp2': {
    padding: '$5 $7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  variants: {
    themeMode: {
      paper: {
        backgroundColor: 'rgba(244, 240, 232, 0.55)',
        borderBottomColor: 'rgba(30, 41, 59, 0.08)',
      },
      dark: {
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        borderBottomColor: 'rgba(255, 255, 255, 0.07)',
      },
    },
  },
  defaultVariants: {
    themeMode: 'paper',
  },
})

const MetaBlock = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '$3',
})

const ChapterTitle = styled('span', {
  fontFamily: '$ui',
  fontSize: '$xs',
  fontWeight: '$bold',
  letterSpacing: '$widest',
  textTransform: 'uppercase',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$2',

  variants: {
    themeMode: {
      paper: {
        color: '#0F766E',
      },
      dark: {
        color: '$accentCopper',
      },
    },
  },
  defaultVariants: {
    themeMode: 'paper',
  },
})

const ReadingBadge = styled('span', {
  fontFamily: '$ui',
  fontSize: '$xs',
  fontWeight: '$medium',
  padding: '2px 10px',
  borderRadius: '$full',
  letterSpacing: '0.02em',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  transition: 'background-color 250ms ease, color 250ms ease',

  variants: {
    themeMode: {
      paper: {
        backgroundColor: 'rgba(15, 118, 110, 0.08)',
        color: '#0F766E',
        border: '1px solid rgba(15, 118, 110, 0.18)',
      },
      dark: {
        backgroundColor: 'rgba(249, 115, 22, 0.12)',
        color: '$accentCopper',
        border: '1px solid rgba(249, 115, 22, 0.28)',
      },
    },
  },
  defaultVariants: {
    themeMode: 'paper',
  },
})

const ControlsGroup = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$3',
  flexWrap: 'wrap',
})

const ControlSegment = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '3px',
  borderRadius: '$md',
  transition: 'background-color 250ms ease, border-color 250ms ease',

  variants: {
    themeMode: {
      paper: {
        backgroundColor: 'rgba(30, 41, 59, 0.06)',
        border: '1px solid rgba(30, 41, 59, 0.08)',
      },
      dark: {
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
      },
    },
  },
  defaultVariants: {
    themeMode: 'paper',
  },
})

const ActionButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: '$ui',
  fontSize: '$xs',
  fontWeight: '$semibold',
  padding: '4px 10px',
  borderRadius: '$sm',
  cursor: 'pointer',
  border: 'none',
  background: 'transparent',
  lineHeight: 1,
  minHeight: '28px',
  transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',

  '&:disabled': {
    opacity: 0.35,
    cursor: 'not-allowed',
  },

  variants: {
    themeMode: {
      paper: {
        color: '#475569',
        '&:hover:not(:disabled)': {
          backgroundColor: 'rgba(30, 41, 59, 0.08)',
          color: '#0F172A',
        },
      },
      dark: {
        color: '#94A3B8',
        '&:hover:not(:disabled)': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          color: '#F8FAFC',
        },
      },
    },
    active: {
      true: {
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  compoundVariants: [
    {
      themeMode: 'paper',
      active: true,
      css: {
        backgroundColor: '#FFFFFF',
        color: '#0F766E',
        fontWeight: '$bold',
      },
    },
    {
      themeMode: 'dark',
      active: true,
      css: {
        backgroundColor: '#1E293B',
        color: '$accentCopper',
        fontWeight: '$bold',
      },
    },
  ],
  defaultVariants: {
    themeMode: 'paper',
  },
})

const SizeValue = styled('span', {
  fontFamily: '$mono',
  fontSize: '0.7rem',
  fontWeight: '$medium',
  padding: '0 6px',
  minWidth: '38px',
  textAlign: 'center',
  userSelect: 'none',

  variants: {
    themeMode: {
      paper: {
        color: '#64748B',
      },
      dark: {
        color: '#94A3B8',
      },
    },
  },
  defaultVariants: {
    themeMode: 'paper',
  },
})

const ContentArea = styled('div', {
  padding: '$6 $5',
  fontFamily: '$literary',
  lineHeight: '1.85',
  color: 'inherit',
  transition: 'color 300ms ease, font-size 250ms ease',

  '@bp2': {
    padding: '$8 $8',
  },

  variants: {
    fontSize: {
      16: {
        fontSize: '16px',
      },
      18: {
        fontSize: '18px',
      },
      20: {
        fontSize: '20px',
      },
    },
  },
  defaultVariants: {
    fontSize: 18,
  },
})

const Paragraph = styled('p', {
  margin: '0 0 1.75em 0',
  textAlign: 'justify',
  textJustify: 'inter-word',
  letterSpacing: '0.005em',
  color: 'inherit',
  transition: 'color 300ms ease',

  '&:last-of-type': {
    margin: 0,
  },
})

const DropCap = styled('span', {
  float: 'left',
  fontFamily: '$literary',
  fontSize: '3.65em',
  lineHeight: '0.78',
  paddingTop: '0.08em',
  paddingRight: '0.14em',
  paddingBottom: '0.02em',
  fontWeight: '$bold',
  userSelect: 'none',
  transition: 'color 300ms ease',

  variants: {
    themeMode: {
      paper: {
        color: '$accentCopper',
      },
      dark: {
        color: '$accentCopper',
        textShadow: '0 0 25px rgba(249, 115, 22, 0.4)',
      },
    },
  },
  defaultVariants: {
    themeMode: 'paper',
  },
})

const FirstWordCaps = styled('span', {
  fontVariant: 'small-caps',
  letterSpacing: '0.06em',
  fontWeight: '$semibold',
})

/* Encart télémétrique sombre inséré dans le flux de lecture */
const TelemetryCallout = styled('aside', {
  margin: '$6 0',
  padding: '$4 $5',
  borderRadius: '$md',
  backgroundColor: '#090D16',
  border: '1px solid rgba(249, 115, 22, 0.35)',
  boxShadow: 'inset 0 0 25px rgba(0, 0, 0, 0.7), 0 6px 20px rgba(0, 0, 0, 0.45)',
  fontFamily: '$mono',
  color: '$textPrimary',
})

const TelemetryHead = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '$2',
  paddingBottom: '$2',
  borderBottom: '1px solid rgba(249, 115, 22, 0.2)',
  fontSize: '0.68rem',
  letterSpacing: '$widest',
  textTransform: 'uppercase',
})

const TelemetryTitle = styled('span', {
  color: '$accentCopper',
  fontWeight: '$bold',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
})

const TelemetrySensor = styled('span', {
  color: '$textMuted',
  fontSize: '0.65rem',
})

const TelemetryGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$3',
  paddingTop: '$3',

  '@bp1': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
})

const TelemetryItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
})

const TelemetryLabel = styled('span', {
  fontSize: '0.6rem',
  color: '$textMuted',
  textTransform: 'uppercase',
  letterSpacing: '$wide',
})

const TelemetryValue = styled('span', {
  fontSize: '$xs',
  fontWeight: '$bold',
  color: '#FFFFFF',
  letterSpacing: '0.02em',
})

const Separator = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$4',
  margin: '$8 auto $6 auto',
  maxWidth: '320px',
  opacity: 0.7,
})

const SeparatorLine = styled('span', {
  flex: 1,
  height: '1px',
  background: 'linear-gradient(90deg, transparent, currentColor, transparent)',
  opacity: 0.35,
})

const SeparatorGlyph = styled('span', {
  fontSize: '$xs',
  letterSpacing: '$widest',
  opacity: 0.75,
  fontFamily: '$literary',
})

const FooterAction = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 $5 $7 $5',
  gap: '$3',

  '@bp2': {
    padding: '0 $8 $8 $8',
  },
})

const ContinueButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$3',
  minHeight: '$touchTarget',
  padding: '0 $6',
  borderRadius: '$md',
  fontFamily: '$ui',
  fontSize: '$sm',
  fontWeight: '$semibold',
  cursor: 'pointer',
  transition: '$standard',
  border: '1px solid transparent',
  textDecoration: 'none',

  '& svg': {
    transition: 'transform 200ms ease',
  },

  '&:hover svg': {
    transform: 'translateX(4px)',
  },

  variants: {
    themeMode: {
      paper: {
        backgroundColor: '#0F766E',
        color: '#FFFFFF',
        borderColor: 'rgba(15, 118, 110, 0.3)',
        boxShadow: '0 4px 14px rgba(15, 118, 110, 0.35)',
        '&:hover': {
          backgroundColor: '#115E59',
          boxShadow: '0 8px 22px rgba(15, 118, 110, 0.45)',
          transform: 'translateY(-1px)',
        },
      },
      dark: {
        backgroundColor: '$accentCopper',
        color: '#FFFFFF',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        boxShadow: '0 4px 20px rgba(249, 115, 22, 0.35)',
        '&:hover': {
          backgroundColor: '#EA580C',
          color: '#FFFFFF',
          boxShadow: '0 6px 28px rgba(249, 115, 22, 0.55)',
          transform: 'translateY(-1px)',
        },
      },

    },
  },
  defaultVariants: {
    themeMode: 'paper',
  },
})

const ReadingNote = styled('span', {
  fontFamily: '$ui',
  fontSize: '0.75rem',
  opacity: 0.65,
  letterSpacing: '0.02em',
})

export function Reader() {
  const [fontSize, setFontSize] = useState<FontSize>(18)
  const [theme, setTheme] = useState<ReadingTheme>('paper')

  const handleDecreaseFont = () => {
    setFontSize((current) => (current === 20 ? 18 : 16))
  }

  const handleIncreaseFont = () => {
    setFontSize((current) => (current === 16 ? 18 : 20))
  }

  return (
    <ReaderContainer themeMode={theme}>
      <Toolbar themeMode={theme}>
        <MetaBlock>
          <ChapterTitle themeMode={theme}>
            CHAPITRE 1 : LA DENSITÉ DU SILENCE
          </ChapterTitle>
          <ReadingBadge themeMode={theme}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            ~ 3 min de lecture
          </ReadingBadge>
        </MetaBlock>

        <ControlsGroup>
          {/* Contrôles taille de police */}
          <ControlSegment themeMode={theme} role="group" aria-label="Ajuster la taille du texte">
            <ActionButton
              type="button"
              themeMode={theme}
              onClick={handleDecreaseFont}
              disabled={fontSize === 16}
              aria-label="Diminuer la taille du texte"
            >
              A-
            </ActionButton>
            <SizeValue themeMode={theme} aria-live="polite">
              {fontSize}px
            </SizeValue>
            <ActionButton
              type="button"
              themeMode={theme}
              onClick={handleIncreaseFont}
              disabled={fontSize === 20}
              aria-label="Augmenter la taille du texte"
            >
              A+
            </ActionButton>
          </ControlSegment>

          {/* Bascule Papier / Nuit */}
          <ControlSegment themeMode={theme} role="radiogroup" aria-label="Bascule Papier / Nuit">
            <ActionButton
              type="button"
              themeMode={theme}
              active={theme === 'paper'}
              onClick={() => setTheme('paper')}
              role="radio"
              aria-checked={theme === 'paper'}
            >
              Papier
            </ActionButton>
            <ActionButton
              type="button"
              themeMode={theme}
              active={theme === 'dark'}
              onClick={() => setTheme('dark')}
              role="radio"
              aria-checked={theme === 'dark'}
            >
              Nuit
            </ActionButton>
          </ControlSegment>
        </ControlsGroup>
      </Toolbar>

      <ContentArea fontSize={fontSize}>
        <Paragraph>
          <DropCap themeMode={theme} aria-hidden="true">L</DropCap>
          <FirstWordCaps>’océan, à Port-Mystral,</FirstWordCaps> ne ressemble à aucune autre étendue d’eau sur terre.
          Lorsque Luna Mercier plongea pour la première fois ses doigts nus sous la surface du môle nord, le froid
          ne fut pas la première sensation à lui mordre les phalanges. Ce fut la texture. Le fluide ne s’écoulait
          pas : il adhérait, s’enroulait avec une lenteur presque organique autour de sa peau, refusant obstinément de
          perler ou de s’égoutter comme le ferait une vague ordinaire. C’était une eau lourde d’intentions, presque
          huileuse sans en avoir la graisse, comme saturée d’un secret trop dense pour s’évaporer.
        </Paragraph>

        <Paragraph>
          Dans la vieille timonerie désaffectée qui lui servait de laboratoire face au tumulte sourd des récifs,
          ses éprouvettes défiaient les équations de Navier-Stokes. Les viscosimètres oscillatoires de Luna affichaient
          des mesures aberrantes : la résistance du liquide oscillait au rythme exact du pouls humain, comme stimulée
          par la présence d’un observateur. Plus troublant encore, les prélèvements conservés dans l’obscurité émettaient
          à intervalles réguliers une luminescence bleu-vert insaisissable, un réseau de filaments microscopiques qui
          semblait tisser des liens invisibles entre chaque goutte d’eau captive.
        </Paragraph>

        {/* Encart télémétrique sombre inséré entre les paragraphes */}
        <TelemetryCallout aria-label="Relevé télémétrique de l'anomalie">
          <TelemetryHead>
            <TelemetryTitle>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span>RELEVÉ TÉLÉMÉTRIQUE LABO #07 • PHARE NORD</span>
            </TelemetryTitle>
            <TelemetrySensor>CAPTEUR PIÉZOÉLECTRIQUE — CALIBRÉ</TelemetrySensor>
          </TelemetryHead>
          <TelemetryGrid>
            <TelemetryItem>
              <TelemetryLabel>DENSITÉ VOLUMIQUE (ρ = m/V)</TelemetryLabel>
              <TelemetryValue>ρ = 1.052 g/cm³ [ANOMALIE]</TelemetryValue>
            </TelemetryItem>
            <TelemetryItem>
              <TelemetryLabel>TEMPÉRATURE ÉCHANTILLON</TelemetryLabel>
              <TelemetryValue>10.0 °C (ISOTHERME)</TelemetryValue>
            </TelemetryItem>
            <TelemetryItem>
              <TelemetryLabel>RÉSONANCE ACOUSTIQUE</TelemetryLabel>
              <TelemetryValue>14.82 Hz (INFRASONORE)</TelemetryValue>
            </TelemetryItem>
          </TelemetryGrid>
        </TelemetryCallout>

        <Paragraph>
          Ce soir-là, tandis que la brume marine avalait peu à peu les feux de détresse de la côte, Luna approcha la flamme
          d’un brûleur de l’échantillon scellé numéro sept. Le ménisque d’eau ne frémit pas : il se rétracta brusquement
          vers l’intérieur, formant une concavité parfaite avant de s’élever de deux millimètres le long de la paroi de verre,
          contre toute gravité. En posant la paume contre le tube, elle ressentit une tiédeur inexplicable et une légère
          pulsation sous le verre. À Port-Mystral, l’eau ne se contentait plus d’accrocher les coques des navires ;
          elle apprenait à reconnaître ceux qui tentaient de la percer à jour.
        </Paragraph>
      </ContentArea>

      <Separator aria-hidden="true">
        <SeparatorLine />
        <SeparatorGlyph>✦ ✦ ✦</SeparatorGlyph>
        <SeparatorLine />
      </Separator>

      <FooterAction>
        <ContinueButton type="button" themeMode={theme}>
          <span>Lire la suite dans l&apos;application</span>
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
        </ContinueButton>
        <ReadingNote>
          Accès immédiat aux 14 chapitres de l&apos;enquête • Disponible hors-ligne
        </ReadingNote>
      </FooterAction>
    </ReaderContainer>
  )
}

export default Reader
