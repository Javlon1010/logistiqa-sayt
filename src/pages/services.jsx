import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';

const services = [
  {
    title: 'Freight Shipping',
    description: 'End-to-end freight transportation services worldwide.',
    benefits: ['Real-time tracking', 'Customs clearance support', 'Transparent pricing'],
    icon: '🚚',
  },
  {
    title: 'Warehousing & Fulfillment',
    description: 'Secure warehousing and fast order fulfillment.',
    benefits: ['Warehouse automation', 'Multi-location inventory', '24/7 support'],
    icon: '🏭',
  },
  {
    title: 'Customs & Compliance',
    description: 'Complete import/export documentation and compliance support.',
    benefits: ['Regulatory compliance', 'Documentation support', 'Risk mitigation'],
    icon: '🛃',
  },
  {
    title: 'Global Logistics',
    description: 'Cross-border delivery and network management.',
    benefits: ['Route planning', 'Carrier relationships', 'Delivery visibility'],
    icon: '🌍',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-surface text-slate">
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-24">
        <section className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-slate/60">Services</p>
          <h1 className="text-4xl font-bold text-slate">Logistics Services</h1>
          <p className="mx-auto max-w-2xl text-base leading-8 text-slate/80">
            Complete solutions for your cargo: freight, warehousing, customs, and global delivery.
          </p>
        </section>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <section className="mt-20 rounded-[2rem] bg-white p-10 shadow-soft">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-slate">Why Choose Champion Logistics?</h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-slate/80">
                We optimize every process for small and large shipments, handle documentation quickly, and provide pre and post-delivery monitoring.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl bg-surface p-6">
                <p className="font-semibold text-slate">Quality Assurance</p>
                <p className="mt-2 text-sm text-slate/70">Our services meet international standards.</p>
              </div>
              <div className="rounded-3xl bg-surface p-6">
                <p className="font-semibold text-slate">Personal Approach</p>
                <p className="mt-2 text-sm text-slate/70">Custom logistics plan for every client.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 rounded-[2rem] bg-primary/5 p-10 text-slate shadow-soft">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Expand Your Reach</h2>
              <p className="mt-2 text-sm text-slate/80">Get more information about pricing and custom plans.</p>
            </div>
            <a href="/contact" className="btn-primary w-full sm:w-auto">
              Learn More
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
