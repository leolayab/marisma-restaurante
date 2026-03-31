import { Card, CardContent } from '@/components/ui/card'
import { Heart, Users, Leaf } from '@phosphor-icons/react'
import { useLanguage } from '@/lib/LanguageContext'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero Section - ocean-gradient + wave-pattern per guide */}
      <section className="ocean-gradient wave-pattern text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            {t.about.title}
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
            {t.about.ourStory}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              {t.about.storyP1}
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              {t.about.storyP2}
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t.about.storyP3}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section - alternate bg per guide */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold text-center text-primary mb-12">
            {t.about.ourValues}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Quality Card */}
            <Card className="bg-card text-center p-6 hover:shadow-2xl hover:border-teal-light transition-all border border-border">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="ocean-gradient p-4 rounded-full">
                    <Leaf size={48} weight="fill" className="text-white animate-wave" />
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold text-primary mb-3">
                  {t.about.quality}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t.about.qualityDesc}
                </p>
              </CardContent>
            </Card>

            {/* Tradition Card */}
            <Card className="bg-card text-center p-6 hover:shadow-2xl hover:border-teal-light transition-all border border-border">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="ocean-gradient p-4 rounded-full">
                    <Heart size={48} weight="fill" className="text-white animate-wave" />
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold text-primary mb-3">
                  {t.about.tradition}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t.about.traditionDesc}
                </p>
              </CardContent>
            </Card>

            {/* Family Card */}
            <Card className="bg-card text-center p-6 hover:shadow-2xl hover:border-teal-light transition-all border border-border">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="ocean-gradient p-4 rounded-full">
                    <Users size={48} weight="fill" className="text-white animate-wave" />
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold text-primary mb-3">
                  {t.about.family}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t.about.familyDesc}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
