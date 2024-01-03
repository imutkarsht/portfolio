document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('show');
        burger.classList.toggle('toggle');
    });

    // Close the menu when a nav link is clicked
    const navLinks = document.querySelectorAll('.nav-links li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('show');
            burger.classList.remove('toggle');
        });
    });
});
