import type { Metadata } from "next";
import Link from "next/link";
import { applications, opportunities } from "@/data/career";
export const metadata: Metadata = { title: "Applications" };
export default function Applications() {
  return (
    <>
      <div className="list-heading">
        <div>
          <h2>Your applications</h2>
          <p className="list-description">
            A simple record of the next steps you’ve taken.
          </p>
        </div>
        <span className="count-pill">
          {applications.length} sample applications
        </span>
      </div>
      <div className="applications-list">
        {applications.map((application) => {
          const opportunity = opportunities.find(
            (item) => item.id === application.opportunityId,
          )!;
          return (
            <article
              className="application-card"
              data-testid="application-card"
              key={application.id}
            >
              <div className="application-company-icon" aria-hidden="true">
                {opportunity.company
                  .split(" ")
                  .map((word) => word[0])
                  .join("")}
              </div>
              <div className="application-content">
                <p className="company-name">{opportunity.company}</p>
                <h3>
                  <Link href={`/opportunities/${opportunity.id}`}>
                    {opportunity.title}
                  </Link>
                </h3>
                <p>{opportunity.location}</p>
              </div>
              <span
                className={`status-pill ${application.status === "Applied" ? "status-applied" : "status-review"}`}
              >
                {application.status}
              </span>
            </article>
          );
        })}
      </div>
      <p className="sample-note">
        These are static fictional applications. No form has been submitted and
        statuses cannot be changed.
      </p>
      <div className="page-bottom-links">
        <Link className="text-link" href="/dashboard">
          ← Back to overview
        </Link>
        <Link className="text-link" href="/opportunities">
          Explore opportunities ↗
        </Link>
      </div>
    </>
  );
}
