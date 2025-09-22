import { useEffect, useState } from "react";

const KEY = "sss_cookie_consent_v1";

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(localStorage.getItem(KEY) !== "1");
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 bg-accent text-accent-foreground">
      <div className="container flex flex-col items-start gap-3 py-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm">
          We use cookies to improve your experience, analyze traffic and comply with GDPR.
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => {
              localStorage.setItem(KEY, "1");
              setShow(false);
            }}
            className="rounded-md bg-secondary px-4 py-2 text-sm text-white shadow hover:opacity-90"
          >
            Accept
          </button>
          <a href="#" className="text-sm underline">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}
