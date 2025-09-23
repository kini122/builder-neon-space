export default function FAQ() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold text-accent">
        Frequently Asked Questions
      </h1>
      <div className="mt-4 space-y-4 text-foreground/80">
        <div>
          <h2 className="font-semibold text-accent">How do savings work?</h2>
          <p>
            By joining a community group we negotiate better bundle rates. Use
            the calculator to estimate your saving.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-accent">Is there a deposit?</h2>
          <p>No deposit for eligible members. Verification is required.</p>
        </div>
        <div>
          <h2 className="font-semibold text-accent">
            Is the energy really green?
          </h2>
          <p>
            Yes. We use 100% renewable energy certificates under our Community
            Green Tariff.
          </p>
        </div>
      </div>
    </main>
  );
}
