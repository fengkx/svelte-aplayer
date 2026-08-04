<h1 align="center">Svelte APlayer</h1>

> Aplayer port in Svelte with Custom element (WebComponent) build

## Introduction

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Ffengkx%2Fsvelte-aplayer.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Ffengkx%2Fsvelte-aplayer?ref=badge_shield)
[![pkg.pr.new](https://pkg.pr.new/badge/fengkx/svelte-aplayer)](https://pkg.pr.new/~/fengkx/svelte-aplayer)

This is a [Aplayer](https://github.com/DIYgod/APlayer) port in [Svelte](https://svelte.dev/).

Thanks to Svelte, It is **framework agnostic** and no **runtime required** with prebuild custom element bundle.

It should be a good alternative to `hexo-tag-aplayer` as well as any environment in which you can customise your HTML by using custom element.

Drawback: Due to the limitaion of custom element, Instead of use object in the props of custom element, You need to pass a **strict json string**. And all props are snake case style naming.

## Usage

```shell
npm i svelte-aplayer
```

Using in Web Component: [example](https://svelte-aplayer.js.org/web-component/)

Using in Svelte: [example](https://svelte-aplayer.js.org/svelte/)

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

Resolve asynchronous data before mounting the player:

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
| audio           | -         | audio info, should be an object or object array **strict json string is required in custom element**                         |
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
