
export function animateClickOnButton(target){
    const camera = document.createElement('span');
    const text = document.createElement('span');
    const flash = document.createElement('span');
    flash.classList.add('big-button__flash');
    text.innerText = target.innerText;
    text.classList.add('big-button__animateText');
    target.innerText = ""
    target.append(text);
    text.style.left = (target.clientWidth-text.clientWidth)/2 + 'px';
    text.style.top = (target.clientHeight-text.clientHeight)/2 + 'px';
    camera.classList.add('big-button__cameraSvg');
    target.append(camera)
    
    setTimeout(moveCameraToText, 500)

    function moveCameraToText(){
        camera.style.left = text.offsetLeft-camera.clientWidth + 'px';
        camera.addEventListener('transitionend', moveTextAndCamera);
    }

    function moveTextAndCamera(){       
        camera.removeEventListener('transitionend', moveTextAndCamera);
        text.style.transform = "rotate(-30deg)";
        text.style.left= '225px' ;
        camera.style.left = (target.clientWidth-camera.clientWidth)/2 + 'px';
        camera.addEventListener('transitionend', addFlash);
    }

    function addFlash(){   
        let flashesInterval    
        camera.removeEventListener('transitionend', addFlash);

        setTimeout(() => {
            let sizeFlash = 100;
            flashesInterval = setInterval(showFlash, 200)
            target.append(flash);
            
            function showFlash(){
                flash.style.display="block";
                    setTimeout(() => {
                        sizeFlash += 50;
                        flash.style.display='none';
                        flash.style.transform = `scale(${sizeFlash}%)`
                    }, 100);
               }
        }, 100);

        setTimeout(() => {
            clearInterval(flashesInterval)
            setTimeout(() => {
                camera.addEventListener('transitionend', showText)
                camera.style.left = '-60px'
                text.style.transform = "rotate(0deg)";
                text.style.transition = "left 1s cubic-bezier(.45,8.32,1,1.47)"
           }, 300);
            
        }, 600);

        function showText(){
            camera.removeEventListener('transitionend', showText)
            text.style.left = '220px';
            text.addEventListener('transitionend', returnText)
        }

        function returnText(){
            text.removeEventListener('transitionend', returnText)
            text.style.transition = "left 0.5s linear"
            text.style.left = (target.clientWidth-text.clientWidth)/2 + 'px';
            text.addEventListener('transitionend', clearButton)
        }

        function clearButton(){
            target.innerHTML = text.textContent;
        }
    }

}