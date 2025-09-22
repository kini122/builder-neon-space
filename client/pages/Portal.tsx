import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Portal() {
  const navigate = useNavigate();
  const [user, setUser] = useState<{ email?: string; name?: string } | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("sss_user");
    if (!raw) return;
    try {
      setUser(JSON.parse(raw));
    } catch {
      setUser(null);
    }
  }, []);

  if (!user) {
    return (
      <main className="container py-12">
        <div className="mx-auto max-w-md rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-accent">Portal Access</h1>
          <p className="mt-2 text-sm text-foreground/80">Please log in to access your dashboard.</p>
          <Link to="/login" className="mt-4 inline-flex rounded-lg bg-primary px-5 py-2 text-white">Go to Login</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container py-12">
      <div className="grid gap-6 lg:grid-cols-3">
        <section className="rounded-2xl border border-border bg-white p-6 shadow-sm lg:col-span-2">
          <h2 className="text-xl font-semibold text-accent">Dashboard</h2>
          <p className="mt-1 text-sm text-foreground/70">Welcome {user.name ? user.name.split(" ")[0] : user.email}.</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <PlanCard title="SIM (eSIM)" status="Active" detail="5G • Unlimited EU" />
            <PlanCard title="Broadband" status="Installed" detail="500 Mbps" />
            <PlanCard title="Energy" status="Green Tariff" detail="100% renewable" />
          </div>

          <SavingsTracker />
        </section>

        <section className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-accent">Tools</h3>
          <BillSplit />
          <Referral />
          <Notifications />
          <button
            className="mt-6 w-full rounded-lg border border-border bg-white px-4 py-2 text-sm"
            onClick={() => {
              localStorage.removeItem("sss_user");
              navigate("/");
            }}
          >
            Log out
          </button>
        </section>
      </div>
    </main>
  );
}

function PlanCard({ title, status, detail }: { title: string; status: string; detail: string }) {
  return (
    <div className="rounded-xl border border-border bg-muted/40 p-4">
      <div className="text-sm text-foreground/60">{title}</div>
      <div className="text-lg font-semibold text-accent">{status}</div>
      <div className="text-sm text-foreground/70">{detail}</div>
    </div>
  );
}

function SavingsTracker() {
  const savedYtd = 420;
  const target = 600;
  const pct = Math.min(100, Math.round((savedYtd / target) * 100));
  return (
    <div className="mt-6 rounded-xl border border-border bg-muted/40 p-4">
      <div className="flex items-center justify-between text-sm text-foreground/60">
        <span>Savings tracker</span>
        <span>Target €{target}</span>
      </div>
      <div className="mt-2 h-2 w-full rounded bg-muted">
        <div className="h-2 rounded bg-secondary" style={{ width: `${pct}%` }} />
      </div>
      <p className="mt-2 text-sm text-accent">You’ve saved €{savedYtd} this year</p>
    </div>
  );
}

function BillSplit() {
  const [rent, setRent] = useState(60);
  const [people, setPeople] = useState(3);
  const share = useMemo(() => (people > 0 ? Math.round((rent / people) * 100) / 100 : 0), [rent, people]);
  return (
    <div className="mt-4 rounded-xl border border-border bg-muted/40 p-4">
      <h4 className="font-semibold text-accent">Bill‑splitting (students)</h4>
      <div className="mt-3 grid gap-3">
        <label className="text-sm text-foreground/80">
          Monthly broadband (€)
          <input
            type="number"
            value={rent}
            onChange={(e) => setRent(parseFloat(e.target.value) || 0)}
            className="mt-1 w-full rounded-md border border-border bg-white px-3 py-2 text-sm"
          />
        </label>
        <label className="text-sm text-foreground/80">
          Housemates
          <input
            type="number"
            value={people}
            onChange={(e) => setPeople(parseInt(e.target.value || "0", 10))}
            className="mt-1 w-full rounded-md border border-border bg-white px-3 py-2 text-sm"
          />
        </label>
        <div className="text-sm text-foreground/80">Each pays: <span className="font-semibold text-accent">€{share}</span></div>
      </div>
    </div>
  );
}

function Referral() {
  const link = `${window.location.origin}/?ref=abc123`;
  return (
    <div className="mt-4 rounded-xl border border-border bg-muted/40 p-4">
      <h4 className="font-semibold text-accent">Referral</h4>
      <p className="mt-1 text-sm text-foreground/70">Invite family or friends – both save €20.</p>
      <div className="mt-2 flex items-center gap-2">
        <input readOnly value={link} className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm" />
        <button
          onClick={() => navigator.clipboard.writeText(link)}
          className="rounded-md bg-primary px-3 py-2 text-sm text-white"
        >
          Copy
        </button>
      </div>
    </div>
  );
}

function Notifications() {
  const items = [
    "Green tariff update available",
    "Seasonal campaign: double referral bonus",
    "EU roaming now included on all plans",
  ];
  return (
    <div className="mt-4 rounded-xl border border-border bg-muted/40 p-4">
      <h4 className="font-semibold text-accent">Notifications</h4>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/80">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
