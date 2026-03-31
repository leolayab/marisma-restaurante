import { useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { useLanguage } from '@/lib/LanguageContext'
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
import { CalendarBlank, Clock, Phone } from '@phosphor-icons/react'
import { format } from 'date-fns'
import { es, enUS } from 'date-fns/locale'
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
  const { t, language } = useLanguage()
  const [reservations, setReservations] = useKV<Reservation[]>('reservations', [])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState<Date>()
  const [time, setTime] = useState('')
  const [guests, setGuests] = useState('')
  const [notes, setNotes] = useState('')

  const locale = language === 'es' ? es : enUS

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !phone || !date || !time || !guests) {
      toast.error(t.reservations.error)
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
    toast.success(t.reservations.success)

    setName('')
    setPhone('')
    setEmail('')
    setDate(undefined)
    setTime('')
    setGuests('')
    setNotes('')
  }

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-4xl">

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary mb-4">
            {t.reservations.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t.reservations.subtitle}
          </p>
        </div>

        {/* Reservation Form Card */}
        <Card className="shadow-2xl border border-border hover:border-teal-light transition-all">
          <CardHeader className="ocean-gradient text-white rounded-t-lg">
            <CardTitle className="font-display text-3xl">
              {t.reservations.title}
            </CardTitle>
            <CardDescription className="text-primary-foreground/90 text-base">
              {t.reservations.subtitle}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-display text-primary font-semibold">
                    {t.reservations.name} *
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.reservations.namePlaceholder}
                    required
                    className="border-2 border-input bg-muted focus:border-accent focus-visible:ring-accent"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-display text-primary font-semibold">
                    {t.reservations.phone} *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.reservations.phonePlaceholder}
                    required
                    className="border-2 border-input bg-muted focus:border-accent focus-visible:ring-accent"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="font-display text-primary font-semibold">
                  {t.reservations.email}
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.reservations.emailPlaceholder}
                  className="border-2 border-input bg-muted focus:border-accent focus-visible:ring-accent"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Date Picker */}
                <div className="space-y-2">
                  <Label className="font-display text-primary font-semibold">
                    {t.reservations.date} *
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-body font-normal border-2 border-input bg-muted hover:border-accent hover:bg-muted"
                      >
                        <CalendarBlank className="mr-2 h-4 w-4 text-teal-light" />
                        {date
                          ? format(date, 'PPP', { locale })
                          : <span className="text-muted-foreground">{t.reservations.datePlaceholder}</span>
                        }
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 border border-border bg-card">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                        initialFocus
                        locale={locale}
                        className="text-foreground"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <Label htmlFor="time" className="font-display text-primary font-semibold">
                    {t.reservations.time} *
                  </Label>
                  <Select value={time} onValueChange={setTime} required>
                    <SelectTrigger
                      id="time"
                      className="border-2 border-input bg-muted focus:border-accent focus:ring-accent"
                    >
                      <SelectValue placeholder={t.reservations.timePlaceholder} />
                    </SelectTrigger>
                    <SelectContent className="bg-card border border-border">
                      {['11:00','12:00','13:00','14:00','15:00',
                        '16:00','17:00','18:00','19:00','20:00','21:00'].map((h) => (
                        <SelectItem key={h} value={h} className="font-body focus:bg-secondary focus:text-primary">
                          {parseInt(h) <= 12
                            ? `${parseInt(h)}:00 ${parseInt(h) === 12 ? 'PM' : 'AM'}`
                            : `${parseInt(h) - 12}:00 PM`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Guests */}
                <div className="space-y-2">
                  <Label htmlFor="guests" className="font-display text-primary font-semibold">
                    {t.reservations.guests} *
                  </Label>
                  <Select value={guests} onValueChange={setGuests} required>
                    <SelectTrigger
                      id="guests"
                      className="border-2 border-input bg-muted focus:border-accent focus:ring-accent"
                    >
                      <SelectValue placeholder={t.reservations.guestsPlaceholder} />
                    </SelectTrigger>
                    <SelectContent className="bg-card border border-border">
                      {['1','2','3','4','5','6','7'].map((n) => (
                        <SelectItem key={n} value={n} className="font-body focus:bg-secondary focus:text-primary">
                          {n}
                        </SelectItem>
                      ))}
                      <SelectItem value="8" className="font-body focus:bg-secondary focus:text-primary">
                        8+
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes" className="font-display text-primary font-semibold">
                  {t.reservations.specialRequests}
                </Label>
                <Textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t.reservations.specialRequestsPlaceholder}
                  rows={4}
                  className="border-2 border-input bg-muted focus:border-accent focus-visible:ring-accent font-body"
                />
              </div>

              {/* Submit CTA - Warm Gold per guide */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6 font-display font-semibold shadow-lg"
              >
                {t.reservations.submit}
              </Button>

            </form>
          </CardContent>
        </Card>

        {/* Info Cards */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">

          {/* Hours Card */}
          <Card className="bg-card border border-border hover:border-teal-light hover:shadow-2xl transition-all">
            <CardHeader className="ocean-gradient text-white rounded-t-lg">
              <CardTitle className="font-display text-xl flex items-center gap-3">
                <Clock size={24} weight="fill" className="text-accent" />
                {t.contact.hours}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span className="font-semibold text-primary">{t.home.monThu}</span>
                <span className="text-muted-foreground text-sm">11:00 AM – 9:00 PM</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span className="font-semibold text-primary">{t.home.friSat}</span>
                <span className="text-muted-foreground text-sm">11:00 AM – 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-primary">{t.home.sunday}</span>
                <span className="text-muted-foreground text-sm">11:00 AM – 8:00 PM</span>
              </div>
            </CardContent>
          </Card>

          {/* Phone Card */}
          <Card className="bg-card border border-border hover:border-teal-light hover:shadow-2xl transition-all">
            <CardHeader className="ocean-gradient text-white rounded-t-lg">
              <CardTitle className="font-display text-xl flex items-center gap-3">
                <Phone size={24} weight="fill" className="text-accent" />
                {t.contact.phone}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Teléfono</p>
                <a
                  href="tel:+573001234567"
                  className="text-lg text-teal-light hover:text-primary transition-colors font-semibold"
                >
                  (+57) 300 123 4567
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/573001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-teal-light hover:text-primary transition-colors font-semibold"
                >
                  (+57) 300 123 4567
                </a>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}
