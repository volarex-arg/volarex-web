import type { Metadata } from "next"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import StructuredData from "@/components/StructuredData"
import { Button } from "@/components/ui/button"
import { WHATSAPP_URL } from "@/lib/constants"
import { ORGANIZATION_ID } from "@/lib/site"

const canonicalUrl = "https://www.volarex.com.ar/limpieza-con-drones"

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${canonicalUrl}#service`,
  name: "Limpieza con drones",
  serviceType: "Limpieza técnica con drones",
  description:
    "Servicio profesional de limpieza con drones para edificios, industrias, galpones y superficies de difícil acceso.",
  url: canonicalUrl,
  areaServed: {
    "@type": "Country",
    name: "Argentina",
  },
  provider: {
    "@id": ORGANIZATION_ID,
  },
}

export const metadata: Metadata = {
  title: "Limpieza con drones en Argentina | Volarex",
  description:
    "Servicio profesional de limpieza con drones para edificios, industrias, galpones y superficies de difícil acceso. Operaciones con pilotos habilitados.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Limpieza con drones en Argentina | Volarex",
    description:
      "Limpieza técnica con drones para edificios, industrias, galpones y grandes superficies.",
    url: canonicalUrl,
    siteName: "Volarex",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://www.volarex.com.ar/limpieza-con-drones-aeronautica.jpg",
        width: 1284,
        height: 2267,
        alt: "Drones realizando una limpieza técnica en la fachada de un edificio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Limpieza con drones en Argentina | Volarex",
    description:
      "Limpieza técnica con drones para edificios, industrias, galpones y grandes superficies.",
    images: ["https://www.volarex.com.ar/limpieza-con-drones-aeronautica.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const aplicaciones = [
  {
    title: "Edificios",
    description:
      "Limpieza exterior de fachadas, vidrios y sectores elevados, definida según las características de cada edificio.",
  },
  {
    title: "Industrias y galpones",
    description:
      "Intervenciones en cerramientos, cubiertas y grandes superficies donde el acceso tradicional puede resultar complejo.",
  },
]

const beneficios = [
  {
    number: "01",
    title: "Menor exposición en altura",
    description:
      "La tecnología permite reducir la exposición de personas a tareas elevadas y planificar cada intervención con foco en la seguridad.",
  },
  {
    number: "02",
    title: "Acceso a superficies complejas",
    description:
      "Los drones permiten abordar sectores de difícil acceso y complementar el equipamiento profesional utilizado en cada proyecto.",
  },
  {
    number: "03",
    title: "Método adaptado al entorno",
    description:
      "Evaluamos el material, la altura, el entorno y las condiciones operativas antes de definir el procedimiento de limpieza.",
  },
]

const preguntas = [
  {
    question: "¿Qué superficies se pueden limpiar con drones?",
    answer:
      "Evaluamos trabajos en edificios, fachadas, vidrios, galpones, industrias y otras superficies de difícil acceso. La viabilidad depende del material, el entorno y las condiciones del lugar.",
  },
  {
    question: "¿Todos los trabajos se realizan únicamente con drones?",
    answer:
      "No necesariamente. Combinamos drones, sistemas profesionales de hidrolavado y equipamiento especializado. Después de la evaluación técnica definimos el método más adecuado para cada proyecto.",
  },
  {
    question: "¿Cómo se prepara una cotización?",
    answer:
      "Podés enviarnos la ubicación y fotos o videos del lugar por WhatsApp. Cuando el trabajo lo requiere, coordinamos una visita técnica para revisar accesos, superficies y condiciones de seguridad.",
  },
  {
    question: "¿Las operaciones cuentan con habilitación?",
    answer:
      "Volarex cuenta con las certificaciones correspondientes de ANAC para realizar operaciones de limpieza con drones, además de pilotos habilitados y protocolos de seguridad adaptados a cada entorno.",
  },
]

export default function LimpiezaConDronesPage() {
  return (
    <div className="min-h-screen bg-[#333333] text-white">
      <StructuredData data={serviceJsonLd} />
      <Header />

      <main>
        <section className="px-6 pb-20 pt-10 md:pb-28 md:pt-16">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-[#FFDE05] md:text-base">
                Servicio profesional en Argentina
              </p>
              <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
                Limpieza con drones para edificios e industrias
              </h1>
              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                Aplicamos tecnología de drones, sistemas profesionales de hidrolavado y equipamiento especializado para resolver trabajos de limpieza en altura y superficies de difícil acceso.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-[#FFDE05] px-8 font-bold text-[#333333] hover:bg-[#FFDE05]/90"
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    Solicitar cotización
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/30 bg-transparent px-8 text-white hover:bg-white/10 hover:text-white"
                >
                  <a href="/trabajos-realizados">Ver trabajos realizados</a>
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="/limpieza-con-drones-aeronautica.jpg"
                alt="Drones realizando una limpieza técnica en la fachada de un edificio"
                fill
                priority
                sizes="(max-width: 767px) 100vw, 45vw"
                className="object-cover object-[center_38%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#2a2a2a] px-6 py-16 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#FFDE05]">
              Tecnología aplicada a la limpieza
            </p>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Una alternativa para trabajos complejos en altura
            </h2>
            <p className="text-lg leading-relaxed text-white/70 md:text-xl">
              La limpieza con drones permite llegar a sectores elevados manteniendo a los operadores en una posición más segura. En Volarex analizamos cada proyecto y combinamos la tecnología con procedimientos profesionales de limpieza para definir una solución adecuada a la superficie y al entorno.
            </p>
          </div>
        </section>

        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#FFDE05]">
                Aplicaciones
              </p>
              <h2 className="text-3xl font-bold md:text-4xl">
                Limpieza con drones para distintos entornos
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {aplicaciones.map((aplicacion) => (
                <article
                  key={aplicacion.title}
                  className="rounded-2xl border border-white/10 bg-[#2a2a2a] p-7"
                >
                  <h3 className="mb-4 text-2xl font-bold text-[#FFDE05]">
                    {aplicacion.title}
                  </h3>
                  <p className="leading-relaxed text-white/70">
                    {aplicacion.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#2a2a2a] px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#FFDE05]">
                Por qué elegir este método
              </p>
              <h2 className="text-3xl font-bold md:text-4xl">
                Seguridad, acceso y planificación técnica
              </h2>
            </div>
            <div className="grid gap-10 md:grid-cols-3">
              {beneficios.map((beneficio) => (
                <article key={beneficio.number}>
                  <p className="mb-5 text-4xl font-extrabold text-[#FFDE05]">
                    {beneficio.number}
                  </p>
                  <h3 className="mb-3 text-2xl font-bold">{beneficio.title}</h3>
                  <p className="leading-relaxed text-white/70">
                    {beneficio.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-start">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#FFDE05]">
                Cómo trabajamos
              </p>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Evaluamos antes de operar
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-white/70">
                Cada trabajo comienza con información concreta del lugar. Revisamos la superficie, la altura, los accesos y las condiciones del entorno para definir el equipo, el procedimiento y las medidas de seguridad necesarias.
              </p>
              <Button
                asChild
                className="rounded-full bg-[#FFDE05] px-7 font-bold text-[#333333] hover:bg-[#FFDE05]/90"
              >
                <a href="/contacto">Coordinar una visita técnica</a>
              </Button>
            </div>

            <ol className="space-y-5">
              <li className="rounded-2xl border border-white/10 bg-[#2a2a2a] p-6">
                <p className="mb-2 font-bold text-[#FFDE05]">01 · Información inicial</p>
                <p className="text-white/70">
                  Nos compartís la ubicación y fotos o videos del trabajo.
                </p>
              </li>
              <li className="rounded-2xl border border-white/10 bg-[#2a2a2a] p-6">
                <p className="mb-2 font-bold text-[#FFDE05]">02 · Evaluación técnica</p>
                <p className="text-white/70">
                  Analizamos las condiciones y, si es necesario, coordinamos una visita.
                </p>
              </li>
              <li className="rounded-2xl border border-white/10 bg-[#2a2a2a] p-6">
                <p className="mb-2 font-bold text-[#FFDE05]">03 · Planificación y ejecución</p>
                <p className="text-white/70">
                  Definimos el método de trabajo y coordinamos la operación para el día acordado.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#2a2a2a] px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-center">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/anac-certificado.png"
                alt="Certificación ANAC de Volarex"
                width={240}
                height={160}
                sizes="240px"
                className="h-auto w-48 object-contain md:w-60"
              />
            </div>
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#FFDE05]">
                Seguridad operacional
              </p>
              <h2 className="mb-5 text-3xl font-bold md:text-4xl">
                Operaciones con pilotos habilitados
              </h2>
              <p className="text-lg leading-relaxed text-white/70">
                Contamos con las certificaciones correspondientes de ANAC para realizar operaciones de limpieza con drones, además de pilotos habilitados y protocolos de seguridad adaptados a cada entorno.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#FFDE05]">
                Preguntas frecuentes
              </p>
              <h2 className="text-3xl font-bold md:text-4xl">
                Lo que necesitás saber sobre la limpieza con drones
              </h2>
            </div>
            <div className="space-y-4">
              {preguntas.map((pregunta) => (
                <details
                  key={pregunta.question}
                  className="group rounded-2xl border border-white/10 bg-[#2a2a2a] p-6"
                >
                  <summary className="cursor-pointer list-none pr-8 text-xl font-bold marker:hidden">
                    {pregunta.question}
                  </summary>
                  <p className="mt-4 leading-relaxed text-white/70">
                    {pregunta.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 md:pb-28">
          <div className="mx-auto max-w-4xl rounded-3xl bg-[#FFDE05] p-10 text-center text-[#333333] md:p-14">
            <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
              ¿Tenés un proyecto de limpieza con drones?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-[#333333]/75">
              Compartinos la ubicación y algunas imágenes del lugar. Evaluamos el trabajo y te indicamos los próximos pasos.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#333333] px-8 font-bold text-white hover:bg-[#333333]/90"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Hablar con Volarex
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
