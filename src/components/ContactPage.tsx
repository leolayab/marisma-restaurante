import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  MapPin,
  Phone,
  EnvelopeSimple,
  Clock,
  InstagramLogo,
  FacebookLogo,
  WhatsappLogo,
} from '@phosphor-icons/react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            Contacto
          </h1>
          <p className="text-xl text-foreground/70">
            Estamos aquí para servirte. ¡Visítanos o contáctanos!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 border-turquoise/30 hover:shadow-2xl transition-shadow">
            <CardHeader className="bg-gradient-to-r from-primary to-turquoise text-white">
              <CardTitle className="text-2xl flex items-center gap-3">
                <MapPin size={32} weight="fill" />
                Ubicación
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4 text-lg text-foreground/80">
                <p className="font-semibold text-primary">Restaurante Marisma</p>
                <p>Calle 15 # 20-45</p>
                <p>Centro, Yopal</p>
                <p>Casanare, Colombia</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-turquoise/30 hover:shadow-2xl transition-shadow">
            <CardHeader className="bg-gradient-to-r from-primary to-turquoise text-white">
              <CardTitle className="text-2xl flex items-center gap-3">
                <Phone size={32} weight="fill" />
                Teléfono
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-primary text-lg mb-2">Línea Principal</p>
                  <a
                    href="tel:+573001234567"
                    className="text-xl text-turquoise hover:text-primary transition-colors"
                  >
                    (+57) 300 123 4567
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-primary text-lg mb-2">WhatsApp</p>
                  <a
                    href="https://wa.me/573001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-turquoise hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <WhatsappLogo size={24} weight="fill" />
                    (+57) 300 123 4567
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-turquoise/30 hover:shadow-2xl transition-shadow">
            <CardHeader className="bg-gradient-to-r from-primary to-turquoise text-white">
              <CardTitle className="text-2xl flex items-center gap-3">
                <Clock size={32} weight="fill" />
                Horarios
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3 text-foreground/80">
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="font-semibold text-primary">Lunes - Jueves</span>
                  <span>11:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="font-semibold text-primary">Viernes - Sábado</span>
                  <span>11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-primary">Domingo</span>
                  <span>11:00 AM - 8:00 PM</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-turquoise/30 hover:shadow-2xl transition-shadow">
            <CardHeader className="bg-gradient-to-r from-primary to-turquoise text-white">
              <CardTitle className="text-2xl flex items-center gap-3">
                <EnvelopeSimple size={32} weight="fill" />
                Correo Electrónico
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-primary text-lg mb-2">Email General</p>
                  <a
                    href="mailto:info@marisma.com"
                    className="text-xl text-turquoise hover:text-primary transition-colors"
                  >
                    info@marisma.com
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-primary text-lg mb-2">Reservaciones</p>
                  <a
                    href="mailto:reservas@marisma.com"
                    className="text-xl text-turquoise hover:text-primary transition-colors"
                  >
                    reservas@marisma.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2 border-accent/30 shadow-2xl">
          <CardHeader className="text-center bg-gradient-to-r from-primary via-turquoise to-primary text-white">
            <CardTitle className="text-3xl">Síguenos en Redes Sociales</CardTitle>
          </CardHeader>
          <CardContent className="pt-8">
            <div className="flex flex-wrap justify-center gap-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white gap-3 px-8"
                asChild
              >
                <a
                  href="https://instagram.com/marisma_yopal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramLogo size={24} weight="fill" />
                  Instagram
                </a>
              </Button>

              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white gap-3 px-8"
                asChild
              >
                <a
                  href="https://facebook.com/marisma.yopal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookLogo size={24} weight="fill" />
                  Facebook
                </a>
              </Button>

              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white gap-3 px-8"
                asChild
              >
                <a
                  href="https://wa.me/573001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsappLogo size={24} weight="fill" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center bg-card p-8 rounded-lg shadow-lg border-2 border-turquoise/30">
          <h3 className="text-2xl font-bold text-primary mb-4">
            ¿Cómo Llegar?
          </h3>
          <p className="text-lg text-foreground/80 mb-4">
            Estamos ubicados en el centro de Yopal, cerca de los principales puntos de referencia
            de la ciudad. Contamos con parqueadero disponible para nuestros clientes.
          </p>
          <p className="text-foreground/70">
            Para indicaciones específicas, no dudes en llamarnos o escribirnos por WhatsApp.
          </p>
        </div>
      </div>
    </div>
  )
}
