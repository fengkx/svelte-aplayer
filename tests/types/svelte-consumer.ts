import Aplayer, {
  type AplayerAudio,
  type AplayerProps,
} from "../../dist/svelte/svelte-aplayer.es.js";
import type { ComponentProps } from "svelte";

const audio: AplayerAudio = {
  name: "Song",
  artist: "Artist",
  url: "https://example.com/song.mp3",
  cover: "https://example.com/cover.jpg",
};

const singleTrackProps: AplayerProps = { audio };
const playlistProps: ComponentProps<Aplayer> = {
  audio: [audio],
  order: "random",
  loop: "one",
};

new Aplayer({
  target: document.createElement("div"),
  props: singleTrackProps,
});

new Aplayer({
  target: document.createElement("div"),
  props: playlistProps,
});

// @ts-expect-error Resolve asynchronous data before mounting the component.
const promiseProps: AplayerProps = { audio: Promise.resolve(audio) };

// @ts-expect-error JSON strings are only needed by the custom element build.
const serializedProps: AplayerProps = { audio: JSON.stringify(audio) };

const missingUrlProps: AplayerProps = {
  // @ts-expect-error A playable audio item requires a URL.
  audio: { name: "Song", artist: "Artist", cover: "cover.jpg" },
};

void promiseProps;
void serializedProps;
void missingUrlProps;
