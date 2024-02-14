swapbtn = document.getElementById("colorSwapBtn");
setColors(2);
swapbtn.innerHTML = `<i class='bx bxs-sun'></i>`;
let isColorSet1 = false;

swapbtn.addEventListener("click", function () {
 if (isColorSet1) {
  swapbtn.innerHTML = `<i class='bx bxs-sun'></i>`;
  setColors(2);
  document.body.style.color = "#fff";
  isColorSet1 = false;
 } else {
  swapbtn.innerHTML = `<i class='bx bxs-moon'></i>`;
  setColors(1);
  document.body.style.color = "#000";
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

 // Update the root color variables
 document.documentElement.style.setProperty("--primary-color", primaryColor);
 document.documentElement.style.setProperty(
  "--secondary-color",
  secondaryColor
 );
 document.documentElement.style.setProperty("--accent-color", accentColor);
 document.documentElement.style.setProperty("--font-color", fontColor);
}