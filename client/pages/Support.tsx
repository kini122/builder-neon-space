export default function Support() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold text-accent">Help Centre</h1>
      <p className="mt-2 text-foreground/80">
        We’re here to help with switching, deposits, and green tariff questions.
      </p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <form className="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-accent">Contact us</h2>
          <label className="mt-3 block text-sm">
            Name
            <input className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm" />
          </label>
          <label className="mt-3 block text-sm">
            Email
            <input
              type="email"
              className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm"
            />
          </label>
          <label className="mt-3 block text-sm">
            Message
            <textarea
              rows={4}
              className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm"
            />
          </label>
          <button className="mt-4 rounded-lg bg-primary px-4 py-2 text-white">
            Send
          </button>
        </form>
        <div className="rounded-xl border border-border bg-muted/40 p-6">
          <h2 className="font-semibold text-accent">Quick links</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/80">
            <li>
              <a href="https://wa.me/" className="text-primary">
                WhatsApp chat
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@switchsmartsave.com"
                className="text-primary"
              >
                Email support
              </a>
            </li>
            <li>
              <a href="/faq" className="text-primary">
                FAQs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
