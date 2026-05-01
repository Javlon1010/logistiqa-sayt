import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface text-slate">
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-24">
        <section className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-slate/60">About Us</p>
          <h1 className="text-4xl font-bold text-slate">Champion Shipping Logistics</h1>
          <p className="mx-auto max-w-3xl text-base leading-8 text-slate/80">
            We combine freight shipping, warehousing, and customs services to provide reliable logistics solutions to our clients.
          </p>
        </section>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          <div className="section-card">
            <h2 className="text-xl font-semibold text-slate">Vision</h2>
            <p className="mt-4 text-sm text-slate/80">To be the most trusted partner in global freight and logistics.</p>
          </div>
          <div className="section-card">
            <h2 className="text-xl font-semibold text-slate">Mission</h2>
            <p className="mt-4 text-sm text-slate/80">To deliver fast, safe, and transparent logistics services to our clients.</p>
          </div>
          <div className="section-card">
            <h2 className="text-xl font-semibold text-slate">Values</h2>
            <p className="mt-4 text-sm text-slate/80">Trust, accuracy, and putting client needs first.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
