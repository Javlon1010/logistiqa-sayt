import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import Footer from '@/components/Footer';

const services = [
  {
    title: 'Freight Shipping',
    description: 'Global cargo movement with real-time visibility and customs support.',
    benefits: ['Real-time tracking', 'Customs clearance support', 'Transparent pricing'],
    icon: '🚚',
  },
  {
    title: 'Warehousing & Fulfillment',
    description: 'Secure storage and fast order processing for e-commerce and retail.',
    benefits: ['Warehouse automation', 'Multi-location inventory', '24/7 support'],
    icon: '🏭',
  },
  {
    title: 'Customs & Compliance',
    description: 'Smooth import/export documentation for freight across borders.',
    benefits: ['Regulatory compliance', 'Documentation support', 'Risk mitigation'],
    icon: '🛃',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-surface text-slate">
      <Header />
      <main>
        <Hero />

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-16 lg:grid-cols-[0.75fr_1fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate/60">About Us</p>
              <h2 className="text-3xl font-semibold text-slate">Reliable freight shipping with Champion Shipping Logistics</h2>
              <p className="max-w-2xl text-base leading-8 text-slate/80">
              We are a shipping and logistics company specialized in making global shipments fast, safe, and transparent for our clients. We offer customs, warehousing, and delivery services as a single complete solution.
            </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="section-card">
                <h3 className="text-xl font-semibold text-slate">Delivery</h3>
                <p className="mt-3 text-sm text-slate/80">Monitoring and quick delivery schedule for every shipment.</p>
              </div>
              <div className="section-card">
                <h3 className="text-xl font-semibold text-slate">Warehouse</h3>
                <p className="mt-3 text-sm text-slate/80">We simplify inventory with comprehensive storage and fulfillment services.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="space-y-6 text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-slate/60">Services</p>
            <h2 className="text-3xl font-semibold text-slate">Tailored logistics services for your business</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24">
          <TestimonialCarousel />
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate/60">Trust Badges</p>
              <h2 className="text-3xl font-semibold text-slate">Certifications & Customer Satisfaction</h2>
              <p className="max-w-xl text-base leading-8 text-slate/80">
                Our operations meet international standards and help our customers deliver their shipments on time.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 text-slate shadow-soft">
                <p className="font-semibold">ISO 9001</p>
                <p className="mt-2 text-sm text-slate/70">Quality Management</p>
              </div>
              <div className="rounded-3xl bg-white p-6 text-slate shadow-soft">
                <p className="font-semibold">24/7 Support</p>
                <p className="mt-2 text-sm text-slate/70">Round-the-clock customer service</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-10 rounded-[2rem] bg-primary/5 p-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.24em] text-primary">Contact</p>
              <h2 className="text-3xl font-semibold text-slate">Send a Request and We'll Get Back to You</h2>
              <p className="max-w-xl text-base leading-8 text-slate/80">
                Contact us now for reliable logistics solutions. We know how to get your cargo where it needs to go.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl bg-white p-6 text-slate shadow-soft">
              <p className="font-semibold">Quick contact</p>
              <form className="grid gap-4">
                <input type="text" placeholder="Name" className="rounded-3xl border border-slate/10 bg-surface px-4 py-3 text-sm text-slate outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" />
                <input type="email" placeholder="Email" className="rounded-3xl border border-slate/10 bg-surface px-4 py-3 text-sm text-slate outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" />
                <button type="button" className="btn-primary w-full">
                  Request a Call
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
