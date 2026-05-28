export default function TrabajosRealizados() {
  return (
    <section id="casos" className="py-20 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-3xl md:text-4xl tracking-[0.35em] text-[#FFDE05] font-semibold uppercase mb-4">TRABAJOS REALIZADOS</p>
          <h2 className="text-6xl md:text-7xl font-bold text-white">Resultados concretos</h2>
        </div>

        {/* Alcoholes del Plata */}
        <div className="bg-[#2a2a2a] rounded-2xl p-6 md:p-8">
          <div className="mb-6">
            <h3 className="text-4xl font-bold text-white mb-1">Alcoholes del Plata</h3>
            <p className="text-white/50 text-xl">Limpieza de fachada industrial · Planta productiva, GBA</p>
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
            <p className="text-white/70 text-2xl md:text-3xl max-w-3xl">
              Limpieza profunda de fachada en planta industrial con acumulación severa de suciedad. El trabajo se realizó sin interrumpir las operaciones del establecimiento. La superficie recuperó su aspecto original, mejorando notablemente la imagen institucional del predio.
            </p>
          </div>

          <div className="mt-6 border-t border-white/10 pt-6">
            <div className="bg-[#1e1e1e] rounded-xl p-5 border border-[#FFDE05]/20 relative">
              <span className="text-[#FFDE05] text-4xl font-serif leading-none absolute top-4 left-5 opacity-60">"</span>
              <p className="text-white/80 italic text-2xl md:text-3xl pl-8 pr-2">
                El servicio fue realmente profesional de principio a fin. Coordinaron todo de manera muy eficiente, llegaron en tiempo y forma, y el resultado superó nuestras expectativas. La fachada quedó impecable y lo más importante es que no interrumpieron en ningún momento nuestra operación. Sin dudas los volvemos a llamar.
              </p>
              <div className="mt-4 pl-8 flex items-center gap-2">
                <div className="w-8 h-px bg-[#FFDE05]/50"></div>
                <p className="text-[#FFDE05] text-sm font-semibold tracking-wide">Equipo de Mantenimiento — Alcoholes del Plata</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fayser */}
        <div className="bg-[#2a2a2a] rounded-2xl p-6 md:p-8 mt-8">
          <div className="mb-6">
            <h3 className="text-4xl font-bold text-white mb-1">Fayser</h3>
            <p className="text-white/50 text-xl">Limpieza exterior de chapa industrial · Parque Industrial Escobar</p>
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
            <p className="text-white/70 text-2xl md:text-3xl max-w-3xl">
              Trabajo de limpieza exterior sobre chapa industrial realizado en el Parque Industrial Escobar mediante dron/RPA, permitiendo intervenir superficies en altura sin necesidad de andamios y reduciendo la exposición de operarios.
            </p>
          </div>

          <div className="mt-6 border-t border-white/10 pt-6">
            <div className="bg-[#1e1e1e] rounded-xl p-5 border border-[#FFDE05]/20 relative">
              <span className="text-[#FFDE05] text-4xl font-serif leading-none absolute top-4 left-5 opacity-60">"</span>
              <p className="text-white/80 italic text-2xl md:text-3xl pl-8 pr-2">
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
  )
}
