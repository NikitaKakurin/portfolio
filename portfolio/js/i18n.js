'use strict'

function changeLanguage(langObj) {
    const AllElements = document.querySelectorAll('[data-i18]');
    AllElements.forEach(elem=>{
        elem.innerText = langObj[elem.dataset.i18]
    })
    
}

export default changeLanguage;