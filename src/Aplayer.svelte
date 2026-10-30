<svelte:options
  customElement={{ tag: "s-aplayer", extend: withLegacyDestroy }}
/>

<script module lang="ts">
  type CustomElementConstructor = new (...args: any[]) => HTMLElement;

  const withLegacyDestroy = (BaseElement: CustomElementConstructor) =>
    class extends BaseElement {
      $destroy() {
        this.dispatchEvent(new CustomEvent("destroy"));
        this.remove();
      }
    };
</script>

<script lang="ts">
  import { createStore, instances } from "./lib/store";
  import { volumeEventHandlers } from "./lib/volume-handler";
  import { progressEventHandlers } from "./lib/progress-handlers";
  import { onDestroy, onMount, tick, createEventDispatcher } from "svelte";
  import { propsBool, isMobile, secondToTime } from "./lib/utils";
  import type { AplayerAudio, AplayerAudioInput } from "./types";

  import {
    soundUnmuted,
    soundMuted,
    randomOrder,
    loadingIcon,
    listOrder,
    loopOne,
    loopAll,
    loopNone,
  } from "./assets/svg";

  let rootEl: HTMLElement;
  const svelteDispatch = createEventDispatcher();
  const dispatch = (name: string, detail?: any) => {
    svelteDispatch(name, detail);
    const rootNode = rootEl?.getRootNode();
    if (rootNode instanceof ShadowRoot) {
      rootNode.host.dispatchEvent(new CustomEvent(name, { detail }));
    }
  };
  const {
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
  } = createStore(dispatch);
  let paused = player.paused;
  let muted = player.muted;
  player.addEventListener("play", () => {
    paused = false;
  });
  player.addEventListener("pause", () => {
    paused = true;
  });
  // JSON strings are supported by the custom element build only.
  export let audio: AplayerAudioInput | string | null | undefined = undefined;
  export let order = $controlState.order;
  export let loop = $controlState.loop;
  export let volume = $controlState.volume;
  export let mini = false;
  export let mutex = true;
  export let autoplay = false;
  export let theme: string = "#fadfa3";
  export let list_max_height: number = Infinity;
  let playLock: boolean | undefined; // whether call play when player.src changed
  let audioPropInited: boolean = false;
  let skipTime: ReturnType<typeof setTimeout> | undefined;
  $: parsedAudio = typeof audio === "string" ? JSON.parse(audio) : audio;
  const replaceAudio = (input: AplayerAudioInput | null | undefined) => {
    const tracks = input == null ? [] : Array.isArray(input) ? input : [input];
    clearTimeout(skipTime);
    // Only the first non-empty assignment can trigger autoplay.
    playLock = audioPropInited || !autoplay;
    if (tracks.length > 0) audioPropInited = true;
    // Replace the list and its index atomically, including when clearing it.
    $playList = { audio: tracks, playingIndex: 0 };
  };
  $: replaceAudio(parsedAudio);
  $: initShowList = !propsBool($$props, "list_folded") && $audioList.length > 1;
  $: $controlState.showList = initShowList;
  $: $controlState.loop = loop;
  $: $controlState.order = order;
  $: $controlState.volume = volume;
  $: playerListHeight = Math.min(
    playListElement?.scrollHeight ?? 0,
    list_max_height
  );
  $: {
    $audioList;
    tick().then(() => {
      playerListHeight = Math.min(
        playListElement?.scrollHeight ?? 0,
        list_max_height
      );
    });
  }
  $: player.volume = volume;
  $: themeColor = $currentSong?.theme ?? theme;
  export let base_font_size = "12";
  $: baseFontSize = (String(base_font_size).match(/^\d+/)?.[0] ?? "12") + "px";
  $: {
    if (rootEl) {
      rootEl.style.setProperty("--theme-color", themeColor);
      rootEl.style.setProperty("--base-font-size", baseFontSize);
    }
  }
  const play = () => {
    if (!$currentSong) return;
    if (mutex) {
      instances.forEach((audio) => audio.pause());
    }
    player.play().catch((err) => {
      console.error(err);
    });
  };

  $: mode = $lrc && $lrc.length > 0 ? "withlrc" : "";
  let lrcActiveIndex = -1;

  const syncCurrentSong = (song: AplayerAudio | undefined) => {
    lrcActiveIndex = -1;
    if (song) {
      player.src = song.url;
      if (!playLock) play();
    } else {
      player.pause();
      if (player.hasAttribute("src")) {
        player.removeAttribute("src");
        player.load();
      }
      $currentTime = 0;
      $duration = NaN;
      $wtBufTime = 0;
    }
    playLock = false;
  };
  // Seeking or changing volume must not reload the media source.
  $: syncCurrentSong($currentSong);
  player.addEventListener("timeupdate", () => {
    $currentTime = player.currentTime;
    if (mode.includes("lrc")) {
      while (
        lrcActiveIndex > 0 &&
        player.currentTime < $lrc[lrcActiveIndex][0]
      ) {
        lrcActiveIndex--;
      }
      while (
        lrcActiveIndex + 1 < $lrc.length &&
        player.currentTime >= $lrc[lrcActiveIndex + 1][0]
      ) {
        lrcActiveIndex++;
      }
    }
  });
  player.addEventListener("volumechange", () => {
    muted = player.muted;
    $controlState.volume = player.volume;
  });
  player.addEventListener("loadedmetadata", () => {
    $duration = player.duration;
  });
  player.addEventListener("error", () => {
    console.warn(
      "An audio error has occurred, player will skip forward in 2 seconds."
    );
    if ($audioList.length > 1) {
      skipTime = setTimeout(() => {
        $playList.playingIndex =
          ($playList.playingIndex + 1) % $audioList.length;
        if (player.paused) {
          play();
        }
      }, 2000);
    }
  });
  const setBufTime = () => {
    const bufTime = player.buffered.length
      ? player.buffered.end(player.buffered.length - 1)
      : 0;
    $wtBufTime = bufTime;
  };
  player.addEventListener("progress", setBufTime);
  player.addEventListener("canplay", setBufTime);
  player.addEventListener("durationchange", () => {
    $duration = player.duration;
  });
  const jumpNext = () => {
    const audios = $audioList;
    if (audios.length === 0) return;
    const nextIdx = ($playList.playingIndex + 1) % audios.length;
    if ($controlState.loop === "none") {
      if ($controlState.order === "list") {
        if ($playList.playingIndex < audios.length - 1) {
          $playList.playingIndex = nextIdx;
          player.currentTime = 0;
        } else {
          $playList.playingIndex = ($playList.playingIndex + 1) % audios.length;
          playLock = true;
          player.pause();
        }
      } else if ($controlState.order === "random") {
        const randomIdx = Math.floor(audios.length * Math.random());
        if (randomIdx === $playList.playingIndex) {
          $playList.playingIndex = nextIdx;
        } else {
          $playList.playingIndex = randomIdx;
        }
        player.currentTime = 0;
      }
    } else if ($controlState.loop === "one") {
      player.currentTime = 0;
    } else if ($controlState.loop === "all") {
      $playList.playingIndex = nextIdx;
    }
  };
  player.addEventListener("ended", () => {
    if (!player.paused) {
      jumpNext();
    }
  });

  $: seekDuration = Number.isFinite($duration) && $duration > 0 ? $duration : 0;
  const sliderKeyValue = (
    event: KeyboardEvent,
    value: number,
    max: number,
    step: number
  ) => {
    let next: number;
    switch (event.key) {
      case "ArrowRight":
      case "ArrowUp":
        next = value + step;
        break;
      case "ArrowLeft":
      case "ArrowDown":
        next = value - step;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = max;
        break;
      default:
        return;
    }
    event.preventDefault();
    return Math.min(max, Math.max(0, next));
  };
  const seekWithKeyboard = (event: KeyboardEvent) => {
    const next = sliderKeyValue(event, player.currentTime, seekDuration, 5);
    if (next !== undefined && seekDuration > 0) {
      player.currentTime = next;
      $currentTime = next;
    }
  };
  const changeVolumeWithKeyboard = (event: KeyboardEvent) => {
    const next = sliderKeyValue(event, player.volume, 1, 0.05);
    if (next !== undefined) {
      player.volume = next;
      player.muted = false;
    }
  };

  let volumeBar: HTMLElement;
  let playedBar: HTMLElement;
  type DragEventHandler = (event: MouseEvent | TouchEvent) => void;
  let volumeDragStart: DragEventHandler = () => {};
  let volumeDragMove: DragEventHandler = () => {};
  let volumeDragEnd: DragEventHandler = () => {};
  let progressDragStart: DragEventHandler = () => {};
  let progressDragMove: DragEventHandler = () => {};
  let progressDragEnd: DragEventHandler = () => {};
  let playListElement: HTMLElement;

  onMount(() => {
    if (location.hostname === "localhost" && window) window.theAudio = player;
    const volumeHandlers = volumeEventHandlers(player, volumeBar);
    volumeDragStart = volumeHandlers.volumeDragStart;
    volumeDragMove = volumeHandlers.volumeDragMove;
    volumeDragEnd = volumeHandlers.volumeDragEnd;
    const progressHandlers = progressEventHandlers(player, playedBar);
    progressDragStart = progressHandlers.progressDragStart;
    progressDragMove = progressHandlers.progressDragMove;
    progressDragEnd = progressHandlers.progressDragEnd;
    playListElement?.addEventListener("transitionend", () => {
      playerListHeight = Math.min(
        playListElement?.scrollHeight ?? 0,
        list_max_height
      );
    });
  });
  onDestroy(() => {
    clearTimeout(skipTime);
    player.pause();
    const instanceIndex = instances.indexOf(player);
    if (instanceIndex !== -1) instances.splice(instanceIndex, 1);
    dispatch("destroy");
  });
</script>

<div
  bind:this={rootEl}
  class="aplayer"
  hidden={!$currentSong}
  class:aplayer-withlrc={$lrc.length > 0}
  class:aplayer-withlist={$audioList.length > 1}
  class:aplayer-narrow={mini}
  class:aplayer-mobile={isMobile}
>
  <div class="aplayer-body">
    <button
      type="button"
      aria-label={paused ? "Play" : "Pause"}
      class="aplayer-pic"
      style:background-image={$currentSong?.cover
        ? `url("${$currentSong.cover}")`
        : "none"}
      on:click={() => {
        paused ? play() : player.pause();
      }}
    >
      {#if !paused}
        <span class="aplayer-button aplayer-pause" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 17 32"
            ><path
              d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"
            /></svg
          >
        </span>
      {:else}
        <span class="aplayer-button aplayer-play" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 16 31"
            ><path
              d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"
            /></svg
          >
        </span>
      {/if}
    </button>

    <div class="aplayer-info">
      <div class="aplayer-music">
        <span class="aplayer-title">{$currentSong?.name}</span>
        <span class="aplayer-artist">{$currentSong?.artist}</span>
      </div>

      {#if $currentSong?.lrc}
        <div class="aplayer-lrc">
          <div
            class="aplayer-lrc-contents"
            style="transform: translateY(calc({Math.max(
              lrcActiveIndex,
              0
            )} * -1 * calc(var(--base-font-size) + 4px)))"
          >
            {#each $lrc as line, index (line[0])}
              <p class:aplayer-lrc-current={index === lrcActiveIndex}>
                {line[1]}
              </p>
            {/each}
          </div>
        </div>
      {/if}
      <div class="aplayer-controller">
        <div
          class="aplayer-bar-wrap"
          role="slider"
          tabindex="0"
          aria-label="Playback position"
          aria-valuemin={0}
          aria-valuemax={seekDuration}
          aria-valuenow={Math.min(seekDuration, Math.max(0, $currentTime))}
          aria-valuetext={seekDuration
            ? `${secondToTime($currentTime)} of ${secondToTime(seekDuration)}`
            : "Not ready"}
          aria-disabled={seekDuration === 0}
          on:keydown={seekWithKeyboard}
          bind:this={playedBar}
          on:mousedown={progressDragStart}
          on:mousemove={progressDragMove}
          on:mouseup={progressDragEnd}
          on:mouseleave={progressDragEnd}
          on:touchstart={progressDragStart}
          on:touchmove={progressDragMove}
          on:touchend={progressDragEnd}
        >
          <div class="aplayer-bar">
            <div
              class="aplayer-loaded"
              style="width: {$rdBufTime.bufferPercentage}"
            />
            <div class="aplayer-played" style="width: {$rdTime.playPercentage}">
              <div class="aplayer-thumb">
                <span
                  class="aplayer-loading-icon"
                  style="display: {$loading ? 'inline' : 'none'}"
                >
                  {@html loadingIcon}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="aplayer-time">
          <span class="aplayer-time-inner">
            <span class="aplayer-ptime">{$rdTime.ptime}</span> /
            <span class="aplayer-dtime">{$rdTime.duration}</span>
          </span>

          <span hidden />
          <div class="aplayer-volume-wrap">
            <button
              type="button"
              class="aplayer-icon aplayer-icon-volume-down"
              aria-label="Mute"
              aria-pressed={muted}
              on:click|capture={() => {
                player.muted = !player.muted;
              }}
            >
              {#if $volumeState.muted || player.muted}
                {@html soundMuted}
              {:else}
                {@html soundUnmuted}
              {/if}
            </button>
            <div
              class="aplayer-volume-bar-wrap"
              role="slider"
              tabindex="0"
              aria-label="Volume"
              aria-orientation="vertical"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round($controlState.volume * 100)}
              aria-valuetext={`${Math.round($controlState.volume * 100)}%${muted ? " (muted)" : ""}`}
              on:keydown={changeVolumeWithKeyboard}
              on:mousedown={volumeDragStart}
              on:mousemove={volumeDragMove}
              on:mouseup={volumeDragEnd}
              on:mouseleave={volumeDragEnd}
              on:touchstart={volumeDragStart}
              on:touchmove={volumeDragMove}
              on:touchend={volumeDragEnd}
            >
              <div class="aplayer-volume-bar" bind:this={volumeBar}>
                <div
                  class="aplayer-volume"
                  style="height: {player.muted
                    ? '0px'
                    : $volumeState.volumePercentage}"
                />
              </div>
            </div>
          </div>
          {#if $audioList.length > 1}
            <button
              type="button"
              class="aplayer-icon aplayer-icon-order"
              aria-label="Shuffle"
              aria-pressed={$controlState.order === "random"}
              on:click={() => {
                $controlState.order =
                  $controlState.order === "list" ? "random" : "list";
              }}
            >
              {#if $controlState.order === "random"}
                {@html randomOrder}
              {:else}
                {@html listOrder}
              {/if}
            </button>
          {/if}
          <button
            type="button"
            class="aplayer-icon aplayer-icon-loop"
            aria-label={`Repeat: ${$controlState.loop === "all" ? "all tracks" : $controlState.loop === "one" ? "one track" : "off"}. Change repeat mode`}
            on:click={() => {
              if ($controlState.loop === "all") {
                $controlState.loop = "one";
              } else if ($controlState.loop === "one") {
                $controlState.loop = "none";
              } else if ($controlState.loop === "none") {
                $controlState.loop = "all";
              }
            }}
          >
            {#if $controlState.loop === "none"}
              {@html loopNone}
            {:else if $controlState.loop === "one"}
              {@html loopOne}
            {:else if $controlState.loop === "all"}
              {@html loopAll}
            {/if}
          </button>

          {#if $audioList.length > 1}
            <button
              type="button"
              class="aplayer-icon aplayer-icon-menu"
              aria-label="Playlist"
              aria-expanded={$controlState.showList}
              on:click={() => {
                $controlState.showList = !$controlState.showList;
                $controlState.showList
                  ? dispatch("listshow")
                  : dispatch("listhide");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 22 32"
                ><path
                  d="M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z"
                /></svg
              >
            </button>
          {/if}
        </div>
      </div>
    </div>

    <!--    <div class="aplayer-miniswitcher" />-->
    <div
      class="aplayer-list"
      inert={!$controlState.showList}
      aria-hidden={!$controlState.showList}
      style="height: {$controlState.showList ? `${playerListHeight}px` : '0px'}"
      bind:this={playListElement}
    >
      <ol>
        {#each $audioList as song, idx}
          <li>
            <button
              type="button"
              class="aplayer-track"
              aria-current={idx === $playList.playingIndex ? "true" : undefined}
              on:click={() => {
                $playList.playingIndex = idx;
                player.currentTime = 0;
              }}
            >
              {#if idx === $playList.playingIndex}
                <span class="aplayer-list-cur" />
              {/if}
              <span class="aplayer-list-index">{idx + 1}</span>
              <span class="aplayer-list-title">{song.name}</span>
              <span class="aplayer-list-artist">{song.artist}</span>
            </button>
          </li>
        {/each}
      </ol>
    </div>
  </div>
</div>

<style lang="scss">
  .aplayer[hidden] {
    display: none;
  }
  .aplayer {
    --base-font-size: 12px;
    --aplayer-height: calc(var(--base-font-size) * 5.5);
    --lrc-height: calc(calc(var(--base-font-size) + 4px) * 2);
    --aplayer-height-lrc: calc(var(--aplayer-height) + var(--lrc-height) - 6px);
    --theme-color: #fadfa3;
    position: relative;
    background: #fff;
    box-shadow:
      0 2px 2px 0 rgba(0, 0, 0, 0.07),
      0 1px 5px 0 rgba(0, 0, 0, 0.1);
    font-family: Arial, Helvetica, sans-serif;
    margin: 5px;
    overflow: hidden;
    border-radius: 2px;
    user-select: none;
    line-height: normal;
    :global(svg) {
      width: 100%;
      height: 100%;

      :global(path),
      :global(circle) {
        fill: #fff;
      }
    }

    .aplayer-icon {
      width: calc(var(--base-font-size) + 3px);
      height: calc(var(--base-font-size) + 3px);
      border: none;
      background-color: transparent;
      outline: none;
      cursor: pointer;
      opacity: 0.8;
      vertical-align: middle;
      padding: 0;
      font-size: var(--base-font-size);
      margin: 0;
      display: inline-block;

      :global(path) {
        transition: all 0.2s ease-in-out;
      }
    }

    button:focus-visible,
    [role="slider"]:focus-visible {
      outline: 2px solid #245a92;
      outline-offset: -2px;
    }

    .aplayer-pic {
      position: relative;
      float: left;
      height: var(--aplayer-height);
      width: var(--aplayer-height);
      background-color: antiquewhite;
      background-size: cover;
      background-position: center;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.3s ease;
      cursor: pointer;
      border: 0;
      padding: 0;

      &:hover .aplayer-button {
        opacity: 1;
      }
      .aplayer-button {
        position: absolute;
        box-sizing: content-box;
        border-radius: 50%;
        opacity: 0.8;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
        background: rgba(0, 0, 0, 0.2);
        transition: all 0.1s ease;
      }
      .aplayer-play {
        width: 26px;
        height: 26px;
        :global(svg) {
          position: absolute;
          top: 3px;
          left: 4px;
          height: 20px;
          width: 20px;
        }
      }
      .aplayer-pause {
        width: 16px;
        height: 16px;
        border: 2px solid #fff;
        bottom: 0;
        right: 4px;
        :global(svg) {
          position: absolute;
          top: 2px;
          left: 2px;
          height: 12px;
          width: 12px;
        }
      }
    }
    .aplayer-info {
      margin-left: var(--aplayer-height);
      height: var(--aplayer-height);
      padding: 14px 7px 0 10px;
      box-sizing: border-box;
      .aplayer-music {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        user-select: text;
        margin: 0 0 calc(var(--base-font-size) + 1px) 5px;
        padding-bottom: 2px;
        cursor: default;

        .aplayer-title {
          font-size: calc(var(--base-font-size) + 2px);
        }
        .aplayer-artist {
          font-size: var(--base-font-size);
          color: #666;
        }
      }

      .aplayer-controller {
        display: flex;
        position: relative;
        align-items: center;

        .aplayer-bar-wrap {
          flex: 1;
          margin: 0 0 0 5px;
          padding: 4px 0;
          cursor: pointer !important;

          &:hover,
          &:focus-visible {
            .aplayer-bar .aplayer-played .aplayer-thumb {
              transform: scale(1);
            }
          }
          .aplayer-bar {
            position: relative;
            height: 2px;
            width: 100%;
            background: #cdcdcd;

            .aplayer-loaded {
              position: absolute;
              left: 0;
              top: 0;
              bottom: 0;
              background: #aaa;
              height: 2px;
              transition: all 0.5s ease;
            }
            .aplayer-played {
              position: absolute;
              left: 0;
              top: 0;
              bottom: 0;
              height: 2px;
              background: var(--theme-color) none repeat scroll 0 0;

              .aplayer-thumb {
                position: absolute;
                top: 0;
                right: 5px;
                margin-top: -4px;
                margin-right: -10px;
                height: 10px;
                width: 10px;
                border-radius: 50%;
                cursor: pointer;
                transition: all 0.3s ease-in-out;
                background: var(--theme-color) none repeat scroll 0 0;
                transform: scale(0);
              }
            }
          }
        }
        .aplayer-loading-icon {
          //display: none;
          :global(svg) {
            display: block;
            position: absolute;
            animation: rotate 1s linear infinite;
          }
        }
        .aplayer-time {
          position: relative;
          right: 0;
          bottom: 4px;
          height: calc(var(--base-font-size) + 5px);
          color: #999;
          font-size: 11px;
          padding-left: 7px;

          .aplayer-time-inner {
            vertical-align: center;
          }
          .aplayer-icon {
            cursor: pointer;
            transition: all 0.2s ease;
            :global(path) {
              fill: #666;
            }
          }
        }
        .aplayer-volume-wrap {
          display: inline-block;
          position: relative;
          margin-left: 3px;
          cursor: pointer;

          &:hover .aplayer-volume-bar-wrap,
          &:focus-within .aplayer-volume-bar-wrap {
            height: 40px;
          }

          .aplayer-volume-bar-wrap {
            position: absolute;
            bottom: 15px;
            right: -3px;
            width: 25px;
            height: 0;
            z-index: 99;
            overflow: hidden;
            transition: all 0.2s ease-in-out;

            .aplayer-volume-bar {
              position: absolute;
              bottom: 0;
              right: 10px;
              width: 5px;
              height: 35px;
              background: #aaa;
              border-radius: 2.5px;
              overflow: hidden;
              .aplayer-volume {
                background: var(--theme-color) none repeat scroll 0 0;
                position: absolute;
                bottom: 0;
                right: 0;
                width: 5px;
                transition: all 0.1s ease;
              }
            }
          }
        }
      }
    }
    .aplayer-lrc {
      display: none;
      position: relative;
      height: var(--lrc-height);
      text-align: center;
      overflow: hidden;
      margin: -10px 0 calc(var(--base-font-size) - 5px);

      p {
        font-size: var(--base-font-size);
        color: #666;
        line-height: calc(var(--base-font-size) + 4px) !important;
        height: calc(var(--base-font-size) + 4px) !important;
        padding: 0 !important;
        margin: 0 !important;
        transition: all 0.5s ease-out;
        opacity: 0.4;
        overflow: hidden;

        &.aplayer-lrc-current {
          opacity: 1;
          overflow: visible;
          height: initial !important;
          min-height: 16px;
        }
      }
      &.aplayer-lrc-hide {
        display: none;
      }

      .aplayer-lrc-contents {
        transition: all 0.5s ease-out;
        width: 100%;
        user-select: text;
        cursor: default;
      }
    }
    .aplayer-list {
      //overflow: auto;
      transition: all 0.5s ease;
      will-change: height;
      display: none;
      overflow: hidden;
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow-y: auto;
      ol {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow-y: auto;
      }
      li {
        position: relative;
        text-align: left;
        height: calc((var(--base-font-size) + 4px) * 2);
        line-height: 32px;
        padding: 0;
        font-size: var(--base-font-size);
        border-top: 1px solid #e9e9e9;
        cursor: pointer;
        transition: all 0.2s ease;
        overflow: hidden;
        margin: 0;

        .aplayer-track {
          display: block;
          width: 100%;
          height: 100%;
          border: 0;
          padding: 0 15px;
          text-align: inherit;
          font: inherit;
          color: inherit;
          background: transparent;
          cursor: pointer;
        }

        &:first-child {
          border-top: none;
        }

        &:hover {
          background: #efefef;
        }

        &.aplayer-list-light {
          background: #e9e9e9;

          //.aplayer-list-cur {
          //  display: inline-block;
          //}
        }

        .aplayer-list-cur {
          width: 3px;
          height: calc((var(--base-font-size) + 4px) * 2 - 10px);
          position: absolute;
          left: 0;
          top: 5px;
          cursor: pointer;
          background-color: var(--theme-color);
        }
        .aplayer-list-index {
          color: #666;
          margin-right: 12px;
          cursor: pointer;
        }
        .aplayer-list-artist {
          color: #666;
          float: right;
          cursor: pointer;
        }
      }
    }

    &.aplayer-withlrc {
      .aplayer-pic {
        height: var(--aplayer-height-lrc);
        width: var(--aplayer-height-lrc);
      }
      .aplayer-info {
        margin-left: var(--aplayer-height-lrc);
        height: var(--aplayer-height-lrc);
        padding: 10px 7px 0 7px;
      }
      .aplayer-lrc {
        display: block;
      }
    }
    &.aplayer-withlist {
      .aplayer-list {
        display: block;
      }
    }
    &.aplayer-narrow {
      width: var(--aplayer-height);

      .aplayer-info {
        display: none;
      }
      .aplayer-list {
        display: none;
      }
      .aplayer-pic,
      .aplayer-body {
        height: var(--aplayer-height);
        width: var(--aplayer-height);
      }
    }
    &.aplayer-mobile {
      .aplayer-icon-volume-down {
        display: none;
      }
    }
  }
  @keyframes aplayer-roll {
    0% {
      left: 0;
    }
    100% {
      left: -100%;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
