import { Button } from "@/components/ui/button"
import { whatsappUrl } from "@/lib/constants"

export default function Servicios() {
  return (
    <>
      {/* Servicios */}
      <section id="servicios" className="pt-11 pb-20 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-3xl md:text-4xl tracking-[0.35em] text-[#FFDE05] font-semibold uppercase mb-4">SERVICIOS</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Soluciones para cada necesidad</h2>
          <p className="text-white/70 text-lg md:text-xl mb-12 max-w-3xl mx-auto">
            Trabajamos en: casas, edificios, consorcios, galpones, industrias, depósitos, concesionarios, shoppings, supermercados y parques solares.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Columna 1 - Vidrios */}
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover object-[center_15%]"
                >
                  <source src="/casos/video-vidrios.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="bg-[#2a2a2a] rounded-2xl p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Vidrios y Ventanales</h3>
                <Button
                  asChild
                  className="w-full rounded-full bg-[#FFDE05] text-[#333333] hover:bg-[#FFDE05]/90 font-semibold mt-auto"
                >
                  <a href={whatsappUrl("Hola! Quiero cotizar Vidrios y Ventanales con Volarex. ¿Me piden los datos?")} target="_blank" rel="noopener noreferrer">
                    Cotizar
                  </a>
                </Button>
              </div>
            </div>

            {/* Columna 2 - Fachadas — imagen pendiente: /servicio-fachadas.jpg */}
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover object-[center_20%]"
                >
                  <source src="/video-fachadas.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="bg-[#2a2a2a] rounded-2xl p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Fachadas y Estructuras</h3>
                <Button
                  asChild
                  className="w-full rounded-full bg-[#FFDE05] text-[#333333] hover:bg-[#FFDE05]/90 font-semibold mt-auto"
                >
                  <a href={whatsappUrl("Hola! Quiero cotizar Fachadas y Estructuras con Volarex. ¿Me piden los datos?")} target="_blank" rel="noopener noreferrer">
                    Cotizar
                  </a>
                </Button>
              </div>
            </div>

            {/* Columna 3 - Paneles — imagen pendiente: /servicio-paneles-solares.jpg */}
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/casos/video-paneles.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="bg-[#2a2a2a] rounded-2xl p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Paneles Solares</h3>
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
              <p className="text-white/70 text-lg md:text-xl">
                Seleccioná el servicio que necesitás, compartinos la ubicación y adjuntá fotos o videos del lugar. También podés coordinar una visita técnica para evaluar el trabajo en detalle.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#FFDE05] text-[#333333] flex items-center justify-center text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Agendá un turno tentativo</h3>
              <p className="text-white/70 text-lg md:text-xl">Te confirmamos disponibilidad y próximos pasos a seguir por WhatsApp.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#FFDE05] text-[#333333] flex items-center justify-center text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Coordinamos y ejecutamos</h3>
              <p className="text-white/70 text-lg md:text-xl">Nos ocupamos de la operación completa en el día acordado, con personal especializado y el equipo adecuado para cada trabajo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visita técnica */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto bg-[#2a2a2a] rounded-2xl p-10 text-center">
          <h3 className="text-3xl font-bold text-[#FFDE05] mb-4">Visita técnica</h3>
          <p className="text-white/70">
            Evaluamos el lugar, definimos el método de trabajo y revisamos las condiciones de seguridad. Luego te enviamos la cotización por WhatsApp.
          </p>
        </div>
      </section>
    </>
  )
}
