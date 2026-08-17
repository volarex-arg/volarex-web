import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Servicios from "@/components/Servicios"
import { createPageMetadata } from '@/lib/site'

export const metadata = createPageMetadata({
  title: 'Servicios | Volarex',
  description: 'Servicios de limpieza técnica para edificios, industrias, galpones y locales comerciales.',
  path: '/servicios',
})

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-[#333333] text-white">
      <Header />

      <Servicios />

      <Footer />
    </div>
  )
}
