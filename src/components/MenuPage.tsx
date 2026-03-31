import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

interface MenuItem {
  name: string
  description: string
  price: string
}

interface MenuCategory {
  title: string
  items: MenuItem[]
}

const menuData: MenuCategory[] = [
  {
    title: 'Entradas',
    items: [
      {
        name: 'Ceviche de Camarón',
        description: 'Camarones frescos marinados en limón con cebolla, cilantro y aguacate',
        price: '$28.000',
      },
      {
        name: 'Ceviche Mixto',
        description: 'Mezcla de pescado, camarón y pulpo con nuestro toque especial',
        price: '$32.000',
      },
      {
        name: 'Cóctel de Camarón',
        description: 'Camarones en salsa de tomate con especias de la casa',
        price: '$26.000',
      },
      {
        name: 'Chicharrón de Pescado',
        description: 'Trozos crujientes de pescado acompañados de yuca y patacones',
        price: '$24.000',
      },
    ],
  },
  {
    title: 'Platos Fuertes',
    items: [
      {
        name: 'Pargo Rojo Frito',
        description: 'Pargo entero frito con arroz con coco, patacón y ensalada',
        price: '$45.000',
      },
      {
        name: 'Mojarra Frita',
        description: 'Mojarra fresca frita acompañada con arroz, yuca y ensalada',
        price: '$38.000',
      },
      {
        name: 'Cazuela de Mariscos',
        description: 'Cremosa cazuela con camarones, calamares, pescado y mejillones',
        price: '$48.000',
      },
      {
        name: 'Langostinos al Ajillo',
        description: 'Langostinos frescos salteados en salsa de ajo y mantequilla',
        price: '$52.000',
      },
      {
        name: 'Arroz con Camarones',
        description: 'Arroz marinero con camarones, vegetales y especias costeñas',
        price: '$36.000',
      },
      {
        name: 'Filete de Pescado a la Plancha',
        description: 'Filete de pescado blanco con vegetales asados y arroz',
        price: '$34.000',
      },
    ],
  },
  {
    title: 'Bebidas',
    items: [
      {
        name: 'Limonada Natural',
        description: 'Refrescante limonada con hierbabuena',
        price: '$6.000',
      },
      {
        name: 'Jugo Natural',
        description: 'Mango, maracuyá, lulo, mora o guanábana',
        price: '$7.000',
      },
      {
        name: 'Agua de Coco',
        description: 'Agua de coco fresca',
        price: '$8.000',
      },
      {
        name: 'Cerveza Nacional',
        description: 'Variedad de cervezas colombianas',
        price: '$5.000',
      },
    ],
  },
]

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            Nuestro Menú
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Descubre la auténtica cocina costeña con los mejores pescados y mariscos frescos
          </p>
        </div>

        <div className="space-y-12">
          {menuData.map((category, idx) => (
            <div key={idx} className="animate-fadeIn">
              <h2 className="text-4xl font-bold text-primary mb-6 text-center md:text-left border-b-4 border-accent inline-block pb-2">
                {category.title}
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
                          {item.name}
                        </CardTitle>
                        <span className="text-2xl font-bold text-accent whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-foreground/70 leading-relaxed">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {idx < menuData.length - 1 && (
                <Separator className="my-12 bg-turquoise/30" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-card p-8 rounded-lg shadow-lg border-2 border-accent/30">
          <p className="text-lg text-foreground/80">
            <strong className="text-primary">Nota:</strong> Todos nuestros platos se preparan
            al momento con ingredientes frescos. Los precios están sujetos a cambios.
          </p>
        </div>
      </div>
    </div>
  )
}
