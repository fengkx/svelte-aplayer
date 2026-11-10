import { expect, test } from "@playwright/test";

for (const mode of ["web-component", "svelte"]) {
  test(`dynamic SVG styles reach the rendered DOM: ${mode}`, async ({
    page,
  }) => {
    await page.goto(
      mode === "web-component"
        ? "/tests/e2e/fixture.html?dist"
        : "/docs/svelte/"
    );
    const player = page.locator(".aplayer").first();
    await player.waitFor();
    const loadingSvg = player.locator(".aplayer-loading-icon svg");
    await expect(loadingSvg).toHaveCSS("display", "block");
    await expect(loadingSvg).toHaveCSS("position", "absolute");
    await expect(loadingSvg).not.toHaveCSS("animation-name", "none");
    await expect(loadingSvg).toHaveCSS("animation-duration", "1s");
    await expect(loadingSvg.locator("path")).toHaveCSS(
      "fill",
      "rgb(255, 255, 255)"
    );
    await expect(player.locator(".aplayer-icon-volume-down path")).toHaveCSS(
      "fill",
      "rgb(102, 102, 102)"
    );
    await expect(
      player.locator("svg circle, .aplayer-lrc-hide, .aplayer-list-light")
    ).toHaveCount(0);
    await player.locator(".aplayer-list li").nth(1).click();
    await expect(player.locator(".aplayer-list-cur")).toHaveCount(1);
    await expect(
      player.locator(".aplayer-lrc-hide, .aplayer-list-light")
    ).toHaveCount(0);
    await player.getByRole("button", { name: "Mute", exact: true }).focus();
    await expect(player.locator(".aplayer-volume-bar-wrap")).toHaveCSS(
      "height",
      "40px"
    );
    await page.screenshot({
      path: `/tmp/aplayer-a11y-${mode}.png`,
      fullPage: true,
    });
  });
}
