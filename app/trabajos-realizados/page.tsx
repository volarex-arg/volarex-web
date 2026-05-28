import type { Metadata } from 'next'
import TrabajosRealizados from "@/components/TrabajosRealizados"

export const metadata: Metadata = {
  title: 'Trabajos realizados | Volarex',
  description: 'Casos de limpieza técnica en altura realizados por Volarex en entornos industriales.',
}

export default function TrabajosRealizadosPage() {
  return (
    <div className="min-h-screen bg-[#333333] text-white">
      <header className="bg-[#333333] px-6 py-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/">
            <img
              src="/volarex-isologo.jpg"
              alt="Volarex"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </a>
          <a
            href="/"
            className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al inicio
          </a>
        </div>
      </header>

      <TrabajosRealizados />

      <footer className="py-10 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-3">
          <img
            src="/volarex-isologo.jpg"
            alt="Volarex"
            className="w-40 h-auto object-contain"
          />
          <span className="text-[#FFDE05] font-bold tracking-wider text-2xl">VOLAREX</span>
        </div>
      </footer>
    </div>
  )
}
