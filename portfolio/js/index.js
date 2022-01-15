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
              burgerBackground ===target){
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
// console.log(`Ваша оценка - 110 баллов \n
// Отзыв по пунктам ТЗ:\n
// Выполненные пункты:\n
// 1) Вёрстка валидная. Для проверки валидности вёрстки используйте сервис https://validator.w3.org/. Валидной вёрстке соответствует надпись "Document checking completed. No errors or warnings to show." В таком случае баллы за пункт требований выставляем полностью. Если есть предупреждения - warnings, но нет ошибок - errors, выставляем половину баллов за пункт требований \n

// 2) header, main, footer \n

// 3) шесть элементов section (по количеству секций)\n 

// 4) только один заголовок h1 \n

// 5) пять заголовков h2 (количество секций минус одна, у которой заголовок h1) \n

// 6) один элемент nav (панель навигации) \n

// 7) два списка ul > li > a (панель навигации, ссылки на соцсети) \n

// 8) десять кнопок button \n

// 9) два инпута: input type="email" и input type="tel" \n

// 10) один элемент textarea \n

// 11) три атрибута placeholder \n

// 12) блок header \n

// 13) секция hero \n

// 14) секция skills \n

// 15) секция portfolio \n

// 16) секция video \n

// 17) секция price \n

// 18) секция contacts \n

// 19) блок footer \n

// 20) для построения сетки используются флексы или гриды \n

// 21) при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону \n

// 22) фоновый цвет тянется на всю ширину страницы \n

// 23) иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления \n

// 24) изображения добавлены в формате .jpg \n

// 25) есть favicon \n

// 26) плавная прокрутка по якорям \n

// 27) ссылки в футере ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/ \n

// 28) интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета \n

// 29) обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы \n

// `);