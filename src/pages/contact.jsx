import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-surface text-slate">
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-24">
        <section className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-slate/60">Contact</p>
          <h1 className="text-4xl font-bold text-slate">Get In Touch</h1>
          <p className="mx-auto max-w-2xl text-base leading-8 text-slate/80">
            Submit a request about services, pricing, or cargo status. We'll respond quickly.
          </p>
        </section>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-8">
            <div className="rounded-[2rem] bg-white p-10 shadow-soft">
              <h2 className="text-2xl font-semibold text-slate">Contact Information</h2>
              <div className="mt-6 space-y-4 text-sm text-slate/80">
                <p><strong>Phone:</strong> +998 71 123 45 67</p>
                <p><strong>Email:</strong> support@championlogistics.uz</p>
                <p><strong>Address:</strong> Tashkent, Uzbekistan</p>
              </div>
            </div>
            <div className="rounded-[2rem] bg-white p-10 shadow-soft">
              <h2 className="text-2xl font-semibold text-slate">Map</h2>
              <div className="mt-6 h-72 rounded-3xl bg-slate-200"></div>
            </div>
          </div>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
