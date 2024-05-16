export default function validateEmail() {
  const form = document.querySelector('form');
  const email = document.getElementById('email');
  const emailError = document.querySelector('#email + span.error');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  let errorMessage = '';

  const validateInput = function validateEmailInput() {
    email.classList.remove('default-state');
    email.setCustomValidity(errorMessage);
    emailError.textContent = errorMessage;
  };

  const showError = function showEmailValidationError() {
    if (email.validity.valueMissing) {
      errorMessage = 'You need to enter an email address.';
      validateInput();
      return;
    }
    if (!emailPattern.test(email.value)) {
      errorMessage = 'Please enter a valid email address.';
      validateInput();
      return;
    }

    // Set to valid
    errorMessage = '';
    email.setCustomValidity(errorMessage);
    emailError.textContent = errorMessage;
    return;
  };

  email.addEventListener('input', showError);
  return;
}
