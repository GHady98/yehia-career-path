import Link from "next/link";
import { opportunities } from "@/data/career";
export default function OpportunityCard({
  opportunity,
  index,
}: {
  opportunity: (typeof opportunities)[number];
  index: number;
}) {
  return (
    <article className="opportunity-card">
      <div className="card-top">
        <span className={`company-logo logo-${index}`} aria-hidden="true">
          {opportunity.company
            .split(" ")
            .map((word) => word[0])
            .join("")}
        </span>
        <span className="location">{opportunity.location}</span>
      </div>
      <p className="company-name">{opportunity.company}</p>
      <h2>{opportunity.title}</h2>
      <p className="opportunity-description">{opportunity.description}</p>
      <Link
        className="text-link"
        href={`/opportunities/${opportunity.id}`}
        aria-label={`View opportunity: ${opportunity.title}`}
      >
        View opportunity <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}
