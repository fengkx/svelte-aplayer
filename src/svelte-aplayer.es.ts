import { SvelteComponent } from "svelte";
import type { AplayerEvents, AplayerProps } from "./types.js";

export type {
  AplayerAudio,
  AplayerAudioInput,
  AplayerEvents,
  AplayerLoop,
  AplayerMediaEventName,
  AplayerOrder,
  AplayerProps,
} from "./types.js";

export default class Aplayer extends SvelteComponent<
  AplayerProps,
  AplayerEvents,
  Record<string, never>
> {}
