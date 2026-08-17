import Image from "next/image"
import Link from "next/link"

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/limpieza-con-drones", label: "Limpieza con drones" },
  { href: "/servicios", label: "Servicios" },
  { href: "/trabajos-realizados", label: "Trabajos" },
  { href: "/contacto", label: "Contacto" },
]

export default function Header() {
  return (
    <>
      {/* Checkbox oculto que controla el menú — sin JavaScript */}
      <input type="checkbox" id="menu-toggle" className="peer hidden" />

      <header className="sticky top-0 bg-[#333333] z-40 relative">
        <div className="relative flex items-center px-6 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Ir al inicio de Volarex">
            <Image
              src="/volarex-isologo-recortado.jpg"
              alt="Volarex"
              width={1311}
              height={1389}
              sizes="(max-width: 1023px) 68px, 101px"
              className="h-[72px] md:h-[107px] w-auto object-contain"
            />
          </Link>

          {/* Nav desktop */}
          <nav
            aria-label="Navegación principal"
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 text-base text-white/80 lg:flex xl:gap-10"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className="whitespace-nowrap hover:text-white transition-colors">
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Hamburger — absoluto al borde derecho en mobile */}
        <label htmlFor="menu-toggle" className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 cursor-pointer">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
      </header>

      {/* Menú móvil pantalla completa — visible cuando el checkbox está marcado */}
      <div className="hidden peer-checked:flex fixed inset-0 bg-[#333333] z-50 flex-col lg:hidden">
        {/* Header del menú con logo y botón cerrar */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
          <Image
            src="/volarex-isologo-recortado.jpg"
            alt="Volarex"
            width={1311}
            height={1389}
            sizes="68px"
            className="h-[72px] w-auto object-contain"
          />
          <label htmlFor="menu-toggle" className="text-white p-3 cursor-pointer block">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </label>
        </div>

        {/* Links */}
        <nav className="flex flex-col flex-1 justify-center" aria-label="Navegación móvil">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-white text-2xl sm:text-3xl font-bold py-5 sm:py-6 px-8 sm:px-10 border-b border-white/10 block active:text-[#FFDE05]"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
