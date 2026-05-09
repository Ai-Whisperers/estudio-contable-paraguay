import ScrollReveal from '@/components/animations/scroll-reveal'

interface PlanItem {
  id: string
  name: string
  subtitle?: string
  price: string
  priceUsd?: string
  description: string
  features: string[]
  featured?: boolean
}

interface AddonItem {
  name: string
  price: string
  note: string
}

interface PlansSectionContentProps {
  plans: PlanItem[]
  disclaimer?: string
  addons?: AddonItem[]
}

export default function PlansSectionContent({
  plans,
  disclaimer,
  addons,
}: PlansSectionContentProps) {
  return (
    <section className="bg-surface section-padding">
      <div className="container-page">
        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-16">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.id} delay={i * 100}>
              <div
                className={`relative bg-surface-alt border rounded-xl p-6 md:p-8 transition-all duration-300 flex flex-col h-full ${
                  plan.featured
                    ? 'border-accent shadow-lg shadow-accent/10 ring-2 ring-accent/30'
                    : 'border-border hover:shadow-md hover:-translate-y-1'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-primary text-xs font-accent font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                    {plan.subtitle || 'Más elegido'}
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                    {plan.name}
                  </h3>
                  <div className="font-heading text-2xl md:text-3xl font-bold text-primary mt-3">
                    {plan.price}
                  </div>
                  {plan.priceUsd && (
                    <div className="text-muted text-sm font-accent mt-1">
                      {plan.priceUsd}
                    </div>
                  )}
                  <p className="text-muted text-sm leading-relaxed mt-3">
                    {plan.description}
                  </p>
                </div>
                <ul className="space-y-3 mb-6 flex-1">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted">
                      <span className="text-accent mt-0.5 flex-shrink-0">&bull;</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Disclaimer */}
        {disclaimer && (
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-muted text-sm italic">{disclaimer}</p>
          </div>
        )}

        {/* Add-ons table */}
        {addons && addons.length > 0 && (
          <div className="max-w-3xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">
              Servicios Adicionales
            </h3>
            <div className="border border-border rounded-xl overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-surface-alt border-b border-border">
                    <th className="px-6 py-4 font-accent font-semibold text-sm text-foreground uppercase tracking-wider">
                      Servicio
                    </th>
                    <th className="px-6 py-4 font-accent font-semibold text-sm text-foreground uppercase tracking-wider">
                      Precio
                    </th>
                    <th className="px-6 py-4 font-accent font-semibold text-sm text-foreground uppercase tracking-wider hidden md:table-cell">
                      Nota
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {addons.map((addon, i) => (
                    <tr
                      key={i}
                      className="border-b border-border last:border-b-0 hover:bg-surface-alt/50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-foreground font-medium">
                        {addon.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-primary font-heading font-semibold">
                        {addon.price}
                      </td>
                      <td className="px-6 py-4 text-sm text-muted hidden md:table-cell">
                        {addon.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
