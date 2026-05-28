const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicio" },
  { href: "/trabajos-realizados", label: "Trabajos" },
  { href: "/contacto", label: "Contacto" },
]

export default function Header() {
  return (
    <>
      {/* Checkbox oculto que controla el menú — sin JavaScript */}
      <input type="checkbox" id="menu-toggle" className="peer hidden" />

      <header className="sticky top-0 bg-[#333333] z-40 relative">
        <div className="grid grid-cols-3 items-center px-6 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/volarex-isologo-recortado.jpg"
              alt="Volarex"
              className="h-[72px] md:h-[107px] w-auto object-contain"
            />
          </a>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center justify-center gap-10 text-base text-white/80">
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} className="hover:text-white transition-colors">
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Hamburger — absoluto al borde derecho en mobile */}
        <label htmlFor="menu-toggle" className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 cursor-pointer">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
      </header>

      {/* Menú móvil pantalla completa — visible cuando el checkbox está marcado */}
      <div className="hidden peer-checked:flex fixed inset-0 bg-[#333333] z-50 flex-col md:hidden">
        {/* Header del menú con logo y botón cerrar */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
          <img src="/volarex-isologo-recortado.jpg" alt="Volarex" className="h-[72px] w-auto object-contain" />
          <label htmlFor="menu-toggle" className="text-white p-3 cursor-pointer block">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </label>
        </div>

        {/* Links */}
        <nav className="flex flex-col flex-1 justify-center">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-white text-3xl font-bold py-6 px-10 border-b border-white/10 block active:text-[#FFDE05]"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
