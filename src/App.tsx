import { useState } from 'react'
import { Toaster } from '@/components/ui/sonner'
import { LanguageProvider } from '@/lib/LanguageContext'
import Navigation from '@/components/Navigation'
import HomePage from '@/components/HomePage'
import MenuPage from '@/components/MenuPage'
import AboutPage from '@/components/AboutPage'
import ReservationsPage from '@/components/ReservationsPage'
import GalleryPage from '@/components/GalleryPage'
import ContactPage from '@/components/ContactPage'
import Footer from '@/components/Footer'

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
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
        
        <main className="flex-1">
          {renderPage()}
        </main>

        <Footer />

        <Toaster />
      </div>
    </LanguageProvider>
  )
}

export default App