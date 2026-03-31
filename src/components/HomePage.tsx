import { Waves, Fish } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/LanguageContext'

const MarismaLogo = ({ className = "", size = 120 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="100" cy="100" r="95" fill="url(#logoGradient)" />
    <circle cx="100" cy="100" r="92" fill="none" stroke="url(#goldGradient)" strokeWidth="3" />
    
    <ellipse cx="100" cy="75" rx="55" ry="15" fill="url(#waterGradient)" />
    
    <path
      d="M100 45 L95 50 L90 48 L92 53 L87 55 L92 57 L90 62 L95 60 L100 65 L105 60 L110 62 L108 57 L113 55 L108 53 L110 48 L105 50 Z"
      fill="url(#treeGradient)"
    />
    <rect x="98" y="50" width="4" height="20" fill="#654321" />
    
    <path
      d="M100 120 L80 140 L85 145 L90 140 L95 145 L100 142 L105 145 L110 140 L115 145 L120 140 Z"
      fill="url(#rootGradient)"
    />
    
    <ellipse cx="145" cy="60" rx="8" ry="4" fill="url(#sunGradient)" />
    
    <defs>
      <linearGradient id="logoGradient" x1="0" y1="0" x2="0" y2="200">
        <stop offset="0%" stopColor="oklch(0.38 0.08 200)" />
        <stop offset="100%" stopColor="oklch(0.28 0.08 200)" />
      </linearGradient>
      <linearGradient id="goldGradient" x1="0" y1="0" x2="200" y2="200">
        <stop offset="0%" stopColor="oklch(0.72 0.12 65)" />
        <stop offset="100%" stopColor="oklch(0.68 0.15 45)" />
      </linearGradient>
      <linearGradient id="waterGradient" x1="0" y1="0" x2="0" y2="100">
        <stop offset="0%" stopColor="oklch(0.65 0.10 195 / 0.6)" />
        <stop offset="100%" stopColor="oklch(0.55 0.09 197 / 0.8)" />
      </linearGradient>
      <linearGradient id="treeGradient" x1="0" y1="0" x2="0" y2="100">
        <stop offset="0%" stopColor="oklch(0.45 0.10 150)" />
        <stop offset="100%" stopColor="oklch(0.35 0.08 145)" />
      </linearGradient>
      <linearGradient id="rootGradient" x1="0" y1="0" x2="0" y2="100">
        <stop offset="0%" stopColor="oklch(0.72 0.12 65)" />
        <stop offset="100%" stopColor="oklch(0.65 0.12 60)" />
      </linearGradient>
      <radialGradient id="sunGradient">
        <stop offset="0%" stopColor="oklch(0.72 0.12 65)" />
        <stop offset="100%" stopColor="oklch(0.68 0.15 45)" />
      </radialGradient>
    </defs>
  </svg>
)

interface HomePageProps {
  onNavigate: (page: string) => void
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <section className="relative ocean-gradient py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-30"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center text-white">
            <div className="flex justify-center mb-6 animate-wave">
              <MarismaLogo size={140} className="drop-shadow-2xl" />
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
              Marisma
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-light tracking-wide italic">
              {t.home.tagline}
            </p>
            <p className="text-xl md:text-2xl mb-12 opacity-90">
              {t.home.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() => onNavigate('menu')}
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 shadow-xl"
              >
                {t.home.viewMenu}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate('reservations')}
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-primary text-lg px-8 py-6 shadow-xl"
              >
                {t.home.makeReservation}
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <Waves size={100} className="w-full text-white/20" weight="fill" />
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">
            {t.home.welcomeTitle}
          </h2>
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

      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            {t.home.hoursTitle}
          </h2>
          <div className="bg-card rounded-lg p-8 shadow-lg">
            <div className="space-y-4 text-lg">
              <div className="flex justify-between items-center border-b border-border pb-3">
                <span className="font-semibold text-primary">{t.home.monThu}</span>
                <span className="text-foreground/80">11:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-3">
                <span className="font-semibold text-primary">{t.home.friSat}</span>
                <span className="text-foreground/80">11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-primary">{t.home.sunday}</span>
                <span className="text-foreground/80">11:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
