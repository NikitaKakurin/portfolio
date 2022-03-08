import './css/normalize.css';
import './css/style.css';
import './css/media.css';

import changeLanguage from "./js/i18n.js";
import { changeImages } from "./js/portfolioChangeImg.js";
import { preloadImages } from "./js/preloadImagesPortfolio.js";
import { changeColorTheme } from "./js/changeColorTheme.js";
import { getLocalStorage, setLocalStorage } from "./js/localStorage.js";
import toggleClassActive from "./js/toggleClassActive.js";
import { animateClickOnButton } from "./js/buttonsAnimation.js";
import { handleClickOnVideo } from "./js/videoPlayer.js";

import bigPoster from './assets/img/video-poster.jpg';
import smallPoster from './assets/img/video-player-mini.jpg';




const video = document.querySelector(".section-video__video");
const burgerButton = document.querySelector(".burger-button");
const burgerButtonLines = document.querySelectorAll(".burger-button div");
const menu = document.querySelector(".menu__list");
const burgerBackground = document.querySelector(".burger-background");
const languageButtons = document.querySelectorAll("[data-lang]");
const portfolioButtons = document.querySelectorAll("[data-season]");
const colorThemeButton = document.querySelector('[data-theme]');



let isMenuOpen = false;
let isTablet;
let currentSizeMenu = menu.clientWidth;
let isCurrentSizeTablet;

video.poster = bigPoster;


document.addEventListener("click", handlerClick)
function handlerClick(event){
    const target = event.target;
    if(burgerButton.contains(target) || burgerButton === target){
        handleClickOnBurgerButton(event);
        return;
    }else if((menu.contains(target) && 
              target.tagName === "A") ||
              burgerBackground === target){
        if(isMenuOpen){
            closeMenu();
        }
    }

    if(target.dataset.lang){
        changeLanguage(target.dataset.lang);
        toggleClassActive(target, "toggle-language__button-active", languageButtons);
        return;
    };

    if(target.classList.contains("big-button")){
        animateClickOnButton(target);
    }

    if(target.dataset.season){
        if(target.classList.contains("section-portfolio__button-active")){
            return;
        }
        changeImages(target)
        toggleClassActive(target, "section-portfolio__button-active", portfolioButtons);
        return;        
    }

    if(target.dataset.theme){
        changeColorTheme(target.dataset.theme);
        return;
    }

    if(target.classList.contains("section-video__main-play")){
        handleClickOnVideo();
    }


}

function handleClickOnBurgerButton(event){
    if(isMenuOpen){
        closeMenu();
    }else{
        openMenu();
    }
    
};

function openMenu(){
    changeBurgerButton({isToOpen:true});    
    isMenuOpen = true;
    menu.style.right = "0px";
    burgerBackground.style.display= "block";
    changeBurgerColorHover(isMenuOpen);
}

function closeMenu(){
    currentSizeMenu = menu.clientWidth;
    changeBurgerButton({isToOpen:false});
    isMenuOpen = false;
    menu.style.right = -currentSizeMenu+"px";
    burgerBackground.style.display= "none";
    changeBurgerColorHover(isMenuOpen);
}

function changeBurgerColorHover(isOpen){
    if(isOpen){
        document.documentElement.style.setProperty('--burger-button-hover', '#bdae82' );
    }else if(colorThemeButton.dataset.theme === 'dark-theme'){
        document.documentElement.style.setProperty('--burger-button-hover', '#ffffff' );
    }
}

function changeBurgerButton({isToOpen}) {
    let fun;
    if(isToOpen){
        fun = "add";
    } else{
        fun = "remove";
    }
    burgerButtonLines.forEach((elem, index)=>{
        switch (index){
            case 0:
                elem.classList[fun]("burger-button__line-first");
                break;
            case 1:
                elem.classList[fun]("burger-button__line-second");
                break;
            case 2:
                elem.classList[fun]("burger-button__line-third");
                break;
        }
    });
}


window.onresize = function handler(event) {
    isCurrentSizeTablet = document.documentElement.clientWidth<=768;
    if(isTablet!==(isCurrentSizeTablet)){
        ChangePoster(isCurrentSizeTablet);
        if(isMenuOpen){
            debugger;
            closeMenu();
        }
    }
    if(isTablet){
        if(isMenuOpen){
            closeMenu();
        }else{
            currentSizeMenu = menu.clientWidth;
            menu.style.right = -currentSizeMenu+"px";
        }
    }
}

function ChangePoster(isFormatTablet) {
    if(isFormatTablet){
        video.poster = smallPoster;
        isTablet = true;
    }else{
        video.poster = bigPoster;
        isTablet = false;
    }
}

ChangePoster(document.documentElement.clientWidth<=768);


window.addEventListener('load', getLocalStorage);
window.addEventListener("beforeunload",setLocalStorage);
preloadImages(["summer", "winter", "spring"]);

console.log(
    `Ваша отметка - 85 балла(ов)\n
    Отзыв по пунктам ТЗ:\n
    Все пункты выполнены полностью!`
);