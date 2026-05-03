import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import Footer from '@/components/Footer';
import LocalGuidesMap from '@/components/LocalGuidesMap';
import { useState } from 'react';

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

const stateData = {
  'California': ['123 Main St, Los Angeles, CA', '456 Oak Ave, San Francisco, CA'],
  'Texas': ['789 Pine Rd, Houston, TX', '101 Elm St, Dallas, TX'],
  'New York': ['202 Broadway, New York, NY'],
  'Florida': ['303 Beach Blvd, Miami, FL'],
  'Illinois': ['404 Lake St, Chicago, IL'],
  // Add more states as needed
};

export default function Home() {
  const [selectedState, setSelectedState] = useState(null);
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
          <div className="space-y-10">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate/60">Champion Shipping Logistics LLC</p>
              <h2 className="text-3xl font-semibold text-slate">Local Guides</h2>
              <p className="max-w-xl text-base leading-8 text-slate/80">
                Explore service coverage across the United States. Hover a state to see its name.
              </p>
            </div>
            <LocalGuidesMap selectedState={selectedState} onStateClick={setSelectedState} />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.24em] text-slate/60">Service Locations</p>
            <h2 className="text-3xl font-semibold text-slate">Amerika bo'ylab qaysi joylarda firma borligi</h2>
            <p className="max-w-xl text-base leading-8 text-slate/80">Select a state to see our service locations for car shipping and delivery.</p>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {Object.keys(stateData).map(state => (
                <button key={state} onClick={() => setSelectedState(state)} className="btn-secondary">
                  {state}
                </button>
              ))}
            </div>
            {selectedState && (
              <div className="mt-8 rounded-[2rem] bg-white p-6 shadow-soft">
                <h3 className="text-xl font-semibold text-slate">{selectedState} Locations</h3>
                <ul className="mt-4 space-y-2">
                  {stateData[selectedState].map((address, idx) => (
                    <li key={idx} className="text-sm text-slate/80">{address}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
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
          <div className="rounded-[2rem] bg-primary/5 p-8">
            <div className="space-y-6 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.24em] text-primary">Contact</p>
              <h2 className="text-3xl font-semibold text-slate">Biz bilan bog'lanish</h2>
              <p className="max-w-xl text-base leading-8 text-slate/80">
                Contact us now for reliable logistics solutions. We know how to get your cargo where it needs to go.
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 text-slate shadow-soft">
                <p className="font-semibold">Phone & Contact</p>
                <div className="mt-4 space-y-3 text-sm text-slate/80">
                  <p><strong>Asosiy telefon:</strong> +998 71 123 45 67</p>
                  <p><strong>Qo'shimcha telefon:</strong> +998 99 765 43 21</p>
                  <p><strong>Email:</strong> support@championlogistics.uz</p>
                  <p><strong>Manzil:</strong> Tashkent, Uzbekistan</p>
                </div>
              </div>
              <div className="rounded-3xl bg-white p-6 text-slate shadow-soft">
                <p className="font-semibold">We’re here to help</p>
                <p className="mt-4 text-sm leading-7 text-slate/80">
                  Our team is ready to support your freight, customs, and warehousing needs. Reach out for fast help and reliable logistics advice.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
