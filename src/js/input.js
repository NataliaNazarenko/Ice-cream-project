const form = document.querySelector('.form-contacts');
const btn = document.querySelector('.submit');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const name = event.currentTarget.elements.name.value;
  const tel = event.currentTarget.elements.tel.value;
  const formData = { email, name, tel };

  if (email === '' || name === '' || tel === '') {
    return alert('Please fill in all the fields!');
  }

  console.log(form);
  event.currentTarget.reset();
}
