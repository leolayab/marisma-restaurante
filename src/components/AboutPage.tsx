import { Card, CardContent } from '@/components/ui/card'
import { Heart, Users, Leaf } from '@phosphor-icons/react'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary to-turquoise text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Nuestra Historia</h1>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
            Llevando el auténtico sabor de la costa colombiana a Yopal, Casanare
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-foreground/80 mb-6">
              <strong className="text-primary text-xl">Marisma</strong> nació del sueño de
              compartir la riqueza gastronómica de la costa caribeña colombiana con los
              habitantes de Yopal, Casanare. Somos un restaurante familiar que se especializa
              en pescados y mariscos frescos, preparados con recetas tradicionales transmitidas
              de generación en generación.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80 mb-6">
              Nuestro nombre, <em className="text-turquoise font-semibold">Marisma</em>,
              evoca los ecosistemas costeros donde el mar y la tierra se encuentran, creando
              un ambiente único lleno de vida y sabor. De la misma manera, en nuestro restaurante
              fusionamos la frescura del océano con la calidez de la hospitalidad llanera.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              Cada día, seleccionamos cuidadosamente los mejores pescados y mariscos para
              ofrecerte una experiencia culinaria auténtica. Nuestro compromiso es mantenerte
              conectado con los sabores del mar, sin importar la distancia de la costa.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">
            Nuestros Valores
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-2xl transition-shadow border-2 border-turquoise/30">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-turquoise to-primary p-4 rounded-full">
                    <Leaf size={48} weight="fill" className="text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">Frescura</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Trabajamos solo con productos del mar de la más alta calidad, garantizando
                  frescura en cada platillo que servimos.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-2xl transition-shadow border-2 border-turquoise/30">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-turquoise to-primary p-4 rounded-full">
                    <Heart size={48} weight="fill" className="text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">Pasión</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Preparamos cada plato con dedicación y amor, preservando las recetas
                  tradicionales de nuestras costas colombianas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-2xl transition-shadow border-2 border-turquoise/30">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-turquoise to-primary p-4 rounded-full">
                    <Users size={48} weight="fill" className="text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">Familia</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Creamos un ambiente acogedor donde cada cliente es parte de nuestra
                  familia y cada visita es una celebración.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-turquoise/10">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card p-8 md:p-12 rounded-lg shadow-xl border-2 border-accent/30">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Nuestro Compromiso
            </h2>
            <p className="text-lg leading-relaxed text-foreground/80 text-center mb-4">
              En Marisma, nos comprometemos a ofrecer una experiencia gastronómica excepcional,
              donde la calidad de nuestros ingredientes y la autenticidad de nuestras recetas
              se combinan con un servicio cálido y profesional.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80 text-center">
              Cada visita a nuestro restaurante es una oportunidad para transportarte a las
              playas del Caribe colombiano, sin salir de Yopal.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
