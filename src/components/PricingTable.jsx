const plans = [
  {
    name: 'Standard',
    price: 'Request Quote',
    features: ['Freight shipping', 'Basic customs support', 'Standard transit'],
  },
  {
    name: 'Global',
    price: 'Request Quote',
    features: ['International network', 'Warehousing integration', 'Priority handling'],
  },
  {
    name: 'Premium',
    price: 'Request Quote',
    features: ['End-to-end logistics', 'Dedicated account', '24/7 support'],
  },
];

export default function PricingTable() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.24em] text-slate/60">Pricing</p>
        <h2 className="text-3xl font-semibold text-slate">Pricing Plans Tailored for You</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <article key={plan.name} className="section-card flex flex-col justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-slate">{plan.name}</h3>
              <p className="mt-3 text-3xl font-bold text-primary">{plan.price}</p>
            </div>
            <ul className="space-y-3 text-sm text-slate/80">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a href="/contact" className="btn-primary w-full text-center">
              Request Quote
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
