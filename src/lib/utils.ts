export const secondToTime = (second) => {
  const add0 = (num) => (num < 10 ? "0" + num : "" + num);
  const hour = Math.floor(second / 3600);
  const min = Math.floor((second - hour * 3600) / 60);
  const sec = Math.floor(second - hour * 3600 - min * 60);
  return (hour > 0 ? [hour, min, sec] : [min, sec]).map(add0).join(":");
};

export const isMobile = /mobile/i.test(window.navigator.userAgent);
export const nameMap = {
  dragStart: isMobile ? "touchstart" : "mousedown",
  dragMove: isMobile ? "touchmove" : "mousemove",
  dragEnd: isMobile ? "touchend" : "mouseup",
};

export function parseLrc(lrc_s: string): [number, string][] {
  if (lrc_s) {
    lrc_s = lrc_s.replace(/([^\]^\n])\[/g, (match, p1) => p1 + "\n[");
    const lyric = lrc_s.split("\n");
    let lrc = [];
    const lyricLen = lyric.length;
    for (let i = 0; i < lyricLen; i++) {
      // match lrc time
      const lrcTimes = lyric[i].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g);
      // match lrc text
      const lrcText = lyric[i]
        .replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g, "")
        .replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g, "")
        .replace(/^\s+|\s+$/g, "");

      if (lrcTimes) {
        // handle multiple time tag
        const timeLen = lrcTimes.length;
        for (let j = 0; j < timeLen; j++) {
          const oneTime = /\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(lrcTimes[j]);
          //@ts-ignore
          const min2sec = oneTime[1] * 60;
          const sec2sec = parseInt(oneTime[2]);
          const msec2sec = oneTime[4]
            ? parseInt(oneTime[4]) /
              ((oneTime[4] + "").length === 2 ? 100 : 1000)
            : 0;
          const lrcTime = min2sec + sec2sec + msec2sec;
          lrc.push([lrcTime, lrcText]);
        }
      }
    }
    // sort by time
    lrc = lrc.filter((item) => item[1]);
    lrc.sort((a, b) => a[0] - b[0]);
    return lrc;
  } else {
    return [];
  }
}

export function propsBool(props: Record<string, any>, key: string) {
  const v = props[key];
  return !(v === null || v === undefined || v === "false");
}
