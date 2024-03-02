const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const hiddenClass = entry.target.classList.contains('hidden1') ? 'show1' : 'show2';
            entry.target.classList.add(hiddenClass);
        } 
    });
});

const hiddenElements = document.querySelectorAll('.hidden1, .hidden2');
hiddenElements.forEach((el) => observer.observe(el));
