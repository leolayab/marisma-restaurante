import { Waves, Fish, CheckCircle, Users } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { useLanguage } from '@/lib/LanguageContext'
import logo from '@/assets/logo.jpeg'
import { C } from '@/lib/brand'

interface HomePageProps {
  onNavigate: (page: string) => void
}

const featureCards = [
  { icon: Fish,        titleKey: 'freshProducts',      descKey: 'freshProductsDesc'      },
  { icon: CheckCircle, titleKey: 'traditionalRecipes',  descKey: 'traditionalRecipesDesc'  },
  { icon: Users,       titleKey: 'familyAtmosphere',    descKey: 'familyAtmosphereDesc'    },
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
          <div className="text-center text-white">
            <div className="flex justify-center mb-6 animate-wave">
              <img 
                src={logo}
                alt="Marisma - Cocina de Mar"
                className="h-32 w-32 md:h-48 md:w-48 lg:h-56 lg:w-56 object-contain drop-shadow-2xl rounded-full"
                style={{ border: `2px solid ${C.accent}` }}
              />
            </div>

            {/* Restaurant name */}
            <h1
              className="font-display text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg"
              style={{ color: '#ffffff' }}
            >
              Marisma
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-light tracking-wide italic">
              {t.home.tagline}
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
            <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-teal-light/20">
              <div className="text-teal-light mb-4">
                <Fish size={48} weight="fill" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-primary">{t.home.freshProducts}</h3>
              <p className="text-foreground/80 leading-relaxed">
                {t.home.freshProductsDesc}
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-teal-light/20">
              <div className="text-teal-light mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-primary">{t.home.traditionalRecipes}</h3>
              <p className="text-foreground/80 leading-relaxed">
                {t.home.traditionalRecipesDesc}
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-teal-light/20">
              <div className="text-teal-light mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-primary">{t.home.familyAtmosphere}</h3>
              <p className="text-foreground/80 leading-relaxed">
                {t.home.familyAtmosphereDesc}
              </p>
            </div>
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
              <div className="flex justify-between items-center pb-3">
                  <span className="font-semibold" style={{ color: C.primary }}>
                    {t.home.joinUs}
                  </span>
                </div>
            </div>
          </Card>

        </div>
      </section>

    </div>
  )
}
