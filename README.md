<h1 align="center">Svelte APlayer</h1>

> Aplayer port in Svelte with Custom element (WebComponent) build

## Introduction

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Ffengkx%2Fsvelte-aplayer.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Ffengkx%2Fsvelte-aplayer?ref=badge_shield)
[![pkg.pr.new](https://pkg.pr.new/badge/fengkx/svelte-aplayer)](https://pkg.pr.new/~/fengkx/svelte-aplayer)

This is a [Aplayer](https://github.com/DIYgod/APlayer) port in [Svelte](https://svelte.dev/).

Thanks to Svelte, It is **framework agnostic** and no **runtime required** with prebuild custom element bundle.

It should be a good alternative to `hexo-tag-aplayer` as well as any environment in which you can customise your HTML by using custom element.

The custom element accepts objects and arrays through JavaScript properties. HTML attributes use strict JSON strings. Option names use snake_case.

## Usage

```shell
npm i svelte-aplayer
```

Using in Web Component: [example](https://svelte-aplayer.js.org/web-component/)

Using in Svelte: [example](https://svelte-aplayer.js.org/svelte/)

### Web Component usage

Load the custom element bundle once in your site template. With a bundler:

```js
await import("svelte-aplayer/dist/wc/svelte-aplayer.es.js");
```

For plain HTML or Markdown that allows scripts, load the UMD bundle instead:

```html
<script src="https://cdn.jsdelivr.net/npm/svelte-aplayer@VERSION/dist/wc/svelte-aplayer.umd.js"></script>
```

Replace `VERSION` with your installed release version. The empty-state and delayed
assignment behavior described below is part of the current source and is not yet
available in the published `0.1.2` release.

You can render an empty element first and assign its data later:

```html
<s-aplayer id="music"></s-aplayer>

<script type="module">
  // This waits for registration; it does not download the bundle.
  await customElements.whenDefined("s-aplayer");

  const player = document.querySelector("#music");
  player.audio = {
    name: "Song",
    artist: "Artist",
    url: "/music/song.mp3",
    cover: "/music/cover.jpg",
  };
</script>
```

The player stays hidden until it receives a track or a non-empty playlist.
Assign an object or array directly; `JSON.stringify` is unnecessary for properties.
You can also create an element, assign its properties, and then append it to the DOM.

For asynchronous data, await registration and your request before assigning:

```js
await customElements.whenDefined("s-aplayer");
const response = await fetch("/playlist.json");
if (!response.ok)
  throw new Error(`Playlist request failed: ${response.status}`);
document.querySelector("#music").audio = await response.json();
```

Assigning `[]`, `null`, or `undefined` clears the player and stops playback.
Replacing the playlist selects its first track and leaves playback paused.
`autoplay` applies to the first non-empty assignment, subject to browser policies.

For handwritten HTML without initialization JavaScript, JSON attributes remain supported:

```html
<s-aplayer
  audio='{"name":"Song","artist":"Artist","url":"/music/song.mp3","cover":"/music/cover.jpg"}'
></s-aplayer>
```

### Svelte usage

```svelte
<script lang="ts">
  import Aplayer, {
    type AplayerAudio,
  } from "svelte-aplayer/dist/svelte/svelte-aplayer.es.js";
  import "svelte-aplayer/dist/svelte/style.css";

  const audio: AplayerAudio = {
    name: "君の知らない物語",
    artist: "supercell",
    cover:
      "https://blog-static.fengkx.top/svelte-aplayer/bakemonogatari-ed.jpg",
    url: "https://blog-static.fengkx.top/svelte-aplayer/bakemonogatari-ed.mp3",
  };
</script>

<Aplayer {audio} />
```

You can omit `audio` while loading and pass the resolved data later. Promises are not audio values; resolve them first. An await block also works:

```svelte
<script lang="ts">
  import Aplayer, {
    type AplayerAudio,
  } from "svelte-aplayer/dist/svelte/svelte-aplayer.es.js";

  const audioPromise: Promise<AplayerAudio> = getSong();
</script>

{#await audioPromise}
  <p>Loading...</p>
{:then audio}
  <Aplayer {audio} />
{:catch error}
  <p>Failed to load audio: {error.message}</p>
{/await}
```

## Options

| Name            | Default   | Description                                                                                                                  |
| --------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------- |
| mini            | false     | enable mini mode, [see more details](https://aplayer.js.org/#/home?id=mini-mode)                                             |
| autoplay        | false     | audio autoplay                                                                                                               |
| theme           | '#b7daff' | main color                                                                                                                   |
| loop            | 'all'     | player loop play, values: 'all', 'one', 'none'                                                                               |
| order           | 'list'    | player play order, values: 'list', 'random'                                                                                  |
| volume          | 0.7       | default volume, notice that player will remember user setting, default volume will not work after user set volume themselves |
| audio           | -         | audio object or array; optional while loading. Use strict JSON only for HTML attributes                                      |
| audio.name      | -         | audio name                                                                                                                   |
| audio.artist    | -         | audio artist                                                                                                                 |
| audio.url       | -         | audio url                                                                                                                    |
| audio.cover     | -         | audio cover                                                                                                                  |
| audio.lrc       | -         | URL or string of lrc file                                                                                                    |
| audio.theme     | -         | main color when switching to this audio, it has priority over the above theme                                                |
| mutex           | true      | prevent to play multiple player at the same time, pause other players when this player start play                            |
| list_folded     | false     | indicate whether list should folded at first                                                                                 |
| list_max_height | -         | list max height                                                                                                              |
| base_font_size  | 12        | base font size to adjust the whole size of the player as well as lrc font size                                               |

## Keyboard controls

- Use Tab / Shift+Tab to move between controls; the focused control has a visible outline.
- Use Enter or Space to play/pause, toggle controls, or select a playlist track.
- On the playback slider, use arrow keys to seek by five seconds and Home / End to jump to the beginning / end.
- On the volume slider, use arrow keys to adjust by five percentage points and Home / End for minimum / maximum volume. Adjusting volume also unmutes playback.
- The volume slider opens when its controls receive focus. Collapsed playlists are excluded from keyboard navigation.

## Event

Audio Events

- abort
- canplay
- canplaythrough
- durationchange
- emptied
- ended
- error
- loadeddata
- loadedmetadata
- loadstart
- mozaudioavailable
- pause
- play
- playing
- progress
- ratechange
- seeked
- seeking
- stalled
- suspend
- timeupdate
- volumechange
- waiting

For svelte compatibility native events are wrapped in the `detail` property of the CustomEvent.

```js
document.querySelector("s-aplayer").addEventListener("play", (ev) => {
  console.log(ev); // CustomEvent object
  console.log(ev.detail); // audio element play event object
});
```

Player Events

- listshow
- listhide
- listswitch
- listchange
- destroy
- lrcshow
- lrchide

# Piror Art

- https://github.com/DIYgod/APlayer/

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Ffengkx%2Fsvelte-aplayer.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Ffengkx%2Fsvelte-aplayer?ref=badge_large)
