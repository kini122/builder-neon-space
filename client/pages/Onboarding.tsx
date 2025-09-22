import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

type Group = "student" | "professional" | "family";

export default function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [group, setGroup] = useState<Group>("student");
  const [fileInfo, setFileInfo] = useState<string>("");

  useEffect(() => {
    const existing = localStorage.getItem("sss_user");
    if (existing) navigate("/portal");
  }, [navigate]);

  const canNext1 = useMemo(
    () => name.trim().length > 1 && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) && /\+?\d{7,}/.test(phone),
    [name, email, phone]
  );

  const canNext2 = useMemo(() => Boolean(group), [group]);
  const canFinish = useMemo(() => fileInfo.length > 0, [fileInfo]);

  return (
    <main className="container py-12">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold text-accent">Join Switch Smart Save</h1>
        <p className="mt-2 text-foreground/80">Complete the 3 quick steps. No deposit, instant eSIM after verification.</p>

        <div className="mt-6 grid gap-6 rounded-2xl border border-border bg-white p-6 shadow-sm">
          <Progress step={step} />

          {step === 1 && (
            <section aria-labelledby="create-account">
              <h2 id="create-account" className="text-xl font-semibold text-accent">Step 1: Create Account</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="text-sm font-semibold text-accent">Full name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-accent">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-accent">Phone</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1 w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+353..."
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  disabled={!canNext1}
                  onClick={() => setStep(2)}
                  className="rounded-lg bg-primary px-5 py-2 text-white shadow-brand disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            </section>
          )}

          {step === 2 && (
            <section aria-labelledby="select-group">
              <h2 id="select-group" className="text-xl font-semibold text-accent">Step 2: Select Group</h2>
              <p className="mt-1 text-sm text-foreground/80">Pick the community that fits you. You can change it later.</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {(
                  [
                    { key: "student", title: "Students", desc: "Zero-deposit SIM + WiFi" },
                    { key: "professional", title: "Young Pros", desc: "Mobile + broadband + energy" },
                    { key: "family", title: "Families", desc: "Home bundle + green tariff" },
                  ] as { key: Group; title: string; desc: string }[]
                ).map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => setGroup(opt.key)}
                    aria-pressed={group === opt.key}
                    className={`rounded-xl border p-4 text-left transition ${
                      group === opt.key ? "border-primary bg-primary/5" : "border-border bg-white hover:bg-muted/40"
                    }`}
                  >
                    <div className="font-semibold text-accent">{opt.title}</div>
                    <div className="text-sm text-foreground/70">{opt.desc}</div>
                  </button>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between">
                <button onClick={() => setStep(1)} className="rounded-lg border border-border bg-white px-5 py-2">Back</button>
                <button
                  disabled={!canNext2}
                  onClick={() => setStep(3)}
                  className="rounded-lg bg-primary px-5 py-2 text-white shadow-brand disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            </section>
          )}

          {step === 3 && (
            <section aria-labelledby="verify-id">
              <h2 id="verify-id" className="text-xl font-semibold text-accent">Step 3: Verify ID</h2>
              <p className="mt-1 text-sm text-foreground/80">Upload a student card, proof of address or employee ID. We verify for eligibility and discounts.</p>
              <div className="mt-4">
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    setFileInfo(f ? `${f.name} • ${(f.size / 1024 / 1024).toFixed(2)} MB` : "");
                  }}
                  className="block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-primary file:px-4 file:py-2 file:text-white file:shadow-brand"
                />
                {fileInfo && (
                  <p className="mt-2 text-sm text-foreground/70">Selected: {fileInfo}</p>
                )}
              </div>
              <div className="mt-6 flex items-center justify-between">
                <button onClick={() => setStep(2)} className="rounded-lg border border-border bg-white px-5 py-2">Back</button>
                <button
                  disabled={!canFinish}
                  onClick={() => {
                    const user = { name, email, phone, group };
                    localStorage.setItem("sss_user", JSON.stringify(user));
                    setStep(4);
                  }}
                  className="rounded-lg bg-primary px-5 py-2 text-white shadow-brand disabled:opacity-50"
                >
                  Finish
                </button>
              </div>
            </section>
          )}

          {step === 4 && (
            <section aria-labelledby="confirmed">
              <h2 id="confirmed" className="text-xl font-semibold text-accent">Welcome aboard!</h2>
              <p className="mt-1 text-sm text-foreground/80">Your account is set. Use the QR/eSIM details below to activate your mobile plan.</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-muted/40 p-4">
                  <p className="text-sm text-foreground/60">eSIM Activation Code</p>
                  <p className="mt-1 select-all text-lg font-bold text-accent">SSS-ESIM-{Math.random().toString(36).slice(2, 8).toUpperCase()}</p>
                  <p className="mt-2 text-xs text-foreground/60">Scan in your phone settings to add a mobile plan.</p>
                </div>
                <div className="rounded-xl border border-border bg-muted/40 p-4">
                  <p className="text-sm text-foreground/60">QR for broadband setup</p>
                  <div className="mt-2 grid grid-cols-5 gap-1">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <span key={i} className={`block aspect-square ${i % 3 === 0 ? "bg-accent" : "bg-white"} border border-muted`} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <button onClick={() => navigate("/portal")} className="rounded-lg bg-secondary px-5 py-2 text-white">Go to Portal</button>
                <button onClick={() => navigate("/")} className="rounded-lg border border-border bg-white px-5 py-2">Back to Home</button>
              </div>
            </section>
          )}
        </div>

        <p className="mt-4 text-xs text-foreground/60">We comply with GDPR. Data is encrypted in transit and at rest. Verification is used only to confirm eligibility and discounts.</p>
      </div>
    </main>
  );
}

function Progress({ step }: { step: number }) {
  return (
    <div className="grid grid-cols-4 items-center gap-3">
      {[
        { n: 1, label: "Create Account" },
        { n: 2, label: "Select Group" },
        { n: 3, label: "Verify ID" },
        { n: 4, label: "Confirmation" },
      ].map((s) => (
        <div key={s.n} className="flex items-center gap-2">
          <div
            className={`h-2 w-full rounded ${step >= s.n ? "bg-primary" : "bg-muted"}`}
            aria-hidden
          />
          <span className={`hidden text-xs sm:inline ${step >= s.n ? "text-accent" : "text-foreground/60"}`}>{s.label}</span>
        </div>
      ))}
    </div>
  );
}
