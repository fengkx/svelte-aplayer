const createSilentWavUrl = () => {
  const sampleRate = 8_000;
  const duration = 10;
  const sampleCount = sampleRate * duration;
  const buffer = new ArrayBuffer(44 + sampleCount);
  const view = new DataView(buffer);

  const writeText = (offset: number, value: string) => {
    for (let index = 0; index < value.length; index += 1) {
      view.setUint8(offset + index, value.charCodeAt(index));
    }
  };

  writeText(0, "RIFF");
  view.setUint32(4, 36 + sampleCount, true);
  writeText(8, "WAVE");
  writeText(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate, true);
  view.setUint16(32, 1, true);
  view.setUint16(34, 8, true);
  writeText(36, "data");
  view.setUint32(40, sampleCount, true);

  new Uint8Array(buffer, 44).fill(128);
  return URL.createObjectURL(new Blob([buffer], { type: "audio/wav" }));
};

const audioUrl = createSilentWavUrl();
const cover = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="#123456"/></svg>'
)}`;
const tracks = [
  {
    name: "First Song",
    artist: "First Artist",
    url: audioUrl,
    cover,
    lrc: "[00:00.00]First line\n[00:04.00]Second line",
    theme: "#123456",
  },
  {
    name: "Second Song",
    artist: "Second Artist",
    url: audioUrl,
    cover,
  },
  {
    name: "Third Song",
    artist: "Third Artist",
    url: audioUrl,
    cover,
  },
];
const replacementTracks = [
  {
    name: "Replacement Song",
    artist: "Replacement Artist",
    url: audioUrl,
    cover,
    lrc: "[00:00.00]Replacement line",
  },
  {
    name: "Replacement Encore",
    artist: "Replacement Artist",
    url: audioUrl,
    cover,
  },
];
const playerEvents = [
  "destroy",
  "ended",
  "loadedmetadata",
  "listchange",
  "listhide",
  "listshow",
  "listswitch",
  "lrchide",
  "lrcshow",
  "pause",
  "play",
  "volumechange",
];
const parameters = new URLSearchParams(location.search);
const events: {
  name: string;
  detail?: string;
  playerIndex: number;
  size?: number;
}[] = [];
const players: HTMLElement[] = [];
const mediaElements: (HTMLAudioElement | undefined)[] = [];

const createPlayer = (
  playerTracks: typeof tracks[number] | typeof tracks,
  playerIndex: number
) => {
  const player = document.createElement("s-aplayer");
  player.setAttribute("audio", JSON.stringify(playerTracks));
  player.setAttribute(
    "base_font_size",
    parameters.get("base_font_size") ?? "14"
  );
  player.setAttribute(
    "list_max_height",
    parameters.get("list_max_height") ?? "64"
  );
  player.setAttribute("theme", parameters.get("theme") ?? "#abcdef");

  ["loop", "order", "volume"].forEach((name) => {
    const value = parameters.get(name);
    if (value !== null) {
      player.setAttribute(name, value);
    }
  });

  ["mini", "list_folded", "mutex"].forEach((name) => {
    if (parameters.has(name)) {
      player.setAttribute(name, parameters.get(name) || "true");
    }
  });

  playerEvents.forEach((name) => {
    player.addEventListener(name, (event) => {
      const detail = (event as CustomEvent).detail;
      const mediaElement = detail?.target;
      if (mediaElement instanceof HTMLAudioElement) {
        mediaElements[playerIndex] = mediaElement;
      }
      events.push({
        name,
        detail: detail?.name,
        playerIndex,
        size: Array.isArray(detail) ? detail.length : undefined,
      });
    });
  });

  players.push(player);
  document.querySelector("#fixture")?.append(player);
  return player;
};

const player = createPlayer(parameters.has("single") ? tracks[0] : tracks, 0);

if (parameters.has("second")) {
  createPlayer(tracks[1], 1);
}

Object.assign(window, {
  testHarness: {
    events,
    mediaElements,
    player,
    players,
    replacementTracks,
    tracks,
  },
});

import("../../src/main");
