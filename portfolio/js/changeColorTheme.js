export function changeColorTheme(target){
    if(target.dataset.theme === "white-theme"){
        target.dataset.theme = "dark-theme";
        displayWhiteTheme();
    }else {
        target.dataset.theme = "white-theme";
        displayDarkTheme();
    }

    
    function displayWhiteTheme(){
        document.documentElement.style.setProperty('--main-text-color', '#1c1c1c');
        document.documentElement.style.setProperty('--active-text-color', '#bdae82');
        document.documentElement.style.setProperty('--body-color', '#ffffff');

        document.documentElement.style.setProperty('--hero-bg-img','url("../assets/img/white-theme/hero-bg.jpg")' )
        document.documentElement.style.setProperty('--contacts-bg-img','url("../assets/img/white-theme/contacts-bg.jpg")' )

        document.documentElement.style.setProperty('--btns-hire-contacts-bgcolor','#fff');
        document.documentElement.style.setProperty('--btns-hire-contacts-color','#1c1c1c' );
        document.documentElement.style.setProperty('--btns-hire-contacts-bgcolor-hover','#1c1c1c');
        document.documentElement.style.setProperty('--btns-hire-contacts-color-hover','#bdae82');
        document.documentElement.style.setProperty('--btns-hire-shadow','0px 4px 4px rgba(0, 0, 0, 0.25)');

        document.documentElement.style.setProperty('--btns-portfolio-bgcolor','#bdae82');
        document.documentElement.style.setProperty('--btns-portfolio-color','#1c1c1c');
        document.documentElement.style.setProperty('--btns-portfolio-bgcolor-hover','#1c1c1c');
        document.documentElement.style.setProperty('--btns-portfolio-color-hover','#bdae82');
        document.documentElement.style.setProperty('--btns-portfolio-bgcolor-active','#1c1c1c');
        document.documentElement.style.setProperty('--btns-portfolio-color-active','#bdae82');    

        document.documentElement.style.setProperty('--btns-price-bgcolor','#bdae82');
        document.documentElement.style.setProperty('--btns-price-color','#1c1c1c');    
        document.documentElement.style.setProperty('--btns-price-bgcolor-hover','#1c1c1c');
        document.documentElement.style.setProperty('--btns-price-color-hover','#bdae82');

        document.documentElement.style.setProperty('--btns-language-color-hover:','#bdae82');
        document.documentElement.style.setProperty('--btns-language-color-active','#ffffff');


        document.documentElement.style.setProperty('--sections-title-color','#1c1c1c');
        document.documentElement.style.setProperty('--price-standard-premium-color','#1c1c1c');
        document.documentElement.style.setProperty('--contacts-title','#1c1c1c');
        document.documentElement.style.setProperty('--contacts-message-phone-email-bgcolor','rgba(255, 255, 255, .5)');
        document.documentElement.style.setProperty('--contacts-text-placeholder','#1c1c1c')
        document.documentElement.style.setProperty('--contacts-text-placeholder-hover','#ffffff')


        document.documentElement.style.setProperty('--filter-theme-icon',`invert(6%) sepia(10%)
                saturate(4%) hue-rotate(314deg) brightness(99%) contrast(89%)`);
        document.documentElement.style.setProperty('--filter-theme-icon-hover',`'invert(82%) sepia(7%)
                saturate(1536%) hue-rotate(7deg) brightness(89%) contrast(77%)`);

        document.documentElement.style.setProperty('--filter-icon','invert(100%)');
        document.documentElement.style.setProperty('--filter-icon-hover',`invert(26%) sepia(15%)
                             saturate(638%) hue-rotate(7deg) brightness(92%) contrast(87%)`);
    }

    function displayDarkTheme(){
        document.documentElement.style.setProperty('--main-text-color', '');
        document.documentElement.style.setProperty('--active-text-color', '');
        document.documentElement.style.setProperty('--body-color', '');

        document.documentElement.style.setProperty('--hero-bg-img','' )
        document.documentElement.style.setProperty('--contacts-bg-img','' )

        document.documentElement.style.setProperty('--btns-hire-contacts-bgcolor','');
        document.documentElement.style.setProperty('--btns-hire-contacts-color','' );
        document.documentElement.style.setProperty('--btns-hire-contacts-bgcolor-hover','');
        document.documentElement.style.setProperty('--btns-hire-contacts-color-hover','');
        document.documentElement.style.setProperty('--btns-hire-shadow','');

        document.documentElement.style.setProperty('--btns-portfolio-bgcolor','');
        document.documentElement.style.setProperty('--btns-portfolio-color','');
        document.documentElement.style.setProperty('--btns-portfolio-bgcolor-hover','');
        document.documentElement.style.setProperty('--btns-portfolio-color-hover','');
        document.documentElement.style.setProperty('--btns-portfolio-bgcolor-active','');
        document.documentElement.style.setProperty('--btns-portfolio-color-active','');    

        document.documentElement.style.setProperty('--btns-price-bgcolor','');
        document.documentElement.style.setProperty('--btns-price-color','');    
        document.documentElement.style.setProperty('--btns-price-bgcolor-hover','');
        document.documentElement.style.setProperty('--btns-price-color-hover','');

        document.documentElement.style.setProperty('--btns-language-color-hover:','');
        document.documentElement.style.setProperty('--btns-language-color-active','');


        document.documentElement.style.setProperty('--sections-title-color','');
        document.documentElement.style.setProperty('--price-standard-premium-color','');
        document.documentElement.style.setProperty('--contacts-title','');
        document.documentElement.style.setProperty('--contacts-message-phone-email-bgcolor','');
        document.documentElement.style.setProperty('--contacts-text-placeholder','')
        document.documentElement.style.setProperty('--contacts-text-placeholder-hover','')


        document.documentElement.style.setProperty('--filter-theme-icon',``);
        document.documentElement.style.setProperty('--filter-theme-icon-hover',``);

        document.documentElement.style.setProperty('--filter-icon','');
        document.documentElement.style.setProperty('--filter-icon-hover',``);
    }
     
}
