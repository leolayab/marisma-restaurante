import { useLanguage } from '@/lib/LanguageContext'
import { MapPin, Phone, EnvelopeSimple, Clock } from '@phosphor-icons/react'
import logo from '@/assets/logo.jpeg'

// ── Brand tokens (logo-aligned, bypass Spark overrides) ──────────────
const C = {
  primary:    '#0d3d4a',
  accent:     '#c9a96e',
  tealLight:  '#3a8a8a',
  border:     'rgba(245,230,200,0.15)',
  cream:      '#f5e6c8',
  creamMuted: 'rgba(245,230,200,0.70)',
  creamFaint: 'rgba(245,230,200,0.40)',
  footerGrad: 'linear-gradient(135deg, #0a2d38 0%, #0d3d4a 60%, #1a5568 100%)',
} as const

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer
      className="py-12 px-4 mt-auto"
      style={{ background: C.footerGrad, color: C.cream }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Marisma - Cocina de Mar"
                className="h-16 w-16 object-contain rounded-full"
                style={{ border: `2px solid ${C.accent}` }}
              />
              <div>
                <h3
                  className="font-display text-2xl font-bold"
                  style={{ color: C.cream }}
                >
                  Marisma
                </h3>
                <p
                  className="font-body text-sm italic"
                  style={{ color: C.accent }}
                >
                  Cocina de Mar
                </p>
              </div>
            </div>
            <p
              className="font-body leading-relaxed text-sm"
              style={{ color: C.creamMuted }}
            >
              {t.footer.description}
            </p>
          </div>

          {/* Hours Column */}
          <div>
            <h4
              className="font-display font-semibold text-lg mb-5 flex items-center gap-2"
              style={{ color: C.accent }}
            >
              <Clock size={20} weight="fill" style={{ color: C.accent }} />
              {t.footer.hours}
            </h4>
            <div className="space-y-3 font-body text-sm">
              <div className="flex justify-between items-center">
                <span style={{ color: C.cream }}>{t.home.joinUs}</span>
              </div>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4
              className="font-display font-semibold text-lg mb-5"
              style={{ color: C.accent }}
            >
              {t.footer.contact}
            </h4>
            <div className="space-y-3 font-body text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} weight="fill" style={{ color: C.tealLight, marginTop: 2 }} />
                <span style={{ color: C.creamMuted }}>{t.contact.address}, {t.contact.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} weight="fill" style={{ color: C.tealLight }} />
                <a
                  href="tel:+573001234567"
                  className="transition-colors"
                  style={{ color: C.creamMuted }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = C.creamMuted)}
                >
                  (+57) 300 123 4567
                </a>
              </div>
              <div className="flex items-center gap-2">
                <EnvelopeSimple size={16} weight="fill" style={{ color: C.tealLight }} />
                <a
                  href="mailto:info@marisma.com"
                  className="transition-colors"
                  style={{ color: C.creamMuted }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = C.creamMuted)}
                >
                  info@marisma.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div
          className="pt-6 text-center text-sm"
          style={{ borderTop: `1px solid ${C.border}`, color: C.creamFaint }}
        >
          <p>
            &copy; {new Date().getFullYear()} Marisma.{' '}
            <span style={{ color: C.creamMuted }}>{t.footer.rights}</span>
          </p>
        </div>

      </div>
    </footer>
  )
}
