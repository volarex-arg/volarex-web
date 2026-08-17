import type { Metadata } from "next"

export const SITE_URL = "https://www.volarex.com.ar"

export const ORGANIZATION_ID = `${SITE_URL}/#organization`

export const organizationJsonLd = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Volarex",
  url: SITE_URL,
  logo: `${SITE_URL}/volarex-isologo-recortado.jpg`,
  email: "info@volarex.com.ar",
  telephone: "+54 11 3333-5747",
  areaServed: {
    "@type": "Country",
    name: "Argentina",
  },
  sameAs: [
    "https://www.instagram.com/volarex_arg/",
    "https://www.linkedin.com/company/volarexarg/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+54 11 3333-5747",
    email: "info@volarex.com.ar",
    availableLanguage: "Spanish",
  },
}

export const websiteJsonLd = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Volarex",
  inLanguage: "es-AR",
  publisher: {
    "@id": ORGANIZATION_ID,
  },
}

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [organizationJsonLd, websiteJsonLd],
}

type PageMetadataInput = {
  title: string
  description: string
  path: string
}

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`
  const image = `${SITE_URL}/volarex-isologo.jpg`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Volarex",
      locale: "es_AR",
      type: "website",
      images: [
        {
          url: image,
          width: 4500,
          height: 4500,
          alt: "Volarex",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  }
}
