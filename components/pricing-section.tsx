import ScrollReveal from '@/components/animations/scroll-reveal'

interface PricingPlan {
  id: string
  name: string
  price: string
  description: string
  features: string[]
  featured?: boolean
}

interface PricingSectionProps {
  title: string
  subtitle: string
  plans: PricingPlan[]
  ctaText: string
  ctaHref: string
}

export default function PricingSection({
  title,
  subtitle,
  plans,
  ctaText,
  ctaHref,
}: PricingSectionProps) {
  return (
    <section className="bg-surface-alt section-padding">
      <div className="container-page">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.id} delay={i * 100}>
              <div
                className={`relative bg-surface border rounded-xl p-6 md:p-8 transition-all duration-300 flex flex-col h-full ${
                  plan.featured
                    ? 'border-accent shadow-lg shadow-accent/10 scale-105 md:scale-110 ring-2 ring-accent/30'
                    : 'border-border hover:shadow-md hover:-translate-y-1'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-primary text-xs font-accent font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                    Más elegido
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {plan.description}
                  </p>
                  <div className="font-heading text-2xl md:text-3xl font-bold text-primary">
                    {plan.price}
                  </div>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted">
                      <span className="text-accent mt-0.5 flex-shrink-0">&bull;</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={ctaHref}
                  className={`inline-flex items-center justify-center w-full font-accent font-semibold px-6 py-3 rounded-lg transition-all text-sm ${
                    plan.featured
                      ? 'bg-accent hover:bg-accent/90 text-primary'
                      : 'bg-surface-alt border border-border hover:border-accent/50 text-foreground hover:bg-accent/5'
                  }`}
                >
                  {ctaText}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
