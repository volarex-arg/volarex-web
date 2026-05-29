export default function Footer({ showAnac = false }: { showAnac?: boolean }) {
  return (
    <footer className="relative py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-4">
        <img
          src="/VOLAREX-logo-recortado.jpg"
          alt="Volarex"
          className="w-[19.5rem] h-auto object-contain"
        />
      </div>
      {showAnac && (
        <img
          src="/anac-certificado.png"
          alt="Certificado ANAC"
          className="absolute top-4 right-6 h-16 w-auto object-contain"
        />
      )}
    </footer>
  )
}
