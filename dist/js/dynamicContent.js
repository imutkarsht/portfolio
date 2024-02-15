const languages = [
    { name: "C++", icon: "dist/icons/cpp.png", progress: 90 },
    { name: "C", icon: "dist/icons/c.png", progress: 70 },
    { name: "Python", icon: "dist/icons/python.png", progress: 80 },
    { name: "MySQL", icon: "dist/icons/mysql.png", progress: 70 }
];

const webDevItems = [
    { name: "HTML", icon: "dist/icons/html.png", progress: 90 },
    { name: "CSS", icon: "dist/icons/css-3.png", progress: 70 },
    { name: "JavaScript", icon: "dist/icons/js.png", progress: 50 },
    { name: "Sass", icon: "dist/icons/sass.png", progress: 80 }
];

const otherTechItems = [
    { name: "Git", icon: "dist/icons/git.png", progress:80},
    { name: "TailWind", icon: "dist/icons/tailwind.png", progress:50},
    { name: "Linux", icon: "dist/icons/linux.png", progress:70},
    { name: "Bootstrap", icon: "dist/icons/bootstrap.png", progress:90}
];

const problemSolvingItems = [
    { text: "Did", value: "150", platform: "leetcode", label: "Questions" },
    { text: "got", value: "5*", platform: "hackerrank", label: "In C++ on" },
    { text: "got", value: "3*", platform: "hackerrank", label: "In Problem Solving on" },
    { text: "got", value: "3*", platform: "hackerrank", label: "In Python on" }
];

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
        title: "Stone Paper Scissors",
        url: "https://rock-paper-scissors-psi-lovat.vercel.app/",
        imageSrc: "dist/images/sps.jpg"
    }
];

const socialLinks = [
    { platform: "Instagram", iconClass: "bx bxl-instagram", url: "https://www.instagram.com/im_ut_2308/" },
    { platform: "GitHub", iconClass: "bx bxl-github", url: "https://github.com/imutkarsht" },
    { platform: "LinkedIn", iconClass: "bx bxl-linkedin-square", url: "https://www.linkedin.com/in/utkarsh-tiwari-8329b4292/" },
    { platform: "Gmail", iconClass: "bx bxl-gmail", url: "mailto:uktiwari023@gmail.com" }
];

// Function to dynamically generate the HTML content
function generateItems(containerId, items) {
    const container = document.getElementById(containerId);

    items.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.classList.add(containerId === "languagesContainer" ? "pro-lang-item" : "web-dev-item");

        const img = document.createElement("img");
        img.src = item.icon;
        img.width = 60;

        const progress = document.createElement("progress");
        progress.id = "file";
        progress.classList.add("myProgressBar");
        progress.max = 100;
        progress.value = item.progress;

        itemElement.appendChild(img);
        itemElement.appendChild(progress);
        container.appendChild(itemElement);
    });
}

function generateProblemSolvingItems() {
    const container = document.getElementById("problemSolvingContainer");

    problemSolvingItems.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("problem-solving-item");

        const p = document.createElement("p");
        p.innerHTML = `${item.text} <span id="completed">${item.value}</span> ${item.label} <a href="https://www.${item.platform}.com/imutkarsht">${item.platform}</a>`;

        itemElement.appendChild(p);
        container.appendChild(itemElement);
    });
}
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
        projectImage.classList.add("project-image");

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

generateProjects();
generateItems("languagesContainer", languages);
generateItems("webDevContainer", webDevItems);
generateItems("otherTechContainer", otherTechItems);
generateProblemSolvingItems();