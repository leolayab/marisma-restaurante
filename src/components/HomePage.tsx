import { Waves, Fish, CheckCircle, Users } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { useLanguage } from '@/lib/LanguageContext'
import logo from '@/assets/logo.jpeg'

interface HomePageProps {
  onNavigate: (page: string) => void
}

// ── Brand tokens (logo-aligned, bypass Spark overrides) ──────────────
const C = {
  primary:     '#0d3d4a',
  accent:      '#c9a96e',
  tealLight:   '#3a8a8a',
  background:  '#f5f0e8',
  card:        '#faf7f2',
  border:      '#c5d8d8',
  mutedFg:     '#4a6a6a',
  cream:       '#f5e6c8',
  secondaryBg: 'rgba(214,234,234,0.30)',
  headerGrad:  'linear-gradient(135deg, #0d3d4a 0%, #1a5568 50%, #3a8a8a 100%)',
  wavePattern: `repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(58,138,138,0.06) 10px,
    rgba(58,138,138,0.06) 20px
  )`,
} as const

const featureCards = [
  { icon: Fish,        titleKey: 'freshProducts',      descKey: 'freshProductsDesc'      },
  { icon: CheckCircle, titleKey: 'traditionalRecipes',  descKey: 'traditionalRecipesDesc'  },
  { icon: Users,       titleKey: 'familyAtmosphere',    descKey: 'familyAtmosphereDesc'    },
]

const hoursRows = [
  { labelKey: 'monThu', hours: '11:00 AM – 9:00 PM',  border: true  },
  { labelKey: 'friSat', hours: '11:00 AM – 10:00 PM', border: true  },
  { labelKey: 'sunday', hours: '11:00 AM – 8:00 PM',  border: false },
]

export default function HomePage({ onNavigate }: HomePageProps) {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">

      {/* ── Hero Section ─────────────────────────────────────────── */}
      <section
        className="relative py-32 px-4 overflow-hidden"
        style={{ background: `${C.wavePattern}, ${C.headerGrad}` }}
      >
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">

            {/* Logo */}
            <div className="flex justify-center mb-6">
              <img
                src={logo}
                alt="Marisma - Cocina de Mar"
                className="h-40 w-40 object-contain rounded-full shadow-2xl animate-wave"
                style={{ border: `4px solid ${C.accent}` }}
              />
            </div>

            {/* Restaurant name */}
            <h1
              className="font-display text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg"
              style={{ color: '#ffffff' }}
            >
              Marisma
            </h1>

            {/* Tagline */}
            <p
              className="font-display text-2xl md:text-3xl mb-8 font-light tracking-wide italic"
              style={{ color: 'rgba(245,230,200,0.90)' }}
            >
              Cocina de Mar
            </p>

            {/* Subtitle */}
            <p
              className="text-xl md:text-2xl mb-12"
              style={{ color: 'rgba(245,230,200,0.80)' }}
            >
              {t.home.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

              {/* Primary CTA — warm gold */}
              <button
                onClick={() => onNavigate('menu')}
                className="text-lg px-8 py-4 rounded-md font-display font-semibold shadow-xl transition-opacity hover:opacity-90"
                style={{ backgroundColor: C.accent, color: '#1a1a0e' }}
              >
                {t.home.viewMenu}
              </button>

              {/* Secondary CTA — glass outline */}
              <button
                onClick={() => onNavigate('reservations')}
                className="text-lg px-8 py-4 rounded-md font-display font-semibold shadow-xl transition-all hover:bg-white/20 backdrop-blur-sm"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.10)',
                  border:          '2px solid rgba(245,230,200,0.80)',
                  color:           C.cream,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.20)'
                  e.currentTarget.style.color           = '#ffffff'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.10)'
                  e.currentTarget.style.color           = C.cream
                }}
              >
                {t.home.makeReservation}
              </button>

            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <Waves size={100} className="w-full" weight="fill" style={{ color: 'rgba(245,230,200,0.15)' }} />
        </div>
      </section>

      {/* ── Welcome Features Section ─────────────────────────────── */}
      <section className="py-20 px-4" style={{ backgroundColor: C.background }}>
        <div className="container mx-auto max-w-6xl">

          <h2
            className="font-display text-4xl font-bold text-center mb-4"
            style={{ color: C.primary }}
          >
            {t.home.welcomeTitle}
          </h2>

          {/* Gold accent underline */}
          <div
            className="w-20 h-1 mx-auto mb-12 rounded-full"
            style={{ backgroundColor: C.accent }}
          />

          <div className="grid md:grid-cols-3 gap-8">
            {featureCards.map(({ icon: Icon, titleKey, descKey }) => (
              <Card
                key={titleKey}
                className="p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ backgroundColor: C.card, border: `1px solid ${C.border}` }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.tealLight)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
              >
                {/* Icon circle — ocean gradient */}
                <div
                  className="p-3 rounded-full w-fit mb-4"
                  style={{ background: C.headerGrad }}
                >
                  <Icon
                    size={48}
                    weight="fill"
                    className="animate-wave"
                    style={{ color: C.accent }}
                  />
                </div>

                <h3
                  className="font-display text-2xl font-semibold mb-3"
                  style={{ color: C.primary }}
                >
                  {t.home[titleKey as keyof typeof t.home] as string}
                </h3>

                {/* Gold mini divider */}
                <div
                  className="w-10 h-0.5 mb-3 rounded-full"
                  style={{ backgroundColor: C.accent }}
                />

                <p className="leading-relaxed" style={{ color: C.mutedFg }}>
                  {t.home[descKey as keyof typeof t.home] as string}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hours Section ────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ backgroundColor: C.secondaryBg }}>
        <div className="container mx-auto max-w-4xl text-center">

          <h2
            className="font-display text-4xl font-bold mb-4"
            style={{ color: C.primary }}
          >
            {t.home.hoursTitle}
          </h2>

          {/* Gold accent underline */}
          <div
            className="w-16 h-1 mx-auto mb-10 rounded-full"
            style={{ backgroundColor: C.accent }}
          />

          <Card
            className="p-8 shadow-lg"
            style={{ backgroundColor: C.card, border: `1px solid ${C.border}` }}
          >
            <div className="space-y-4 text-lg">
              {hoursRows.map(({ labelKey, hours, border }) => (
                <div
                  key={labelKey}
                  className="flex justify-between items-center pb-3"
                  style={border ? { borderBottom: `1px solid ${C.border}` } : {}}
                >
                  <span className="font-semibold" style={{ color: C.primary }}>
                    {t.home[labelKey as keyof typeof t.home] as string}
                  </span>
                  <span style={{ color: C.mutedFg }}>{hours}</span>
                </div>
              ))}
            </div>
          </Card>

        </div>
      </section>

    </div>
  )
}
