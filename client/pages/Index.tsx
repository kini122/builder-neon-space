import { motion } from "framer-motion";
import {
  Bolt,
  CheckCircle2,
  Leaf,
  PiggyBank,
  Smartphone,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Counter } from "@/components/site/Counter";

export default function Index() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustMarkers />
      <ValueProps />
      <HowItWorks />
      <CommunityImpact />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <div className="absolute -left-10 -top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -right-10 -bottom-24 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
      <div className="container grid gap-10 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold leading-tight text-accent md:text-5xl"
          >
            Save Together. Live Smarter.
          </motion.h1>
          <p className="mt-4 max-w-xl text-base text-foreground/80 md:text-lg">
            Join a community plan for SIM, broadband and energy. 100% green
            tariff, zero deposit, transparent pricing.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              to="/calculator"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-white shadow-brand transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
            >
              <PiggyBank className="h-5 w-5" /> Check Your Savings
            </Link>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-6 py-3 text-accent transition hover:shadow"
            >
              Learn how it works
            </a>
          </div>

          <div className="mt-10 grid w-full max-w-xl grid-cols-2 gap-4 rounded-xl bg-white p-4 shadow-sm">
            <div>
              <p className="text-sm text-foreground/60">Community savings</p>
              <p className="text-2xl font-bold text-accent">
                <Counter end={2400000} prefix="€" className="tabular-nums" />
              </p>
            </div>
            <div>
              <p className="text-sm text-foreground/60">Members</p>
              <p className="text-2xl font-bold text-accent">
                <Counter end={8500} className="tabular-nums" />+
              </p>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
          aria-hidden
        >
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-accent to-primary p-1 shadow-brand">
            <div className="flex h-full items-center justify-center rounded-2xl bg-white/95">
              <div className="grid grid-cols-3 gap-6 p-6 text-accent">
                <IconCard Icon={Users} label="Students" />
                <IconCard Icon={Smartphone} label="eSIM" />
                <IconCard Icon={Leaf} label="100% Green" />
                <IconCard Icon={Bolt} label="Energy" />
                <IconCard Icon={PiggyBank} label="Savings" />
                <IconCard Icon={CheckCircle2} label="No deposit" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function IconCard({ Icon, label }: { Icon: any; label: string }) {
  return (
    <div className="group flex flex-col items-center gap-2 rounded-xl border border-border p-4 shadow-sm transition-transform hover:-translate-y-1">
      <Icon className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
      <span className="text-sm font-semibold text-accent">{label}</span>
    </div>
  );
}

function TrustMarkers() {
  return (
    <section aria-label="Trusted by" className="bg-white">
      <div className="container py-8">
        <div className="flex items-center justify-center gap-3 py-2 text-sm text-foreground/80">
          <span className="rounded-full bg-muted px-3 py-1">
            Trusted by communities across Ireland & UK
          </span>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-sm">
          <span className="inline-flex items-center gap-2 rounded-md bg-muted px-3 py-1 text-foreground/80">
            <CheckCircle2 className="h-4 w-4 text-primary" /> Regulated by CRU &
            ComReg
          </span>
          <span className="inline-flex items-center gap-2 rounded-md bg-muted px-3 py-1 text-foreground/80">
            <CheckCircle2 className="h-4 w-4 text-secondary" /> GDPR Compliant
          </span>
          <span className="inline-flex items-center gap-2 rounded-md bg-muted px-3 py-1 text-foreground/80">
            <CheckCircle2 className="h-4 w-4 text-accent" /> Secure by design
          </span>
        </div>
      </div>
    </section>
  );
}

function ValueProps() {
  const items = [
    {
      icon: PiggyBank,
      title: "Save €150–€600/year on bills",
      text: "Group power means lower rates across SIM, broadband and energy.",
    },
    {
      icon: Leaf,
      title: "Community Green Tariff – 100% renewable",
      text: "Every plan moves us toward a cleaner grid.",
    },
    {
      icon: CheckCircle2,
      title: "Simple onboarding – no deposit, no hassle",
      text: "Join in minutes with eSIM and instant activation.",
    },
  ];
  return (
    <section className="bg-muted/40">
      <div className="container grid gap-6 py-14 md:grid-cols-3">
        {items.map((it) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-border bg-white p-6 shadow-sm"
          >
            <it.icon className="h-7 w-7 text-primary" />
            <h3 className="mt-3 text-lg font-semibold text-accent">
              {it.title}
            </h3>
            <p className="mt-2 text-sm text-foreground/70">{it.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: Users,
      title: "Join your community group",
      desc: "Pick Students, Young Pro or Family.",
    },
    {
      icon: Smartphone,
      title: "Bundle your SIM / broadband / energy",
      desc: "Choose what you need today – add later anytime.",
    },
    {
      icon: Bolt,
      title: "Track savings in your dashboard",
      desc: "See monthly savings grow in real time.",
    },
  ];
  return (
    <section id="how" className="bg-white">
      <div className="container grid gap-10 py-16 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-accent">How it works</h2>
          <p className="mt-2 max-w-prose text-foreground/80">
            Three steps to start saving. No deposit, no hassle.
          </p>
          <div className="mt-6 space-y-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-4 rounded-xl border border-border bg-muted/50 p-4"
              >
                <s.icon className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold text-accent">{s.title}</h3>
                  <p className="text-sm text-foreground/70">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-white p-2 shadow-sm">
          <div className="aspect-video overflow-hidden rounded-xl">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/ysz5S6PUM-U"
              title="Switch Smart Save explainer"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CommunityImpact() {
  return (
    <section id="impact" className="bg-muted/40">
      <div className="container grid gap-10 py-16 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-accent">Community Impact</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-sm text-foreground/60">Total € saved</p>
              <p className="text-2xl font-bold text-accent">
                <Counter end={2400000} prefix="€" className="tabular-nums" />
              </p>
            </div>
            <div>
              <p className="text-sm text-foreground/60">CO₂ reduced</p>
              <p className="text-2xl font-bold text-accent">
                <Counter end={1800} suffix="t" className="tabular-nums" />
              </p>
            </div>
            <div>
              <p className="text-sm text-foreground/60">Members</p>
              <p className="text-2xl font-bold text-accent">
                <Counter end={8500} className="tabular-nums" />+
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h3 className="font-semibold text-accent">
            Where our members are saving
          </h3>
          <div className="mt-4 aspect-[4/3] rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15">
            <div className="relative h-full w-full">
              {[
                { left: "20%", top: "40%" },
                { left: "48%", top: "30%" },
                { left: "70%", top: "55%" },
              ].map((p, i) => (
                <span
                  key={i}
                  className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary shadow animate-pulse"
                  style={p as React.CSSProperties}
                />
              ))}
            </div>
          </div>
          <p className="mt-3 text-sm text-foreground/70">
            Hotspots across Ireland & UK. More communities joining every week.
          </p>
        </div>
      </div>
    </section>
  );
}
