import { Link } from "react-router-dom";

export default function Students() {
  return (
    <main className="container py-12">
      <section className="rounded-2xl border border-border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-accent">Zero‑deposit SIM + WiFi</h1>
        <p className="mt-2 text-foreground/80">
          Save about €200/year with our student bundle. Join with instant eSIM.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            to="/calculator"
            className="inline-flex items-center rounded-lg bg-secondary px-5 py-2 text-white shadow-brand hover:scale-[1.02] active:scale-100 transition-transform"
          >
            Check your savings
          </Link>
          <Link to="/onboarding" className="inline-flex items-center rounded-lg border border-border bg-white px-5 py-2">
            Join now
          </Link>
          <a href="https://wa.me/" className="text-primary underline">
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-muted/40 p-6">
          <h2 className="font-semibold text-accent">Student testimonial</h2>
          <p className="mt-2 text-sm text-foreground/70">
            “I moved into shared housing and activated my eSIM in minutes. With the student bundle I’m saving about €200 a year.”
          </p>
        </div>
        <div className="rounded-xl border border-border bg-muted/40 p-6">
          <h3 className="font-semibold text-accent">Add‑ons for students</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/80">
            <li>Device insurance for phones and laptops</li>
            <li>Bill‑splitting tool for shared houses</li>
            <li>Discounted energy with the Community Green Tariff</li>
          </ul>
        </div>
      </section>

      <section className="mt-10 rounded-xl border border-border bg-white p-6 shadow-sm">
        <h3 className="font-semibold text-accent">Savings Calculator</h3>
        <p className="mt-1 text-sm text-foreground/70">Estimate your savings in seconds.</p>
        <div className="mt-4">
          <Link to="/calculator" className="inline-flex rounded-lg bg-primary px-5 py-2 text-white">Open calculator</Link>
        </div>
      </section>
    </main>
  );
}
