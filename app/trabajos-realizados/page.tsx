import type { Metadata } from 'next'
import Header from "@/components/Header"
import TrabajosRealizados from "@/components/TrabajosRealizados"

export const metadata: Metadata = {
  title: 'Trabajos realizados | Volarex',
  description: 'Casos de limpieza técnica en altura realizados por Volarex en entornos industriales.',
}

export default function TrabajosRealizadosPage() {
  return (
    <div className="min-h-screen bg-[#333333] text-white">
      <Header />

      <TrabajosRealizados />

      <footer className="py-10 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-3">
          <img
            src="/volarex-isologo-recortado.jpg"
            alt="Volarex"
            className="w-6 h-auto object-contain"
          />
          <span className="text-[#FFDE05] font-bold tracking-wider text-lg">VOLAREX</span>
        </div>
      </footer>
    </div>
  )
}
