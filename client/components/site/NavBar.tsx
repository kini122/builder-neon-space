import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { PhoneCall, Menu } from "lucide-react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (open) setOpen(false);
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur shadow" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-1.5 md:py-3">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fa975a65054c947b9ba8beddf8340c96e%2Fbf7efaedbffa48bba4c5aca76a2f0bf6?format=webp&width=120"
            alt="Switch Smart Save Logo"
            className="h-6 w-auto md:h-8"
          />
          <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-accent group-hover:text-primary transition-colors">
            Switch Smart Save
          </span>
        </Link>
        <nav
          className="hidden md:flex items-center gap-6 text-sm"
          aria-label="Primary"
        >
          <NavItem to="/" label="Home" />
          <NavItem to="/students" label="Students" />
          <NavItem to="/calculator" label="Calculator" />
          <NavItem to="/onboarding" label="Join" />
          <NavItem to="/portal" label="Portal" />
          <a
            href="#impact"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Impact
          </a>
        </nav>
        <button
          className="md:hidden inline-flex items-center rounded-md border border-border bg-white px-2 py-1 text-xs"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/"
            aria-label="WhatsApp"
            className="hidden md:inline-flex items-center gap-2 rounded-lg border border-border bg-white px-3 py-2 text-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            <PhoneCall className="h-4 w-4 text-green-600" /> WhatsApp
          </a>
          <Link
            to="/calculator"
            className="inline-flex items-center rounded-lg bg-primary px-3 py-1 text-xs md:text-sm md:px-4 md:py-2 text-white shadow-brand hover:scale-[1.02] active:scale-100 transition-transform"
          >
            Check Your Savings
          </Link>
        </div>
      </div>
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden border-t bg-white/95 backdrop-blur"
        >
          <div className="container grid gap-2 py-3 text-sm">
            <NavItem to="/" label="Home" />
            <NavItem to="/students" label="Students" />
            <NavItem to="/calculator" label="Calculator" />
            <NavItem to="/onboarding" label="Join" />
            <NavItem to="/portal" label="Portal" />
            <a
              href="#impact"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Impact
            </a>
            <a href="https://wa.me/" className="text-primary">
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `hover:text-primary transition-colors ${
          isActive ? "text-primary font-semibold" : "text-foreground/80"
        }`
      }
      end
    >
      {label}
    </NavLink>
  );
}
