const LOGOS = [
  { src: "/logo-alcoholes.png", alt: "Alcoholes del Plata", className: "mix-blend-screen" },
  { src: "/logo-fyser-transparente.png", alt: "Fayser", className: "" },
  { src: "/arbox_transparente.png", alt: "ARbox", className: "" },
  { src: "/encopress_transparente.png", alt: "Encopress", className: "" },
  { src: "/empresas/luxury-outlet1.jpg", alt: "Luxury Outlet The Palace", className: "" },
  { src: "/empresas/grupo-accionar.jpg", alt: "Grupo Accionar", className: "" },
  { src: "/empresas/tattersall.jpg", alt: "Tattersall de Palermo", className: "" },
]

const CASES = [
  {
    id: "alcoholes",
    logo: "/logo-alcoholes.png",
    title: "Alcoholes del Plata",
    subtitle: "Limpieza de tanques industriales · Parque Industrial de Pilar",
    images: [
      { src: "/casos/Alcoholes-sucio.jpg", label: "ANTES", labelStyle: "bg-black/70 text-white", objectPosition: "center 60%" },
      { src: "/casos/alcoholes-nuevo.jpg", label: "DESPUÉS", labelStyle: "bg-[#FFDE05] text-[#333333]" },
    ],
    description: "Hidrolavado profundo de tanques industriales con acumulación severa de suciedad y marcas de exposición exterior. La intervención permitió remover la suciedad adherida en la superficie, recuperar el aspecto original de los tanques y mejorar notablemente la imagen general del predio, sin interrumpir las operaciones del establecimiento.",
    quote: "La verdad es que el trabajo fue excelente. La diferencia entre el antes y el después es muy notoria, incluso más de lo que imaginábamos. Los tanques recuperaron completamente su aspecto y realmente parecen nuevos otra vez.",
    quoteAuthor: "Carlos, Alcoholes del Plata",
  },
  {
    id: "fayser",
    logo: "/logo-fyser-transparente.png",
    title: "Fayser",
    subtitle: "Limpieza exterior de galpón industrial · Parque Industrial Escobar",
    images: [
      { src: "/Fyser/IMG_0091-2.jpg", label: null, labelStyle: "", objectPosition: "5% 35%" },
      { src: "/Fyser/IMG_0098-2.jpg", label: null, labelStyle: "" },
    ],
    description: "Trabajo de limpieza exterior sobre chapa industrial realizado en el Parque Industrial Escobar mediante dron.",
    quote: "Nos ayudó a mejorar la imagen exterior del galpón de una forma práctica y segura. El trabajo se resolvió sin necesidad de andamios y sin interferir con la actividad diaria del predio.",
    quoteAuthor: "Walter, Fayser",
  },
  {
    id: "arbox",
    logo: "/arbox_transparente.png",
    title: "ARbox",
    subtitle: "Limpieza exterior de galpón industrial · Parque Norlog",
    images: [
      { src: "/casos/arbox-foto.jpg", label: null, labelStyle: "", objectPosition: "center" },
      { src: "/video-fachadas.mp4", label: null, labelStyle: "", isVideo: true },
    ],
    description: "Limpieza exterior de galpón realizada en Parque Norlog mediante dron. El trabajo permitió intervenir superficies de gran altura y extensión con una metodología ágil, segura y adaptada a las condiciones propias de un entorno industrial activo.",
    quote: "Se pudo hacer la limpieza exterior sin afectar el movimiento diario del parque, algo muy importante en un lugar donde circulan y trabajan distintas empresas al mismo tiempo.",
    quoteAuthor: "Karina, ARbox",
  },
]

/* Clases hardcodeadas para que Tailwind las incluya en el build */
const SLIDE_CLASSES = [
  "col-start-1 row-start-1 opacity-0 pointer-events-none transition-opacity duration-500 peer-checked/c0:opacity-100 peer-checked/c0:pointer-events-auto",
  "col-start-1 row-start-1 opacity-0 pointer-events-none transition-opacity duration-500 peer-checked/c1:opacity-100 peer-checked/c1:pointer-events-auto",
  "col-start-1 row-start-1 opacity-0 pointer-events-none transition-opacity duration-500 peer-checked/c2:opacity-100 peer-checked/c2:pointer-events-auto",
]

const ArrowLeft = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const ArrowRight = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const btnClass = "absolute inset-0 flex items-center justify-center rounded-full bg-[#2a2a2a] border border-white/10 cursor-pointer hover:bg-[#FFDE05]/20 transition-colors"

export default function TrabajosRealizados() {
  return (
    <section id="casos" className="py-16 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-3xl md:text-4xl tracking-[0.35em] text-[#FFDE05] font-semibold uppercase">TRABAJOS REALIZADOS</p>
        </div>

        {/* Slider — CSS puro, sin JavaScript */}
        <div className="relative">

          {/* Flechas laterales desktop */}
          <div className="hidden md:block absolute left-0 -translate-x-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10">
            <label htmlFor="caso-2" className={`slide-prev-0 ${btnClass}`}><ArrowLeft /></label>
            <label htmlFor="caso-0" className={`slide-prev-1 ${btnClass}`}><ArrowLeft /></label>
            <label htmlFor="caso-1" className={`slide-prev-2 ${btnClass}`}><ArrowLeft /></label>
          </div>
          <div className="hidden md:block absolute right-0 translate-x-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10">
            <label htmlFor="caso-1" className={`slide-next-0 ${btnClass}`}><ArrowRight /></label>
            <label htmlFor="caso-2" className={`slide-next-1 ${btnClass}`}><ArrowRight /></label>
            <label htmlFor="caso-0" className={`slide-next-2 ${btnClass}`}><ArrowRight /></label>
          </div>

          {/* Grid: radio inputs + slides como hermanos directos */}
          <div className="grid">
            <input type="radio" name="casos" id="caso-0" defaultChecked className="peer/c0 sr-only" />
            <input type="radio" name="casos" id="caso-1" className="peer/c1 sr-only" />
            <input type="radio" name="casos" id="caso-2" className="peer/c2 sr-only" />

            {CASES.map((c, i) => (
              <div key={c.id} className={SLIDE_CLASSES[i]}>
                <div className="bg-[#2a2a2a] rounded-2xl p-6 max-w-5xl mx-auto w-full flex flex-col gap-4">

                  {/* Header */}
                  <div className="flex items-center gap-4">
                    {c.logo && (
                      <img src={c.logo} alt={c.title} className="h-12 w-auto object-contain flex-shrink-0" />
                    )}
                    <div>
                      <h3 className="text-2xl font-bold text-white">{c.title}</h3>
                      <p className="text-white/50 text-base">{c.subtitle}</p>
                    </div>
                  </div>

                  {/* Imágenes + texto */}
                  <div className="grid md:grid-cols-2 gap-6 flex-1">
                    <div className="grid grid-cols-2 gap-3 h-full">
                      {c.images.map((img, j) => (
                        <div key={j} className="relative h-full overflow-hidden rounded-xl">
                          {'isVideo' in img && img.isVideo ? (
                            <video autoPlay muted loop playsInline className="w-full h-full object-cover" style={'objectPosition' in img ? { objectPosition: (img as any).objectPosition } : undefined}>
                              <source src={img.src} type="video/mp4" />
                            </video>
                          ) : (
                            <img
                              src={img.src}
                              alt={`${c.title} ${j + 1}`}
                              className={`w-full h-full ${'contain' in img && img.contain ? 'object-contain' : 'object-cover'}${'scale' in img && img.scale ? ' scale-150 translate-y-12' : ''}`}
                              style={'objectPosition' in img ? { objectPosition: (img as any).objectPosition } : undefined}
                            />
                          )}
                          {img.label && (
                            <span className={`absolute top-2 left-2 text-xs font-semibold px-2 py-0.5 rounded-full tracking-wide ${img.labelStyle}`}>
                              {img.label}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

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

        {/* Navegación: flechas mobile + dots */}
        <div className="flex justify-center items-center gap-3 mt-6">

          {/* Flechas prev mobile */}
          <div className="relative w-10 h-10 md:hidden">
            <label htmlFor="caso-2" className={`slide-prev-0 ${btnClass}`}><ArrowLeft /></label>
            <label htmlFor="caso-0" className={`slide-prev-1 ${btnClass}`}><ArrowLeft /></label>
            <label htmlFor="caso-1" className={`slide-prev-2 ${btnClass}`}><ArrowLeft /></label>
          </div>

          {/* Dots */}
          <label htmlFor="caso-0" className="slide-dot-0 cursor-pointer h-2 w-2 bg-white/30 rounded-full transition-all duration-300" />
          <label htmlFor="caso-1" className="slide-dot-1 cursor-pointer h-2 w-2 bg-white/30 rounded-full transition-all duration-300" />
          <label htmlFor="caso-2" className="slide-dot-2 cursor-pointer h-2 w-2 bg-white/30 rounded-full transition-all duration-300" />

          {/* Flechas next mobile */}
          <div className="relative w-10 h-10 md:hidden">
            <label htmlFor="caso-1" className={`slide-next-0 ${btnClass}`}><ArrowRight /></label>
            <label htmlFor="caso-2" className={`slide-next-1 ${btnClass}`}><ArrowRight /></label>
            <label htmlFor="caso-0" className={`slide-next-2 ${btnClass}`}><ArrowRight /></label>
          </div>

        </div>

        {/* Logos clientes */}
        <div className="mt-16 border-t border-white/10 pt-10">
          <p className="text-center text-[#FFDE05] text-2xl font-semibold uppercase tracking-widest mb-8">Empresas que confiaron en nosotros</p>
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center justify-center gap-10 flex-wrap">
              {LOGOS.slice(0, 4).map((logo) => (
                <div key={logo.alt} className="w-36 h-24 flex items-center justify-center">
                  <img src={logo.src} alt={logo.alt} className={`max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity ${logo.className}`} />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-10 flex-wrap">
              {LOGOS.slice(4).map((logo) => (
                <div key={logo.alt} className="w-36 h-24 flex items-center justify-center">
                  <img src={logo.src} alt={logo.alt} className={`max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity ${logo.className}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
