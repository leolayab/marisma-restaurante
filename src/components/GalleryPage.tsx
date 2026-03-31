import { Card } from '@/components/ui/card'
import { useLanguage } from '@/lib/LanguageContext'

const galleryImages = [
  { titleKey: 'dish',       descKey: 'dish'       },
  { titleKey: 'dish',       descKey: 'dish'       },
  { titleKey: 'ambiance',   descKey: 'ambiance'   },
  { titleKey: 'dish',       descKey: 'dish'       },
  { titleKey: 'restaurant', descKey: 'restaurant' },
  { titleKey: 'dish',       descKey: 'dish'       },
]

// ── Brand tokens (logo-aligned, bypass Spark overrides) ──────────────
const C = {
  primary:     '#0d3d4a',
  accent:      '#c9a96e',
  tealLight:   '#3a8a8a',
  background:  '#f5f0e8',
  card:        '#faf7f2',
  border:      '#c5d8d8',
  mutedFg:     '#4a6a6a',
  cream:       '#f5e6c8',
  headerGrad:  'linear-gradient(135deg, #0d3d4a 0%, #1a5568 50%, #3a8a8a 100%)',
  wavePattern: `repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(58,138,138,0.06) 10px,
    rgba(58,138,138,0.06) 20px
  )`,
} as const

export default function GalleryPage() {
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
            {t.gallery.title}
          </h1>

          {/* Gold accent underline */}
          <div
            className="w-20 h-1 mx-auto mb-4 rounded-full"
            style={{ backgroundColor: C.accent }}
          />

          <p className="text-xl" style={{ color: C.mutedFg }}>
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, idx) => (
            <Card
              key={idx}
              className="overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ backgroundColor: C.card, border: `1px solid ${C.border}` }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.tealLight)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
            >
              <div
                className="aspect-square relative overflow-hidden"
                style={{
                  background: `${C.wavePattern}, ${C.headerGrad}`,
                }}
              >

                {/* Placeholder image icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-24 h-24 transition-colors duration-300"
                    style={{ color: 'rgba(245,230,200,0.40)' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(245,230,200,0.70)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,230,200,0.40)')}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                {/* Gold accent corner dot */}
                <div
                  className="absolute top-3 right-3 w-3 h-3 rounded-full opacity-70"
                  style={{ backgroundColor: C.accent }}
                />

                {/* Card overlay label */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  style={{
                    background: `linear-gradient(to top, rgba(13,61,74,0.92) 0%, transparent 100%)`,
                  }}
                >
                  <h3
                    className="font-display font-bold text-xl mb-1"
                    style={{ color: C.cream }}
                  >
                    {t.gallery.alt[image.titleKey as keyof typeof t.gallery.alt]}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: 'rgba(245,230,200,0.80)' }}
                  >
                    {t.gallery.alt[image.descKey as keyof typeof t.gallery.alt]}
                  </p>
                </div>

              </div>
            </Card>
          ))}
        </div>

      </div>
    </div>
  )
}
