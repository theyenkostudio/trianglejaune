
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import EquipmentPartners from '@/components/EquipmentPartners'
import ServicesSection from '@/components/ServicesSection'
import Footer from '@/components/Footer'
import GlobalPresence from '@/components/GlobalPresence'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ServicesSection />
      <EquipmentPartners />
      <GlobalPresence />
      <ContactSection />
      <Footer />
    </div>
  )
}
