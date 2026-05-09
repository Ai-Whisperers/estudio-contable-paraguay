import type { Metadata } from "next"
import Header from "@/components/header"
import Hero from "@/components/hero"
import PlansSectionContent from "@/components/plans-section-content"
import CtaBanner from "@/components/cta-banner"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import content from "@/content/es.json"

export function generateMetadata(): Metadata {
  const data = content as any
  return {
    title: data.planesPage.seo.title.replace("{{businessName}}", data.siteName),
    description: data.planesPage.seo.description,
  }
}

export default function PlanesPage() {
  const data = content as any
  const planes = data.planesPage

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Planes Mensuales de Contabilidad",
    description: planes.seo.description,
    provider: {
      "@type": "AccountingService",
      name: data.siteName,
    },
    areaServed: "PY",
    inLanguage: "es",
  }

  return (
    <>
      <Header />
      <main>
        <Hero
          headline={planes.hero.headline}
          subheadline={planes.hero.subheadline}
          variant="dark"
        />
        <PlansSectionContent
          plans={planes.plans}
          disclaimer={planes.disclaimer}
          addons={planes.addons}
        />
        <CtaBanner
          title={planes.cta.title}
          subtitle={planes.cta.subtitle}
          buttonText={planes.cta.buttonText}
          buttonHref={planes.cta.buttonHref}
        />
      </main>
      <Footer />
      <WhatsAppFloat />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
