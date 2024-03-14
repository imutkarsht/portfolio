const burger = document.querySelector('.hamburger');
const menu = document.querySelector('.hidden-menu');
const fline = document.querySelector('.fline');
const sline = document.querySelector('.sline');
const tline = document.querySelector('.tline');
function ActionBurger(){
    if(menu.classList.contains('hidemenu')){
        menu.classList.remove('hidemenu');
        menu.classList.add('showmenu');
    }
    else{
        menu.classList.remove('showmenu');
        menu.classList.add('hidemenu');
    }

    fline.classList.toggle('Acfline');
    sline.classList.toggle('Acsline');
    tline.classList.toggle('Actline');
    burger.classList.toggle('spin');
}
burger.addEventListener('click', function(){
    ActionBurger();
});

const navLinks = document.querySelectorAll('.nav-items-links');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        ActionBurger();
    });
});

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) { // Adjust the scroll position threshold as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
});