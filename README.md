# Yehia’s Career Path

TECHTALKS · Assignment 1 · Routing System

Author: **Ghady Nazha** · GitHub: **GHady98**.

A standalone Next.js 16 App Router website that helps a fictional graduate remember his goal, follow a practical plan, compare sample opportunities, and review fictional applications. The two-month goal is a direction, not a guarantee of employment.

## Run locally

Use Node.js 22.18+ or Node.js 24 with npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000, or the address printed by Next.js. For a production preview:

```sh
npm run build
npm run start -- --port 3005
```

## Required routes

| Page                        | URL                                                        | Source                                |
| --------------------------- | ---------------------------------------------------------- | ------------------------------------- |
| Starting point              | `/`                                                        | `app/page.tsx`                        |
| Three-stage plan            | `/plan`                                                    | `app/plan/page.tsx`                   |
| Opportunities               | `/opportunities`                                           | `app/opportunities/page.tsx`          |
| Dynamic opportunity details | `/opportunities/1`, `/opportunities/2`, `/opportunities/3` | `app/opportunities/[id]/page.tsx`     |
| Dashboard overview          | `/dashboard`                                               | `app/dashboard/page.tsx`              |
| Applications                | `/dashboard/applications`                                  | `app/dashboard/applications/page.tsx` |

An unknown opportunity, such as `/opportunities/999`, uses a friendly scoped not-found page with a link back. There are six required page types; the dynamic page serves the three supplied records.

## Shared foundation

`app/layout.tsx` owns the document's html/body, global Home/Plan/Opportunities/Dashboard navigation, footer, and Manrope Google Font through `next/font/google`. Its generated class is applied to body without a CSS font-family override. Next.js downloads/self-hosts the font; Google font access is needed when building from a fresh environment.

`app/dashboard/layout.tsx` owns the dashboard heading and Overview/Applications navigation. Both dashboard pages render in its children slot. It adds no second html or body.

All authored pages and layouts are Server Components. Internal links use `Link` from `next/link`. No client directive, state hook, database, authentication, job API, form, or persistence is needed.

`data/career.ts` contains the exact three fictional opportunities from the assignment, three planning milestones with three actions each, and two fictional applications. The dashboard derives its total from the same applications array used by the list.

## Explain the choices

These are agent-prepared explanation notes. Review them and put the explanations in your own words before submission; they are not claimed as your personal observations.

### 1. Why await params?

Next.js supplies dynamic route params as a Promise. The async Server page uses `const { id } = await params` to obtain the resolved ID before searching the local array. This waits for route information, not a job database request.

### 2. Why is the route ID a string?

A URL segment such as the `1` in `/opportunities/1` is text. The data therefore stores IDs as strings too, so `opportunity.id === id` can match without number conversion. A missing match is checked before any record properties are read.

### 3. Layout versus dashboard pages

The shared dashboard title and Overview/Applications links belong in `app/dashboard/layout.tsx` so they stay present across both child pages. The summary cards and encouraging message belong in the overview page; the application records and statuses belong in the applications page. Root-level navigation and the document structure belong in the root layout. The browser test retained a handle to the nested navigation and verified that it stayed connected while navigating between dashboard pages.

## Verification

```sh
npm run lint
npm run build
```

For the browser suite, run the app on port 3005, install Playwright Chromium once with `npx playwright install chromium`, then run `npm run test:browser` in another terminal. With installed Edge in PowerShell:

```powershell
$env:BROWSER_CHANNEL = 'msedge'
npm run test:browser
```

`BASE_URL` can select another local port. The suite checks direct routes, correct opportunity contents, all internal link destinations, navigation through the core journey, persistent dashboard layout, matching counts, loaded Google Font, keyboard activation, and 360px layout. It regenerates screenshots and a JSON result in docs/evidence/.

See [actual testing record](docs/TESTING.md) and [submission draft](docs/SUBMISSION.md). No student-authored reflections, public upload, or submission email are claimed.

## Git and submission status

Branch: `assignment-1-routing`. Starter commit: `2d379f0`, created before assignment pages. Starter was opened successfully before implementation, with a screenshot saved in docs/evidence/starter.png. The branch was created before assignment features.

Publication history: a public repository was not established before coding: the available GitHub connector did not expose repository creation, and the chosen account differed from the connected account. The user selected GHady98. A subsequent browser publication attempt stopped because the computer-use runtime could not verify Chrome's current URL. That earlier attempt made no remote changes. A later authorized run successfully created the public repository and pushed the assignment branch.

Ghady Nazha supplied the full name and authorized publication and email submission. The explanatory notes remain labelled AI-assisted; personal review is still the student’s responsibility.

## Version and scope

Next.js 16.4.3, React 19.3.0, TypeScript, plain CSS, and local sample data. No real jobs or submitted applications are represented. Generated dependencies/build output and environment files are ignored by Git.


## Publication update — 25 October 2026

Author: **Ghady Nazha**. Public repository: [GHady98/yehia-career-path](https://github.com/GHady98/yehia-career-path). Assignment branch: [assignment-1-routing](https://github.com/GHady98/yehia-career-path/tree/assignment-1-routing). Existing milestone history is preserved. Publication is complete; see docs/SUBMISSION.md for the email record and remaining coursework limitations.
