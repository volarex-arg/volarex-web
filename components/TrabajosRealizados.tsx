"use client"

import { useRef, useState, useEffect, useCallback } from "react"

const CASES = [
  {
    id: "alcoholes",
    logo: "/logo%20alcoholes.png",
    title: "Alcoholes del Plata",
    subtitle: "Limpieza de tanques industriales · Parque Industrial de Pilar",
    images: [
      { src: "/casos/alcoholes-sucio-nuevo.PNG", label: "ANTES", labelStyle: "bg-black/70 text-white", className: "w-full rounded-xl object-cover aspect-[4/3] object-[center_30%]", scale: true },
      { src: "/casos/al-nuevaa.jpg", label: "DESPUÉS", labelStyle: "bg-[#FFDE05] text-[#333333]", className: "w-full rounded-xl object-cover aspect-[4/3] object-[center_70%]" },
    ],
    description: "Limpieza profunda de tanques industriales con acumulación severa de suciedad. El trabajo se realizó sin interrumpir las operaciones del establecimiento. La superficie recuperó su aspecto original, mejorando notablemente la imagen institucional del predio.",
    quote: "El servicio fue realmente profesional de principio a fin. Coordinaron todo de manera muy eficiente, llegaron en tiempo y forma, y el resultado superó nuestras expectativas. Sin dudas los volvemos a llamar.",
    quoteAuthor: "Equipo de Mantenimiento — Alcoholes del Plata",
  },
  {
    id: "fayser",
    logo: "/logo-fyser.png",
    title: "Fayser",
    subtitle: "Limpieza exterior de chapa industrial · Parque Industrial Escobar",
    images: [
      { src: "/Fyser/IMG_0091%202.jpg", label: null, labelStyle: "", className: "w-full rounded-xl object-cover aspect-[4/3] object-[15%_35%]" },
      { src: "/Fyser/IMG_0098%202.jpg", label: null, labelStyle: "", className: "w-full rounded-xl object-cover aspect-[4/3]" },
    ],
    description: "Trabajo de limpieza exterior sobre chapa industrial realizado en el Parque Industrial Escobar mediante dron/RPA, permitiendo intervenir superficies en altura sin necesidad de andamios y reduciendo la exposición de operarios.",
    quote: "Mejora visible del estado exterior de la superficie intervenida, con una operación más ágil y segura para el entorno industrial.",
    quoteAuthor: "Resultado — Fayser",
  },
]

export default function TrabajosRealizados() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const goTo = useCallback((index: number) => {
    const next = (index + CASES.length) % CASES.length
    setCurrent(next)
    const container = scrollRef.current
    if (!container) return
    const card = container.children[next] as HTMLElement
    card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
  }, [])

  useEffect(() => {
    if (paused) return
    const interval = setInterval(() => {
      goTo(current + 1)
    }, 18000)
    return () => clearInterval(interval)
  }, [current, paused, goTo])

  return (
    <section id="casos" className="py-16 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-3xl md:text-4xl tracking-[0.35em] text-[#FFDE05] font-semibold uppercase">TRABAJOS REALIZADOS</p>
        </div>

        {/* Slider */}
        <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <button
            onClick={() => { setPaused(true); goTo(current - 1) }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 rounded-full bg-[#2a2a2a] hover:bg-[#FFDE05]/20 border border-white/10 flex items-center justify-center transition-colors"
            aria-label="Anterior"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => { setPaused(true); goTo(current + 1) }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 rounded-full bg-[#2a2a2a] hover:bg-[#FFDE05]/20 border border-white/10 flex items-center justify-center transition-colors"
            aria-label="Siguiente"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div ref={scrollRef} className="flex overflow-x-hidden snap-x snap-mandatory items-stretch">
            {CASES.map((c) => (
              <div key={c.id} className="snap-start flex-shrink-0 w-full flex">
                <div className="bg-[#2a2a2a] rounded-2xl p-6 max-w-5xl mx-auto w-full flex flex-col gap-4 h-full">

                  {/* Header */}
                  <div className="flex items-center gap-4">
                    {c.logo && (
                      <img src={c.logo} alt={c.title} className="h-12 w-auto object-contain flex-shrink-0 mix-blend-screen" />
                    )}
                    <div>
                      <h3 className="text-2xl font-bold text-white">{c.title}</h3>
                      <p className="text-white/50 text-base">{c.subtitle}</p>
                    </div>
                  </div>

                  {/* Contenido: imágenes + texto en horizontal */}
                  <div className="grid md:grid-cols-2 gap-6 flex-1">
                    {/* Imágenes */}
                    <div className="grid grid-cols-2 gap-3 h-full">
                      {c.images.map((img, i) => (
                        <div key={i} className="relative h-full overflow-hidden rounded-xl">
                          <img src={img.src} alt={`${c.title} ${i + 1}`} className={`w-full h-full ${'contain' in img && img.contain ? 'object-contain' : 'object-cover object-center'}${'scale' in img && img.scale ? ' scale-150 translate-y-12' : ''}`} />
                          {img.label && (
                            <span className={`absolute top-2 left-2 text-xs font-semibold px-2 py-0.5 rounded-full tracking-wide ${img.labelStyle}`}>
                              {img.label}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Texto */}
                    <div className="flex flex-col gap-4">
                      <p className="text-white/70 text-lg">{c.description}</p>
                      <div className="bg-[#1e1e1e] rounded-xl p-4 border border-[#FFDE05]/20 relative">
                        <span className="text-[#FFDE05] text-3xl font-serif leading-none absolute top-3 left-4 opacity-60">"</span>
                        <p className="text-white/80 italic text-base pl-7 pr-2">{c.quote}</p>
                        <div className="mt-3 pl-7 flex items-center gap-2">
                          <div className="w-6 h-px bg-[#FFDE05]/50"></div>
                          <p className="text-[#FFDE05] text-xs font-semibold tracking-wide">{c.quoteAuthor}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-3 mt-6">
          {CASES.map((c, i) => (
            <button
              key={c.id}
              onClick={() => { setPaused(true); goTo(i) }}
              className={`h-2 rounded-full transition-all duration-300 ${current === i ? "w-8 bg-[#FFDE05]" : "w-2 bg-white/30 hover:bg-white/50"}`}
              aria-label={c.title}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
