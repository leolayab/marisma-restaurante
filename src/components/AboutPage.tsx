import { Card, CardContent } from '@/components/ui/card'
import { Heart, Users, Leaf } from '@phosphor-icons/react'
import { useLanguage } from '@/lib/LanguageContext'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary to-turquoise text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t.about.title}</h1>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
            {t.about.ourStory}
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-foreground/80 mb-6">
              {t.about.storyP1}
            </p>
            <p className="text-lg leading-relaxed text-foreground/80 mb-6">
              {t.about.storyP2}
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              {t.about.storyP3}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">
            {t.about.ourValues}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-2xl transition-shadow border-2 border-turquoise/30">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-turquoise to-primary p-4 rounded-full">
                    <Leaf size={48} weight="fill" className="text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">{t.about.quality}</h3>
                <p className="text-foreground/70 leading-relaxed">
                  {t.about.qualityDesc}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-2xl transition-shadow border-2 border-turquoise/30">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-turquoise to-primary p-4 rounded-full">
                    <Heart size={48} weight="fill" className="text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">{t.about.tradition}</h3>
                <p className="text-foreground/70 leading-relaxed">
                  {t.about.traditionDesc}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-2xl transition-shadow border-2 border-turquoise/30">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-turquoise to-primary p-4 rounded-full">
                    <Users size={48} weight="fill" className="text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">{t.about.family}</h3>
                <p className="text-foreground/70 leading-relaxed">
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
