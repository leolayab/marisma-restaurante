import { Fish } from '@phosphor-icons/react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 mt-auto">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Fish size={32} weight="fill" className="text-accent" />
              <h3 className="font-display text-2xl font-bold">Marisma</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-accent">{t.footer.hours}</h4>
            <div className="space-y-2 text-primary-foreground/80 text-sm">
              <p>{t.contact.monThu}</p>
              <p>{t.contact.friSat}</p>
              <p>{t.contact.sunday}</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-accent">{t.footer.contact}</h4>
            <div className="space-y-2 text-primary-foreground/80 text-sm">
              <p>{t.contact.address}</p>
              <p>{t.contact.city}</p>
              <p>Tel: (+57) 300 123 4567</p>
              <p>Email: info@marisma.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center text-primary-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Marisma. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
