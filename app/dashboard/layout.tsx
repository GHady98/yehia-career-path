import Link from "next/link";
export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="dashboard-shell">
      <div className="page-intro">
        <p className="eyebrow">CHAPTERS 05 & 06 / THE DASHBOARD</p>
        <h1>
          Keep the journey in view<span>.</span>
        </h1>
        <p>
          A little perspective on where Yehia has applied and what comes next.
          These are sample records, not a live tracker.
        </p>
      </div>
      <nav
        className="dashboard-nav"
        aria-label="Dashboard navigation"
        data-testid="dashboard-navigation"
      >
        <Link href="/dashboard">
          Overview <span aria-hidden="true">↗</span>
        </Link>
        <Link href="/dashboard/applications">
          Applications <span aria-hidden="true">↗</span>
        </Link>
      </nav>
      <div className="dashboard-content">{children}</div>
    </section>
  );
}
