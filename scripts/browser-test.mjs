import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
import { chromium } from "playwright";
const browser = await chromium.launch({
  headless: true,
  ...(process.env.BROWSER_CHANNEL
    ? { channel: process.env.BROWSER_CHANNEL }
    : {}),
});
const page = await browser.newPage({ viewport: { width: 1280, height: 1000 } });
const base = process.env.BASE_URL || "http://127.0.0.1:3005";
const errors = [];
const checked = [];
page.on("pageerror", (error) => errors.push(error.message));
const cases = [
  ["/", "Your future."],
  ["/plan", "A goal becomes a path."],
  ["/opportunities", "Every path starts somewhere."],
  ["/opportunities/1", "Junior Front-End Developer"],
  ["/opportunities/2", "Graduate Software Engineer"],
  ["/opportunities/3", "Web Development Intern"],
  ["/dashboard", "Keep the journey in view."],
  ["/dashboard/applications", "Keep the journey in view."],
];
for (const [route, heading] of cases) {
  const response = await page.goto(base + route, { waitUntil: "networkidle" });
  assert.equal(response.status(), 200, route);
  assert.ok(
    (await page.getByRole("heading", { level: 1 }).innerText()).includes(
      heading,
    ),
    route,
  );
  assert.equal(
    await page
      .getByRole("navigation", { name: "Main navigation" })
      .getByRole("link")
      .count(),
    4,
  );
  assert.ok(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
    route,
  );
  checked.push(route);
}
const response = await page.goto(base + "/opportunities/999", {
  waitUntil: "networkidle",
});
assert.equal(response.status(), 404);
await page
  .getByRole("heading", { name: "Opportunity not found", exact: true })
  .waitFor();
await page.screenshot({
  path: "docs/evidence/opportunity-not-found.png",
  fullPage: true,
  caret: "initial",
});
await page.getByRole("link", { name: "Back to opportunities" }).click();
await page.waitForURL(base + "/opportunities");
for (const title of [
  "Junior Front-End Developer",
  "Graduate Software Engineer",
  "Web Development Intern",
]) {
  await page
    .getByRole("link", { name: `View opportunity: ${title}`, exact: true })
    .click();
  await page.getByRole("heading", { name: title, exact: true }).waitFor();
  assert.ok((await page.locator(".role-description").innerText()).length > 50);
  await page
    .getByRole("link", { name: "Back to opportunities", exact: false })
    .click();
  await page.waitForURL(base + "/opportunities");
}
await page
  .getByRole("navigation", { name: "Main navigation" })
  .getByRole("link", { name: "Plan", exact: true })
  .click();
await page.waitForURL(base + "/plan");
assert.equal(await page.locator(".milestone").count(), 3);
for (const milestone of await page.locator(".milestone").all())
  assert.ok((await milestone.locator("li").count()) >= 2);
await page.getByRole("link", { name: "Back home", exact: false }).click();
await page.waitForURL(base + "/");
await page
  .getByRole("link", { name: "Explore the plan", exact: false })
  .click();
await page.waitForURL(base + "/plan");
await page
  .getByRole("navigation", { name: "Main navigation" })
  .getByRole("link", { name: "Home", exact: true })
  .click();
await page.waitForURL(base + "/");
await page
  .getByRole("link", { name: "See opportunities", exact: false })
  .click();
await page.waitForURL(base + "/opportunities");
await page
  .getByRole("navigation", { name: "Main navigation" })
  .getByRole("link", { name: "Dashboard", exact: false })
  .click();
await page.waitForURL(base + "/dashboard");
const total = Number(await page.getByTestId("application-total").innerText());
const sharedNav = await page
  .getByTestId("dashboard-navigation")
  .elementHandle();
await page
  .getByRole("navigation", { name: "Dashboard navigation" })
  .getByRole("link", { name: "Applications", exact: false })
  .click();
await page.waitForURL(base + "/dashboard/applications");
assert.equal(
  await sharedNav.evaluate((node) => node.isConnected),
  true,
  "nested layout navigation persists",
);
assert.equal(await page.getByTestId("application-card").count(), total);
assert.equal(total, 2);
assert.match(await page.locator(".applications-list").innerText(), /Applied/);
assert.match(
  await page.locator(".applications-list").innerText(),
  /Under review/,
);
await page
  .getByRole("navigation", { name: "Dashboard navigation" })
  .getByRole("link", { name: "Overview", exact: false })
  .click();
await page.waitForURL(base + "/dashboard");
assert.ok(await sharedNav.evaluate((node) => node.isConnected));
const font = await page.evaluate(async () => {
  await document.fonts.ready;
  return {
    family: getComputedStyle(document.body).fontFamily,
    loaded: [...document.fonts].some(
      (face) => face.status === "loaded" && face.family.includes("Manrope"),
    ),
  };
});
assert.ok(font.family.includes("Manrope"));
assert.ok(font.loaded);
for (const [route, name] of [
  ["/", "home"],
  ["/plan", "plan"],
  ["/opportunities", "opportunities"],
  ["/opportunities/1", "opportunity-detail"],
  ["/dashboard", "dashboard"],
  ["/dashboard/applications", "applications"],
]) {
  await page.goto(base + route, { waitUntil: "networkidle" });
  await page.screenshot({
    path: `docs/evidence/${name}.png`,
    fullPage: true,
    caret: "initial",
  });
  const destinations = await page
    .getByRole("link")
    .evaluateAll((nodes) =>
      nodes
        .map((node) => node.getAttribute("href"))
        .filter((href) => href?.startsWith("/")),
    );
  for (const destination of new Set(destinations)) {
    const linked = await page.request.get(base + destination);
    assert.equal(linked.status(), 200, `${route} -> ${destination}`);
  }
}
await page.setViewportSize({ width: 360, height: 800 });
for (const [route, name] of [
  ["/", "home"],
  ["/plan", "plan"],
  ["/opportunities", "opportunities"],
  ["/opportunities/1", "opportunity-detail"],
  ["/dashboard", "dashboard"],
  ["/dashboard/applications", "applications"],
]) {
  await page.goto(base + route, { waitUntil: "networkidle" });
  assert.ok(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
    `360px ${route}`,
  );
  await page.screenshot({
    path: `docs/evidence/mobile-${name}.png`,
    fullPage: true,
    caret: "initial",
  });
}
await page.goto(base + "/", { waitUntil: "networkidle" });
await page.keyboard.press("Tab");
assert.equal(await page.locator(":focus").innerText(), "Skip to content");
assert.equal(
  await page
    .locator(":focus")
    .evaluate((node) => getComputedStyle(node).outlineStyle),
  "solid",
);
await page.keyboard.press("Tab");
await page.keyboard.press("Tab");
assert.equal(await page.locator(":focus").innerText(), "Home");
await page.keyboard.press("Tab");
assert.equal(await page.locator(":focus").innerText(), "Plan");
await page.keyboard.press("Enter");
await page.waitForURL(base + "/plan");
assert.deepEqual(errors, []);
const results = {
  status: "PASS",
  directRoutes: checked,
  unknownOpportunityStatus: 404,
  applicationTotal: total,
  nestedLayoutPersists: true,
  font,
  mobileWidth: 360,
  pageErrors: errors,
  checks:
    "Direct routes; opportunity links/content; all internal destinations; home CTAs; three milestones; dashboard navigation persistence; matching sample total; Google Font; keyboard focus and Enter; 360px overflow.",
};
await writeFile(
  "docs/evidence/browser-results.json",
  JSON.stringify(results, null, 2) + "\n",
);
console.log(JSON.stringify(results, null, 2));
await browser.close();
