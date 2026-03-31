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
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-6xl">

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary mb-4">
            {t.menu.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.menu.subtitle}
          </p>
        </div>

        <div className="space-y-12">
          {menuStructure.map((category, idx) => (
            <div key={idx}>

              {/* Category Header - gold underline accent per guide */}
              <div className="mb-8 text-center md:text-left">
                <h2 className="font-display text-4xl font-bold text-primary inline-block pb-2 border-b-4 border-accent">
                  {t.menu[category.titleKey as keyof typeof t.menu] as string}
                </h2>
              </div>

              {/* Menu Items Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, itemIdx) => (
                  <Card
                    key={itemIdx}
                    className="bg-card border border-border hover:border-teal-light hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start gap-4">
                        <CardTitle className="font-display text-2xl text-primary flex-1">
                          {t.menu[item.nameKey as keyof typeof t.menu] as string}
                        </CardTitle>
                        {/* Price highlight - accent gold per guide */}
                        <span className="font-display text-2xl font-bold text-accent whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-muted-foreground leading-relaxed">
                        {t.menu[item.descKey as keyof typeof t.menu] as string}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Section Divider - teal-light per guide */}
              {idx < menuStructure.length - 1 && (
                <Separator className="my-12 bg-teal-light/30" />
              )}

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
