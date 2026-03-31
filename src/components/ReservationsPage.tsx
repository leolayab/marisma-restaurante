import { useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { CalendarBlank } from '@phosphor-icons/react'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { toast } from 'sonner'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface Reservation {
  id: string
  name: string
  phone: string
  email: string
  date: string
  time: string
  guests: string
  notes: string
  createdAt: string
}

export default function ReservationsPage() {
  const [reservations, setReservations] = useKV<Reservation[]>('reservations', [])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState<Date>()
  const [time, setTime] = useState('')
  const [guests, setGuests] = useState('')
  const [notes, setNotes] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !phone || !date || !time || !guests) {
      toast.error('Por favor completa todos los campos requeridos')
      return
    }

    const newReservation: Reservation = {
      id: Date.now().toString(),
      name,
      phone,
      email,
      date: format(date, 'yyyy-MM-dd'),
      time,
      guests,
      notes,
      createdAt: new Date().toISOString(),
    }

    setReservations((current) => [...(current || []), newReservation])

    toast.success('¡Reserva enviada exitosamente!', {
      description: 'Nos pondremos en contacto pronto para confirmar tu reserva.',
    })

    setName('')
    setPhone('')
    setEmail('')
    setDate(undefined)
    setTime('')
    setGuests('')
    setNotes('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            Reservaciones
          </h1>
          <p className="text-xl text-foreground/70">
            Reserva tu mesa y disfruta de la mejor experiencia gastronómica
          </p>
        </div>

        <Card className="shadow-2xl border-2 border-turquoise/30">
          <CardHeader className="bg-gradient-to-r from-primary to-turquoise text-white">
            <CardTitle className="text-3xl">Hacer una Reserva</CardTitle>
            <CardDescription className="text-white/90 text-base">
              Completa el formulario y nos pondremos en contacto contigo para confirmar
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-primary font-semibold">
                    Nombre Completo *
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    required
                    className="border-2 focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-primary font-semibold">
                    Teléfono *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="300 123 4567"
                    required
                    className="border-2 focus:border-accent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-primary font-semibold">
                  Correo Electrónico
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tucorreo@ejemplo.com"
                  className="border-2 focus:border-accent"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label className="text-primary font-semibold">Fecha *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal border-2 hover:border-accent"
                      >
                        <CalendarBlank className="mr-2 h-4 w-4" />
                        {date ? format(date, 'PPP', { locale: es }) : 'Selecciona fecha'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                        initialFocus
                        locale={es}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time" className="text-primary font-semibold">
                    Hora *
                  </Label>
                  <Select value={time} onValueChange={setTime} required>
                    <SelectTrigger id="time" className="border-2 focus:border-accent">
                      <SelectValue placeholder="Selecciona hora" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="11:00">11:00 AM</SelectItem>
                      <SelectItem value="12:00">12:00 PM</SelectItem>
                      <SelectItem value="13:00">1:00 PM</SelectItem>
                      <SelectItem value="14:00">2:00 PM</SelectItem>
                      <SelectItem value="15:00">3:00 PM</SelectItem>
                      <SelectItem value="16:00">4:00 PM</SelectItem>
                      <SelectItem value="17:00">5:00 PM</SelectItem>
                      <SelectItem value="18:00">6:00 PM</SelectItem>
                      <SelectItem value="19:00">7:00 PM</SelectItem>
                      <SelectItem value="20:00">8:00 PM</SelectItem>
                      <SelectItem value="21:00">9:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-primary font-semibold">
                    Personas *
                  </Label>
                  <Select value={guests} onValueChange={setGuests} required>
                    <SelectTrigger id="guests" className="border-2 focus:border-accent">
                      <SelectValue placeholder="# Personas" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Persona</SelectItem>
                      <SelectItem value="2">2 Personas</SelectItem>
                      <SelectItem value="3">3 Personas</SelectItem>
                      <SelectItem value="4">4 Personas</SelectItem>
                      <SelectItem value="5">5 Personas</SelectItem>
                      <SelectItem value="6">6 Personas</SelectItem>
                      <SelectItem value="7">7 Personas</SelectItem>
                      <SelectItem value="8">8+ Personas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="text-primary font-semibold">
                  Notas Especiales
                </Label>
                <Textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Alergias, preferencias de mesa, ocasión especial, etc."
                  rows={4}
                  className="border-2 focus:border-accent"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 font-semibold"
              >
                Enviar Reserva
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Información Importante</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-foreground/80">
              <p>• Las reservas se confirman por teléfono</p>
              <p>• Tiempo de espera de mesa: 15 minutos</p>
              <p>• Para grupos de 8+ personas, llamar directamente</p>
              <p>• Política de cancelación: avisar 2 horas antes</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-turquoise/20">
            <CardHeader>
              <CardTitle className="text-primary">Horarios de Atención</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-foreground/80">
              <p>• Lunes - Jueves: 11:00 AM - 9:00 PM</p>
              <p>• Viernes - Sábado: 11:00 AM - 10:00 PM</p>
              <p>• Domingo: 11:00 AM - 8:00 PM</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
