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

const MarismaLogo = ({ className = "", size = 40 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="100" cy="100" r="95" fill="url(#logoGradient)" />
    <circle cx="100" cy="100" r="92" fill="none" stroke="url(#goldGradient)" strokeWidth="3" />
    
    <ellipse cx="100" cy="75" rx="55" ry="15" fill="url(#waterGradient)" />
    
    <path
      d="M100 45 L95 50 L90 48 L92 53 L87 55 L92 57 L90 62 L95 60 L100 65 L105 60 L110 62 L108 57 L113 55 L108 53 L110 48 L105 50 Z"
      fill="url(#treeGradient)"
    />
    <rect x="98" y="50" width="4" height="20" fill="#654321" />
    
    <path
      d="M100 120 L80 140 L85 145 L90 140 L95 145 L100 142 L105 145 L110 140 L115 145 L120 140 Z"
      fill="url(#rootGradient)"
    />
    
    <ellipse cx="145" cy="60" rx="8" ry="4" fill="url(#sunGradient)" />
    
    <defs>
      <linearGradient id="logoGradient" x1="0" y1="0" x2="0" y2="200">
        <stop offset="0%" stopColor="oklch(0.38 0.08 200)" />
        <stop offset="100%" stopColor="oklch(0.28 0.08 200)" />
      </linearGradient>
      <linearGradient id="goldGradient" x1="0" y1="0" x2="200" y2="200">
        <stop offset="0%" stopColor="oklch(0.72 0.12 65)" />
        <stop offset="100%" stopColor="oklch(0.68 0.15 45)" />
      </linearGradient>
      <linearGradient id="waterGradient" x1="0" y1="0" x2="0" y2="100">
        <stop offset="0%" stopColor="oklch(0.65 0.10 195 / 0.6)" />
        <stop offset="100%" stopColor="oklch(0.55 0.09 197 / 0.8)" />
      </linearGradient>
      <linearGradient id="treeGradient" x1="0" y1="0" x2="0" y2="100">
        <stop offset="0%" stopColor="oklch(0.45 0.10 150)" />
        <stop offset="100%" stopColor="oklch(0.35 0.08 145)" />
      </linearGradient>
      <linearGradient id="rootGradient" x1="0" y1="0" x2="0" y2="100">
        <stop offset="0%" stopColor="oklch(0.72 0.12 65)" />
        <stop offset="100%" stopColor="oklch(0.65 0.12 60)" />
      </linearGradient>
      <radialGradient id="sunGradient">
        <stop offset="0%" stopColor="oklch(0.72 0.12 65)" />
        <stop offset="100%" stopColor="oklch(0.68 0.15 45)" />
      </radialGradient>
    </defs>
  </svg>
)

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
            <MarismaLogo size={48} className="group-hover:scale-105 transition-transform" />
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
