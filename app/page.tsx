import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { createPageMetadata } from "@/lib/site"

export const metadata = createPageMetadata({
  title: "Volarex | Limpieza con drones en Argentina",
  description:
    "Limpieza técnica con drones para edificios, industrias, galpones y superficies de difícil acceso. Limpieza de locales comerciales con equipamiento especializado.",
  path: "/",
})

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
          className="absolute inset-0 w-full h-full object-cover object-[center_20%] z-0"
        >
          <source src="/casos/video-pag-principal.mp4" type="video/mp4" />
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
          Limpiamos donde otros no llegan
        </p>
        <p className="text-3xl md:text-4xl tracking-[0.35em] text-[#FFDE05] font-semibold uppercase mb-4">NOSOTROS</p>
        <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto mb-12">
          Somos una empresa de limpieza que aplica tecnología para resolver trabajos complejos. En edificios, industrias, galpones y otras superficies de difícil acceso utilizamos drones cuando la evaluación técnica lo requiere. Para locales comerciales y concesionarias trabajamos con sistemas profesionales de hidrolavado, equipamiento especializado y palos extensibles.
          <br /><br />
          Nuestro enfoque reduce los riesgos operativos y la exposición de personas a trabajos en altura, permitiéndonos ejecutar cada proyecto de manera segura, eficiente y profesional.
          <br /><br />
          Contamos con las certificaciones correspondientes de ANAC para realizar operaciones de limpieza con drones, además de pilotos habilitados y protocolos de seguridad adaptados a cada entorno.
        </p>
        </div>

      </section>

      <section
        aria-labelledby="limpieza-con-drones-home"
        className="border-y border-white/10 bg-[#2a2a2a] px-6 py-20 md:py-28"
      >
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-[#333333] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#FFDE05] md:text-base">
                Servicio destacado
              </p>
              <h2
                id="limpieza-con-drones-home"
                className="mb-5 text-3xl font-extrabold leading-tight md:text-5xl"
              >
                Limpieza con drones
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                Una solución tecnológica para edificios, industrias, galpones y superficies de difícil acceso, con pilotos habilitados y planificación técnica para cada proyecto.
              </p>
            </div>

            <div className="flex flex-col gap-5 lg:items-start">
              <ul className="space-y-3 text-base font-semibold text-white/80">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#FFDE05]" aria-hidden="true" />
                  Menor exposición en altura
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#FFDE05]" aria-hidden="true" />
                  Acceso a sectores complejos
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#FFDE05]" aria-hidden="true" />
                  Operaciones planificadas
                </li>
              </ul>
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[#FFDE05] px-8 font-bold text-[#333333] hover:bg-[#FFDE05]/90"
              >
                <Link href="/limpieza-con-drones">Conocer el servicio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


<Footer showAnac />

    </div>
  )
}
