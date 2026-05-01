import Header from '@/components/Header';
import PricingTable from '@/components/PricingTable';
import Footer from '@/components/Footer';

const faqs = [
  {
    question: 'How is pricing determined?',
    answer: 'Pricing is based on cargo type, volume, destination, and customs requirements.',
  },
  {
    question: 'How quickly will I receive a quote?',
    answer: 'We typically send a professional quote within 24 hours.',
  },
  {
    question: 'Do you offer global services?',
    answer: 'Yes, we have a delivery network that spans worldwide.',
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-surface text-slate">
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-24">
        <section className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-slate/60">Pricing</p>
          <h1 className="text-4xl font-bold text-slate">Pricing Plans</h1>
          <p className="mx-auto max-w-2xl text-base leading-8 text-slate/80">
            From standard to premium, all our packages are guided by professional logistics and transparency.
          </p>
        </section>

        <div className="mt-16">
          <PricingTable />
        </div>

        <section className="mt-20 rounded-[2rem] bg-white p-10 shadow-soft">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((item) => (
                <div key={item.question} className="rounded-3xl border border-slate/10 p-6">
                  <h3 className="text-lg font-semibold text-slate">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate/80">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
