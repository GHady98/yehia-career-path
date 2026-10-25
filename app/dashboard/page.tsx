import type { Metadata } from "next";
import Link from "next/link";
import { applications } from "@/data/career";
export const metadata: Metadata = { title: "Dashboard overview" };
export default function Dashboard() {
  const reviewCount = applications.filter(
    (application) => application.status === "Under review",
  ).length;
  return (
    <>
      <div className="list-heading">
        <h2>A little progress, every day.</h2>
        <span className="count-pill">Sample overview</span>
      </div>
      <div className="stats-grid">
        <article className="stat-card stat-featured">
          <p>Total applications</p>
          <strong data-testid="application-total">{applications.length}</strong>
          <span>Fictional applications in your list</span>
        </article>
        <article className="stat-card">
          <p>Under review</p>
          <strong>{reviewCount}</strong>
          <span>One step in the process</span>
        </article>
        <article className="stat-card">
          <p>Applied</p>
          <strong>
            {
              applications.filter(
                (application) => application.status === "Applied",
              ).length
            }
          </strong>
          <span>A beginning worth recognizing</span>
        </article>
      </div>
      <div className="encouragement-card">
        <div>
          <p className="eyebrow">KEEP MOVING FORWARD</p>
          <h3>Consistency is a good next step.</h3>
          <p>
            Keep practising, learn from each conversation, and follow up
            thoughtfully. A response can take time.
          </p>
        </div>
        <span aria-hidden="true">↗</span>
      </div>
      <div className="page-bottom-links">
        <Link href="/dashboard/applications" className="button button-primary">
          Review applications <span aria-hidden="true">→</span>
        </Link>
        <Link href="/opportunities" className="text-link">
          Explore opportunities ↗
        </Link>
      </div>
    </>
  );
}
