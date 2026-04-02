import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  MapPin,
  Phone,
  EnvelopeSimple,
  Clock,
  InstagramLogo,
  FacebookLogo,
  WhatsappLogo,
} from '@phosphor-icons/react'
import { useLanguage } from '@/lib/LanguageContext'
import { C } from '@/lib/brand'

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen py-16 px-4" style={{ backgroundColor: C.background }}>
      <div className="container mx-auto max-w-6xl">

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1
            className="font-display text-5xl md:text-6xl font-bold mb-4"
            style={{ color: C.primary }}
          >
            {t.contact.title}
          </h1>
          <p className="text-xl" style={{ color: C.mutedFg }}>
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">

          {/* Location Card */}
          <Card
            className="transition-all hover:shadow-2xl"
            style={{ backgroundColor: C.card, border: `1px solid ${C.border}` }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.tealLight)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
          >
            <CardHeader className="rounded-t-lg" style={{ background: C.headerGrad }}>
              <CardTitle
                className="font-display text-2xl flex items-center gap-3"
                style={{ color: C.cream }}
              >
                <MapPin size={32} weight="fill" style={{ color: C.accent }} />
                {t.contact.location}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4 text-lg">
              <p className="font-semibold" style={{ color: C.primary }}>
                Restaurante Marisma
              </p>
              <p style={{ color: C.mutedFg }}>{t.contact.address}</p>
              <p style={{ color: C.mutedFg }}>{t.contact.city}</p>
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
                className="font-display text-2xl flex items-center gap-3"
                style={{ color: C.cream }}
              >
                <Phone size={32} weight="fill" style={{ color: C.accent }} />
                {t.contact.phone}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div>
                <p className="text-sm mb-1" style={{ color: C.mutedFg }}>Teléfono</p>
                <a
                  href="tel:+573001234567"
                  className="text-xl font-semibold transition-colors"
                  style={{ color: C.tealLight }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.primary)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = C.tealLight)}
                >
                  (+57) 300 123 4567
                </a>
              </div>
              <div>
                <p className="text-sm mb-1" style={{ color: C.mutedFg }}>WhatsApp</p>
                <a
                  href="https://wa.me/573001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold transition-colors flex items-center gap-2"
                  style={{ color: C.tealLight }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.primary)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = C.tealLight)}
                >
                  <WhatsappLogo size={24} weight="fill" />
                  (+57) 300 123 4567
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Hours Card */}
          <Card
            className="transition-all hover:shadow-2xl"
            style={{ backgroundColor: C.card, border: `1px solid ${C.border}` }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.tealLight)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
          >
            <CardHeader className="rounded-t-lg" style={{ background: C.headerGrad }}>
              <CardTitle
                className="font-display text-2xl flex items-center gap-3"
                style={{ color: C.cream }}
              >
                <Clock size={32} weight="fill" style={{ color: C.accent }} />
                {t.contact.hours}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2">
                    <span className="font-semibold" style={{ color: C.primary }}>{t.contact.joinUs}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Email Card */}
          <Card
            className="transition-all hover:shadow-2xl"
            style={{ backgroundColor: C.card, border: `1px solid ${C.border}` }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.tealLight)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
          >
            <CardHeader className="rounded-t-lg" style={{ background: C.headerGrad }}>
              <CardTitle
                className="font-display text-2xl flex items-center gap-3"
                style={{ color: C.cream }}
              >
                <EnvelopeSimple size={32} weight="fill" style={{ color: C.accent }} />
                {t.contact.email}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              {['info@marisma.com', 'reservas@marisma.com'].map((mail) => (
                <div key={mail}>
                  <a
                    href={`mailto:${mail}`}
                    className="text-xl font-semibold transition-colors"
                    style={{ color: C.tealLight }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = C.primary)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = C.tealLight)}
                  >
                    {mail}
                  </a>
                </div>
              ))}
            </CardContent>
          </Card>

        </div>

        {/* Social Media Card */}
        <Card
          className="shadow-2xl"
          style={{
            backgroundColor: C.card,
            border:          `2px solid rgba(201,169,110,0.40)`,
          }}
        >
          <CardHeader
            className="text-center rounded-t-lg"
            style={{ background: C.headerGrad }}
          >
            <CardTitle
              className="font-display text-3xl"
              style={{ color: C.cream }}
            >
              {t.contact.followUs}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-8">
            <div className="flex flex-wrap justify-center gap-6">

              {/* Instagram — platform brand colors */}
              <a
                href="https://instagram.com/marisma_yopal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-3 rounded-md text-white font-display font-semibold text-lg transition-opacity hover:opacity-90 shadow-md"
                style={{ background: 'linear-gradient(135deg, #e1306c, #833ab4)' }}
              >
                <InstagramLogo size={24} weight="fill" />
                Instagram
              </a>

              {/* Facebook — platform brand colors */}
              <a
                href="https://facebook.com/marisma.yopal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-3 rounded-md text-white font-display font-semibold text-lg transition-opacity hover:opacity-90 shadow-md"
                style={{ backgroundColor: '#1877f2' }}
              >
                <FacebookLogo size={24} weight="fill" />
                Facebook
              </a>

              {/* WhatsApp CTA — Marisma warm gold as primary CTA */}
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-3 rounded-md font-display font-semibold text-lg transition-opacity hover:opacity-90 shadow-md"
                style={{ backgroundColor: C.accent, color: '#1a1a0e' }}
              >
                <WhatsappLogo size={24} weight="fill" />
                WhatsApp
              </a>

            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
