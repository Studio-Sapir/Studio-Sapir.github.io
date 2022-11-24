// Display scroll up button and change nav bgcolor only after some scroll
const navbar = document.querySelector('.nav-container');
const scrollUpButton = document.querySelector('.back-to-home')
scrollUpButton.classList.add('hide-button')

const displayScrollUpButton = () => {
    let scrollPosition = window.scrollY
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

// Display Mobile Menu

const mobileMenu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
const navLogo = document.querySelector('.logo')
const allSite = document.querySelector('.concent')

const applyMobileMenu = () => {
    mobileMenu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

mobileMenu.addEventListener('click', applyMobileMenu);

//  Close mobile Menu when clicking on a menu item or the screen
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 720 && menuBars) {
        mobileMenu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
allSite.addEventListener('click', hideMobileMenu);