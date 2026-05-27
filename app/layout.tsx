import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CookieConsent } from "@ai-whisperers/seo"
import { WhatsAppFloat } from "@ai-whisperers/whatsapp"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://contable.paragu-ai.com"),
  title: "Estudio Contable en Paraguay | Contabilidad para PYMES",
  description: "Contabilidad mensual, IVA, IRE, IRP y sueldos para PYMES en Paraguay. Consulta gratuita.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Estudio Contable — Contabilidad para PYMES en Paraguay",
    description: "Servicios contables, impositivos y laborales para PYMES y profesionales. Consulta gratuita.",
    type: "website",
    locale: "es_PY",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              name: "Estudio Contable",
              description: "Servicios contables en Paraguay",
              url: "https://contable.paragu-ai.com",
              areaServed: "PY",
              availableLanguage: ["es"],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {children}
      
        <WhatsAppFloat />
        <CookieConsent />
      </body>
    </html>
  )
}
