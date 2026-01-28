
import Hero from '@/components/Hero'
import EquipmentPartners from '@/components/EquipmentPartners'
import ServicesSection from '@/components/ServicesSection'
import CataloguesSection from '@/components/CataloguesSection'
// import GlobalPresence from '@/components/GlobalPresence'  // Original static version
import GlobalPresenceInteractive from '@/components/GlobalPresenceInteractive'  
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <CataloguesSection />
      <EquipmentPartners />
      <GlobalPresenceInteractive />  
      <ContactSection />
    </div>
  )
}
