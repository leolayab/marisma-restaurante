import { useState } from 'react'
import { Fish, ForkKnife, Users, CalendarBlank, Images, Phone, List, Translate } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useLanguage } from '@/lib/LanguageContext'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import logo from '@/assets/logo.jpeg'

interface NavigationProps {
  currentPage: string
  onNavigate: (page: string) => void
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [open, setOpen] = useState(false)
  const { t, language, setLanguage } = useLanguage()

  const navItems = [
    { id: 'home', label: t.nav.home, icon: Fish },
    { id: 'menu', label: t.nav.menu, icon: ForkKnife },
    { id: 'about', label: t.nav.about, icon: Users },
    { id: 'reservations', label: t.nav.reservations, icon: CalendarBlank },
    { id: 'gallery', label: t.nav.gallery, icon: Images },
    { id: 'contact', label: t.nav.contact, icon: Phone },
  ]

  const handleNavClick = (page: string) => {
    onNavigate(page)
    setOpen(false)
  }

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 max-w-6xl">
        <div className="flex items-center justify-between">

          {/* Logo - replace Fish icon with brand image */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <img
              src={logo}
              alt="Marisma - Cocina de Mar"
              className="h-12 w-12 object-contain rounded-full"
            />
            <h1 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
              Marisma
            </h1>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => handleNavClick(item.id)}
                className={`font-display text-primary-foreground hover:text-accent hover:bg-primary/80 transition-all duration-300 tracking-wider uppercase text-sm font-medium ${
                  currentPage === item.id
                    ? 'border-b-2 border-accent rounded-none text-accent'
                    : 'border-b-2 border-transparent'
                }`}
              >
                {item.label}
              </Button>
            ))}

            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground hover:text-accent hover:bg-primary/80"
                >
                  <Translate size={24} weight="bold" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border border-border">
                <DropdownMenuItem
                  onClick={() => setLanguage('es')}
                  className={`font-body cursor-pointer ${
                    language === 'es'
                      ? 'bg-accent/20 text-primary font-semibold'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  🇪🇸 Español
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('en')}
                  className={`font-body cursor-pointer ${
                    language === 'en'
                      ? 'bg-accent/20 text-primary font-semibold'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  🇺🇸 English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Hamburger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:text-accent hover:bg-primary/80"
              >
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
                      className={`font-display justify-start gap-3 text-lg text-primary-foreground hover:text-accent hover:bg-primary/80 tracking-wide ${
                        currentPage === item.id
                          ? 'bg-primary/80 text-accent border-l-4 border-accent pl-3'
                          : 'border-l-4 border-transparent pl-3'
                      }`}
                    >
                      <Icon size={24} />
                      {item.label}
                    </Button>
                  )
                })}

                {/* Language Switcher - Mobile */}
                <div className="border-t border-primary-foreground/20 pt-4 mt-4">
                  <div className="font-body text-sm text-primary-foreground/60 mb-2 px-4 uppercase tracking-wider">
                    Language / Idioma
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => setLanguage('es')}
                    className={`font-body justify-start gap-3 text-lg text-primary-foreground hover:text-accent hover:bg-primary/80 w-full ${
                      language === 'es'
                        ? 'bg-primary/80 text-accent border-l-4 border-accent pl-3'
                        : 'border-l-4 border-transparent pl-3'
                    }`}
                  >
                    🇪🇸 Español
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => setLanguage('en')}
                    className={`font-body justify-start gap-3 text-lg text-primary-foreground hover:text-accent hover:bg-primary/80 w-full ${
                      language === 'en'
                        ? 'bg-primary/80 text-accent border-l-4 border-accent pl-3'
                        : 'border-l-4 border-transparent pl-3'
                    }`}
                  >
                    🇺🇸 English
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </nav>
  )
}
