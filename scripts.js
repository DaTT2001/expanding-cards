const images = document.querySelectorAll('.images')
function removeActive() {
    for(let i = 0; i < images.length; i++) {
        images[i].classList.remove('active')
    }
}
for(let i = 0; i < images.length; i++) {
    images[i].addEventListener('click',() => {
        removeActive()
        images[i].classList.add('active')  
    }) 
}
