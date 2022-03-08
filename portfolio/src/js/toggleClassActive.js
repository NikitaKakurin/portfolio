function toggleClassActive(target, nameOfClass, arrayOfElements){        
    arrayOfElements.forEach(elem=>{
        elem.classList.remove(nameOfClass)
    })
    target.classList.add(nameOfClass);
}

export default toggleClassActive;