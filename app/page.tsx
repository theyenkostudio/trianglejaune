import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import EquipmentPartners from '@/components/EquipmentPartners'
import Footer from '@/components/Footer'
import GlobalPresence from '@/components/GlobalPresence'

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Services/>
      <EquipmentPartners/>
      <GlobalPresence/>
      <Footer/>
    </div>
  )
}
