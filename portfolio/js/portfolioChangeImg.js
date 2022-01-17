export function changeImages(button) {
    document.querySelectorAll(".section-portfolio__img").forEach((elem, index)=>{
        elem.style.opacity = 0.05;
        elem.addEventListener("transitionend", changeSrc)

        function changeSrc(){
            elem.src = `./assets/img/${button.dataset.season}/${index+1}.jpg`;
            elem.style.opacity = 1;
            elem.removeEventListener("transitionend", changeSrc);
        }

    })
}

