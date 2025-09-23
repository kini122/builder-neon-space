import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollFloat from "@/components/ui/ScrollFloat";

export default function Students() {
  return (
    <main className="container py-12 overflow-x-hidden">
      <section className="rounded-2xl border border-border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-accent">
          Zero‑deposit SIM + WiFi
        </h1>
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
          <Link
            to="/onboarding"
            className="inline-flex items-center rounded-lg border border-border bg-white px-5 py-2"
          >
            Join now
          </Link>
          <a href="https://wa.me/" className="text-primary underline">
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-muted/40 p-6">
          <ScrollFloat
            containerClassName="text-accent"
            textClassName="font-semibold"
          >
            Student testimonials
          </ScrollFloat>
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            >
              {[
                {
                  name: "Aoife, UCD",
                  img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&h=200&fit=crop&auto=format",
                  text: "Saved €210/yr. eSIM took 2 mins.",
                },
                {
                  name: "Ravi, TCD",
                  img: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=200&h=200&fit=crop&auto=format",
                  text: "Great for shared housing bills.",
                },
                {
                  name: "Maya, NUIG",
                  img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&auto=format",
                  text: "Love the green tariff.",
                },
                {
                  name: "Liam, DCU",
                  img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&auto=format",
                  text: "Zero deposit was a lifesaver.",
                },
              ]
                .concat([
                  {
                    name: "Aoife, UCD",
                    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&h=200&fit=crop&auto=format",
                    text: "Saved €210/yr. eSIM took 2 mins.",
                  },
                  {
                    name: "Ravi, TCD",
                    img: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=200&h=200&fit=crop&auto=format",
                    text: "Great for shared housing bills.",
                  },
                  {
                    name: "Maya, NUIG",
                    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&auto=format",
                    text: "Love the green tariff.",
                  },
                  {
                    name: "Liam, DCU",
                    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&auto=format",
                    text: "Zero deposit was a lifesaver.",
                  },
                ])
                .map((t, i) => (
                  <div
                    key={i}
                    className="min-w-[180px] sm:min-w-[220px] flex items-center gap-3 rounded-xl border border-border bg-white p-3 shadow-sm"
                  >
                    <img
                      src={t.img}
                      alt={t.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-sm font-semibold text-accent">
                        {t.name}
                      </div>
                      <div className="text-xs text-foreground/70">{t.text}</div>
                    </div>
                  </div>
                ))}
            </motion.div>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-muted/40 p-6">
          <ScrollFloat
            containerClassName="text-accent"
            textClassName="font-semibold"
          >
            Add‑ons for students
          </ScrollFloat>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/80">
            <li>Device insurance for phones and laptops</li>
            <li>Bill‑splitting tool for shared houses</li>
            <li>Discounted energy with the Community Green Tariff</li>
          </ul>
        </div>
      </section>

      <section className="mt-10 rounded-xl border border-border bg-white p-6 shadow-sm">
        <h3 className="font-semibold text-accent">Savings Calculator</h3>
        <p className="mt-1 text-sm text-foreground/70">
          Estimate your savings in seconds.
        </p>
        <div className="mt-4">
          <Link
            to="/calculator"
            className="inline-flex rounded-lg bg-primary px-5 py-2 text-white"
          >
            Open calculator
          </Link>
        </div>
      </section>
    </main>
  );
}
