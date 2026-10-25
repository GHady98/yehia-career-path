import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { opportunities } from "@/data/career";
type Props = { params: Promise<{ id: string }> };
export function generateStaticParams() {
  return opportunities.map((opportunity) => ({ id: opportunity.id }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const opportunity = opportunities.find((item) => item.id === id);
  return { title: opportunity?.title ?? "Opportunity not found" };
}
export default async function OpportunityDetails({ params }: Props) {
  const { id } = await params;
  const opportunity = opportunities.find((item) => item.id === id);
  if (!opportunity) notFound();
  return (
    <>
      <div className="detail-breadcrumb">
        <Link href="/opportunities">Opportunities</Link>
        <span aria-hidden="true">/</span>
        <span>A closer look</span>
      </div>
      <article className="detail-card">
        <div className="detail-banner">
          <p className="eyebrow">CHAPTER 04 / A CLOSER LOOK</p>
          <span className="location">{opportunity.location}</span>
        </div>
        <p className="company-name">{opportunity.company}</p>
        <h1>{opportunity.title}</h1>
        <dl className="role-facts">
          <div>
            <dt>Company</dt>
            <dd>{opportunity.company}</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>{opportunity.location}</dd>
          </div>
          <div>
            <dt>Opportunity</dt>
            <dd>0{opportunity.id} / fictional role</dd>
          </div>
        </dl>
        <div className="role-description">
          <h2>What you’d work on</h2>
          <p>{opportunity.description}</p>
        </div>
        <div className="role-reflection">
          <span aria-hidden="true">✦</span>
          <p>
            Before applying to a real role, think about which projects show you
            can do this work—and what you’d like to learn.
          </p>
        </div>
        <p className="sample-note">
          Fictional opportunity for this assignment. There is no application
          form or live vacancy.
        </p>
      </article>
      <div className="page-bottom-links">
        <Link className="text-link" href="/opportunities">
          ← Back to opportunities
        </Link>
        <Link className="text-link" href="/plan">
          Review the plan ↗
        </Link>
      </div>
    </>
  );
}
