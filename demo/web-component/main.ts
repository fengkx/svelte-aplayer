import "../../src/main";
import type { AplayerAudioInput } from "../../src/types";
import { tracks } from "../tracks";
import "../demo.css";

const setAudio = (selector: string, audio: AplayerAudioInput) => {
  const player = document.querySelector<
    HTMLElement & { audio?: AplayerAudioInput }
  >(selector);

  if (!player) {
    throw new Error(`Missing player: ${selector}`);
  }

  player.audio = audio;
};

setAudio("#playlist-player", tracks);
setAudio("#lyrics-player", tracks[1]);
setAudio("#single-player", tracks[3]);
setAudio("#mini-player", tracks[2]);
