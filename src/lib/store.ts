import { derived, writable } from "svelte/store";
import { parseLrc, secondToTime } from "./utils";

export const instances = [];
export type Audio = {
  name: string;
  artist: string;
  url: string;
  cover: string;
  lrc?: string;
  theme?: string;
};

type GlobalState = {
  audio: Audio[];
  playingIndex: number;
};

type ControlState = {
  loop: "none" | "all" | "one";
  order: "list" | "random";
  volume: number;
  showList: boolean;
};

type DispatchFunc = (name: string, detail?: any) => void;
export function createStore(dispatch: DispatchFunc) {
  const player = document.createElement("audio");
  instances.push(player);
  bindAudioEvent(player, dispatch);
  let currentTime = writable(0);
  let duration = writable(NaN);

  const rdTime = derived(
    [currentTime, duration],
    ([$currentTime, $duration]) => {
      let playPercentage = $currentTime / $duration;
      playPercentage = Math.max(playPercentage, 0);
      playPercentage = Math.min(playPercentage, 1);
      playPercentage *= 100;
      return {
        ptime: secondToTime($currentTime),
        duration: secondToTime($duration),
        playPercentage: `${playPercentage}%`,
      };
    }
  );

  let wtBufTime = writable(0);
  const rdBufTime = derived([wtBufTime, duration], ([$bufTime, $duration]) => {
    let bufferPercentage = $bufTime / $duration;
    bufferPercentage = Math.max(bufferPercentage, 0);
    bufferPercentage = Math.min(bufferPercentage, 1);
    bufferPercentage *= 100;
    return { bufferPercentage: `${bufferPercentage}%`, bufTime: $bufTime };
  });

  const playList = writable<GlobalState>({
    playingIndex: 0,
    audio: [],
  });
  const audioList = derived(playList, ($pl) => $pl.audio);
  const controlState = writable<ControlState>({
    volume: 0.7,
    loop: "all",
    order: "list",
    showList: true,
  });

  const volumeState = derived(controlState, ($wt) => {
    return {
      volumePercentage: `${$wt.volume * 100}%`,
      muted: $wt.volume === 0,
    };
  });

  const currentSong = derived(playList, ($wt) => $wt.audio[$wt.playingIndex]);

  const loading = derived(
    [rdBufTime, currentTime],
    ([{ bufTime }, $currentTime]) => {
      if (player.paused) {
        return false;
      }
      if (player.readyState <= HTMLMediaElement.HAVE_CURRENT_DATA) {
        return true;
      }
      if (
        bufTime - $currentTime < 2 &&
        player.readyState === HTMLMediaElement.HAVE_FUTURE_DATA
      ) {
        return true;
      }
      return false;
    }
  );

  const lrc = derived(
    currentSong,
    // @ts-ignore
    ($song, set) => {
      if (!$song || !$song.lrc) {
        set([]);
        return;
      }
      const lrcSource = $song.lrc;
      if (lrcSource.startsWith("http")) {
        fetch(lrcSource)
          .then((resp) => {
            if (!resp.ok) {
              throw new Error(
                `${resp.statusText} canot loading lrc from ${lrcSource}`
              );
            }
            return resp.text();
          })
          .then((text) => {
            set(parseLrc(text));
          })
          .catch((err) => {
            set([]);
            console.error(err);
            throw err;
          });
      } else {
        set(parseLrc(lrcSource));
      }
    },
    []
  );

  let initSong = false;
  currentSong.subscribe((song) => {
    if (initSong) {
      dispatch("listswitch", song);
    }
    initSong = true;
  });
  let initAudioList = false;
  audioList.subscribe((list) => {
    if (initAudioList) {
      dispatch("listchange", list);
    }
    initSong = true;
  });
  lrc.subscribe((data) => {
    data.length > 0 ? dispatch("lrcshow") : dispatch("lrchide");
  });

  return {
    player,
    playList,
    audioList,
    currentSong,
    rdTime,
    currentTime,
    duration,
    rdBufTime,
    wtBufTime,
    loading,
    lrc,
    controlState,
    volumeState,
  };
}

function bindAudioEvent(player: HTMLAudioElement, dispatch: DispatchFunc) {
  const audioEvents = [
    "abort",
    "canplay",
    "canplaythrough",
    "durationchange",
    "emptied",
    "ended",
    "error",
    "loadeddata",
    "loadedmetadata",
    "loadstart",
    "mozaudioavailable",
    "pause",
    "play",
    "playing",
    "progress",
    "ratechange",
    "seeked",
    "seeking",
    "stalled",
    "suspend",
    "timeupdate",
    "volumechange",
    "waiting",
  ];
  audioEvents.forEach((name) => {
    player.addEventListener(name, (ev) => {
      dispatch(name, ev);
    });
  });
}
