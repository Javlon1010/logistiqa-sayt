import Link from 'next/link';

export default function ServiceCard({ title, description, benefits, icon }) {
  return (
    <article className="section-card space-y-5">
      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-surface text-primary">
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-slate">{title}</h3>
        <p className="text-sm text-slate/80">{description}</p>
      </div>
      <ul className="space-y-2 text-sm text-slate/80">
        {benefits.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Link href="/contact" className="btn-secondary w-full text-center">
        Get Consultation
      </Link>
    </article>
  );
}
