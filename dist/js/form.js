const scriptURL = 'https://script.google.com/macros/s/AKfycbw50fI3eEMVLWU60e3_vXsFYqTJChXDJInMcgwhNHDSBpP7dMPhYpNAVtYy7bxbhxd3cw/exec'

const form = document.forms['subform']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your response is recorded successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})