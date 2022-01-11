
const progress = document.querySelector('.progress');
const volume = document.querySelector('.volume');

progress.addEventListener('input', function(){
    const value = this.value;
    this.style.background ='linear-gradient(to right, #24809E 0%, #24809E '+ value + '%, #C4C4C4 ' + value +'%, #C4C4C4 100%)'})
;
volume.addEventListener('input', function(){
    const value = this.value;
    this.style.background ='linear-gradient(to right, #24809E 0%, #24809E '+ value + '%, #C4C4C4 ' + value +'%, #C4C4C4 100%)'})
;


