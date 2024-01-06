function updateProgressBar() {
    const section = document.getElementById('second-section');
    const progressBar = document.getElementById('myProgressBar');

    // Calculate the scroll percentage
    const scrollPercentage = (window.scrollY / (section.offsetHeight - window.innerHeight)) * 100;

    // Update the progress bar value
    progressBar.value = scrollPercentage;

    // Ensure the value doesn't exceed the maximum
    if (scrollPercentage > 100) {
      progressBar.value = 100;
    }
  }

  // Attach the updateProgressBar function to the scroll event
  window.addEventListener('scroll', updateProgressBar);

  // Trigger the initial update to set the progress bar to 0 on page load
  window.addEventListener('load', updateProgressBar);