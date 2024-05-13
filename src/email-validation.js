export default function validateEmail() {
  const form = document.querySelector('form');
  const email = document.getElementById('email');
  const emailError = document.querySelector('#email + span.error');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const showError = function showEmailValidationError() {
    email.style.backgroundColor = '#fdd';

    if (email.validity.valueMissing) {
      emailError.textContent = 'You need to enter an email address.';
      return;
    }
    if (!emailPattern.test(email.value)) {
      emailError.textContent = 'Please enter a valid email address.';
      return;
    }
    if (email.validity.typeMismatch) {
      emailError.textContent = 'Entered value needs to be an email address.';
    }
  };

  email.addEventListener('input', () => {
    if (email.validity.valid) {
      emailError.textContent = '';
    } else {
      showError();
    }
  });

  form.addEventListener('submit', (event) => {
    if (!email.validity.valid) {
      showError();
      event.preventDefault();
    } else {
      event.preventDefault();
      email.value = '';
      email.style.backgroundColor = '#FFFFFF';
    }
  });
}
