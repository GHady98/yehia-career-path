import Link from "next/link";
import { milestones } from "@/data/career";
export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="tiny-dot" /> A NEW CHAPTER STARTS HERE
          </p>
          <h1>
            Your future.
            <br />A little <span>clearer.</span>
          </h1>
          <p className="hero-description">
            Meet Yehia, a Computer Science graduate from the Lebanese
            University, First Branch. He has the ambition. Now he needs a path.
          </p>
          <div className="hero-actions">
            <Link href="/plan" className="button button-primary">
              Explore the plan <span aria-hidden="true">→</span>
            </Link>
            <Link href="/opportunities" className="button button-secondary">
              See opportunities <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <p className="hero-footnote">
            A two-month goal. Practical steps. Room to grow.
          </p>
        </div>
        <div
          className="journey-art"
          aria-label="The journey: prepare, practice, apply"
        >
          <div className="art-caption">
            <span>YOUR NEXT CHAPTER</span>
            <span aria-hidden="true">✦</span>
          </div>
          <div className="journey-stops">
            {milestones.map((step, index) => (
              <div className={`journey-stop stop-${index}`} key={step.title}>
                <span className="stop-number">0{index + 1}</span>
                <div>
                  <strong>{step.title}</strong>
                  <small>{step.subtitle}</small>
                </div>
                <span className="stop-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            ))}
          </div>
          <div className="art-note">
            <span aria-hidden="true">↗</span>
            <p>
              You don’t need every answer.
              <br />
              <strong>Just your next step.</strong>
            </p>
          </div>
          <span className="art-orbit orbit-one" aria-hidden="true" />
          <span className="art-orbit orbit-two" aria-hidden="true" />
        </div>
      </section>
      <section className="goal-strip" aria-labelledby="goal-title">
        <span className="goal-icon" aria-hidden="true">
          ◎
        </span>
        <div>
          <p className="eyebrow">THE GOAL</p>
          <h2 id="goal-title">Work toward a first role in two months.</h2>
          <p>
            A direction to work toward, not a promise of a job. Focus on the
            things you can move forward today.
          </p>
        </div>
        <span className="goal-tag">CLARITY OVER CHAOS</span>
      </section>
      <section className="chapters-section" aria-labelledby="chapters-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">LESS SCROLLING. MORE DIRECTION.</p>
            <h2 id="chapters-title">A place for each next step.</h2>
          </div>
          <span className="quiet-label">YOUR JOURNEY, ORGANIZED</span>
        </div>
        <div className="chapter-grid">
          <Link className="chapter-card" href="/plan">
            <span className="chapter-number">01 / PLAN</span>
            <h3>Turn a goal into a plan.</h3>
            <p>Prepare, practise, and apply with a clear set of actions.</p>
            <span className="chapter-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
          <Link className="chapter-card" href="/opportunities">
            <span className="chapter-number">02 / EXPLORE</span>
            <h3>Find a place to start.</h3>
            <p>Compare three fictional roles and take a closer look.</p>
            <span className="chapter-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
          <Link className="chapter-card" href="/dashboard">
            <span className="chapter-number">03 / REFLECT</span>
            <h3>See the bigger picture.</h3>
            <p>Review sample applications and keep the journey in view.</p>
            <span className="chapter-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
