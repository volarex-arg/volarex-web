import type { Metadata } from 'next'
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const WHATSAPP_NUMBER = "541133335747"
const WHATSAPP_URL = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent("Hola, quiero solicitar una visita técnica para un trabajo de limpieza en altura.")}&type=phone_number&app_absent=0`

export const metadata: Metadata = {
  title: 'Contacto | Volarex',
  description: 'Contactá a Volarex para coordinar una visita técnica o solicitar una cotización de limpieza en altura.',
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-[#333333] text-white flex flex-col">

      <Header />

      {/* Contenido principal */}
      <main className="flex-1 flex items-start justify-center px-6 pt-10 pb-32">
        <div className="w-full max-w-4xl">

          {/* Etiqueta */}
          <p className="text-center text-3xl md:text-4xl tracking-[0.35em] text-[#FFDE05] font-semibold uppercase mb-4">
            CONTACTO
          </p>

          {/* Tarjeta principal */}
          <div className="bg-[#2a2a2a] rounded-3xl p-10 md:p-16 border border-white/10">

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              Contactanos
            </h1>
            <p className="text-white/60 text-lg md:text-xl text-center mb-12 max-w-xl mx-auto">
              Coordiná una visita técnica o solicitá una cotización para trabajos de limpieza en altura.
            </p>

            {/* Botón WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-4 bg-[#25D366] hover:bg-[#20bc5a] text-white font-semibold text-2xl rounded-2xl px-10 py-7 transition-colors mb-12"
            >
              <svg className="w-9 h-9 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Solicitar cotización por WhatsApp
            </a>

            <div className="border-t border-white/10 pt-10 grid md:grid-cols-2 gap-8">

              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-8 h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-lg font-semibold uppercase tracking-widest mb-1">Email</p>
                  <a
                    href="mailto:info@volarex.com.ar"
                    className="text-white hover:text-[#FFDE05] transition-colors text-xl font-medium"
                  >
                    info@volarex.com.ar
                  </a>
                </div>
              </div>

              {/* Horarios */}
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-8 h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-lg font-semibold uppercase tracking-widest mb-1">Horarios</p>
                  <p className="text-white text-xl font-medium whitespace-nowrap">Lunes a viernes <span className="text-white/60">8:00 – 18:00</span></p>
                  <p className="text-white text-xl font-medium whitespace-nowrap">Sábados <span className="text-white/60">8:00 – 13:00</span></p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />

    </div>
  )
}
