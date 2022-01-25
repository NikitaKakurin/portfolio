const video = document.querySelector('.section-video__video');
const mainPlayButton = document.querySelector(".section-video__main-play");
let currentTime = 0;
export function handleClickOnVideo(){
    if (video.paused){
        video.play();
        video.controls = true;
        mainPlayButton.hidden = true;
        video.addEventListener("pause", handlePauseVideo)
        video.addEventListener("play", handlePlayVideo)
        video.addEventListener("ended", handleEndedVideo)
    }
    function handlePauseVideo(){
        mainPlayButton.hidden = false;
    }
    function handlePlayVideo(){
        mainPlayButton.hidden = true;
    }
    function handleEndedVideo(){
        video.controls = false;
        mainPlayButton.hidden = false;
        video.load()
        video.removeEventListener("pause", handlePauseVideo)
        video.removeEventListener("play", handlePlayVideo)
        video.removeEventListener("ended", handleEndedVideo)
    }
}