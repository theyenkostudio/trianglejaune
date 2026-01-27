
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import EquipmentPartners from '@/components/EquipmentPartners'
import ServicesSection from '@/components/ServicesSection'
import ServicesSectionTwo from '@/components/ServicesSectionTwo'
import ServicesSectionThree from '@/components/ServicesSectionThree'
import ServicesSectionFour from '@/components/ServicesSectionFour'
import ServicesSectionFive from '@/components/ServicesSectionFive'
import Footer from '@/components/Footer'
import GlobalPresence from '@/components/GlobalPresence'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ServicesSectionFive />
      <EquipmentPartners />
      <GlobalPresence />
      <ContactSection />
      <Footer />
    </div>
  )
}
