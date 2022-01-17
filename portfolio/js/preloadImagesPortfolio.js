export function preloadImages(arrOfSeasons) {
    arrOfSeasons.forEach(season => {
        for(let i=1; i<=6; i++){
            const img = new Image();
            img.src= `./assets/img/${season}/${i}.jpg`
        }
    });
    
}