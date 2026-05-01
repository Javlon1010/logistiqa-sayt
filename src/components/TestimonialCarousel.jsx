import { useState } from 'react';

const testimonials = [
  {
    quote: 'Connect the supply chain with a fast and reliable international freight team.',
    name: 'Aziza T.',
    role: 'Supply Chain Manager',
  },
  {
    quote: 'Their customs clearance support saved our shipment from delay.',
    name: 'Bek O.',
    role: 'Import Operations',
  },
  {
    quote: 'Warehousing and fulfillment were smooth from day one.',
    name: 'Murod R.',
    role: 'E-commerce Director',
  },
];

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const item = testimonials[active];

  return (
    <section className="space-y-8 rounded-[2rem] bg-surface p-8 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate/60">Client Feedback</p>
          <h2 className="text-2xl font-semibold text-slate">What Our Clients Love</h2>
        </div>
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`h-2.5 w-10 rounded-full ${active === index ? 'bg-primary' : 'bg-slate/30'}`}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <blockquote className="rounded-3xl bg-white p-8 text-slate shadow-soft">
        <p className="text-lg leading-8">“{item.quote}”</p>
        <footer className="mt-6 text-sm text-slate/70">
          <span className="block font-semibold text-slate">{item.name}</span>
          <span>{item.role}</span>
        </footer>
      </blockquote>
    </section>
  );
}
