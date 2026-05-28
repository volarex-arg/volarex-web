import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import WhatsAppButton from '@/components/WhatsAppButton'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Volarex | Limpieza técnica en altura',
  description: 'Limpieza técnica en altura para industrias, galpones, fachadas, vidrios, cartelería y paneles solares.',
  openGraph: {
    title: 'Volarex | Limpieza técnica en altura',
    description: 'Limpieza técnica en altura para industrias, galpones, fachadas, vidrios, cartelería y paneles solares.',
    url: 'https://www.volarex.com.ar',
    siteName: 'Volarex',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: '/volarex-isologo.jpg',
        width: 1200,
        height: 630,
        alt: 'Volarex - Limpieza técnica en altura',
      },
    ],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <WhatsAppButton />
      </body>
    </html>
  )
}
