let keys = document.querySelectorAll(`.key`);
let  keysContainer = document.querySelector(`.keys`);
function playAudio(keyCode){
    let audioTrack = document.querySelector(`audio[data-key="${keyCode}"]`);
    let key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if(!audioTrack){return false;};
    audioTrack.currentTime = 0;
    audioTrack.play();
    if(!key){return false;};
    key.classList.add("playing");
}
function removeClassPlaying(event){
    if(event.propertyName != "transform"){return false};
    this.classList.remove("playing");
}
function processClickOnKey(){
    playAudio(this.getAttribute('data-key'));
};
function processKeydownOnKey(event){
    playAudio(event.keyCode);
}
keys.forEach(elem => elem.addEventListener("transitionend", removeClassPlaying));
keys.forEach(elem => elem.addEventListener("click", processClickOnKey));
window.addEventListener("keydown", processKeydownOnKey);


console.log(keysContainer);