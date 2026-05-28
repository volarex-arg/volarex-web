"use client"

import { Button } from "@/components/ui/button"
import Header from "@/components/Header"

const WHATSAPP_NUMBER = "541133335747"

function whatsappUrl(text: string) {
  return `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`
}


export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#333333] text-white scroll-smooth">

      <Header />

      {/* Hero */}
      <section id="inicio" className="text-center px-6 pt-20 pb-16 max-w-5xl mx-auto scroll-mt-24">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-wide text-[#FFDE05] mb-4 mt-[-20px]">
          VOLAREX
        </h1>
        <p className="text-2xl md:text-3xl text-white/70 mb-36">
          Limpieza en altura sin riesgo humano
        </p>
        <p className="text-3xl md:text-4xl tracking-[0.35em] text-[#FFDE05] font-semibold uppercase mb-4">NOSOTROS</p>
        <p className="text-white/60 text-2xl md:text-3xl max-w-3xl mx-auto mb-12">
          Somos una empresa especializada en limpieza técnica en altura mediante tecnología de drones. Nuestro enfoque elimina los riesgos asociados al trabajo en altura tradicional, reduciendo tiempos de ejecución y complejidad operativa. Trabajamos con edificios, industrias, parques solares y todo tipo de estructuras que requieran limpieza profesional sin poner en riesgo a las personas.
        </p>

      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-3xl md:text-4xl tracking-[0.35em] text-[#FFDE05] font-semibold uppercase mb-4">SERVICIOS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Soluciones para cada necesidad</h2>
          <p className="text-white/70 text-2xl md:text-3xl mb-12 max-w-3xl mx-auto">
            Trabajamos en: casas, edificios, consorcios, galpones, industrias, depósitos, concesionarios, shoppings, supermercados y parques solares.
          </p>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {/* Card 1 - Vidrios */}
            <div className="bg-[#2a2a2a] rounded-2xl p-6 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-3">Vidrios y Ventanales</h3>
              <p className="text-white/70 text-2xl md:text-3xl mb-6 flex-1">
                Ideal para: edificios, oficinas, casas con ventanales, locales comerciales, concesionarios, shoppings, supermercados.
              </p>
              <Button
                asChild
                className="w-full rounded-full bg-[#FFDE05] text-[#333333] hover:bg-[#FFDE05]/90 font-semibold mt-auto"
              >
                <a href={whatsappUrl("Hola! Quiero cotizar Vidrios y Ventanales con Volarex. ¿Me piden los datos?")} target="_blank" rel="noopener noreferrer">
                  Cotizar
                </a>
              </Button>
            </div>

            {/* Card 2 - Fachadas */}
            <div className="bg-[#2a2a2a] rounded-2xl p-6 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-3">Fachadas y Estructuras</h3>
              <p className="text-white/70 text-2xl md:text-3xl mb-6 flex-1">
                Ideal para: edificios, galpones, industrias, depósitos, shoppings y supermercados.
              </p>
              <Button
                asChild
                className="w-full rounded-full bg-[#FFDE05] text-[#333333] hover:bg-[#FFDE05]/90 font-semibold mt-auto"
              >
                <a href={whatsappUrl("Hola! Quiero cotizar Fachadas y Estructuras con Volarex. ¿Me piden los datos?")} target="_blank" rel="noopener noreferrer">
                  Cotizar
                </a>
              </Button>
            </div>

            {/* Card 3 - Paneles */}
            <div className="bg-[#2a2a2a] rounded-2xl p-6 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-3">Paneles Solares</h3>
              <p className="text-white/70 text-2xl md:text-3xl mb-6 flex-1">
                Ideal para: parques solares, campos, techos industriales y residenciales.
              </p>
              <Button
                asChild
                className="w-full rounded-full bg-[#FFDE05] text-[#333333] hover:bg-[#FFDE05]/90 font-semibold mt-auto"
              >
                <a href={whatsappUrl("Hola! Quiero cotizar Paneles Solares con Volarex. ¿Me piden los datos?")} target="_blank" rel="noopener noreferrer">
                  Cotizar
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section id="proceso" className="py-20 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-3xl md:text-4xl tracking-[0.35em] text-[#FFDE05] font-semibold uppercase mb-12">PROCESO</p>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#FFDE05] text-[#333333] flex items-center justify-center text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Contanos el trabajo</h3>
              <p className="text-white/70 text-2xl md:text-3xl">
                Elegí el servicio, enviá la ubicación y cualquier foto o video que tengas, o coordiná una visita técnica.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#FFDE05] text-[#333333] flex items-center justify-center text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Agendá un turno tentativo</h3>
              <p className="text-white/70 text-2xl md:text-3xl">Te confirmamos por WhatsApp.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#FFDE05] text-[#333333] flex items-center justify-center text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Coordinamos y ejecutamos</h3>
              <p className="text-white/70 text-2xl md:text-3xl">Nos ocupamos de la operación completa en el día acordado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visita técnica */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto bg-[#2a2a2a] rounded-2xl p-10 text-center">
          <h3 className="text-3xl font-bold text-[#FFDE05] mb-4">Visita técnica</h3>
          <p className="text-white/70">
            Relevamos el lugar, definimos método, medidas y seguridad. Coordinación y cotización por WhatsApp.
          </p>
        </div>
      </section>

      {/* Trabajos realizados — resumen */}
      <section id="casos" className="py-20 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-3xl md:text-4xl tracking-[0.35em] text-[#FFDE05] font-semibold uppercase mb-4">TRABAJOS REALIZADOS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Resultados concretos</h2>
          <p className="text-white/70 text-2xl md:text-3xl max-w-3xl mx-auto mb-10">
            Conocé algunos trabajos de limpieza técnica en altura realizados por Volarex en entornos industriales.
          </p>
          <a
            href="/trabajos-realizados"
            className="inline-flex items-center gap-2 bg-[#FFDE05] text-[#333333] hover:bg-[#FFDE05]/90 font-semibold rounded-full px-8 py-4 transition-colors"
          >
            Ver trabajos realizados
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
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

      {/* Footer */}
      <footer className="py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-4">
          <img
            src="/volarex-isologo-recortado.jpg"
            alt="Volarex"
            className="w-52 h-auto object-contain"
          />
          <span className="text-[#FFDE05] font-bold tracking-wider text-3xl">VOLAREX</span>
        </div>
      </footer>

    </div>
  )
}
