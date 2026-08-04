export type AplayerOrder = "list" | "random";

export type AplayerLoop = "none" | "all" | "one";

export interface AplayerAudio {
  name: string;
  artist: string;
  url: string;
  cover: string;
  lrc?: string;
  theme?: string;
}

export type AplayerAudioInput = AplayerAudio | AplayerAudio[];

export interface AplayerProps {
  audio: AplayerAudioInput;
  order?: AplayerOrder;
  loop?: AplayerLoop;
  volume?: number;
  mini?: boolean;
  mutex?: boolean;
  autoplay?: boolean;
  theme?: string;
  list_folded?: boolean;
  list_max_height?: number;
  base_font_size?: number | string;
}

export type AplayerMediaEventName =
  | "abort"
  | "canplay"
  | "canplaythrough"
  | "durationchange"
  | "emptied"
  | "ended"
  | "error"
  | "loadeddata"
  | "loadedmetadata"
  | "loadstart"
  | "mozaudioavailable"
  | "pause"
  | "play"
  | "playing"
  | "progress"
  | "ratechange"
  | "seeked"
  | "seeking"
  | "stalled"
  | "suspend"
  | "timeupdate"
  | "volumechange"
  | "waiting";

export type AplayerEvents = {
  [EventName in AplayerMediaEventName]: CustomEvent<Event>;
} & {
  listshow: CustomEvent<void>;
  listhide: CustomEvent<void>;
  listswitch: CustomEvent<AplayerAudio>;
  listchange: CustomEvent<AplayerAudio[]>;
  destroy: CustomEvent<void>;
  lrcshow: CustomEvent<void>;
  lrchide: CustomEvent<void>;
};
