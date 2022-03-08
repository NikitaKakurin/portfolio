import whiteHeroBG from '../assets/img/white-theme/hero-bg.jpg';
import whiteContactBG from '../assets/img/white-theme/contacts-bg.jpg'
const cssPropertiesWhiteTheme = {
    '--main-text-color': '#1c1c1c',
    '--active-text-color': '#bdae82',
    '--body-color': '#ffffff',

    '--burger-menu-link-color': '#1c1c1c',
    '--burger-menu-link-color-hover': '#bdae82',
    '--burger-button-hover':'#ffffff',
    '--active-header-text-color':'#ffffff',

    '--hero-bg-img':`url(${whiteHeroBG})`,
    '--contacts-bg-img':`url(${whiteContactBG})`,

    '--btns-hire-contacts-bgcolor':'#fff',
    '--btns-hire-contacts-color':'#1c1c1c',
    '--btns-hire-contacts-bgcolor-hover':'#1c1c1c',
    '--btns-hire-contacts-color-hover':'#bdae82',
    '--btns-hire-shadow':'0px 4px 4px rgba(0, 0, 0, 0.25)',

    '--btns-portfolio-bgcolor':'#bdae82',
    '--btns-portfolio-color':'#1c1c1c',
    '--btns-portfolio-bgcolor-hover':'#1c1c1c',
    '--btns-portfolio-color-hover':'#bdae82',
    '--btns-portfolio-bgcolor-active':'#1c1c1c',
    '--btns-portfolio-color-active':'#bdae82',

    '--btns-price-bgcolor':'#bdae82',
    '--btns-price-color':'#1c1c1c',    
    '--btns-price-bgcolor-hover':'#1c1c1c',
    '--btns-price-color-hover':'#bdae82',

    '--btns-language-color-hover:':'#bdae82',
    '--btns-language-color-active':'#ffffff',

    '--sections-title-color':'#1c1c1c',
    '--price-standard-premium-color':'#1c1c1c',
    '--contacts-title':'#1c1c1c',
    '--contacts-message-phone-email-bgcolor':'rgba(255, 255, 255, .5)',
    '--contacts-text-placeholder':'#1c1c1c',
    '--contacts-text-placeholder-hover':'#ffffff',

    '--filter-theme-icon':`invert(6%) sepia(10%) saturate(4%) 
                            hue-rotate(314deg) brightness(99%) contrast(89%)`,

    '--filter-theme-icon-hover':`invert(100%)`,

    '--filter-icon':'invert(100%)',
    '--filter-logo-icon-hover': 'none',
    '--filter-icon-hover':`invert(26%) sepia(15%)
                         saturate(638%) hue-rotate(7deg) brightness(92%) contrast(87%)`
};
const button = document.querySelector(".toggle-color-theme__button");
const container = document.querySelector('.container-screen')
export function changeColorTheme(colorTheme){
    if(colorTheme === "white-theme"){
        button.dataset.theme = "dark-theme";
        displayWhiteTheme();
    }else {
        button.dataset.theme = "white-theme";
        displayDarkTheme();
    }

    
    function displayWhiteTheme(){
        container.style.opacity = 0.1;
        container.addEventListener('transitionend', changeColorToWhite);
        function changeColorToWhite(){
            container.removeEventListener('transitionend', changeColorToWhite);
            container.style.opacity = 1;
            for (let prop in cssPropertiesWhiteTheme){
                document.documentElement.style.setProperty(prop, cssPropertiesWhiteTheme[prop])
            }
        }
    }

    function displayDarkTheme(){
        container.style.opacity = 0.1;
        container.addEventListener('transitionend', changeColorToWhite);
        function changeColorToWhite(){
            container.removeEventListener('transitionend', changeColorToWhite);
            container.style.opacity = 1;
            for (let prop in cssPropertiesWhiteTheme){
                document.documentElement.style.setProperty(prop, "")
            }
        }

    }
     
}
