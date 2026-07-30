type ProgressEvent = MouseEvent | TouchEvent;

const getClientX = (event: ProgressEvent) =>
  event instanceof MouseEvent
    ? event.clientX
    : (event.changedTouches[0]?.clientX ?? 0);

export function progressEventHandlers(
  player: HTMLAudioElement,
  progressBar: HTMLElement
) {
  let progressActive = false;
  const progressDragStart = () => {
    progressActive = true;
  };
  const progressDragMove = (ev: ProgressEvent) => {
    if (progressActive) {
      let percentage =
        (getClientX(ev) - progressBar.getBoundingClientRect().left) /
        progressBar.clientWidth;
      percentage = Math.max(percentage, 0);
      percentage = Math.min(percentage, 1);
      player.currentTime = player.duration * percentage;
    }
  };
  const progressDragEnd = (ev: ProgressEvent) => {
    if (progressActive) {
      progressActive = false;
      let percentage =
        (getClientX(ev) - progressBar.getBoundingClientRect().left) /
        progressBar.clientWidth;
      percentage = Math.max(percentage, 0);
      percentage = Math.min(percentage, 1);
      player.currentTime = player.duration * percentage;
    }
  };

  return {
    progressDragStart,
    progressDragMove,
    progressDragEnd,
  };
}
