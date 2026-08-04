import "../../src/main";
import { tracks } from "../tracks";
import "../demo.css";

const setAudio = (selector: string, audio: unknown) => {
  const player = document.querySelector(selector);

  if (!player) {
    throw new Error(`Missing player: ${selector}`);
  }

  player.setAttribute("audio", JSON.stringify(audio));
};

setAudio("#playlist-player", tracks);
setAudio("#lyrics-player", tracks[1]);
setAudio("#single-player", tracks[3]);
setAudio("#mini-player", tracks[2]);
