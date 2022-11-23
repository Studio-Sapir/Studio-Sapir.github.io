// Display scroll up button and change nav bgcolor only after some scroll
const navbar = document.querySelector('.nav-container');
const scrollUpButton = document.querySelector('.back-to-home')
scrollUpButton.classList.add('hide-button')

const displayScrollUpButton = () => {
    let scrollPosition = window.scrollY
    console.log(scrollPosition)
    if(scrollPosition > 0) {
        navbar.classList.add('nav-active');
        scrollUpButton.classList.remove('hide-button')
    }
    else{
        navbar.classList.remove('nav-active');
        scrollUpButton.classList.add('hide-button')
    } 
}
window.addEventListener('scroll', displayScrollUpButton);