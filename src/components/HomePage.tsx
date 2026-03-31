import { Waves, Fish, CheckCircle, Users } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useLanguage } from '@/lib/LanguageContext'
import logo from '@/assets/logo.jpeg'

interface HomePageProps {
  onNavigate: (page: string) => void
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">

      {/* Hero Section - ocean-gradient + wave-pattern per guide */}
      <section className="relative ocean-gradient py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-30"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center text-white">
            {/* Replace Fish icon with brand logo */}
            <div className="flex justify-center mb-6">
              <img
                src={logo}
                alt="Marisma - Cocina de Mar"
                className="h-40 w-40 object-contain rounded-full border-4 border-accent shadow-2xl animate-wave"
              />
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
              Marisma
            </h1>
            <p className="font-display text-2xl md:text-3xl mb-8 font-light tracking-wide text-primary-foreground/90 italic">
              Cocina de Mar
            </p>
            <p className="text-xl md:text-2xl mb-12 text-primary-foreground/80">
              {t.home.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Primary CTA - Warm Gold per guide */}
              <Button
                size="lg"
                onClick={() => onNavigate('menu')}
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 shadow-xl"
              >
                {t.home.viewMenu}
              </Button>
              {/* Outline CTA on dark bg per guide */}
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
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <Waves size={100} className="w-full text-white/20" weight="fill" />
        </div>
      </section>

      {/* Welcome Features Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold text-center text-primary mb-12">
            {t.home.welcomeTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">

            {/* Fresh Products Card */}
            <Card className="bg-card rounded-lg p-6 hover:shadow-2xl hover:border-teal-light transition-all border border-border">
              <div className="ocean-gradient p-3 rounded-full w-fit mb-4">
                <Fish size={48} weight="fill" className="text-white animate-wave" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3 text-primary">
                {t.home.freshProducts}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t.home.freshProductsDesc}
              </p>
            </Card>

            {/* Traditional Recipes Card */}
            <Card className="bg-card rounded-lg p-6 hover:shadow-2xl hover:border-teal-light transition-all border border-border">
              <div className="ocean-gradient p-3 rounded-full w-fit mb-4">
                <CheckCircle size={48} weight="fill" className="text-white animate-wave" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3 text-primary">
                {t.home.traditionalRecipes}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t.home.traditionalRecipesDesc}
              </p>
            </Card>

            {/* Family Atmosphere Card */}
            <Card className="bg-card rounded-lg p-6 hover:shadow-2xl hover:border-teal-light transition-all border border-border">
              <div className="ocean-gradient p-3 rounded-full w-fit mb-4">
                <Users size={48} weight="fill" className="text-white animate-wave" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3 text-primary">
                {t.home.familyAtmosphere}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t.home.familyAtmosphereDesc}
              </p>
            </Card>

          </div>
        </div>
      </section>

      {/* Hours Section - alternate bg per guide */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-bold text-primary mb-6">
            {t.home.hoursTitle}
          </h2>
          <Card className="bg-card rounded-lg p-8 shadow-lg border border-border">
            <div className="space-y-4 text-lg">
              <div className="flex justify-between items-center border-b border-border pb-3">
                <span className="font-semibold text-primary">{t.home.monThu}</span>
                <span className="text-muted-foreground">11:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-3">
                <span className="font-semibold text-primary">{t.home.friSat}</span>
                <span className="text-muted-foreground">11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-primary">{t.home.sunday}</span>
                <span className="text-muted-foreground">11:00 AM - 8:00 PM</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

    </div>
  )
}
