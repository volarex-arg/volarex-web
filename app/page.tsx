"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "541133335747"

function whatsappUrl(text: string) {
  return `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`
}

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicio" },
  { href: "#proceso", label: "Proceso" },
  { href: "#casos", label: "Trabajos realizados" },
  { href: "#quienes-somos", label: "Quiénes somos" },
  { href: "#contacto", label: "Contacto" },
]

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#333333] text-white scroll-smooth">

      {/* Overlay para cerrar menú mobile al tocar afuera */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Header */}
      <header className="relative bg-[#333333] z-40">
        <div className="grid grid-cols-3 items-center px-6 py-4 max-w-7xl mx-auto">
          {/* Izquierda: Logo */}
          <a href="#inicio" className="flex items-center">
            <img
              src="/volarex-isologo.jpg"
              alt="Volarex"
              className="h-16 md:h-24 w-auto object-contain"
            />
          </a>

          {/* Centro: Nav desktop */}
          <nav className="hidden md:flex items-center justify-center gap-8 text-sm text-white/80">
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} className="hover:text-white transition-colors">
                {label}
              </a>
            ))}
          </nav>

          {/* Derecha: hamburger en mobile, vacío en desktop */}
          <div className="flex justify-end">
            <button
              className="md:hidden text-white p-2 -mr-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Panel de navegación mobile */}
        {isMenuOpen && (
          <nav className="md:hidden bg-[#2a2a2a] border-t border-white/10 px-6 py-2 flex flex-col relative z-40">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white/80 hover:text-[#FFDE05] py-3 text-base font-medium border-b border-white/5 last:border-0 transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="inicio" className="text-center px-6 pt-20 pb-16 max-w-5xl mx-auto scroll-mt-24">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-wide text-[#FFDE05] mb-4 mt-[-20px]">
          VOLAREX
        </h1>
        <p className="text-lg md:text-xl text-white/70 mb-12">
          Limpieza en altura sin riesgo humano
        </p>

        <div className="flex justify-center">
          <Button
            asChild
            className="bg-[#FFDE05] text-[#333333] hover:bg-[#FFDE05]/90 rounded-full px-10 py-6 font-semibold"
          >
            <a href={whatsappUrl("Hola, quiero cotizar una limpieza en altura.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <WhatsAppIcon className="w-5 h-5" />
              Cotizar
            </a>
          </Button>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xl md:text-2xl tracking-[0.35em] text-[#FFDE05] font-semibold uppercase mb-4">SERVICIOS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Soluciones para cada necesidad</h2>
          <p className="text-white/70 mb-12 max-w-3xl mx-auto">
            Trabajamos en: casas, edificios, consorcios, galpones, industrias, depósitos, concesionarios, shoppings, supermercados y parques solares.
          </p>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {/* Card 1 - Vidrios */}
            <div className="bg-[#2a2a2a] rounded-2xl p-6 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-3">Vidrios y Ventanales</h3>
              <p className="text-white/70 mb-6 flex-1">
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
              <p className="text-white/70 mb-6 flex-1">
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
              <p className="text-white/70 mb-6 flex-1">
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
          <p className="text-xl md:text-2xl tracking-[0.35em] text-[#FFDE05] font-semibold uppercase mb-12">PROCESO</p>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#FFDE05] text-[#333333] flex items-center justify-center text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Contanos el trabajo</h3>
              <p className="text-white/70">
                Elegí el servicio, enviá la ubicación y cualquier foto o video que tengas, o coordiná una visita técnica.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#FFDE05] text-[#333333] flex items-center justify-center text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Agendá un turno tentativo</h3>
              <p className="text-white/70">Te confirmamos por WhatsApp.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#FFDE05] text-[#333333] flex items-center justify-center text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Coordinamos y ejecutamos</h3>
              <p className="text-white/70">Nos ocupamos de la operación completa en el día acordado.</p>
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

      {/* Trabajos realizados */}
      <section id="casos" className="py-20 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl md:text-2xl tracking-[0.35em] text-[#FFDE05] font-semibold uppercase mb-4">TRABAJOS REALIZADOS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Resultados concretos</h2>
          </div>

          <div className="bg-[#2a2a2a] rounded-2xl p-6 md:p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-1">Alcoholes del Plata</h3>
              <p className="text-white/50 text-sm">Limpieza de fachada industrial · Planta productiva, GBA</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="relative">
                <img
                  src="/casos/alcoholes-antes.jpg"
                  alt="Antes — Fachada Alcoholes del Plata"
                  className="w-full rounded-xl object-cover aspect-[4/3]"
                />
                <span className="absolute top-3 left-3 bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
                  ANTES
                </span>
              </div>
              <div className="relative">
                <img
                  src="/casos/alcoholes-despues.jpg"
                  alt="Después — Fachada Alcoholes del Plata"
                  className="w-full rounded-xl object-cover aspect-[4/3]"
                />
                <span className="absolute top-3 left-3 bg-[#FFDE05] text-[#333333] text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
                  DESPUÉS
                </span>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-white/70 max-w-3xl">
                Limpieza profunda de fachada en planta industrial con acumulación severa de suciedad. El trabajo se realizó sin interrumpir las operaciones del establecimiento. La superficie recuperó su aspecto original, mejorando notablemente la imagen institucional del predio.
              </p>
            </div>

            <div className="mt-6 border-t border-white/10 pt-6">
              <div className="bg-[#1e1e1e] rounded-xl p-5 border border-[#FFDE05]/20 relative">
                <span className="text-[#FFDE05] text-4xl font-serif leading-none absolute top-4 left-5 opacity-60">"</span>
                <p className="text-white/80 italic text-base md:text-lg pl-8 pr-2">
                  El servicio fue realmente profesional de principio a fin. Coordinaron todo de manera muy eficiente, llegaron en tiempo y forma, y el resultado superó nuestras expectativas. La fachada quedó impecable y lo más importante es que no interrumpieron en ningún momento nuestra operación. Sin dudas los volvemos a llamar.
                </p>
                <div className="mt-4 pl-8 flex items-center gap-2">
                  <div className="w-8 h-px bg-[#FFDE05]/50"></div>
                  <p className="text-[#FFDE05] text-sm font-semibold tracking-wide">Equipo de Mantenimiento — Alcoholes del Plata</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#2a2a2a] rounded-2xl p-6 md:p-8 mt-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-1">Fayser</h3>
              <p className="text-white/50 text-sm">Limpieza exterior de chapa industrial · Parque Industrial Escobar</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="relative">
                <img
                  src="/Fyser/IMG_0091%202.jpg"
                  alt="Trabajo de limpieza exterior — Fayser (1)"
                  className="w-full rounded-xl object-cover aspect-[4/3]"
                />
              </div>
              <div className="relative">
                <img
                  src="/Fyser/IMG_0098%202.jpg"
                  alt="Trabajo de limpieza exterior — Fayser (2)"
                  className="w-full rounded-xl object-cover aspect-[4/3]"
                />
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-white/70 max-w-3xl">
                Trabajo de limpieza exterior sobre chapa industrial realizado en el Parque Industrial Escobar mediante dron/RPA, permitiendo intervenir superficies en altura sin necesidad de andamios y reduciendo la exposición de operarios.
              </p>
            </div>

            <div className="mt-6 border-t border-white/10 pt-6">
              <div className="bg-[#1e1e1e] rounded-xl p-5 border border-[#FFDE05]/20 relative">
                <span className="text-[#FFDE05] text-4xl font-serif leading-none absolute top-4 left-5 opacity-60">"</span>
                <p className="text-white/80 italic text-base md:text-lg pl-8 pr-2">
                  Mejora visible del estado exterior de la superficie intervenida, con una operación más ágil y segura para el entorno industrial.
                </p>
                <div className="mt-4 pl-8 flex items-center gap-2">
                  <div className="w-8 h-px bg-[#FFDE05]/50"></div>
                  <p className="text-[#FFDE05] text-sm font-semibold tracking-wide">Resultado — Fayser</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiénes somos */}
      <section id="quienes-somos" className="py-20 px-6 scroll-mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl tracking-[0.35em] text-[#FFDE05] font-semibold uppercase mb-4">QUIÉNES SOMOS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Volarex</h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Somos una empresa especializada en limpieza técnica en altura mediante tecnología de drones. Nuestro enfoque elimina los riesgos asociados al trabajo en altura tradicional, reduciendo tiempos de ejecución y complejidad operativa. Trabajamos con edificios, industrias, parques solares y todo tipo de estructuras que requieran limpieza profesional sin poner en riesgo a las personas.
          </p>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xl md:text-2xl tracking-[0.35em] text-[#FFDE05] font-semibold uppercase mb-4">CONTACTO</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Estamos listos para ayudarte</h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* WhatsApp */}
            <a
              href={whatsappUrl("Hola, quiero cotizar una limpieza en altura.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2a2a2a] rounded-2xl p-6 flex items-center gap-4 hover:bg-white/5 transition-colors h-24"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 flex items-center justify-center flex-shrink-0">
                <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">WhatsApp</div>
                <div className="text-white/60 text-sm">+54 11 3333-5747</div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:info@volarex.com.ar"
              className="bg-[#2a2a2a] rounded-2xl p-6 flex items-center gap-4 hover:bg-white/5 transition-colors h-24"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">Email</div>
                <div className="text-white/60 text-sm">info@volarex.com.ar</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-4">
          <img
            src="/volarex-isologo.jpg"
            alt="Volarex"
            className="w-52 h-auto object-contain"
          />
          <span className="text-[#FFDE05] font-bold tracking-wider text-3xl">VOLAREX</span>
        </div>
      </footer>

      {/* Botón flotante WhatsApp */}
      <a
        href={whatsappUrl("Hola, quiero solicitar una visita técnica para un trabajo de limpieza en altura.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#20bc5a] transition-colors"
      >
        <WhatsAppIcon className="w-7 h-7 text-white" />
      </a>
    </div>
  )
}
