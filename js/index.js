let keys = document.querySelectorAll(`.key`);
let keysContainer = document.querySelector(`.keys`);
const slide = document.querySelector(".img-slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
// for change src slide-image
let slideSrcArray = ["../assets/img/drum-kit.jpg","../assets/img/guitar.jpg"];
let slideNumber = 1;
// for display=none for key
const noGuitarKeys = document.querySelectorAll(".noGuitar");
// initial value for audio class
let classForAudio = "drum-kit";
// For change span in Keys
let spanSoundArray = document.querySelectorAll(".sound");
const spanGuitar = ["E","B","G","D","A","E"];
const spanDrumKit = ["Clap","Hihat","Kick","Openhat","Boom","Ride","Snare","Tom","Tink"];
let keyStuck = {
    "65":false,
    "83":false,
    "68":false,
    "70":false,
    "71":false,
    "72":false,
    "73":false,
    "75":false,
    "76":false,
};
//Play Audio and add effects for Key after keydown
function processKeydownOnKey(event){
    let keyCode= event.keyCode;
    let audioTrack = document.querySelector(`audio.${classForAudio}[data-key="${keyCode}"]`);
    let key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if(audioTrack &&key.style.display !== "none" & keyStuck[keyCode]===false){
        key.classList.add("playing");
        audioTrack.currentTime = 0;
        audioTrack.play();
        keyStuck[keyCode]=true;
    };
};

// Remove effects for Key
function removeClassPlaying(event){
    if(event.propertyName === "transform"){
        this.classList.remove("playing");
    };
};

// Handler for click on Key
function processClickOnKey(){
    let keyCode = this.getAttribute('data-key');
    let audioTrack = document.querySelector(`audio.${classForAudio}[data-key="${keyCode}"]`);
    let key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if(audioTrack){
        key.classList.add("playing");
        audioTrack.currentTime = 0;
        audioTrack.play();        
    };
};
// Select the musical instrument
function changeSlideNext(){
    this.classList.add("changeButtonSlider");
    slide.src =slideSrcArray[slideNumber%2];
    // If Slide is Guitar
    if(slideNumber % 2 === 1){
        noGuitarKeys.forEach(elem => {
            elem.style.display ="none"; 
        });
        classForAudio = "guitar";
        for(let i = 0; i<spanGuitar.length; i++){
            spanSoundArray[i].innerHTML = spanGuitar[i];
        };

    }else{// If Slide is Drum-kit
        noGuitarKeys.forEach(elem => {
            elem.style.display ="block";
        });
        classForAudio = "drum-kit";
        for(let i = 0; i<spanDrumKit.length; i++){
            spanSoundArray[i].innerHTML = spanDrumKit[i];
        };
    };
    slideNumber++;
}
// Remove effects for Prev and Next
function removeChangeButtonSlider(event){
    if(event.propertyName === "color"){
        this.classList.remove("changeButtonSlider");
    };
};

function removeKeyStuck(event){
    keyStuck[event.keyCode]=false;
}
// fix the Bag of long push on the key
keys.forEach(elem => elem.addEventListener("transitionend", removeClassPlaying));
keys.forEach(elem => elem.addEventListener("click", processClickOnKey));
next.addEventListener("click", changeSlideNext);
prev.addEventListener("click", changeSlideNext);
next.addEventListener("transitionend", removeChangeButtonSlider);
prev.addEventListener("transitionend", removeChangeButtonSlider);
window.addEventListener("keydown", processKeydownOnKey);

window.addEventListener("keyup", removeKeyStuck);




