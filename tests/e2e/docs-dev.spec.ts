import { expect, test } from "@playwright/test";

const docsUrl = (path: string) => `http://localhost:5173${path}`;

test("serves both source modes from one Vite server", async ({ page }) => {
  await page.goto(docsUrl("/"));
  await expect(page).toHaveURL(docsUrl("/svelte/"));
  await expect(page.locator(".demo-card")).toHaveCount(4);
  await expect(page.locator(".aplayer")).toHaveCount(4);
  await expect(page.locator("s-aplayer")).toHaveCount(0);

  await page.goto(docsUrl("/web-component/"));
  await expect(page.locator(".demo-card")).toHaveCount(4);
  await expect(page.locator("s-aplayer")).toHaveCount(4);
  await expect(page.locator(".aplayer")).toHaveCount(4);
  const haveShadowRoots = await page
    .locator("s-aplayer")
    .evaluateAll((players) =>
      players.every((player) => Boolean(player.shadowRoot))
    );
  expect(haveShadowRoots).toBe(true);
});
