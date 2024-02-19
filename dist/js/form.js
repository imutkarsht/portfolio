const scriptURL = 'https://script.google.com/macros/s/AKfycbw50fI3eEMVLWU60e3_vXsFYqTJChXDJInMcgwhNHDSBpP7dMPhYpNAVtYy7bxbhxd3cw/exec';
const form = document.forms['subform'];
const submitButton = form.querySelector('button[type="submit"]');
const btn = document.querySelector('.submit');
const messageBox = document.querySelector('.msgBox');

form.addEventListener('submit', e => {
  e.preventDefault(); 
  submitButton.textContent = 'Please Wait...'; 
  btn.classList.add('submitting');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      if (response.ok) {
        messageBox.innerHTML = `Thank you! Your Response was recorded Successfully...`;
        submitButton.textContent = 'Submit'; 
        btn.classList.remove('submitting');
        setTimeout(() => {
          messageBox.innerHTML = '';
        }, 3000); 
        return response.json();
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error!', error.message);
      submitButton.textContent = 'Submit'; 
    });
});