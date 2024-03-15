
const projects = [
    { 
        title: "TIC-TAC-TOE",
        url: "https://tic-tac-toe-tan-delta.vercel.app/",
        imageSrc: "dist/images/ttt.jpg"
    },
    { 
        title: "Hangman",
        url: "https://replit.com/@imutkarsht/HANGMAN-GAME",
        imageSrc: "dist/images/hm.jpg"
    },
    { 
        title: "Amazon-UI Clone",
        url: "https://imutkarsht.github.io/AMAZON-CLONE/",
        imageSrc: "dist/images/sps.jpg"
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

function generateProjects() {
    const container = document.getElementById("projectsContainer");

    projects.forEach(project => {
        const projectLink = document.createElement("a");
        projectLink.href = project.url;

        const projectBox = document.createElement("div");
        projectBox.classList.add("project-box");

        const projectTitle = document.createElement("div");
        projectTitle.classList.add("project-title");
        projectTitle.textContent = project.title;

        const projectImage = document.createElement("div");
        projectImage.classList.add("project-image","fade");

        const img = document.createElement("img");
        img.src = project.imageSrc;
        img.alt = "";

        projectImage.appendChild(img);
        projectBox.appendChild(projectTitle);
        projectBox.appendChild(projectImage);
        projectLink.appendChild(projectBox);
        container.appendChild(projectLink);
    });
}


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

generateEducationItems();
generateProjects();
generateTechStack();
generateCompProgItems();