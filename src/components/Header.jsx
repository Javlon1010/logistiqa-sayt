import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate/10 bg-white/95 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-slate">
          <Image src="/logo.svg" alt="Champion Logistics" width={160} height={32} priority />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate transition hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/contact" className="btn-secondary">
            Contact
          </Link>
          <Link href="/login" className="btn-primary">
            Login
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-xl border border-slate/10 bg-white p-3 text-slate transition hover:bg-slate/5 md:hidden"
          aria-label="Open menu"
        >
          <span className="text-xl">{open ? '✕' : '☰'}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate/10 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-2xl px-4 py-3 text-slate transition hover:bg-slate/5">
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary w-full text-center">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
