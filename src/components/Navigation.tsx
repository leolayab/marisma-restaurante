import { useState } from 'react'
import { Fish, ForkKnife, Users, CalendarBlank, Images, Phone } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { List } from '@phosphor-icons/react'

interface NavigationProps {
  currentPage: string
  onNavigate: (page: string) => void
}

const navItems = [
  { id: 'home', label: 'Inicio', icon: Fish },
  { id: 'menu', label: 'Menú', icon: ForkKnife },
  { id: 'about', label: 'Nosotros', icon: Users },
  { id: 'reservations', label: 'Reservas', icon: CalendarBlank },
  { id: 'gallery', label: 'Galería', icon: Images },
  { id: 'contact', label: 'Contacto', icon: Phone },
]

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [open, setOpen] = useState(false)

  const handleNavClick = (page: string) => {
    onNavigate(page)
    setOpen(false)
  }

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 max-w-6xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Fish size={32} weight="fill" className="text-accent" />
            <h1 className="font-display text-2xl md:text-3xl font-bold">Marisma</h1>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => handleNavClick(item.id)}
                className={`text-primary-foreground hover:text-accent hover:bg-primary/80 transition-all duration-300 tracking-wider uppercase text-sm font-medium ${
                  currentPage === item.id
                    ? 'border-b-2 border-accent rounded-none'
                    : 'border-b-2 border-transparent'
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-primary-foreground">
                <List size={28} weight="bold" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary text-primary-foreground border-accent">
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Button
                      key={item.id}
                      variant="ghost"
                      onClick={() => handleNavClick(item.id)}
                      className={`justify-start gap-3 text-lg text-primary-foreground hover:text-accent hover:bg-primary/80 ${
                        currentPage === item.id ? 'bg-primary/80 text-accent' : ''
                      }`}
                    >
                      <Icon size={24} />
                      {item.label}
                    </Button>
                  )
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
