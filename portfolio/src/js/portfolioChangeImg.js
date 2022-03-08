import winter1 from '../assets/img/winter/1.jpg';
import winter2 from '../assets/img/winter/2.jpg';
import winter3 from '../assets/img/winter/3.jpg';
import winter4 from '../assets/img/winter/4.jpg';
import winter5 from '../assets/img/winter/5.jpg';
import winter6 from '../assets/img/winter/6.jpg';

import autumn1 from '../assets/img/autumn/1.jpg';
import autumn2 from '../assets/img/autumn/2.jpg';
import autumn3 from '../assets/img/autumn/3.jpg';
import autumn4 from '../assets/img/autumn/4.jpg';
import autumn5 from '../assets/img/autumn/5.jpg';
import autumn6 from '../assets/img/autumn/6.jpg';

import spring1 from '../assets/img/spring/1.jpg';
import spring2 from '../assets/img/spring/2.jpg';
import spring3 from '../assets/img/spring/3.jpg';
import spring4 from '../assets/img/spring/4.jpg';
import spring5 from '../assets/img/spring/5.jpg';
import spring6 from '../assets/img/spring/6.jpg';

import summer1 from '../assets/img/summer/1.jpg';
import summer2 from '../assets/img/summer/2.jpg';
import summer3 from '../assets/img/summer/3.jpg';
import summer4 from '../assets/img/summer/4.jpg';
import summer5 from '../assets/img/summer/5.jpg';
import summer6 from '../assets/img/summer/6.jpg';

export const seasonsObj ={
    'winter': [winter1, winter2, winter3, winter4, winter5, winter6],
    'summer': [summer1, summer2, summer3, summer4, summer5, summer6],
    'autumn': [autumn1, autumn2, autumn3, autumn4, autumn5, autumn6],
    'spring': [spring1, spring2, spring3, spring4, spring5, spring6],
    }

export function changeImages(button) {
    document.querySelectorAll(".section-portfolio__img").forEach((elem, index)=>{
        elem.style.opacity = 0.05;
        elem.addEventListener("transitionend", changeSrc)

        function changeSrc(){
            elem.src = seasonsObj[button.dataset.season][index];
            elem.style.opacity = 1;
            elem.removeEventListener("transitionend", changeSrc);
        }
    })
}

