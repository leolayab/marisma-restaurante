import { useState } from 'react'
import { ForkKnife, Users, CalendarBlank, Images, Phone, List, Translate } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useLanguage } from '@/lib/LanguageContext'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface NavigationProps {
  currentPage: string
  onNavigate: (page: string) => void
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [open, setOpen] = useState(false)
  const { t, language, setLanguage } = useLanguage()

  const navItems = [
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
      <div className="container mx-auto px-4 py-3 max-w-6xl">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
          >
            <div className="flex flex-col">
              <h1 className="font-display text-xl md:text-2xl font-bold leading-tight">Marisma</h1>
              <span className="text-xs text-accent font-light italic tracking-wide">Cocina de Mar</span>
            </div>
          </button>

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
              <DropdownMenuContent align="end" className="bg-card">
                <DropdownMenuItem
                  onClick={() => setLanguage('es')}
                  className={language === 'es' ? 'bg-accent/20 font-semibold' : ''}
                >
                  🇪🇸 Español
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('en')}
                  className={language === 'en' ? 'bg-accent/20 font-semibold' : ''}
                >
                  🇺🇸 English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
                
                <div className="border-t border-primary-foreground/20 pt-4 mt-4">
                  <div className="text-sm text-primary-foreground/60 mb-2 px-4">Language / Idioma</div>
                  <Button
                    variant="ghost"
                    onClick={() => setLanguage('es')}
                    className={`justify-start gap-3 text-lg text-primary-foreground hover:text-accent hover:bg-primary/80 w-full ${
                      language === 'es' ? 'bg-primary/80 text-accent' : ''
                    }`}
                  >
                    🇪🇸 Español
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => setLanguage('en')}
                    className={`justify-start gap-3 text-lg text-primary-foreground hover:text-accent hover:bg-primary/80 w-full ${
                      language === 'en' ? 'bg-primary/80 text-accent' : ''
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
