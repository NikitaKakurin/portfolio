export function changeColorTheme(target){
    document.querySelectorAll("[data-theme]").forEach(elem=>{
        if(elem===target){
            return;
        }
        elem.dataset.theme = target.dataset.theme;
    })
    if(target.dataset.theme === "white-theme"){
        target.dataset.theme = "dark-theme";
    }else if(target.dataset.theme === "dark-theme"){
        target.dataset.theme = "white-theme";
    }


    document.documentElement.style.setProperty('--main-text-color', '#000000');
    document.documentElement.style.setProperty('--active-text-color', '#ffffff');
    document.documentElement.style.setProperty('--dark-color', '#ffffff');
}
