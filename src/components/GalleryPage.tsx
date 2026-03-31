import { Card } from '@/components/ui/card'
import { useLanguage } from '@/lib/LanguageContext'

const galleryImages = [
  { titleKey: 'dish', descKey: 'dish' },
  { titleKey: 'dish', descKey: 'dish' },
  { titleKey: 'ambiance', descKey: 'ambiance' },
  { titleKey: 'dish', descKey: 'dish' },
  { titleKey: 'restaurant', descKey: 'restaurant' },
  { titleKey: 'dish', descKey: 'dish' },
]

export default function GalleryPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            {t.gallery.title}
          </h1>
          <p className="text-xl text-foreground/70">
            {t.gallery.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, idx) => (
            <Card
              key={idx}
              className="overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-turquoise/20"
            >
              <div className="aspect-square bg-gradient-to-br from-primary via-turquoise to-secondary relative overflow-hidden">
                <div className="absolute inset-0 wave-pattern opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-24 h-24 text-white/40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                  <h3 className="text-white font-bold text-xl mb-1">
                    {t.gallery.alt[image.titleKey as keyof typeof t.gallery.alt]}
                  </h3>
                  <p className="text-white/90 text-sm">
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
