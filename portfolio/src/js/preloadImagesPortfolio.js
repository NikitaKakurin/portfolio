import { seasonsObj } from "./portfolioChangeImg";

export function preloadImages(arrOfSeasons) {
    arrOfSeasons.forEach(season => {
        seasonsObj[season].forEach(picture=>{
            const img = new Image();
            img.src = picture;
        })
    });
    
}