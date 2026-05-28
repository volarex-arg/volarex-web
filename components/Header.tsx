"use client"

import { useState } from "react"

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicio" },
  { href: "/trabajos-realizados", label: "Trabajos" },
  { href: "/contacto", label: "Contacto" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 bg-[#333333] z-40">
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

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

        {/* Hamburger mobile */}
        <div className="flex justify-end">
          <button
            className="md:hidden text-white p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Nav mobile */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#2a2a2a] border-t border-white/10 px-6 py-2 flex flex-col relative z-40">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className="text-white/80 hover:text-[#FFDE05] py-3 text-base font-medium border-b border-white/5 last:border-0 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
