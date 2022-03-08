import { changeColorTheme } from "./changeColorTheme.js";
import changeLanguage from "./i18n.js";
import toggleClassActive from "./toggleClassActive.js"

export function setLocalStorage(){
    localStorage.setItem('lang', 
        document.querySelector('.toggle-language__button-active')
        .dataset.lang);

    localStorage.setItem("colorTheme", document
        .querySelector('.toggle-color-theme__button')
        .dataset.theme); 
}

export function getLocalStorage(){
    if(localStorage.getItem('lang')){
        const lang = localStorage.getItem('lang');
        const target = document.querySelector(`[data-lang = ${lang}]`);
        const languageButtons = document.querySelectorAll(`[data-lang]`);
        changeLanguage(lang);
        toggleClassActive(target, 'toggle-language__button-active', languageButtons)
    }
    if(localStorage.getItem('colorTheme')){
        const theme = localStorage.getItem('colorTheme')==='dark-theme'? 'white-theme':'dark-theme';
        changeColorTheme(theme);
    }
}
