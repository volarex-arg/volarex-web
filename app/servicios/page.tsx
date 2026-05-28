import type { Metadata } from 'next'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Servicios from "@/components/Servicios"

export const metadata: Metadata = {
  title: 'Servicios | Volarex',
  description: 'Servicios de limpieza técnica en altura con drones: vidrios, fachadas, paneles solares.',
}

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-[#333333] text-white">
      <Header />

      <Servicios />

      <Footer />
    </div>
  )
}
