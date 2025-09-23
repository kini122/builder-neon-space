import { ShieldCheck, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="container grid gap-10 py-12 md:grid-cols-4">
        <div className="space-y-3">
          <h3 className="text-accent font-semibold">Services</h3>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li><Link to="/onboarding" className="hover:text-primary">Mobile (eSIM)</Link></li>
            <li><Link to="/onboarding" className="hover:text-primary">Broadband</Link></li>
            <li><a href="#impact" className="hover:text-primary">Energy – Green Tariff</a></li>
            <li><Link to="/students" className="hover:text-primary">Insurance add‑ons</Link></li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-accent font-semibold">Community</h3>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li><Link to="/students" className="hover:text-primary">Students</Link></li>
            <li><Link to="/onboarding" className="hover:text-primary">Young Professionals</Link></li>
            <li><Link to="/onboarding" className="hover:text-primary">Families</Link></li>
            <li><a href="#partners" className="hover:text-primary">Partners</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-accent font-semibold">Support</h3>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
            <li><Link to="/support" className="hover:text-primary">Help Centre</Link></li>
            <li>
              WhatsApp: <a className="text-primary" href="https://wa.me/">Chat</a>
            </li>
            <li><a href="mailto:hello@switchsmartsave.com" className="hover:text-primary">Email: hello@switchsmartsave.com</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-accent font-semibold">Legal</h3>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li><Link to="/terms" className="hover:text-primary">Terms</Link></li>
            <li><Link to="/privacy" className="hover:text-primary">Privacy (GDPR)</Link></li>
            <li><Link to="/cookies" className="hover:text-primary">Cookies</Link></li>
            <li><a href="#regulatory" className="hover:text-primary">Regulatory: CRU & ComReg</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t bg-muted">
        <div className="container flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 text-sm text-foreground/80">
            <ShieldCheck className="h-5 w-5 text-primary" />
            Regulated by CRU & ComReg
          </div>
          <div className="flex items-center gap-3 text-sm text-foreground/80">
            <BadgeCheck className="h-5 w-5 text-secondary" /> GDPR Compliant
          </div>
          <p className="text-xs text-foreground/60">
            © {new Date().getFullYear()} Switch Smart Save. CRO IE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
