import type { Metadata } from "next";
import OpportunityCard from "@/components/opportunity-card";
import { opportunities } from "@/data/career";
export const metadata: Metadata = { title: "Opportunities" };
export default function Opportunities() {
  return (
    <>
      <div className="page-intro">
        <p className="eyebrow">CHAPTER 03 / THE OPPORTUNITIES</p>
        <h1>
          Every path starts somewhere<span>.</span>
        </h1>
        <p>
          Take a closer look at a few places Yehia could begin. Compare the
          roles, the teams, and the work.
        </p>
      </div>
      <div className="list-heading">
        <h2>Opportunities to explore</h2>
        <span className="count-pill">{opportunities.length} sample roles</span>
      </div>
      <div className="opportunity-grid">
        {opportunities.map((opportunity, index) => (
          <OpportunityCard
            key={opportunity.id}
            opportunity={opportunity}
            index={index}
          />
        ))}
      </div>
      <p className="sample-note">
        For learning, not job hunting: these companies and opportunities are
        fictional assignment examples.
      </p>
    </>
  );
}
