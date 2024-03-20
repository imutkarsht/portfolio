
const projects = [
    {
        imageUrl: "./dist/images/sps.jpg",
        title: "Amazon UI clone",
        description: "An UI clone of Amazon website made using HTML, SASS and JS. Clean and faithful to original Amazon front page with dynamic content generation.",
        githubLink: "https://github.com/imutkarsht/AMAZON-CLONE",
        demoLink: "https://imutkarsht.github.io/AMAZON-CLONE/"
    },
    {
        imageUrl: "./dist/images/js.jpg",
        title: "Basic DOM Projects",
        description: "Some Basic Projects I made Using Concepts of Java Script to learn and Improve my JS skills. It contains over 10 mini projects listed on a home page and option to navigate from one page to another.",
        githubLink: "https://github.com/imutkarsht/BASIC-DOM-PROJECTS", 
        demoLink: "https://imutkarsht.github.io/BASIC-DOM-PROJECTS/" 
    },
    {
        imageUrl: "./dist/images/hm.jpg",
        title: "Hangman",
        description: "Implementation of The hangman game using Python 3, it is a CLI project. It allows the user to select the difficulty of the game and play until they want. They have to guess the word before the lives end.",
        githubLink: "https://github.com/imutkarsht/Python/tree/main/Python_mini_projects/hangman", 
        demoLink: "https://replit.com/@imutkarsht/HANGMAN-GAME"
    }
];

const socialLinks = [
    { platform: "Instagram", iconClass: "bx bxl-instagram", url: "https://www.instagram.com/im_ut_2308/" },
    { platform: "GitHub", iconClass: "bx bxl-github", url: "https://github.com/imutkarsht" },
    { platform: "LinkedIn", iconClass: "bx bxl-linkedin-square", url: "https://www.linkedin.com/in/utkarsh-tiwari-8329b4292/" },
    { platform: "Gmail", iconClass: "bx bxl-gmail", url: "mailto:uktiwari023@gmail.com" }
];

const techStackItems = [
    { imgSrc: "./dist/icons/cpp.png", name: "C++" },
    { imgSrc: "./dist/icons/c.png", name: "C" },
    { imgSrc: "./dist/icons/python.png", name: "Python" },
    { imgSrc: "./dist/icons/mysql.png", name: "MySQL" },
    { imgSrc: "./dist/icons/html.png", name: "HTML5" },
    { imgSrc: "./dist/icons/css-3.png", name: "CSS3" },
    { imgSrc: "./dist/icons/js.png", name: "Java Script" },
    { imgSrc: "./dist/icons/sass.png", name: "SASS" },
    { imgSrc: "./dist/icons/git.png", name: "Git" },
    { imgSrc: "./dist/icons/tailwind.png", name: "Tailwind" },
    { imgSrc: "./dist/icons/linux.png", name: "Linux" },
    { imgSrc: "./dist/icons/bootstrap.png", name: "Bootstrap" }
];

const compProgItems = [
    { imgSrc: "./dist/icons/leetcode.png", description: "Did 160+ Questions on", rating: null, platform: "Leetcode", link: "https://www.leetcode.com/imutkarsht" },
    { imgSrc: "./dist/icons/hackerrank.png", description: "5* Rating in C++ on", rating: null, platform: "Hackerrank", link: "https://www.hackerrank.com/profile/uktiwari023" },
    { imgSrc: "./dist/icons/hackerrank.png", description: "3* Rating in Python on", rating: null, platform: "Hackerrank", link: "https://www.hackerrank.com/profile/uktiwari023" },
    { imgSrc: "./dist/icons/hackerrank.png", description: "3* Rating in Problem Solving on", rating: null, platform: "Hackerrank", link: "https://www.hackerrank.com/profile/uktiwari023" }
];

const educationItems = [
    { period: "2023 - 2025", degree: "Master Degree", grade: "___", gradeType: "CGPA", institution: "Madan Mohan Malviya University of Technology, Gorakhpur", details: "currently I'm Persuing My Master's in Computer Applications from Madan Mohan Malviya University of Technology, Gorakhpur. Here, I am learning about data Structures, Databases, Web Technologies and other core concepts of CS." },
    { period: "2020 - 2023", degree: "Bachelor's Degree", grade: "68", gradeType: "%", institution: "DDU Gorakhpur University", details: "I completed My Bachelor's Degree in Mathematics and Computer Science from DDU Gorakhpur University in 2023 with 68% score. I also learned Physics in my first 2 years." },
    { period: "2017 - 2019", degree: "Intermediate Degree", grade: "88.4", gradeType: "%", institution: "GM Academy, Salempur", details: "Did my intermediate from GM Academy, Salempur in Year 2019. Here, I learned about Mathematics, Physics, Chemistry, English and Computer Science and passed with 88.4% ." },
    { period: "2015 - 2017", degree: "High School Degree", grade: "8.6", gradeType: "CGPA", institution: "KK Public Academy, Bhatni Deoria", details: "Did my high school from KK Public Academy, Bhatni Deoria in Year 2017. Here, I learned about Mathematics, Science, Social Science, English and Hindi and passed with 8.6 CGPA." }
];

// function generateProjects() {
//     const container = document.getElementById("projectsContainer");

//     projects.forEach(project => {
//         const projectLink = document.createElement("a");
//         projectLink.href = project.url;

//         const projectBox = document.createElement("div");
//         projectBox.classList.add("project-box");

//         const projectTitle = document.createElement("div");
//         projectTitle.classList.add("project-title");
//         projectTitle.textContent = project.title;

//         const projectImage = document.createElement("div");
//         projectImage.classList.add("project-image","fade");

//         const img = document.createElement("img");
//         img.src = project.imageSrc;
//         img.alt = "";

//         projectImage.appendChild(img);
//         projectBox.appendChild(projectTitle);
//         projectBox.appendChild(projectImage);
//         projectLink.appendChild(projectBox);
//         container.appendChild(projectLink);
//     });
// }


function generateTechStack() {
    const container = document.querySelector('.tech-stack-content');
    if (!container) return;

    techStackItems.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('tech-stack-item' ,'fade');
         
        const img = document.createElement('img');
        img.classList.add('tech-img');
        img.src = item.imgSrc;
        img.alt = item.name;

        const p = document.createElement('p');
        p.textContent = item.name;

        div.appendChild(img);
        div.appendChild(p);
        container.appendChild(div);
    });
}

function generateCompProgItems() {
    const container = document.querySelector('.comp-prog-content');
    if (!container) return; 

    compProgItems.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('comp-prog-item','fade');

        const img = document.createElement('img');
        img.classList.add('tech-img','fade');
        img.src = item.imgSrc;
        img.alt = item.platform;

        const p = document.createElement('p');
        const rating = item.rating ? `${item.rating} Rating in` : ''; 
        p.innerHTML = `${rating} ${item.description} <a id="link"href="${item.link}" target="_blank">${item.platform}</a>`;

        div.appendChild(img);
        div.appendChild(p);
        container.appendChild(div);
    });
}

function generateEducationItems() {
    const container = document.querySelector('.content-ed');
    if (!container) return; 

    educationItems.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('box');

        const gradeYearDiv = document.createElement('div');
        gradeYearDiv.classList.add('grade-year');

        const h4Period = document.createElement('h4');
        h4Period.textContent = item.period;

        const h4Grade = document.createElement('h4');
        h4Grade.innerHTML = `<span class="dark-text">Grade:</span> ${item.grade} <span class="light-dark-text">${item.gradeType}</span>`;

        gradeYearDiv.appendChild(h4Period);
        gradeYearDiv.appendChild(h4Grade);

        const h3Degree = document.createElement('h3');
        h3Degree.textContent = item.degree;

        const pInstitution = document.createElement('p');
        pInstitution.innerHTML = `${item.details}`;
        pInstitution.classList.add('fade');

        div.appendChild(gradeYearDiv);
        div.appendChild(h3Degree);
        div.appendChild(pInstitution);

        container.appendChild(div);
    });
}

const projectListContainer = document.getElementById('projectList');
    projects.forEach(project => {
        // Create elements
        const projectItemMain = document.createElement('div');
        projectItemMain.classList.add('project-item-main');

        const projectImage = document.createElement('div');
        projectImage.classList.add('project-image');

        const img = document.createElement('img');
        img.setAttribute('src', project.imageUrl);
        img.classList.add('w-2/3', 'object-cover');

        const projectOverlay = document.createElement('div');
        projectOverlay.classList.add('project-overlay', 'z-10', 'absolute', 'top-0', 'left-0', 'w-full', 'h-full', 'flex-col', 'hidden', 'justify-evenly');

        const title = document.createElement('h2');
        title.textContent = project.title;
        title.classList.add('font-bold', 'w-full', 'py-2', 'text-center');

        const description = document.createElement('p');
        description.textContent = project.description;
        description.classList.add('project-desc', 'z-10', 'self-end', 'p-4');

        const btnLinkBox = document.createElement('div');
        btnLinkBox.classList.add('btn-link-box', 'flex', 'items-center', 'justify-between', 'p-4', 'mb-2');

        const githubLink = document.createElement('a');
        githubLink.setAttribute('href', project.githubLink);
        const githubButton = document.createElement('button');
        githubButton.textContent = 'Code';
        githubButton.classList.add('git-link', 'w-16', 'bg-green-500', 'text-black', 'p-1', 'font-bold', 'rounded-lg', 'hover:bg-green-300', 'transition-all');
        githubLink.appendChild(githubButton);

        const demoLink = document.createElement('a');
        demoLink.setAttribute('href', project.demoLink);
        const demoButton = document.createElement('button');
        demoButton.textContent = 'Check out';
        demoButton.classList.add('host-link', 'w-28', 'bg-blue-500', 'text-white', 'p-1', 'font-bold', 'rounded-lg', 'hover:bg-blue-700', 'transition-all');
        demoLink.appendChild(demoButton);

        // Append elements to build the structure
        btnLinkBox.appendChild(githubLink);
        btnLinkBox.appendChild(demoLink);
        projectOverlay.appendChild(title);
        projectOverlay.appendChild(description);
        projectOverlay.appendChild(btnLinkBox);
        projectImage.appendChild(img);
        projectImage.appendChild(projectOverlay);
        projectItemMain.appendChild(projectImage);
        projectListContainer.appendChild(projectItemMain);
    });

generateEducationItems();
generateTechStack();
generateCompProgItems();