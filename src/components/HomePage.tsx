import { Waves, Fish } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'

interface HomePageProps {
  onNavigate: (page: string) => void
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      <section className="relative ocean-gradient py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 wave-pattern opacity-30"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center text-white">
            <div className="flex justify-center mb-6 animate-wave">
              <Fish size={80} weight="fill" className="text-accent" />
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
              Marisma
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-light tracking-wide">
              Disfruta el sabor costeño en Yopal Casanare
            </p>
            <p className="text-xl md:text-2xl mb-12 opacity-90">
              Pescados y Mariscos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() => onNavigate('menu')}
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 shadow-xl"
              >
                Ver Menú
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate('reservations')}
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-primary text-lg px-8 py-6 shadow-xl"
              >
                Hacer Reserva
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
            Bienvenidos a Marisma
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-turquoise/20">
              <div className="text-turquoise mb-4">
                <Fish size={48} weight="fill" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-primary">Productos Frescos</h3>
              <p className="text-foreground/80 leading-relaxed">
                Seleccionamos los mejores pescados y mariscos frescos para garantizar
                la calidad y el sabor auténtico de la costa.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-turquoise/20">
              <div className="text-turquoise mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-primary">Recetas Tradicionales</h3>
              <p className="text-foreground/80 leading-relaxed">
                Preparamos cada platillo con recetas tradicionales de la costa colombiana,
                llevando el sabor del mar a Yopal.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-turquoise/20">
              <div className="text-turquoise mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-primary">Ambiente Familiar</h3>
              <p className="text-foreground/80 leading-relaxed">
                Un espacio acogedor donde familias y amigos pueden disfrutar de una
                experiencia gastronómica memorable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Horario de Atención
          </h2>
          <div className="bg-card rounded-lg p-8 shadow-lg">
            <div className="space-y-4 text-lg">
              <div className="flex justify-between items-center border-b border-border pb-3">
                <span className="font-semibold text-primary">Lunes - Jueves</span>
                <span className="text-foreground/80">11:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-3">
                <span className="font-semibold text-primary">Viernes - Sábado</span>
                <span className="text-foreground/80">11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-primary">Domingo</span>
                <span className="text-foreground/80">11:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
