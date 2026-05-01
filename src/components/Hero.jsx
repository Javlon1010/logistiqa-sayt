import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.2),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.16),_transparent_25%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-24 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-6">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Global logistics, local service
          </span>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Freight Shipping with end-to-end visibility
          </h1>
          <p className="max-w-xl text-base text-slate/80 sm:text-lg">
            Champion Shipping Logistics LLC helps you move freight faster with customs, warehousing, and global delivery support.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/contact" className="btn-primary">
              Get a Consultation
            </Link>
            <Link href="/services" className="btn-secondary">
              Services
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur-xl sm:p-10">
          <div className="space-y-4 text-slate">
            <p className="text-sm uppercase tracking-[0.24em] text-slate/60">Logistics snapshot</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900/80 p-5">
                <p className="text-3xl font-semibold">24/7</p>
                <p className="mt-2 text-sm text-slate/60">Support</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-5">
                <p className="text-3xl font-semibold">3K+</p>
                <p className="mt-2 text-sm text-slate/60">Deliveries handled</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
