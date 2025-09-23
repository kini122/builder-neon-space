export default function Privacy() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold text-accent">Privacy Policy</h1>
      <div className="mt-4 prose max-w-none">
        <p>We comply with GDPR. We collect only what we need to provide the service and improve the experience.</p>
        <ul>
          <li>Data categories: account details, verification documents, usage metrics, and support interactions.</li>
          <li>Processing bases: contract, consent (marketing), and legitimate interest (fraud prevention).</li>
          <li>You can request data export or deletion by contacting privacy@switchsmartsave.com.</li>
        </ul>
      </div>
    </main>
  );
}
