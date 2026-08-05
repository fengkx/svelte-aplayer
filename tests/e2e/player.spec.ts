import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";

type RecordedEvent = {
  name: string;
  detail?: string;
  playerIndex: number;
  size?: number;
};

type TestWindow = typeof window & {
  testHarness: {
    events: RecordedEvent[];
    mediaElements: HTMLAudioElement[];
    player: HTMLElement;
    players: HTMLElement[];
    replacementTracks: unknown[];
  };
};

const recordedEvents = (page: Page, name: string, playerIndex = 0) =>
  page.evaluate(
    ({ eventName, targetPlayer }) =>
      (window as TestWindow).testHarness.events.filter(
        (event) =>
          event.name === eventName && event.playerIndex === targetPlayer
      ),
    { eventName: name, targetPlayer: playerIndex }
  );

test.beforeEach(async ({ page }) => {
  const pageErrors: string[] = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));
  await page.goto("/tests/e2e/fixture.html");
  await page.waitForLoadState("networkidle");
  expect(pageErrors).toEqual([]);
});

test("loads the published custom element bundle", async ({ page }) => {
  await page.goto("/tests/e2e/fixture.html?dist&single");

  const player = page.locator("s-aplayer");
  await expect(player.locator(".aplayer-title")).toHaveText("First Song");
  await expect
    .poll(() =>
      page.evaluate(
        () =>
          typeof (
            (window as TestWindow).testHarness.players[0] as HTMLElement & {
              $destroy?: () => void;
            }
          ).$destroy
      )
    )
    .toBe("function");
});

test("loads the published Svelte component with the legacy constructor API", async ({
  page,
}) => {
  await page.goto("/tests/e2e/svelte-dist-fixture.html");

  await expect(page.locator(".aplayer-title")).toHaveText(
    "Published Component"
  );
  await expect
    .poll(() =>
      page.evaluate(
        () =>
          typeof (
            window as typeof window & {
              publishedComponent?: { $destroy?: () => void };
            }
          ).publishedComponent?.$destroy
      )
    )
    .toBe("function");
});

test("renders track metadata, lyrics, playlist, and visual options", async ({
  page,
}) => {
  const player = page.locator("s-aplayer");
  const root = player.locator(".aplayer");

  await expect(player.locator(".aplayer-title")).toHaveText("First Song");
  await expect(player.locator(".aplayer-artist")).toHaveText("First Artist");
  await expect(root).toHaveClass(/aplayer-withlrc/);
  await expect(root).toHaveClass(/aplayer-withlist/);
  await expect(player.locator(".aplayer-lrc p")).toHaveText([
    "First line",
    "Second line",
  ]);
  await expect(player.locator(".aplayer-list li")).toHaveCount(3);
  await expect(player.locator(".aplayer-list-title")).toHaveText([
    "First Song",
    "Second Song",
    "Third Song",
  ]);

  await expect
    .poll(() =>
      root.evaluate((element) => ({
        fontSize: element.style.getPropertyValue("--base-font-size"),
        theme: element.style.getPropertyValue("--theme-color"),
      }))
    )
    .toEqual({ fontSize: "14px", theme: "#123456" });
});

test("folds and expands the playlist while emitting player events", async ({
  page,
}) => {
  const player = page.locator("s-aplayer");
  const list = player.locator(".aplayer-list");
  const menu = player.locator(".aplayer-icon-menu");

  await expect
    .poll(() =>
      list.evaluate((element) => element.getBoundingClientRect().height)
    )
    .toBeGreaterThan(0);

  await menu.click();
  await expect(list).toHaveCSS("height", "0px");
  await expect.poll(() => recordedEvents(page, "listhide")).toHaveLength(1);

  await menu.click();
  await expect
    .poll(() =>
      list.evaluate((element) => element.getBoundingClientRect().height)
    )
    .toBeGreaterThan(0);
  await expect.poll(() => recordedEvents(page, "listshow")).toHaveLength(1);
});

test("caps a long playlist at the configured maximum height", async ({
  page,
}) => {
  const list = page.locator("s-aplayer").locator(".aplayer-list");

  await expect
    .poll(() =>
      list.evaluate((element) => ({
        clientHeight: element.clientHeight,
        isScrollable: element.scrollHeight > element.clientHeight,
      }))
    )
    .toEqual({ clientHeight: 64, isScrollable: true });
});

test("shows playlist controls only when multiple tracks are available", async ({
  page,
}) => {
  await page.goto("/tests/e2e/fixture.html?single");

  const player = page.locator("s-aplayer");
  await expect(player.locator(".aplayer-title")).toHaveText("First Song");
  await expect(player.locator(".aplayer")).not.toHaveClass(/aplayer-withlist/);
  await expect(player.locator(".aplayer-icon-order")).toHaveCount(0);
  await expect(player.locator(".aplayer-icon-menu")).toHaveCount(0);
  await expect(player.locator(".aplayer-icon-loop")).toHaveCount(1);
  await expect(player.locator(".aplayer-list")).toHaveCSS("display", "none");

  await page.evaluate(() => {
    const { player, replacementTracks } = (window as TestWindow).testHarness;
    player.setAttribute("audio", JSON.stringify(replacementTracks));
  });

  await expect(player.locator(".aplayer-icon-order")).toHaveCount(1);
  await expect(player.locator(".aplayer-icon-menu")).toHaveCount(1);
});

test("keeps the list expanded when list_folded is the string false", async ({
  page,
}) => {
  await page.goto("/tests/e2e/fixture.html?list_folded=false&volume=0.35");

  const player = page.locator("s-aplayer");
  const list = player.locator(".aplayer-list");
  await expect
    .poll(() => list.evaluate((element) => element.clientHeight))
    .toBeGreaterThan(0);
  await expect
    .poll(() => page.evaluate(() => window.theAudio.volume))
    .toBeCloseTo(0.35, 2);
});

test("switches tracks and reports the selected track", async ({ page }) => {
  const player = page.locator("s-aplayer");

  await player.locator(".aplayer-list li").nth(1).click();

  await expect(player.locator(".aplayer-title")).toHaveText("Second Song");
  await expect(player.locator(".aplayer-artist")).toHaveText("Second Artist");
  await expect(
    player.locator(".aplayer-list li").nth(1).locator(".aplayer-list-cur")
  ).toBeVisible();
  await expect
    .poll(() => recordedEvents(page, "listswitch"))
    .toContainEqual(
      expect.objectContaining({ name: "listswitch", detail: "Second Song" })
    );
});

test("uses the player theme when the selected track has no override", async ({
  page,
}) => {
  const player = page.locator("s-aplayer");
  const root = player.locator(".aplayer");

  await expect
    .poll(() =>
      root.evaluate((element) =>
        element.style.getPropertyValue("--theme-color")
      )
    )
    .toBe("#123456");

  await player.locator(".aplayer-list li").nth(1).click();

  await expect
    .poll(() =>
      root.evaluate((element) =>
        element.style.getPropertyValue("--theme-color")
      )
    )
    .toBe("#abcdef");
  await expect(root).not.toHaveClass(/aplayer-withlrc/);
  await expect(player.locator(".aplayer-lrc")).toHaveCount(0);
  await expect
    .poll(() => recordedEvents(page, "lrchide"))
    .toContainEqual(expect.objectContaining({ name: "lrchide" }));
});

test("tracks the active lyric while seeking forward and backward", async ({
  page,
}) => {
  const player = page.locator("s-aplayer");

  await page.evaluate(() => {
    window.theAudio.currentTime = 4.5;
    window.theAudio.dispatchEvent(new Event("timeupdate"));
  });
  await expect(player.locator(".aplayer-lrc-current")).toHaveText(
    "Second line"
  );

  await page.evaluate(() => {
    window.theAudio.currentTime = 0.5;
    window.theAudio.dispatchEvent(new Event("timeupdate"));
  });
  await expect(player.locator(".aplayer-lrc-current")).toHaveText("First line");
});

test("updates the playlist and emits listchange at runtime", async ({
  page,
}) => {
  const player = page.locator("s-aplayer");

  await page.evaluate(() => {
    const { player, replacementTracks } = (window as TestWindow).testHarness;
    player.setAttribute("audio", JSON.stringify(replacementTracks));
  });

  await expect(player.locator(".aplayer-title")).toHaveText("Replacement Song");
  await expect(player.locator(".aplayer-list-title")).toHaveText([
    "Replacement Song",
    "Replacement Encore",
  ]);
  await expect
    .poll(() => recordedEvents(page, "listchange"))
    .toContainEqual(expect.objectContaining({ name: "listchange", size: 2 }));
});

test("toggles playback and relays native audio events", async ({ page }) => {
  const player = page.locator("s-aplayer");
  const cover = player.locator(".aplayer-pic");

  await expect
    .poll(() => page.evaluate(() => window.theAudio?.readyState ?? 0))
    .toBeGreaterThan(0);

  await cover.click();
  await expect(player.locator(".aplayer-pause")).toBeVisible();
  await expect.poll(() => recordedEvents(page, "play")).toHaveLength(1);
  await expect
    .poll(() => page.evaluate(() => window.theAudio.paused))
    .toBe(false);

  await cover.click();
  await expect(player.locator(".aplayer-play")).toBeVisible();
  await expect.poll(() => recordedEvents(page, "pause")).toHaveLength(1);
  await expect
    .poll(() => page.evaluate(() => window.theAudio.paused))
    .toBe(true);
});

test("advances to the next track when loop-all playback ends", async ({
  page,
}) => {
  const player = page.locator("s-aplayer");

  await player.locator(".aplayer-pic").click();
  await expect
    .poll(() => page.evaluate(() => window.theAudio.paused))
    .toBe(false);
  await page.evaluate(() => window.theAudio.dispatchEvent(new Event("ended")));

  await expect(player.locator(".aplayer-title")).toHaveText("Second Song");
  await expect
    .poll(() => recordedEvents(page, "ended"))
    .toContainEqual(expect.objectContaining({ name: "ended" }));
});

test("restarts the current track when loop-one playback ends", async ({
  page,
}) => {
  await page.goto("/tests/e2e/fixture.html?loop=one");

  const player = page.locator("s-aplayer");
  await player.locator(".aplayer-pic").click();
  await page.evaluate(() => {
    window.theAudio.currentTime = 5;
    window.theAudio.dispatchEvent(new Event("ended"));
  });

  await expect(player.locator(".aplayer-title")).toHaveText("First Song");
  await expect
    .poll(() => page.evaluate(() => window.theAudio.currentTime))
    .toBeLessThan(0.25);
});

test("stops after the final track when looping is disabled", async ({
  page,
}) => {
  await page.goto("/tests/e2e/fixture.html?loop=none");

  const player = page.locator("s-aplayer");
  await player.locator(".aplayer-list li").nth(2).click();
  await expect
    .poll(() => page.evaluate(() => window.theAudio.readyState))
    .toBeGreaterThan(0);
  await expect
    .poll(() => page.evaluate(() => window.theAudio.paused))
    .toBe(false);
  await page.evaluate(() => window.theAudio.dispatchEvent(new Event("ended")));

  await expect(player.locator(".aplayer-title")).toHaveText("First Song");
  await expect
    .poll(() => page.evaluate(() => window.theAudio.paused))
    .toBe(true);
});

test("seeks, adjusts volume, and toggles mute through the controls", async ({
  page,
}) => {
  const player = page.locator("s-aplayer");
  const progress = player.locator(".aplayer-bar-wrap");

  await expect
    .poll(() => page.evaluate(() => window.theAudio?.duration ?? 0))
    .toBeGreaterThan(0);

  const progressBox = await progress.boundingBox();
  if (!progressBox) {
    throw new Error("Progress control is not visible");
  }
  await progress.click({
    position: { x: progressBox.width * 0.6, y: progressBox.height / 2 },
  });
  await expect
    .poll(() =>
      page.evaluate(
        () => window.theAudio.currentTime / window.theAudio.duration
      )
    )
    .toBeGreaterThan(0.5);

  const volumeWrap = player.locator(".aplayer-volume-wrap");
  const volumeBarWrap = player.locator(".aplayer-volume-bar-wrap");
  await volumeWrap.hover();
  await expect
    .poll(() =>
      volumeBarWrap.evaluate(
        (element) => element.getBoundingClientRect().height
      )
    )
    .toBeGreaterThan(39);

  const volumeBox = await volumeBarWrap.boundingBox();
  if (!volumeBox) {
    throw new Error("Volume control is not visible");
  }
  await volumeBarWrap.click({
    position: { x: volumeBox.width / 2, y: volumeBox.height * 0.75 },
  });
  await expect
    .poll(() => page.evaluate(() => window.theAudio.volume))
    .toBeGreaterThan(0.2);
  await expect
    .poll(() => page.evaluate(() => window.theAudio.volume))
    .toBeLessThan(0.4);

  const mute = player.locator(".aplayer-icon-volume-down");
  await mute.click();
  await expect
    .poll(() => page.evaluate(() => window.theAudio.muted))
    .toBe(true);
  await expect(player.locator(".aplayer-volume")).toHaveCSS("height", "0px");

  await mute.click();
  await expect
    .poll(() => page.evaluate(() => window.theAudio.muted))
    .toBe(false);
});

test("cycles order and loop modes", async ({ page }) => {
  const player = page.locator("s-aplayer");
  const order = player.locator(".aplayer-icon-order");
  const loop = player.locator(".aplayer-icon-loop");
  const orderPath = order.locator("path");
  const loopPath = loop.locator("path");
  const initialOrder = await orderPath.getAttribute("d");
  const initialLoop = await loopPath.getAttribute("d");

  await order.click();
  await expect(orderPath).not.toHaveAttribute("d", initialOrder ?? "");
  await order.click();
  await expect(orderPath).toHaveAttribute("d", initialOrder ?? "");

  await loop.click();
  await expect(loopPath).not.toHaveAttribute("d", initialLoop ?? "");
  await loop.click();
  await expect(loopPath).not.toHaveAttribute("d", initialLoop ?? "");
  await loop.click();
  await expect(loopPath).toHaveAttribute("d", initialLoop ?? "");
});

test("pauses another player when mutex playback starts", async ({ page }) => {
  await page.goto("/tests/e2e/fixture.html?second");

  const players = page.locator("s-aplayer");
  await expect(players).toHaveCount(2);
  await expect
    .poll(() =>
      page.evaluate(
        () =>
          (window as TestWindow).testHarness.mediaElements.length === 2 &&
          (window as TestWindow).testHarness.mediaElements.every(
            (audio) => audio.readyState > 0
          )
      )
    )
    .toBe(true);

  await players.nth(0).locator(".aplayer-pic").click();
  await expect
    .poll(() =>
      page.evaluate(
        () => (window as TestWindow).testHarness.mediaElements[0].paused
      )
    )
    .toBe(false);

  await players.nth(1).locator(".aplayer-pic").click();
  await expect
    .poll(() =>
      page.evaluate(() =>
        (window as TestWindow).testHarness.mediaElements.map(
          (audio) => audio.paused
        )
      )
    )
    .toEqual([true, false]);
});

test("emits destroy when the component is explicitly destroyed", async ({
  page,
}) => {
  await page.evaluate(() => {
    (
      (window as TestWindow).testHarness.players[0] as HTMLElement & {
        $destroy: () => void;
      }
    ).$destroy();
  });

  await expect.poll(() => recordedEvents(page, "destroy")).toHaveLength(1);
  await expect(page.locator("s-aplayer").locator(".aplayer")).toHaveCount(0);
});

test("supports folded-list and mini initialization", async ({ page }) => {
  await page.goto("/tests/e2e/fixture.html?mini&list_folded");

  const player = page.locator("s-aplayer");
  await expect(player.locator(".aplayer")).toHaveClass(/aplayer-narrow/);
  await expect(player.locator(".aplayer-info")).toHaveCSS("display", "none");
  await expect(player.locator(".aplayer-list")).toHaveCSS("display", "none");
});
