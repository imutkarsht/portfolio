const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const hiddenClass = entry.target.classList.contains('hidden1') ? 'show1' : 'show2';
            entry.target.classList.add(hiddenClass);
        } 
    });
});

const fader = new IntersectionObserver((enteries) => {
    enteries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('removeFade');
        }
    })
});
const hiddenElements = document.querySelectorAll('.hidden1, .hidden2');
const fadedElements = document.querySelectorAll('.fade');
hiddenElements.forEach((el) => observer.observe(el));
fadedElements.forEach((e)=> fader.observe(e));
