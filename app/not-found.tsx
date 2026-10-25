import Link from "next/link";
export default function NotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow">A SMALL DETOUR</p>
      <h1>Page not found</h1>
      <p>Let’s find your way back to the next step.</p>
      <Link href="/" className="button button-primary">
        Back home →
      </Link>
    </section>
  );
}
