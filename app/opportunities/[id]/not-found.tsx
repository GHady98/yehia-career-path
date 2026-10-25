import Link from "next/link";
export default function OpportunityNotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow">A SMALL DETOUR</p>
      <span className="not-found-symbol" aria-hidden="true">
        ↗
      </span>
      <h1>Opportunity not found</h1>
      <p>
        That role isn’t part of this sample list. There are three other places
        to start.
      </p>
      <Link className="button button-primary" href="/opportunities">
        Back to opportunities <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}
