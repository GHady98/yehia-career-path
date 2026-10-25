import type { Metadata } from "next";
import Link from "next/link";
import { milestones } from "@/data/career";
export const metadata: Metadata = { title: "The plan" };
export default function Plan() {
  return (
    <>
      <div className="page-intro">
        <p className="eyebrow">CHAPTER 02 / THE PLAN</p>
        <h1>
          A goal becomes a path<span>.</span>
        </h1>
        <p>
          Three stages to bring a little structure to the next two months. Start
          small, learn as you go, and make space to adjust.
        </p>
      </div>
      <div className="milestone-list">
        {milestones.map((milestone, index) => (
          <section className="milestone" key={milestone.title}>
            <div className="milestone-marker">
              <span>0{index + 1}</span>
              <small>{milestone.subtitle}</small>
            </div>
            <div className="milestone-content">
              <h2>{milestone.title}</h2>
              <p>{milestone.description}</p>
              <ul>
                {milestone.actions.map((action) => (
                  <li key={action}>
                    <span aria-hidden="true">↗</span>
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
      <div className="page-bottom-links">
        <Link className="text-link" href="/">
          ← Back home
        </Link>
        <Link className="button button-primary" href="/opportunities">
          Explore opportunities <span aria-hidden="true">→</span>
        </Link>
      </div>
    </>
  );
}
