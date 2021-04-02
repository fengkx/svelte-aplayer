<h1 align="center">Svelte APlayer</h1>

> Aplayer port in Svelte with Custom element (WebComponent) build

## Introduction

This is a [Aplayer](https://github.com/DIYgod/APlayer) port in [Svelte](https://svelte.dev/).

Thanks to Svelte, It is **framework agnostic** and no **runtime required** with prebuild custom element bundle.

It should be a good alternative to `hexo-tag-aplayer` as well as any environment in which you can customise your HTML by using custom element.

Drawback: Due to the limitaion of custom element, Instead of use object in the props of custom element, You need to pass a **strict json string**. And all props are snake case style naming.

## Usage

```shell
npm i svelte-aplayer
```

Using in webcomponent
[Example](https://svelte-aplayer.js.org)

Using in Svelte

```sveltehtml
import Aplayer from 'svelte-aplayer/dist/svelte/svelte-aplayer.es.js'
import 'svelte-aplayer/dist/svelte/style.css'

...

<Aplayer audio={
    {name:'君の知らない物語',
    artist: 'supercell',
    cover: 'https://blog-static.fengkx.top/svelte-aplayer/bakemonogatari-ed.jpg',
    url: "https://blog-static.fengkx.top/svelte-aplayer/bakemonogatari-ed.mp3"}} />
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
