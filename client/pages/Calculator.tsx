import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Segment = "student" | "professional" | "family";

const MULTIPLIER: Record<Segment, number> = {
  student: 0.18,
  professional: 0.22,
  family: 0.28,
};

export default function Calculator() {
  const [segment, setSegment] = useState<Segment>("student");
  const [spend, setSpend] = useState<number>(120);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const monthly = useMemo(() => Math.round(spend * MULTIPLIER[segment]), [spend, segment]);
  const yearly = monthly * 12;

  return (
    <main className="container py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-accent">Savings Calculator</h1>
        <p className="mt-2 text-foreground/80">
          Estimate how much you could save by joining Switch Smart Save.
        </p>

        <div className="mt-8 grid gap-8 rounded-2xl border border-border bg-white p-6 shadow-sm md:grid-cols-2">
          <div>
            <label className="text-sm font-semibold text-accent">Household type</label>
            <div className="mt-2">
              <Select value={segment} onValueChange={(v) => setSegment(v as Segment)}>
                <SelectTrigger aria-label="Household type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="professional">Young Professional</SelectItem>
                  <SelectItem value="family">Family</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <label className="mt-6 block text-sm font-semibold text-accent">
              Current monthly spend (€50–€500)
            </label>
            <div className="mt-4">
              <Slider
                min={50}
                max={500}
                step={5}
                value={[spend]}
                onValueChange={(v) => setSpend(v[0])}
                aria-label="Current monthly spend"
              />
              <div className="mt-2 text-sm text-foreground/80">€{spend}</div>
            </div>
          </div>

          <div>
            <motion.div
              key={`${segment}-${spend}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="rounded-xl bg-muted/40 p-4"
            >
              <p className="text-sm text-foreground/60">You could save</p>
              <p className="mt-1 text-3xl font-extrabold text-accent">€{monthly}/month</p>
              <p className="text-lg font-semibold text-primary">€{yearly.toLocaleString()}/year</p>

              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between text-xs text-foreground/60">
                  <span>Current</span>
                  <span>€{spend}</span>
                </div>
                <div className="h-2 w-full rounded bg-muted">
                  <div
                    className="h-2 rounded bg-accent"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="mt-3 mb-2 flex items-center justify-between text-xs text-foreground/60">
                  <span>With SSS</span>
                  <span>€{Math.max(0, spend - monthly)}</span>
                </div>
                <div className="h-2 w-full rounded bg-muted">
                  <div
                    className="h-2 rounded bg-secondary"
                    style={{ width: `${Math.max(5, ((spend - monthly) / spend) * 100)}%` }}
                  />
                </div>
              </div>
            </motion.div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#join"
                className="inline-flex items-center rounded-lg bg-primary px-5 py-2 text-white shadow-brand hover:scale-[1.02] active:scale-100 transition-transform"
              >
                Join Now
              </a>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="flex w-full items-center gap-2 sm:w-auto"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email for savings report"
                  className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary sm:w-64"
                  aria-label="Email for savings report"
                />
                <button className="rounded-md border border-border bg-white px-4 py-2 text-sm hover:shadow">
                  Download
                </button>
              </form>
              {submitted && (
                <p className="text-xs text-foreground/60">
                  Check your inbox for the report link.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-border bg-white p-4 text-xs text-foreground/60">
          Estimates only. Actual savings depend on plan, usage and eligibility.
        </div>
      </div>
    </main>
  );
}
