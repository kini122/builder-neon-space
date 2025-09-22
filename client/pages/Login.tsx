import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const existing = localStorage.getItem("sss_user");
    if (existing) navigate("/portal");
  }, [navigate]);

  return (
    <main className="container py-12">
      <div className="mx-auto max-w-md rounded-2xl border border-border bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-accent">Member Login</h1>
        <p className="mt-2 text-sm text-foreground/80">
          Access your dashboard, savings tracker and tools.
        </p>

        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setError("");
            if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
              setError("Enter a valid email address");
              return;
            }
            if (password.length < 6) {
              setError("Password must be at least 6 characters");
              return;
            }
            const user = { email };
            localStorage.setItem("sss_user", JSON.stringify(user));
            navigate("/portal");
          }}
        >
          <div>
            <label className="text-sm font-semibold text-accent">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-accent">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button className="w-full rounded-lg bg-primary px-4 py-2 font-medium text-white shadow-brand transition hover:-translate-y-0.5">
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-foreground/70">
          New here? <Link to="/onboarding" className="text-primary underline">Join now</Link>
        </p>
      </div>
    </main>
  );
}
