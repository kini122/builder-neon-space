export default function Cookies() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold text-accent">Cookie Policy</h1>
      <div className="mt-4 prose max-w-none">
        <p>
          We use cookies to keep you logged in, remember preferences and measure
          site performance. You can opt out of non‑essential cookies in your
          browser settings.
        </p>
        <ul>
          <li>Essential: authentication, security, load balancing.</li>
          <li>Analytics: aggregated usage with anonymised IP.</li>
          <li>Marketing: used only with consent.</li>
        </ul>
      </div>
    </main>
  );
}
