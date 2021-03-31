import {derived, writable} from "svelte/store";
import {parseLrc, secondToTime} from "./utils";

export type Audio =  {
    name: string,
    artist: string,
    url: string,
    cover: string,
    lrc?: string,
    theme?: string
}

type GlobalState = {
    audio: Audio[],
    playingIndex: number,
}

type ControlState = {
    loop: 'none'| 'all' | 'one',
    order: 'list' | 'random'
    volume: number,
    showList: boolean
}

export let currentTime = writable(0);
export let duration = writable(NaN);

export const rdTime = derived([currentTime, duration], ([$currentTime, $duration]) => {
    let playPercentage = $currentTime / $duration;
    playPercentage = Math.max(playPercentage, 0);
    playPercentage = Math.min(playPercentage, 1);
    playPercentage *= 100;
    return {
        ptime: secondToTime($currentTime),
        duration: secondToTime($duration),
        playPercentage: `${playPercentage}%`,
    }
})

export let wtBufTime = writable(0);
export const rdBufTime = derived([wtBufTime, duration], ([$bufTime, $duration]) => {
    let bufferPercentage = $bufTime / $duration
    bufferPercentage = Math.max(bufferPercentage, 0);
    bufferPercentage = Math.min(bufferPercentage, 1);
    bufferPercentage *= 100;
    return {bufferPercentage: `${bufferPercentage}%`, bufTime: $bufTime}
})

export const wtPlayerState = writable({readyState: 0, playing: false});

export const playList = writable<GlobalState>({
    playingIndex: 0,
    audio: [],
})

export const controlState = writable<ControlState>({
    volume: 0.7,
    loop: 'all',
    order: 'list',
    showList: false
});

export const volumeState = derived(controlState, $wt => {
    return {
        volumePercentage: `${$wt.volume * 100}%`,
        muted: $wt.volume === 0,
    }
})


export const currentSong = derived(playList, $wt => $wt.audio[$wt.playingIndex])

export const loading = derived([wtPlayerState, rdBufTime, currentTime], ([$wt, {bufTime}, $currentTime]) => {
    if(!$wt.playing) {
        return false;
    }
    if($wt.readyState <= HTMLMediaElement.HAVE_CURRENT_DATA) {
        return true;
    }
    if((bufTime - $currentTime) < 2 && $wt.readyState === HTMLMediaElement.HAVE_FUTURE_DATA) {
        return true
    }
    return false
})

// @ts-ignore
export const lrc = derived(currentSong, ($song, set) => {
    if(!$song || !$song.lrc) {
        return '';
    }
    const lrcSource = $song.lrc;
    if(lrcSource.startsWith('http')) {
        fetch(lrcSource)
            .then(resp => {
                if(!resp.ok) {
                    throw new Error(`${resp.statusText} canot loading lrc from ${lrcSource}`)
                }
                return resp.text()
            }).then(text => {
                set(parseLrc(text));
            }).catch(err => {
                set([])
                console.error(err);
                throw err;
        });
    } else {
        set(parseLrc(lrcSource));
    }
}, [])
