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
import { C } from '@/lib/brand'

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
      name, phone, email,
      date: format(date, 'yyyy-MM-dd'),
      time, guests, notes,
      createdAt: new Date().toISOString(),
    }
    setReservations((current) => [...(current || []), newReservation])
    toast.success(t.reservations.success)
    setName(''); setPhone(''); setEmail('')
    setDate(undefined); setTime(''); setGuests(''); setNotes('')
  }

  return (
    <div className="min-h-screen py-16 px-4" style={{ backgroundColor: C.background }}>
      <div className="container mx-auto max-w-4xl">

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1
            className="font-display text-5xl md:text-6xl font-bold mb-4"
            style={{ color: C.primary }}
          >
            {t.reservations.title}
          </h1>
          <p className="text-xl" style={{ color: C.mutedFg }}>
            {t.reservations.subtitle}
          </p>
        </div>

        {/* Reservation Form Card */}
        <Card
          className="shadow-2xl transition-all"
          style={{ backgroundColor: C.card, border: `1px solid ${C.border}` }}
        >
          {/* Card Header — ocean gradient */}
          <CardHeader
            className="rounded-t-lg"
            style={{ background: C.headerGrad }}
          >
            <CardTitle
              className="font-display text-3xl"
              style={{ color: C.cream }}
            >
              {t.reservations.title}
            </CardTitle>
            <CardDescription
              className="text-base"
              style={{ color: 'rgba(245,230,200,0.90)' }}
            >
              {t.reservations.subtitle}
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="font-display font-semibold"
                    style={{ color: C.primary }}
                  >
                    {t.reservations.name} *
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.reservations.namePlaceholder}
                    required
                    style={{
                      backgroundColor: C.mutedBg,
                      border:          `2px solid ${C.border}`,
                      color:           C.cardFg,
                    }}
                    onFocus={(e) => e.target.style.borderColor = C.accent}
                    onBlur={(e)  => e.target.style.borderColor = C.border}
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="font-display font-semibold"
                    style={{ color: C.primary }}
                  >
                    {t.reservations.phone} *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.reservations.phonePlaceholder}
                    required
                    style={{
                      backgroundColor: C.mutedBg,
                      border:          `2px solid ${C.border}`,
                      color:           C.cardFg,
                    }}
                    onFocus={(e) => e.target.style.borderColor = C.accent}
                    onBlur={(e)  => e.target.style.borderColor = C.border}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="font-display font-semibold"
                  style={{ color: C.primary }}
                >
                  {t.reservations.email}
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.reservations.emailPlaceholder}
                  style={{
                    backgroundColor: C.mutedBg,
                    border:          `2px solid ${C.border}`,
                    color:           C.cardFg,
                  }}
                  onFocus={(e) => e.target.style.borderColor = C.accent}
                  onBlur={(e)  => e.target.style.borderColor = C.border}
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Date Picker */}
                <div className="space-y-2">
                  <Label
                    className="font-display font-semibold"
                    style={{ color: C.primary }}
                  >
                    {t.reservations.date} *
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className="w-full flex items-center justify-start px-3 py-2 rounded-md text-left font-body text-sm transition-colors"
                        style={{
                          backgroundColor: C.mutedBg,
                          border:          `2px solid ${C.border}`,
                          color:           date ? C.cardFg : C.mutedFg,
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.accent)}
                        onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
                      >
                        <CalendarBlank
                          className="mr-2 h-4 w-4"
                          style={{ color: C.tealLight }}
                        />
                        {date
                          ? format(date, 'PPP', { locale })
                          : t.reservations.datePlaceholder
                        }
                      </button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0"
                      style={{
                        backgroundColor: C.card,
                        border:          `1px solid ${C.border}`,
                      }}
                    >
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(d) => d < new Date(new Date().setHours(0,0,0,0))}
                        initialFocus
                        locale={locale}
                        style={{ color: C.cardFg }}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <Label
                    htmlFor="time"
                    className="font-display font-semibold"
                    style={{ color: C.primary }}
                  >
                    {t.reservations.time} *
                  </Label>
                  <Select value={time} onValueChange={setTime}>
                    <SelectTrigger
                      id="time"
                      style={{
                        backgroundColor: C.mutedBg,
                        border:          `2px solid ${C.border}`,
                        color:           C.cardFg,
                      }}
                    >
                      <SelectValue placeholder={t.reservations.timePlaceholder} />
                    </SelectTrigger>
                    <SelectContent
                      style={{
                        backgroundColor: C.card,
                        border:          `1px solid ${C.border}`,
                        color:           C.cardFg,
                      }}
                    >
                      {['11:00','12:00','13:00','14:00','15:00',
                        '16:00','17:00','18:00','19:00','20:00','21:00'].map((h) => (
                        <SelectItem
                          key={h} value={h}
                          className="font-body"
                          style={{ color: C.cardFg }}
                        >
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
                  <Label
                    htmlFor="guests"
                    className="font-display font-semibold"
                    style={{ color: C.primary }}
                  >
                    {t.reservations.guests} *
                  </Label>
                  <Select value={guests} onValueChange={setGuests}>
                    <SelectTrigger
                      id="guests"
                      style={{
                        backgroundColor: C.mutedBg,
                        border:          `2px solid ${C.border}`,
                        color:           C.cardFg,
                      }}
                    >
                      <SelectValue placeholder={t.reservations.guestsPlaceholder} />
                    </SelectTrigger>
                    <SelectContent
                      style={{
                        backgroundColor: C.card,
                        border:          `1px solid ${C.border}`,
                        color:           C.cardFg,
                      }}
                    >
                      {['1','2','3','4','5','6','7'].map((n) => (
                        <SelectItem
                          key={n} value={n}
                          className="font-body"
                          style={{ color: C.cardFg }}
                        >
                          {n}
                        </SelectItem>
                      ))}
                      <SelectItem
                        value="8"
                        className="font-body"
                        style={{ color: C.cardFg }}
                      >
                        8+
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <Label
                  htmlFor="notes"
                  className="font-display font-semibold"
                  style={{ color: C.primary }}
                >
                  {t.reservations.specialRequests}
                </Label>
                <Textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t.reservations.specialRequestsPlaceholder}
                  rows={4}
                  className="font-body"
                  style={{
                    backgroundColor: C.mutedBg,
                    border:          `2px solid ${C.border}`,
                    color:           C.cardFg,
                  }}
                  onFocus={(e) => e.target.style.borderColor = C.accent}
                  onBlur={(e)  => e.target.style.borderColor = C.border}
                />
              </div>

              {/* Submit CTA — Warm Gold */}
              <button
                type="submit"
                className="w-full text-lg py-4 font-display font-semibold rounded-md shadow-lg transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: C.accent,
                  color:           '#1a1a0e',
                }}
              >
                {t.reservations.submit}
              </button>

            </form>
          </CardContent>
        </Card>

        {/* Info Cards */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">

          {/* Hours Card */}
          <Card
            className="transition-all hover:shadow-2xl"
            style={{ backgroundColor: C.card, border: `1px solid ${C.border}` }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.tealLight)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
          >
            <CardHeader className="rounded-t-lg" style={{ background: C.headerGrad }}>
              <CardTitle
                className="font-display text-xl flex items-center gap-3"
                style={{ color: C.cream }}
              >
                <Clock size={24} weight="fill" style={{ color: C.accent }} />
                {t.contact.hours}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              {[
                { label: t.home.monThu, hours: '11:00 AM – 9:00 PM',  border: true },
                { label: t.home.friSat, hours: '11:00 AM – 10:00 PM', border: true },
                { label: t.home.sunday, hours: '11:00 AM – 8:00 PM',  border: false },
              ].map(({ label, hours, border }) => (
                <div
                  key={label}
                  className="flex justify-between items-center pb-2"
                  style={border ? { borderBottom: `1px solid ${C.border}` } : {}}
                >
                  <span className="font-semibold" style={{ color: C.primary }}>{label}</span>
                  <span className="text-sm"      style={{ color: C.mutedFg }}>{hours}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Phone Card */}
          <Card
            className="transition-all hover:shadow-2xl"
            style={{ backgroundColor: C.card, border: `1px solid ${C.border}` }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.tealLight)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
          >
            <CardHeader className="rounded-t-lg" style={{ background: C.headerGrad }}>
              <CardTitle
                className="font-display text-xl flex items-center gap-3"
                style={{ color: C.cream }}
              >
                <Phone size={24} weight="fill" style={{ color: C.accent }} />
                {t.contact.phone}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              {[
                { label: 'Teléfono', href: 'tel:+573001234567' },
                { label: 'WhatsApp', href: 'https://wa.me/573001234567', external: true },
              ].map(({ label, href, external }) => (
                <div key={label}>
                  <p className="text-sm mb-1" style={{ color: C.mutedFg }}>{label}</p>
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="text-lg font-semibold transition-colors"
                    style={{ color: C.tealLight }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = C.primary)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = C.tealLight)}
                  >
                    (+57) 300 123 4567
                  </a>
                </div>
              ))}
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}
