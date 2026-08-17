import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import StructuredData from '@/components/StructuredData'
import WhatsAppButton from '@/components/WhatsAppButton'
import { SITE_URL, siteJsonLd } from '@/lib/site'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Volarex | Limpieza con drones en Argentina',
  description: 'Limpieza técnica con drones para edificios, industrias, galpones y superficies de difícil acceso. Limpieza de locales comerciales con equipamiento especializado.',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/volarex-isologo-recortado.jpg',
    apple: '/volarex-isologo-recortado.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        <StructuredData data={siteJsonLd} />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <WhatsAppButton />
      </body>
    </html>
  )
}
