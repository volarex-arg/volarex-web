"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#333333] text-white scroll-smooth">

      <Header />

      {/* Hero */}
      <section id="inicio" className="relative text-center px-6 scroll-mt-24 overflow-hidden min-h-[130vh] flex items-center justify-center">
        {/* Video de fondo */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-[center_40%] z-0"
        >
          <source src="/video-dron.mov" type="video/mp4" />
        </video>
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* Gradiente superior */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-t from-transparent to-[#333333] z-10" />
        {/* Gradiente inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#333333] z-10" />
        {/* Contenido */}
        <div className="relative z-20 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-wide text-[#FFDE05] mb-4">
          VOLAREX
        </h1>
        <p className="text-2xl md:text-3xl text-white/70 mb-36">
          Limpieza en altura sin riesgo humano
        </p>
        <p className="text-3xl md:text-4xl tracking-[0.35em] text-[#FFDE05] font-semibold uppercase mb-4">NOSOTROS</p>
        <p className="text-white/60 text-2xl md:text-3xl max-w-3xl mx-auto mb-12">
          Somos una empresa especializada en limpieza técnica en altura mediante tecnología de drones. Nuestro enfoque elimina los riesgos asociados al trabajo en altura tradicional, reduciendo tiempos de ejecución y complejidad operativa. Trabajamos con edificios, industrias, parques solares y todo tipo de estructuras que requieran limpieza profesional sin poner en riesgo a las personas.
        </p>
        </div>
      </section>

      {/* Contacto — CTA */}
      <section id="contacto" className="py-20 px-6 scroll-mt-24">
        <div className="max-w-4xl mx-auto bg-[#2a2a2a] rounded-2xl p-10 md:p-14 text-center">
          <p className="text-3xl md:text-4xl tracking-[0.35em] text-[#FFDE05] font-semibold uppercase mb-4">CONTACTO</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Querés cotizar un trabajo en altura?
          </h2>
          <p className="text-white/60 text-2xl md:text-3xl max-w-xl mx-auto mb-10">
            Contactanos para coordinar una visita técnica o recibir una propuesta a medida.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center gap-2 bg-[#FFDE05] text-[#333333] hover:bg-[#FFDE05]/90 font-semibold rounded-full px-8 py-4 transition-colors"
          >
            Ir a contacto
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      <Footer />

    </div>
  )
}
