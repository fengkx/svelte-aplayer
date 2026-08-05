import { expect, type Page } from "@playwright/test";

export const demoModes = [
  "Playlist",
  "Single track with lyrics",
  "Single track",
  "Mini player",
];

export const expectLyricsControlsAligned = async (page: Page) => {
  const lyricsPlayer = page.locator('[data-mode="lyrics"]');
  await lyricsPlayer.locator(".aplayer-pic").click();
  await expect(lyricsPlayer.locator(".aplayer-pause")).toBeVisible();

  const alignmentOffset = await lyricsPlayer.evaluate((section) => {
    const player = section.querySelector("s-aplayer");
    const root = player?.shadowRoot ?? section;
    const pause = root.querySelector(".aplayer-pause")?.getBoundingClientRect();
    const bar = root.querySelector(".aplayer-bar")?.getBoundingClientRect();

    if (!pause || !bar) {
      throw new Error("Missing lyrics player controls");
    }

    return Math.abs(pause.top + pause.height / 2 - (bar.top + bar.height / 2));
  });

  expect(alignmentOffset).toBeLessThanOrEqual(1);
};

export const expectRelevantOrderControls = async (page: Page) => {
  await expect(
    page.locator('[data-mode="playlist"] .aplayer-icon-order')
  ).toHaveCount(1);
  await expect(
    page.locator(
      '[data-mode="lyrics"] .aplayer-icon-order, [data-mode="single"] .aplayer-icon-order, [data-mode="mini"] .aplayer-icon-order'
    )
  ).toHaveCount(0);
};
