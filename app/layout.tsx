import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Link from "next/link";
import "./globals.css";
const manrope = Manrope({ subsets: ["latin"], display: "swap" });
export const metadata: Metadata = {
  title: {
    default: "Yehia’s Career Path",
    template: "%s · Yehia’s Career Path",
  },
  description:
    "A clear goal, a practical plan, and a few next steps for a graduate finding his way.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <header className="site-header">
          <Link
            href="/"
            className="brand"
            aria-label="Yehia’s Career Path home"
          >
            <span className="brand-icon" aria-hidden="true">
              y<span>↗</span>
            </span>
            <span>
              Yehia’s<span className="brand-light">career path</span>
            </span>
          </Link>
          <nav aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/plan">Plan</Link>
            <Link href="/opportunities">Opportunities</Link>
            <Link href="/dashboard" className="nav-dashboard">
              Dashboard <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </header>
        <main id="main" className="page-shell">
          {children}
        </main>
        <footer className="site-footer">
          <span className="footer-brand">
            One step closer<span>.</span>
          </span>
          <p>
            A fictional career journey. Sample opportunities and applications
            only.
          </p>
          <span className="course-label">TECHTALKS / 01</span>
        </footer>
      </body>
    </html>
  );
}
