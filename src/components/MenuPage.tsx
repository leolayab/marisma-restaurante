import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { useLanguage } from '@/lib/LanguageContext'

interface MenuItem {
  nameKey: string
  descKey: string
  price: string
}

interface MenuCategory {
  titleKey: string
  items: MenuItem[]
}

const menuStructure: MenuCategory[] = [
  {
    titleKey: 'appetizers',
    items: [
      { nameKey: 'ceviche', descKey: 'cevicheDesc', price: '$32.000' },
      { nameKey: 'patacon', descKey: 'pataconDesc', price: '$24.000' },
      { nameKey: 'cazuela', descKey: 'cazuelaDesc', price: '$28.000' },
    ],
  },
  {
    titleKey: 'mainCourses',
    items: [
      { nameKey: 'pargo', descKey: 'pargoDesc', price: '$45.000' },
      { nameKey: 'mojarra', descKey: 'mojarraDesc', price: '$38.000' },
      { nameKey: 'langostinos', descKey: 'langostinosDesc', price: '$52.000' },
      { nameKey: 'arrozMariscos', descKey: 'arrozMariscosDesc', price: '$36.000' },
      { nameKey: 'bandejaMariscos', descKey: 'bandejaMariscosDesc', price: '$48.000' },
    ],
  },
  {
    titleKey: 'drinks',
    items: [
      { nameKey: 'limonada', descKey: 'limonadaDesc', price: '$6.000' },
      { nameKey: 'aguaPanela', descKey: 'aguaPanelaDesc', price: '$5.000' },
      { nameKey: 'jugosMix', descKey: 'jugosMixDesc', price: '$7.000' },
      { nameKey: 'sodas', descKey: 'sodasDesc', price: '$5.000' },
    ],
  },
]

export default function MenuPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            {t.menu.title}
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            {t.menu.subtitle}
          </p>
        </div>

        <div className="space-y-12">
          {menuStructure.map((category, idx) => (
            <div key={idx} className="animate-fadeIn">
              <h2 className="text-4xl font-bold text-primary mb-6 text-center md:text-left border-b-4 border-accent inline-block pb-2">
                {t.menu[category.titleKey as keyof typeof t.menu] as string}
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {category.items.map((item, itemIdx) => (
                  <Card
                    key={itemIdx}
                    className="hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-turquoise/20 bg-card"
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start gap-4">
                        <CardTitle className="text-2xl text-primary flex-1">
                          {t.menu[item.nameKey as keyof typeof t.menu] as string}
                        </CardTitle>
                        <span className="text-2xl font-bold text-accent whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-foreground/70 leading-relaxed">
                        {t.menu[item.descKey as keyof typeof t.menu] as string}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {idx < menuStructure.length - 1 && (
                <Separator className="my-12 bg-turquoise/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
