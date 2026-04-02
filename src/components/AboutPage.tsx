import { Card, CardContent } from '@/components/ui/card'
import { Heart, Users, Leaf } from '@phosphor-icons/react'
import { useLanguage } from '@/lib/LanguageContext'
import { C } from '@/lib/brand'

const values = [
  { icon: Leaf,  key: 'quality'   as const },
  { icon: Heart, key: 'tradition' as const },
  { icon: Users, key: 'family'    as const },
]

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">

      {/* Hero Section — ocean gradient + wave pattern */}
      <section
        className="py-20 px-4"
        style={{
          background: `${C.wavePattern}, ${C.headerGrad}`,
        }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h1
            className="font-display text-5xl md:text-6xl font-bold mb-6"
            style={{ color: '#ffffff' }}
          >
            {t.about.title}
          </h1>
          <p
            className="text-xl md:text-2xl leading-relaxed"
            style={{ color: 'rgba(245,230,200,0.90)' }}
          >
            {t.about.ourStory}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4" style={{ backgroundColor: C.background }}>
        <div className="container mx-auto max-w-4xl">

          {/* Gold accent bar */}
          <div
            className="w-20 h-1 mx-auto mb-10 rounded-full"
            style={{ backgroundColor: C.accent }}
          />

          <div className="space-y-6">
            {[t.about.storyP1, t.about.storyP2, t.about.storyP3].map((para, i) => (
              <p
                key={i}
                className="text-lg leading-relaxed"
                style={{ color: C.mutedFg }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        className="py-20 px-4"
        style={{ backgroundColor: C.secondaryBg }}
      >
        <div className="container mx-auto max-w-6xl">

          <h2
            className="font-display text-4xl font-bold text-center mb-4"
            style={{ color: C.primary }}
          >
            {t.about.ourValues}
          </h2>

          {/* Gold underline */}
          <div
            className="w-16 h-1 mx-auto mb-12 rounded-full"
            style={{ backgroundColor: C.accent }}
          />

          <div className="grid md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, key }) => (
              <Card
                key={key}
                className="text-center p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105"
                style={{ backgroundColor: C.card, border: `1px solid ${C.border}` }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.tealLight)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
              >
                <CardContent className="pt-6">

                  {/* Icon circle — ocean gradient */}
                  <div className="flex justify-center mb-6">
                    <div
                      className="p-4 rounded-full"
                      style={{ background: C.headerGrad }}
                    >
                      <Icon
                        size={48}
                        weight="fill"
                        className="animate-wave"
                        style={{ color: C.accent }}
                      />
                    </div>
                  </div>

                  <h3
                    className="font-display text-2xl font-bold mb-3"
                    style={{ color: C.primary }}
                  >
                    {t.about[key]}
                  </h3>

                  {/* Gold mini divider */}
                  <div
                    className="w-10 h-0.5 mx-auto mb-3 rounded-full"
                    style={{ backgroundColor: C.accent }}
                  />

                  <p
                    className="leading-relaxed"
                    style={{ color: C.mutedFg }}
                  >
                    {t.about[`${key}Desc` as keyof typeof t.about]}
                  </p>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
