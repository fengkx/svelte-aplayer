type VolumeEvent = MouseEvent | TouchEvent;

const getClientY = (event: VolumeEvent) =>
  event instanceof MouseEvent
    ? event.clientY
    : (event.changedTouches[0]?.clientY ?? 0);

export function volumeEventHandlers(
  player: HTMLAudioElement,
  volumeBar: HTMLElement
) {
  let volumeActive = false;
  const volumeDragStart = () => {
    volumeActive = true;
  };
  const volumeDragMove = (ev: VolumeEvent) => {
    if (volumeActive) {
      let percentage =
        1 -
        (getClientY(ev) - volumeBar.getBoundingClientRect().top) /
          volumeBar.clientHeight;
      percentage = Math.max(percentage, 0);
      percentage = Math.min(percentage, 1);
      player.volume = percentage;
    }
  };
  const volumeDragEnd = (ev: VolumeEvent) => {
    if (volumeActive) {
      let percentage =
        1 -
        (getClientY(ev) - volumeBar.getBoundingClientRect().top) /
          volumeBar.clientHeight;
      percentage = Math.max(percentage, 0);
      percentage = Math.min(percentage, 1);
      player.volume = percentage;
      volumeActive = false;
    }
  };
  return { volumeDragStart, volumeDragMove, volumeDragEnd };
}
