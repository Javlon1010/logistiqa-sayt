export default function ContactForm() {
  return (
    <section className="section-card">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.24em] text-slate/60">Contact</p>
        <h2 className="text-2xl font-semibold text-slate">Get in Touch</h2>
      </div>
      <form className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-slate/90">
          Name
          <input type="text" name="name" className="rounded-3xl border border-slate/10 bg-surface px-4 py-3 text-sm text-slate outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" placeholder="Your Name" />
        </label>
        <label className="flex flex-col gap-2 text-sm text-slate/90">
          Email
          <input type="email" name="email" className="rounded-3xl border border-slate/10 bg-surface px-4 py-3 text-sm text-slate outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" placeholder="Your Email" />
        </label>
        <label className="flex flex-col gap-2 text-sm text-slate/90 sm:col-span-2">
          Phone
          <input type="tel" name="phone" className="rounded-3xl border border-slate/10 bg-surface px-4 py-3 text-sm text-slate outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" placeholder="Your Phone" />
        </label>
        <label className="flex flex-col gap-2 text-sm text-slate/90 sm:col-span-2">
          Message
          <textarea rows="4" name="message" className="rounded-3xl border border-slate/10 bg-surface px-4 py-3 text-sm text-slate outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" placeholder="Your Message" />
        </label>
        <button type="submit" className="btn-primary w-full sm:col-span-2">
          Send
        </button>
      </form>
    </section>
  );
}
