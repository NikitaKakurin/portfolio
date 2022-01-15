"use strict"

const video = document.querySelector(".section-video__video");
const burgerButton = document.querySelector(".burger-button")
const burgerButtonLines = document.querySelectorAll(".burger-button div");
const menu = document.querySelector(".menu__list");
const burgerBackground = document.querySelector(".burger-background");
let isMenuOpen = false;
let isTablet;
let currentSizeMenu = menu.clientWidth;
let isCurrentSizeTablet;
document.addEventListener("click", handlerClick)
function handlerClick(event){
    const target = event.target;
    if(burgerButton.contains(target) || burgerButton === target){
        handleClickOnBurgerButton(event);
    }else if((menu.contains(target) && 
              target.tagName === "A") ||
              burgerBackground === target){
        if(isMenuOpen){
            closeMenu();
        }
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
}

function closeMenu(){
    currentSizeMenu = menu.clientWidth;
    changeBurgerButton({isToOpen:false});
    isMenuOpen = false;
    menu.style.right = -currentSizeMenu+"px";
    burgerBackground.style.display= "none";
}

function changeBurgerButton({isToOpen}) {
    burgerButtonLines.forEach((elem, index)=>{
        let fun;
        if(isToOpen){
            fun = "add";
        } else{
            fun = "remove";
        }
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
        video.poster="./assets/img/video-player-mini.jpg";
        isTablet = true;
    }else{
        video.poster="./assets/img/video-poster.jpg";
        isTablet = false;
    }
}

ChangePoster(document.documentElement.clientWidth<=768);


console.log(
    Ваша отметка - 85 балла(ов)
    Отзыв по пунктам ТЗ:
    Все пункты выполнены полностью!
);