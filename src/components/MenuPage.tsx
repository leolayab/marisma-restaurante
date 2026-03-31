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
      { nameKey: 'ceviche',   descKey: 'cevicheDesc',   price: '$32.000' },
      { nameKey: 'patacon',   descKey: 'pataconDesc',   price: '$24.000' },
      { nameKey: 'cazuela',   descKey: 'cazuelaDesc',   price: '$28.000' },
    ],
  },
  {
    titleKey: 'mainCourses',
    items: [
      { nameKey: 'pargo',           descKey: 'pargoDesc',           price: '$45.000' },
      { nameKey: 'mojarra',         descKey: 'mojarraDesc',         price: '$38.000' },
      { nameKey: 'langostinos',     descKey: 'langostinosDesc',     price: '$52.000' },
      { nameKey: 'arrozMariscos',   descKey: 'arrozMariscosDesc',   price: '$36.000' },
      { nameKey: 'bandejaMariscos', descKey: 'bandejaMariscosDesc', price: '$48.000' },
    ],
  },
  {
    titleKey: 'drinks',
    items: [
      { nameKey: 'limonada',  descKey: 'limonadaDesc',  price: '$6.000' },
      { nameKey: 'aguaPanela',descKey: 'aguaPanelaDesc', price: '$5.000' },
      { nameKey: 'jugosMix',  descKey: 'jugosMixDesc',  price: '$7.000' },
      { nameKey: 'sodas',     descKey: 'sodasDesc',     price: '$5.000' },
    ],
  },
]

// ── Brand tokens (logo-aligned, bypass Spark overrides) ──────────────
const C = {
  primary:        '#0d3d4a',
  accent:         '#c9a96e',
  tealLight:      '#3a8a8a',
  background:     '#f5f0e8',
  card:           '#faf7f2',
  border:         '#c5d8d8',
  mutedFg:        '#4a6a6a',
  separator:      'rgba(58,138,138,0.25)',
} as const

export default function MenuPage() {
  const { t } = useLanguage()

  return (
    <div
      className="min-h-screen py-16 px-4"
      style={{ backgroundColor: C.background }}
    >
      <div className="container mx-auto max-w-6xl">

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1
            className="font-display text-5xl md:text-6xl font-bold mb-4"
            style={{ color: C.primary }}
          >
            {t.menu.title}
          </h1>
          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: C.mutedFg }}
          >
            {t.menu.subtitle}
          </p>
        </div>

        <div className="space-y-12">
          {menuStructure.map((category, idx) => (
            <div key={idx}>

              {/* Category Header — gold underline */}
              <div className="mb-8 text-center md:text-left">
                <h2
                  className="font-display text-4xl font-bold inline-block pb-2"
                  style={{
                    color:        C.primary,
                    borderBottom: `4px solid ${C.accent}`,
                  }}
                >
                  {t.menu[category.titleKey as keyof typeof t.menu] as string}
                </h2>
              </div>

              {/* Menu Items Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, itemIdx) => (
                  <Card
                    key={itemIdx}
                    className="transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    style={{
                      backgroundColor: C.card,
                      border:          `1px solid ${C.border}`,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = C.tealLight
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = C.border
                    }}
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start gap-4">
                        <CardTitle
                          className="font-display text-2xl flex-1"
                          style={{ color: C.primary }}
                        >
                          {t.menu[item.nameKey as keyof typeof t.menu] as string}
                        </CardTitle>
                        {/* Price — warm gold */}
                        <span
                          className="font-display text-2xl font-bold whitespace-nowrap"
                          style={{ color: C.accent }}
                        >
                          {item.price}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription
                        className="text-base leading-relaxed"
                        style={{ color: C.mutedFg }}
                      >
                        {t.menu[item.descKey as keyof typeof t.menu] as string}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Section Divider — teal */}
              {idx < menuStructure.length - 1 && (
                <Separator
                  className="my-12"
                  style={{ backgroundColor: C.separator }}
                />
              )}

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
