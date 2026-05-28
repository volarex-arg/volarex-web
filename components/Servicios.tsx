import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "541133335747"

function whatsappUrl(text: string) {
  return `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`
}

export default function Servicios() {
  return (
    <>
      {/* Servicios */}
      <section id="servicios" className="py-20 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-3xl md:text-4xl tracking-[0.35em] text-[#FFDE05] font-semibold uppercase mb-4">SERVICIOS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Soluciones para cada necesidad</h2>
          <p className="text-white/70 text-2xl md:text-3xl mb-12 max-w-3xl mx-auto">
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
                  <source src="/casos/WhatsApp%20Video%202026-02-11%20at%2014.38.25.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="bg-[#2a2a2a] rounded-2xl p-6 flex flex-col flex-1">
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
                  <source src="/video-fachadas.mov" type="video/mp4" />
                </video>
              </div>
              <div className="bg-[#2a2a2a] rounded-2xl p-6 flex flex-col flex-1">
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
            </div>

            {/* Columna 3 - Paneles — imagen pendiente: /servicio-paneles-solares.jpg */}
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="/casos/WhatsApp%20Image%202026-02-11%20at%2014.30.50.jpeg"
                  alt="Paneles Solares"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#2a2a2a] rounded-2xl p-6 flex flex-col flex-1">
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
    </>
  )
}
