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
          <a href="https://wa.me/" className="text-primary underline">
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <section className="mt-10 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="font-semibold text-accent">What students say</h2>
        <p className="mt-2 text-sm text-foreground/70">
          “As a student, I saved €200 this year and set up eSIM in minutes.”
        </p>
      </section>
    </main>
  );
}
