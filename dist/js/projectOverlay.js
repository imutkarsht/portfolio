const projectBoxes = document.querySelectorAll('.project-image');
const projectOverlays = document.querySelectorAll('.project-overlay');
const projectImages = document.querySelectorAll('.project-image img');

projectBoxes.forEach((box, index) => {
    box.addEventListener('mouseenter', () => {
        projectOverlays[index].classList.remove('hidden');
        projectOverlays[index].classList.add('flex');
        projectOverlays[index].style.opacity = '1';
        projectImages[index].classList.add('hovered');
    });

    projectOverlays[index].addEventListener('mouseleave', () => {
        projectImages[index].classList.remove('hovered');
        projectOverlays[index].style.opacity = '0';
        setTimeout(() => {
            projectOverlays[index].classList.remove('flex');
            projectOverlays[index].classList.add('hidden');
        }, 400); 
    });
});