import { ShieldCheck, BadgeCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="container grid gap-10 py-12 md:grid-cols-4">
        <div className="space-y-3">
          <h3 className="text-accent font-semibold">Services</h3>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li>Mobile (eSIM)</li>
            <li>Broadband</li>
            <li>Energy – Green Tariff</li>
            <li>Insurance add‑ons</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-accent font-semibold">Community</h3>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li>Students</li>
            <li>Young Professionals</li>
            <li>Families</li>
            <li>Partners</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-accent font-semibold">Support</h3>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li>FAQ</li>
            <li>Help Centre</li>
            <li>
              WhatsApp: <a className="text-primary" href="https://wa.me/">Chat</a>
            </li>
            <li>Email: hello@switchsmartsave.com</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-accent font-semibold">Legal</h3>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li>Terms</li>
            <li>Privacy (GDPR)</li>
            <li>Cookies</li>
            <li>Regulatory: CRU & ComReg</li>
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
