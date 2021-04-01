<h1 align="center">Svelte APlayer</h1>

> Aplayer port in Svelte with Custom element (WebComponent) build

## Introduction

This is a [Aplayer](https://github.com/DIYgod/APlayer) port in [Svelte](https://svelte.dev/).

Thanks to Svelte, It is **framework agnostic** and no **runtime required** with prebuild custom element bundle.

It should be a good alternative to `hexo-tag-aplayer` as well as any environment in which you can customise your HTML by using custom element.

Drawback: Due to the limitaion of custom element, Instead of use object in the props of custom element, You need to pass a **strict json string**. And all props are snake case style naming.

## Usage

[Example](https://fengkx.github.io/svelte-aplayer/)

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
| audio.type      | 'auto'    | values: 'auto', 'hls', 'normal' or other custom type, [see more details](https://aplayer.js.org/#/home?id=mse-support)       |
| mutex           | true      | prevent to play multiple player at the same time, pause other players when this player start play                            |
| list_folded     | false     | indicate whether list should folded at first                                                                                 |
| list_max_height | -         | list max height                                                                                                              |

# Piror Art
- https://github.com/DIYgod/APlayer/
