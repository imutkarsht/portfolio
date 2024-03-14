const swapbtn = document.getElementById("colorSwapBtn");
const border = document.querySelectorAll("#border");
setColors(2);
const box = document.querySelectorAll("#tb");
const probox = document.querySelectorAll("#projectsContainer");
const les = document.getElementById('ls');
swapbtn.innerHTML = `<i class='bx bxs-sun'></i>`;


let isColorSet1 = false;

swapbtn.addEventListener("click", function () {
    if (isColorSet1) {
        swapbtn.innerHTML = `<i class='bx bxs-sun'></i>`;
        setColors(2);
        document.body.style.color = "#fff";
        document.body.style.fontWeight = "400";
        border.forEach(function (i) {
            i.style.border = '2px solid #fff';
        });
        
        isColorSet1 = false;
    } 
    
    else {
        swapbtn.innerHTML = `<i class='bx bxs-moon'></i>`;
        setColors(1);
        document.body.style.color = "#000";
        border.forEach(function (i) {
            i.style.border = '2px solid #222';
        });
        isColorSet1 = true;
    }
});

function setColors(setNumber) {
    // Set the colors based on the setNumber
    const primaryColor = getComputedStyle(
        document.documentElement
    ).getPropertyValue(`--primary-color-${setNumber}`);
    const secondaryColor = getComputedStyle(
        document.documentElement
    ).getPropertyValue(`--secondary-color-${setNumber}`);
    const accentColor = getComputedStyle(
        document.documentElement
    ).getPropertyValue(`--accent-color-${setNumber}`);
    const fontColor = getComputedStyle(document.documentElement).getPropertyValue(
        `--font-color-${setNumber}`
    );
    const contentColor = getComputedStyle(document.documentElement).getPropertyValue(
        `--content-color-${setNumber}`
    );
    const contentMainTextColor = getComputedStyle(document.documentElement).getPropertyValue(
        `--content-main-text-color-${setNumber}`
    );
    const contentSecondaryTextColor = getComputedStyle(document.documentElement).getPropertyValue(
        `--content-secondary-text-color-${setNumber}`
    );

    // Update the root color variables
    document.documentElement.style.setProperty("--primary-color", primaryColor);
    document.documentElement.style.setProperty(
        "--secondary-color",
        secondaryColor
    );
    document.documentElement.style.setProperty("--accent-color", accentColor);
    document.documentElement.style.setProperty("--font-color", fontColor);
    document.documentElement.style.setProperty("--content-color", contentColor);
    document.documentElement.style.setProperty("--content-main-text-color", contentMainTextColor);
    document.documentElement.style.setProperty("--content-secondary-text-color", contentSecondaryTextColor);
}