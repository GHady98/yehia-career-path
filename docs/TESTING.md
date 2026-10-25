# Routing test record

Date: 25 October 2026. Environment: Next.js 16.4.3 / React 19.3.0, headless Microsoft Edge with Playwright. Tests were performed by the coding agent; no student or third-party testing is claimed.

## Workspace preparation

- Created a new standalone project, separate from Assignments 2 and 3.
- Created initial starter commit `2d379f0` before assignment pages.
- Switched to `assignment-1-routing` before feature work.
- Ran the starter with `npm run dev -- --hostname 127.0.0.1 --port 3005`; browser opened and found its Next.js starter heading. Evidence: `evidence/starter.png`.
- Public GitHub publication remains incomplete. See README.md for the actual connector/account/browser limitation. This setup requirement was not silently marked complete.

## Commands

| Command                                              | Actual result                                                                                                                        | Result |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| `npm ci`                                             | Installed locked dependencies; npm reported no known vulnerabilities at that time.                                                   | PASS   |
| `npm run lint`                                       | No diagnostics.                                                                                                                      | PASS   |
| `npm run build`                                      | Compiled and type-checked. Listed all static pages and three generated dynamic opportunity records. Manrope downloaded successfully. | PASS   |
| `npm run test:browser` with `BROWSER_CHANNEL=msedge` | Required routing and rendering checks passed. No browser page errors.                                                                | PASS   |

During staged file creation the development server briefly reported the stylesheet was missing before that file was written. It compiled once the file was present. Final verification uses the complete source tree and the production build.

## Acceptance checks

| Check                | Expected                                                                            | Actual                                                                                                              | Result                  |
| -------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Home                 | Yehia introduction, two-month goal, plan and opportunity links.                     | Copy is visible; both hero links navigate to the correct destinations. Goal explicitly avoids promising employment. | PASS                    |
| Plan                 | Prepare, Practice, Apply, descriptions, at least two actions each, home navigation. | Three milestones with three actions each; Back home and root navigation tested.                                     | PASS                    |
| Opportunities        | Three exact supplied sample records with individual links.                          | Three cards; every View opportunity link opened its own title and description.                                      | PASS                    |
| Dynamic details      | Await params, matching title/company/location/description.                          | IDs 1, 2, and 3 render distinct supplied roles. Code uses awaited string ID and local find.                         | PASS                    |
| Unknown ID           | Friendly message and safe return link.                                              | `/opportunities/999` returned HTTP 404 and Opportunity not found; return link worked.                               | PASS                    |
| Dashboard summary    | Total matches sample applications.                                                  | Summary total 2 equals two rendered application cards.                                                              | PASS                    |
| Applications         | At least two roles, company, status.                                                | Cedar Digital / Applied and Code Harbor / Under review visible.                                                     | PASS                    |
| Shared root layout   | Four working navigation links on every page.                                        | Four links checked on all eight valid concrete URLs; internal destinations returned 200.                            | PASS                    |
| Nested layout        | Overview and Applications navigation stays mounted.                                 | Retained DOM handle remained connected while moving between dashboard child pages.                                  | PASS                    |
| Google Font          | Font configured via next/font/google and applied.                                   | Computed body font family includes Manrope; document font set reports Manrope loaded.                               | PASS                    |
| Small screen         | No horizontal overflow and readable content at 360px.                               | Checked home, plan, list, detail, dashboard, applications; screenshots inspected.                                   | PASS                    |
| Keyboard             | Focus visible; navigation activated with Enter.                                     | Skip link had solid focus outline; Tab reached Plan and Enter navigated correctly.                                  | PASS                    |
| Component boundaries | No needless client state.                                                           | All authored pages/layouts remain Server Components; navigation uses Next Link.                                     | PASS, source inspection |
| Git branch           | Final code on assignment branch.                                                    | Local branch is assignment-1-routing.                                                                               | PASS locally            |
| Public submission    | Published and accessible on GitHub.                                                 | No repository/remote created or push performed.                                                                     | INCOMPLETE              |

The test visits each valid route directly and checks the core journey through links. It also requests every internal link destination discovered on the six page types. Desktop and mobile evidence is saved for each page type, including the dynamic detail page and unknown-ID handling. These checks do not constitute a full accessibility audit or cross-browser certification.

## Evidence

- `evidence/browser-results.json`: exact automated result, routes, total, font, errors.
- `evidence/home.png`, `evidence/mobile-home.png`
- `evidence/plan.png`, `evidence/mobile-plan.png`
- `evidence/opportunities.png`, `evidence/mobile-opportunities.png`
- `evidence/opportunity-detail.png`, `evidence/mobile-opportunity-detail.png`
- `evidence/dashboard.png`, `evidence/mobile-dashboard.png`
- `evidence/applications.png`, `evidence/mobile-applications.png`
- `evidence/opportunity-not-found.png`

## Reproduce

```sh
npm ci
npm run lint
npm run build
npm run start -- --port 3005
```

In another terminal run `npm run test:browser` after installing a Playwright browser. With installed Edge, set `$env:BROWSER_CHANNEL = 'msedge'` in PowerShell first. Set `BASE_URL` to test another local port.

Final refinement: on 360px screens application status badges now occupy their own line, leaving more width for role titles. Lint, production build, and the full browser routing suite passed again after this CSS change. A targeted credential-pattern scan found no matches.
