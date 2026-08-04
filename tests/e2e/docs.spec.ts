import { expect, test } from "@playwright/test";

test("links to both source-built demo versions", async ({ page }) => {
  await page.goto("/docs/");

  await expect(
    page.getByRole("link", { name: "Svelte component" })
  ).toHaveAttribute("href", "./svelte/");
  await expect(
    page.getByRole("link", { name: "Web Component" })
  ).toHaveAttribute("href", "./web-component/");
});

test("renders the Svelte component demo", async ({ page }) => {
  await page.goto("/docs/svelte/");

  await expect(page.locator(".badge")).toHaveText("Svelte component");
  await expect(page.locator(".aplayer")).toHaveCount(2);
  await expect(page.locator(".aplayer-title").first()).toHaveText("光るなら");
});

test("renders the Web Component demo", async ({ page }) => {
  await page.goto("/docs/web-component/");

  await expect(page.locator(".badge")).toHaveText("Web Component");
  await expect(page.locator("s-aplayer")).toHaveCount(2);
  await expect(page.locator(".aplayer")).toHaveCount(2);
  await expect(page.locator(".aplayer-title").first()).toHaveText("光るなら");
});
