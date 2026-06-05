import Header from "@/components/Header"
import Footer from "@/components/Footer"

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
          Somos una empresa de limpieza en altura que aplica tecnología para resolver trabajos complejos. Combinamos drones, hidrolavado profesional y equipamiento especializado para trabajar en edificios, industrias, parques solares, galpones y estructuras de difícil acceso.
          <br /><br />
          Nuestro enfoque permite minimizar riesgos operativos, reducir la exposición de personas a trabajos en altura y ejecutar cada proyecto de forma más segura, eficiente y profesional.
          <br /><br />
          Contamos con las certificaciones correspondientes de ANAC para realizar operaciones de limpieza en altura con drones, trabajando con pilotos habilitados y protocolos de seguridad adaptados a cada entorno.
        </p>
        </div>

      </section>


<Footer showAnac />

    </div>
  )
}
