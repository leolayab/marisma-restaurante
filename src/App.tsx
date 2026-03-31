import { useState } from 'react'
import { Toaster } from '@/components/ui/sonner'
import Navigation from '@/components/Navigation'
import HomePage from '@/components/HomePage'
import MenuPage from '@/components/MenuPage'
import AboutPage from '@/components/AboutPage'
import ReservationsPage from '@/components/ReservationsPage'
import GalleryPage from '@/components/GalleryPage'
import ContactPage from '@/components/ContactPage'
import { Fish } from '@phosphor-icons/react'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />
      case 'menu':
        return <MenuPage />
      case 'about':
        return <AboutPage />
      case 'reservations':
        return <ReservationsPage />
      case 'gallery':
        return <GalleryPage />
      case 'contact':
        return <ContactPage />
      default:
        return <HomePage onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-1">
        {renderPage()}
      </main>

      <footer className="bg-primary text-primary-foreground py-12 px-4 mt-auto">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Fish size={32} weight="fill" className="text-accent" />
                <h3 className="font-display text-2xl font-bold">Marisma</h3>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Disfruta el sabor costeño en Yopal Casanare. Pescados y mariscos frescos
                preparados con pasión y tradición.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4 text-accent">Horarios</h4>
              <div className="space-y-2 text-primary-foreground/80 text-sm">
                <p>Lunes - Jueves: 11:00 AM - 9:00 PM</p>
                <p>Viernes - Sábado: 11:00 AM - 10:00 PM</p>
                <p>Domingo: 11:00 AM - 8:00 PM</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4 text-accent">Contacto</h4>
              <div className="space-y-2 text-primary-foreground/80 text-sm">
                <p>Calle 15 # 20-45, Centro</p>
                <p>Yopal, Casanare, Colombia</p>
                <p>Tel: (+57) 300 123 4567</p>
                <p>Email: info@marisma.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-6 text-center text-primary-foreground/60 text-sm">
            <p>&copy; {new Date().getFullYear()} Marisma. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  )
}

export default App