import { expect, test } from "@playwright/test";

const demoModes = [
  "Playlist",
  "Single track with lyrics",
  "Single track",
  "Mini player",
];

test("links to both source-built demo versions", async ({ page }) => {
  await page.goto("/docs/");

  await expect(
    page.getByRole("link", { name: "Svelte component" })
  ).toHaveAttribute("href", "./svelte/");
  await expect(
    page.getByRole("link", { name: "Web Component" })
  ).toHaveAttribute("href", "./web-component/");
  await expect(page.locator("html")).toHaveCSS(
    "background-color",
    "rgb(255, 255, 255)"
  );
});

test("renders the Svelte component demo", async ({ page }) => {
  await page.goto("/docs/svelte/");

  await expect(page.locator(".badge")).toHaveText("Svelte component");
  await expect(page.locator(".demo-card h2")).toHaveText(demoModes);
  await expect(page.locator(".aplayer")).toHaveCount(4);
  await expect(page.locator(".aplayer-title").first()).toHaveText("光るなら");
  await expect(page.locator('[data-mode="mini"] .aplayer')).toHaveClass(
    /aplayer-narrow/
  );
  await expect(page.locator("html")).toHaveCSS(
    "background-color",
    "rgb(255, 255, 255)"
  );
});

test("renders the Web Component demo", async ({ page }) => {
  await page.goto("/docs/web-component/");

  await expect(page.locator(".badge")).toHaveText("Web Component");
  await expect(page.locator(".demo-card h2")).toHaveText(demoModes);
  await expect(page.locator("s-aplayer")).toHaveCount(4);
  await expect(page.locator(".aplayer")).toHaveCount(4);
  await expect(page.locator(".aplayer-title").first()).toHaveText("光るなら");
  await expect(page.locator('[data-mode="mini"] .aplayer')).toHaveClass(
    /aplayer-narrow/
  );
  await expect(page.locator("html")).toHaveCSS(
    "background-color",
    "rgb(255, 255, 255)"
  );
});
