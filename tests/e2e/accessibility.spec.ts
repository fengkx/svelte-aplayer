import { expect, test } from "@playwright/test";

for (const target of ["source", "dist"]) {
  test(`${target}: controls work with the keyboard and expose their state`, async ({
    page,
  }) => {
    await page.goto(
      `/tests/e2e/fixture.html?${target === "dist" ? "dist" : ""}`
    );
    const player = page.locator("s-aplayer");
    await expect
      .poll(() => page.evaluate(() => window.theAudio?.readyState ?? 0))
      .toBeGreaterThan(0);
    await page.keyboard.press("Tab");
    const play = player.getByRole("button", { name: "Play", exact: true });
    await expect(play).toBeFocused();
    await expect(play).toHaveCSS("outline-style", "solid");
    await page.keyboard.press("Enter");
    await expect(
      player.getByRole("button", { name: "Pause", exact: true })
    ).toBeFocused();
    await expect
      .poll(() => page.evaluate(() => window.theAudio.paused))
      .toBe(false);
    await page.keyboard.press("Space");
    await expect
      .poll(() => page.evaluate(() => window.theAudio.paused))
      .toBe(true);

    await page.keyboard.press("Tab");
    const seek = player.getByRole("slider", { name: "Playback position" });
    await expect(seek).toBeFocused();
    await seek.press("Home");
    await seek.press("ArrowRight");
    await expect
      .poll(() => page.evaluate(() => window.theAudio.currentTime))
      .toBeCloseTo(5, 1);
    await expect(seek).toHaveAttribute("aria-valuenow", "5");
    await seek.press("End");
    await expect
      .poll(() => page.evaluate(() => window.theAudio.currentTime))
      .toBeCloseTo(10, 1);
    await seek.press("Home");
    await expect(seek).toHaveAttribute("aria-valuenow", "0");

    await page.keyboard.press("Tab");
    const mute = player.getByRole("button", { name: "Mute", exact: true });
    await expect(mute).toBeFocused();
    await mute.press("Space");
    await expect(mute).toHaveAttribute("aria-pressed", "true");
    await page.keyboard.press("Tab");
    const volume = player.getByRole("slider", { name: "Volume", exact: true });
    await expect(volume).toBeFocused();
    await expect(volume).toHaveCSS("height", "40px");
    await volume.press("End");
    await volume.press("ArrowDown");
    await expect(volume).toHaveAttribute("aria-valuenow", "95");
    await expect(mute).toHaveAttribute("aria-pressed", "false");
    await volume.press("Home");
    await expect(volume).toHaveAttribute("aria-valuenow", "0");
    await volume.press("ArrowUp");
    await expect(volume).toHaveAttribute("aria-valuenow", "5");

    await page.keyboard.press("Tab");
    const shuffle = player.getByRole("button", { name: "Shuffle" });
    await expect(shuffle).toBeFocused();
    await shuffle.press("Space");
    await expect(shuffle).toHaveAttribute("aria-pressed", "true");
    await page.keyboard.press("Tab");
    const repeat = player.getByRole("button", { name: /Repeat:/ });
    await expect(repeat).toBeFocused();
    await repeat.press("Enter");
    await expect(repeat).toHaveAccessibleName(
      "Repeat: one track. Change repeat mode"
    );
    await page.keyboard.press("Tab");
    const playlist = player.getByRole("button", {
      name: "Playlist",
      exact: true,
    });
    await expect(playlist).toBeFocused();
    await playlist.press("Enter");
    await expect(playlist).toHaveAttribute("aria-expanded", "false");
    await expect(
      player.getByRole("button", { name: /First Song/ })
    ).toHaveCount(0);
    await page.keyboard.press("Tab");
    await expect(player.locator(".aplayer-track").first()).not.toBeFocused();
    await playlist.focus();
    await playlist.press("Space");
    await page.keyboard.press("Tab");
    await expect(player.locator(".aplayer-track").first()).toBeFocused();
    await page.keyboard.press("Tab");
    const second = player.getByRole("button", { name: /Second Song/ });
    await expect(second).toBeFocused();
    await second.press("Enter");
    await expect(second).toHaveAttribute("aria-current", "true");
    await expect(player.locator(".aplayer-title")).toHaveText("Second Song");
  });
}
