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
import logo from '@/assets/logo.jpeg'
import { C } from '@/lib/brand'

interface NavigationProps {
  currentPage: string
  onNavigate: (page: string) => void
}

// Remove the local const C = {...} block entirely
// ...existing code...

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
              <img
                src={logo}
                alt="Marisma - Cocina de Mar"
                className="h-16 w-16 object-contain rounded-full"
                style={{ border: `2px solid ${C.accent}` }}
              />
              <span className="text-xs text-accent font-light italic tracking-wide">Cocina de Mar</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`
                  font-display px-4 py-5 text-sm font-semibold tracking-widest uppercase
                  transition-all duration-200 border-b-2
                  ${currentPage === item.id
                    ? 'border-accent text-accent'
                    : 'border-transparent hover:border-accent/50 hover:text-accent'
                  }
                `}
                style={{
                  color: currentPage === item.id ? C.accent : C.cream,
                }}
              >
                {item.label}
              </button>
            ))}

            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="px-4 py-5 transition-colors hover:text-accent"
                  style={{ color: C.cream }}
                >
                  <Translate size={22} weight="bold" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="border border-border"
                style={{ backgroundColor: C.primary }}
              >
                <DropdownMenuItem
                  onClick={() => setLanguage('es')}
                  className={`font-body cursor-pointer ${
                    language === 'es'
                      ? 'font-semibold'
                      : ''
                  }`}
                  style={{
                    color: language === 'es' ? C.accent : C.cream,
                    backgroundColor: language === 'es' ? 'rgba(201,169,110,0.15)' : 'transparent',
                  }}
                >
                  🇪🇸 Español
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('en')}
                  className={`font-body cursor-pointer ${
                    language === 'en'
                      ? 'font-semibold'
                      : ''
                  }`}
                  style={{
                    color: language === 'en' ? C.accent : C.cream,
                    backgroundColor: language === 'en' ? 'rgba(201,169,110,0.15)' : 'transparent',
                  }}
                >
                  🇺🇸 English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Hamburger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button
                className="p-2 rounded transition-colors hover:text-accent"
                style={{ color: C.cream }}
              >
                <List size={28} weight="bold" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-l border-accent/30"
              style={{ backgroundColor: C.primary, color: C.cream }}
            >
              <div className="flex flex-col gap-2 mt-8">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`
                        font-display flex items-center gap-3 px-4 py-3 text-lg
                        tracking-wide rounded transition-all text-left
                        border-l-4
                        ${currentPage === item.id
                          ? 'border-accent bg-white/10'
                          : 'border-transparent hover:border-accent/50 hover:bg-white/5'
                        }
                      `}
                      style={{
                        color: currentPage === item.id ? C.accent : C.cream,
                      }}
                    >
                      <Icon size={22} />
                      {item.label}
                    </button>
                  )
                })}

                {/* Language Switcher - Mobile */}
                <div
                  className="border-t pt-4 mt-4"
                  style={{ borderColor: 'rgba(245,230,200,0.20)' }}
                >
                  <p
                    className="font-body text-xs uppercase tracking-widest px-4 mb-3"
                    style={{ color: 'rgba(245,230,200,0.50)' }}
                  >
                    Language / Idioma
                  </p>
                  {([
                    { code: 'es', flag: '🇪🇸', label: 'Español' },
                    { code: 'en', flag: '🇺🇸', label: 'English' },
                  ]).map(({ code, flag, label }) => (
                    <button
                      key={code}
                      onClick={() => setLanguage(code as 'es' | 'en')}
                      className={`
                        font-body flex items-center gap-3 w-full px-4 py-3 text-lg
                        rounded transition-all border-l-4
                        ${language === code
                          ? 'border-accent bg-white/10'
                          : 'border-transparent hover:border-accent/50 hover:bg-white/5'
                        }
                      `}
                      style={{
                        color: language === code ? C.accent : C.cream,
                      }}
                    >
                      {flag} {label}
                    </button>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </nav>
  )
}
