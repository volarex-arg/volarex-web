import Header from "@/components/Header"
import Footer from "@/components/Footer"
import TrabajosRealizados from "@/components/TrabajosRealizados"
import { createPageMetadata } from '@/lib/site'

export const metadata = createPageMetadata({
  title: 'Trabajos realizados | Volarex',
  description: 'Casos de limpieza técnica en altura realizados por Volarex en entornos industriales.',
  path: '/trabajos-realizados',
})

export default function TrabajosRealizadosPage() {
  return (
    <div className="min-h-screen bg-[#333333] text-white">
      <Header />

      <TrabajosRealizados />

      <Footer />
    </div>
  )
}
