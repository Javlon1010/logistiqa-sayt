import Link from 'next/link';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate/10 bg-white py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.24em] text-slate/60">Champion Logistics</p>
          <p className="max-w-xl text-sm leading-7 text-slate/80">
            Global freight, warehousing, and customs services with a customer-first approach for Uzbekistan and beyond.
          </p>
          <div className="space-y-2 text-sm text-slate/80">
            <p>support@championlogistics.uz</p>
            <p>+998 71 123 45 67</p>
            <p>Tashkent, Uzbekistan</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate/70">Quick Links</h3>
            <div className="space-y-2 text-sm text-slate/80">
              {footerLinks.map((item) => (
                <Link key={item.href} href={item.href} className="block hover:text-primary">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate/70">Social Media</h3>
            <div className="space-y-2 text-sm text-slate/80">
              <a href="#" className="block hover:text-primary">LinkedIn</a>
              <a href="#" className="block hover:text-primary">Facebook</a>
              <a href="#" className="block hover:text-primary">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
