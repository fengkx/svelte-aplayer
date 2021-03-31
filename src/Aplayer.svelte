<script lang="ts">
  import {playList, currentSong, rdTime, currentTime,duration, rdBufTime, wtBufTime, loading, lrc, controlState, volumeState, wtPlayerState} from './lib/store';
  import {volumeEventHandlers} from './lib/volume-handler'
  import {progressEventHandlers} from './lib/progress-handlers'
  import {onMount} from "svelte";
  import {propsBool} from './lib/utils'
  export let audio: any[]|string;
  export let order = $controlState.order;
  export let loop = $controlState.loop;
  export let volume = $controlState.volume;

  $controlState.showList = $playList.audio.length > 1 && !propsBool($$props, 'list_folded');
  const parsedAudio = typeof audio === 'string' ? JSON.parse(audio): audio;
  $playList.audio = Array.isArray(parsedAudio) ? parsedAudio : [parsedAudio];

  let playerListHeight = 0;
  $: playerListHeight = playListElement?.scrollHeight ?? 0;

  $: {
    $controlState.loop = loop;
    $controlState.order = order;
    $controlState.volume = volume;
    const parsedAudio = typeof audio === 'string' ? JSON.parse(audio): audio;
    $playList.audio = parsedAudio;
  }
  const player = document.createElement('audio');
  $: {
    console.log('setting')
    player.src = $currentSong.url;
  }

  $: mode = ($lrc && $lrc.length > 0) ? 'withlrc' : '';
  let lrcActiveIndex = -1;

  const startPlay = (time?: number) => {
    $wtPlayerState.playing = true;
    if(time) {
      player.currentTime = time;
    }
    return player.play();
  }
  const pause = () => {
    $wtPlayerState.playing = false;
    return player.pause();
  }
  $: togglePlay = $wtPlayerState.playing ? pause : () => startPlay();

  player.addEventListener('timeupdate', () => {
    $currentTime = player.currentTime
    if(mode.includes('lrc')) {
      if((lrcActiveIndex+1)< $lrc.length &&player.currentTime >= $lrc[lrcActiveIndex+1][0]) {
        lrcActiveIndex++;
      }
    }
  })
  player.addEventListener('volumechange', () => {
    $controlState.volume = player.volume;
  })
  player.addEventListener('loadedmetadata', () => {
    $duration = player.duration;
  })
  player.addEventListener('progress', () => {
    const bufTime = player.buffered.length ? player.buffered.end(player.buffered.length - 1) : 0;
    $wtBufTime = bufTime;
  })
  player.addEventListener('canplay', () => {
    const bufTime = player.buffered.length ? player.buffered.end(player.buffered.length - 1) : 0;
    $wtBufTime = bufTime;
  })
  player.addEventListener('durationchange', () => {
    $duration = player.duration;
  })
  player.addEventListener('ended', () => {
    const audios = Array.isArray($playList.audio) ? $playList.audio : [$playList.audio];
    const nextIdx = ($playList.playingIndex + 1) % audios.length;
    if ($controlState.loop === 'none') {
      if ($controlState.order === 'list') {
        if ($playList.playingIndex < audios.length - 1) {
          $playList.playingIndex = nextIdx
          startPlay(0)
        } else {
          $playList.playingIndex = ($playList.playingIndex + 1) % audios.length
          pause()
        }
      } else if ($controlState.order === 'random') {
              const randomIdx = Math.floor(audios.length * Math.random());
              if(randomIdx === $playList.playingIndex) {
                $playList.playingIndex =nextIdx
              } else {
                $playList.playingIndex = randomIdx;
              }
              startPlay(0);
      }
    } else if ($controlState.loop === 'one') {
      startPlay(0)
    } else if ($controlState.loop === 'all') {
      $playList.playingIndex = nextIdx;
      startPlay();
    }
  });

  const checkReadyState = () => {
    if(player.readyState !== $wtPlayerState.readyState) {
      $wtPlayerState.readyState = player.readyState
    }
    setTimeout(checkReadyState, 200);
  }
  checkReadyState();

  let volumeBar: HTMLElement;
  let playedBar: HTMLElement;
  let volumeDragStart, volumeDragMove, volumeDragEnd;
  let progressDragStart, progressDragMove, progressDragEnd;

  let playListElement: HTMLElement;
  onMount(() => {
    window.theAudio = player;
    const volumeHandlers = volumeEventHandlers(player, volumeBar);
    volumeDragStart = volumeHandlers.volumeDragStart;
    volumeDragMove = volumeHandlers.volumeDragMove;
    volumeDragEnd = volumeHandlers.volumeDragEnd;
    const progressHandlers = progressEventHandlers(player, playedBar);
    progressDragStart = progressHandlers.progressDragStart;
    progressDragMove = progressHandlers.progressDragMove;
    progressDragEnd = progressHandlers.progressDragEnd;
  })
</script>

<svelte:options tag="s-aplayer" />
<div class="aplayer" class:aplayer-withlrc={$lrc.length > 0} class:aplayer-withlist={$playList.audio.length > 1}>
  <div class="aplayer-body ">
    <div class="aplayer-pic" style="background-image: url( {$currentSong.cover} )" on:click={togglePlay} >
      {#if $wtPlayerState.playing}
        <div class="aplayer-button aplayer-pause">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>
        </div>
      {:else }
        <div class="aplayer-button aplayer-play">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 31"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>
        </div>
      {/if}
    </div>

    <div class="aplayer-info">
      <div class="aplayer-music">
        <span class="aplayer-title">{$currentSong.name}</span>
        <span class="aplayer-artist">{$currentSong.artist}</span>
      </div>

      {#if $currentSong.lrc}
      <div class="aplayer-lrc">
        <div class="aplayer-lrc-contents" style="transform: translateY({Math.max(lrcActiveIndex, 0) * -16}px);">
          {#each $lrc as line, index (line[0])}
            <p class:aplayer-lrc-current={index === lrcActiveIndex}>{line[1]}</p>
          {/each}
        </div>
      </div>
      {/if}
      <div class="aplayer-controller">
        <div
                class="aplayer-bar-wrap"
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
            <div class="aplayer-loaded" style="width: {$rdBufTime.bufferPercentage}"></div>
            <div class="aplayer-played" style="width: {$rdTime.playPercentage}">
              <div class="aplayer-thumb">
                <span class="aplayer-loading-icon" style="display: {$loading ? 'inline': 'none'}">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M4 16c0-6.6 5.4-12 12-12s12 5.4 12 12c0 1.2-0.8 2-2 2s-2-0.8-2-2c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.2 0 2 0.8 2 2s-0.8 2-2 2c-6.6 0-12-5.4-12-12z"></path></svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="aplayer-time">
          <span class="aplayer-time-inner">
            <span class="aplayer-ptime">{$rdTime.ptime}</span> / <span class="aplayer-dtime">{$rdTime.duration}</span>
          </span>


          <span hidden></span>
          <div class="aplayer-volume-wrap">
            <button type="button" class="aplayer-icon aplayer-icon-volume-down" on:click={player.muted = !player.muted}>
              {#if $volumeState.muted || player.muted}
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>
              {:else }
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 28 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>
              {/if}
            </button>
            <div
                    class="aplayer-volume-bar-wrap"
                    on:mousedown={volumeDragStart}
                    on:mousemove={volumeDragMove}
                    on:mouseup={volumeDragEnd}
                    on:mouseleave={volumeDragEnd}
                    on:touchstart={volumeDragStart}
                    on:touchmove={volumeDragMove}
                    on:touchend={volumeDragEnd}
            >
              <div class="aplayer-volume-bar" bind:this={volumeBar}>
                <div class="aplayer-volume" style="height: {player.muted ? '0px' : $volumeState.volumePercentage}"></div>
              </div>
            </div>
          </div>
          <button type="button" class="aplayer-icon aplayer-icon-order" on:click={() => {$controlState.order = $controlState.order === 'list' ? 'random' : 'list'}}>
            {#if $controlState.order === 'random'}
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22.667 4l7 6-7 6 7 6-7 6v-4h-3.653l-3.76-3.76 2.827-2.827 2.587 2.587h2v-8h-2l-12 12h-6v-4h4.347l12-12h3.653v-4zM2.667 8h6l3.76 3.76-2.827 2.827-2.587-2.587h-4.347v-4z"></path></svg>
            {:else }
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M0.622 18.334h19.54v7.55l11.052-9.412-11.052-9.413v7.549h-19.54v3.725z"></path></svg>
            {/if}
          </button>
          <button type="button" class="aplayer-icon aplayer-icon-loop" on:click={() => {
            if($controlState.loop === 'all') {$controlState.loop = 'one'}
            else if($controlState.loop === 'one') {$controlState.loop = 'none'}
            else if($controlState.loop === 'none') {$controlState.loop = 'all'}
          }}>
            {#if $controlState.loop === 'none' }
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 29 32"><path d="M2.667 7.027l1.707-1.693 22.293 22.293-1.693 1.707-4-4h-11.64v4l-5.333-5.333 5.333-5.333v4h8.973l-8.973-8.973v0.973h-2.667v-3.64l-4-4zM22.667 17.333h2.667v5.573l-2.667-2.667v-2.907zM22.667 6.667v-4l5.333 5.333-5.333 5.333v-4h-10.907l-2.667-2.667h13.573z"></path></svg>
              {:else if $controlState.loop === 'one' }
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 33 32"><path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333zM17.333 20v-8h-1.333l-2.667 1.333v1.333h2v5.333h2z"></path></svg>
              {:else if $controlState.loop === 'all'}
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 29 32"><path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333z"></path></svg>
              {/if}
          </button>

          <button type="button" class="aplayer-icon aplayer-icon-menu" on:click={() => {$controlState.showList = !$controlState.showList}}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 22 32"><path d="M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z"></path></svg>
          </button>
        </div>
      </div>
    </div>

    <div class="aplayer-miniswitcher"></div>
    <div class="aplayer-list" style="height: {$controlState.showList ? `${playerListHeight}px` : '0px'}" bind:this={playListElement}>
      <ol>
        {#each $playList.audio as song, idx}
          <li on:click={() => {
            $playList.playingIndex = idx;
            startPlay(0);
          }}>
            {#if idx === $playList.playingIndex}
              <span class="aplayer-list-cur"></span>
            {/if}
            <span class="aplayer-list-index">{idx+1}</span>
            <span class="aplayer-list-title">{song.name}</span>
            <span class="aplayer-list-artist">{song.artist}</span>
          </li>
        {/each}
      </ol>
    </div>
  </div>
</div>

<style lang="scss">
  .aplayer {
    --aplayer-height: 66px;
    --lrc-height: 30px;
    --aplayer-height-lrc: calc(var(--aplayer-height) + var(--lrc-height) - 6px);
    position: relative;
    background: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.07), 0 1px 5px 0 rgba(0, 0, 0, 0.1);
    font-family: Arial,Helvetica,sans-serif;
    margin: 5px;
    overflow: hidden;
    border-radius: 2px;
    user-select: none;
    line-height: normal;
    svg {
      width: 100%;
      height: 100%;

      path,
      circle {
        fill: #fff;
      }
    }

    .aplayer-icon {
      width: 15px;
      height: 15px;
      border: none;
      background-color: transparent;
      outline: none;
      cursor: pointer;
      opacity: .8;
      vertical-align: middle;
      padding: 0;
      font-size: 12px;
      margin: 0;
      display: inline-block;

      path {
        transition: all .2s ease-in-out;
      }
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
      transition: all .3s ease;
      cursor: pointer;

      &:hover .aplayer-button {
        opacity: 1;
      }
      .aplayer-button {
        position: absolute;
        border-radius: 50%;
        opacity: .8;
        text-shadow: 0 1px 1px rgba(0,0,0,.2);
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        background: rgba(0,0,0,.2);
        transition: all .1s ease;

      }
      .aplayer-play {
        width: 26px;
        height: 26px;
        svg {
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
        bottom: 4px;
        right: 4px;
        svg {
          position: absolute;
          top: 2px;
          left: 2px;
          height: 12px;
          width: 12px;
        }
      }
    }
    .aplayer-info {
      margin-left: 66px;
      padding: 14px 7px 0 10px;
      height: 66px;
      box-sizing: border-box;
      .aplayer-music {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        user-select: text;
        margin: 0 0 13px 5px;
        padding-bottom: 2px;
        cursor: default;

        .aplayer-title {
          font-size: 14px;
        }
        .aplayer-artist {
          font-size: 12px;
          color: #666;
        }
      }

      .aplayer-controller {
        display: flex;
        position: relative;

        .aplayer-bar-wrap {
          flex: 1;
          margin: 0 0 0 5px;
          padding: 4px 0;
          cursor: pointer !important;

          &:hover {
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
              background: #FADFA3 none repeat scroll 0 0;

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
                transition: all .3s ease-in-out;
                background: #FADFA3 none repeat scroll 0 0;
                transform: scale(0);
              }
            }
          }
        }
        .aplayer-loading-icon {
          //display: none;
          svg {
            display: block;
            position: absolute;
            animation: rotate 1s linear infinite;
          }
        }
        .aplayer-time {
          position: relative;
          right: 0;
          bottom: 4px;
          height: 17px;
          color: #999;
          font-size: 11px;
          padding-left: 7px;

          .aplayer-time-inner {
            vertical-align: center;
          }
          .aplayer-icon {
            cursor: pointer;
            transition: all .2s ease;
            path {
              fill: #666;
            }
          }
        }
        .aplayer-volume-wrap {
          display: inline-block;
          position: relative;
          margin-left: 3px;
          cursor: pointer;

          &:hover .aplayer-volume-bar-wrap {
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
            transition: all .2s ease-in-out;

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
                background: #FADFA3 none repeat scroll 0 0;
                position: absolute;
                bottom: 0;
                right: 0;
                width: 5px;
                transition: all .1s ease;
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
      margin: -10px 0 7px;

      p {
        font-size: 12px;
        color: #666;
        line-height: 16px !important;
        height: 16px !important;
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
        transition: all .5s ease-out;
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
        height: 32px;
        line-height: 32px;
        padding: 0 15px;
        font-size: 12px;
        border-top: 1px solid #e9e9e9;
        cursor: pointer;
        transition: all 0.2s ease;
        overflow: hidden;
        margin: 0;

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
          height: 22px;
          position: absolute;
          left: 0;
          top: 5px;
          cursor: pointer;
          background-color: #FADFA3;
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
  }
  @keyframes aplayer-roll {
    0%{left:0}
    100%{left: -100%}
  }

  @keyframes rotate {
    0% {
      transform: rotate(0)
    }
    100% {
      transform: rotate(360deg)
    }
  }
</style>
