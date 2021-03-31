export function progressEventHandlers(player: HTMLAudioElement, progressBar) {
    let progressActive = false;
    const progressDragStart = () => {
        progressActive = true;
    }
    const progressDragMove = (ev) => {
        if(progressActive) {
            let percentage = ((ev.clientX || ev.changedTouches[0].clientX) - progressBar.getBoundingClientRect().left) / progressBar.clientWidth;
            percentage = Math.max(percentage, 0);
            percentage = Math.min(percentage, 1);
            player.currentTime = player.duration * percentage
        }
    }
    const progressDragEnd = (ev) => {
        if(progressActive) {
            progressActive = false;
            let percentage = ((ev.clientX || ev.changedTouches[0].clientX) - progressBar.getBoundingClientRect().left) / progressBar.clientWidth;
            percentage = Math.max(percentage, 0);
            percentage = Math.min(percentage, 1);
            player.currentTime = player.duration * percentage;
        }
    }

    return {
        progressDragStart,
        progressDragMove,
        progressDragEnd
    }
}
