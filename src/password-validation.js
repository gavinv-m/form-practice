export default function validatePassword() {
  const passwordField = document.getElementById('pwd');
  const passwordError = document.querySelector('#pwd + .error');

  let errorMessage = '';

  const validateInput = function validatePasswordInput() {
    passwordField.setCustomValidity(errorMessage);
    passwordError.textContent = errorMessage;
  };

  const showError = function showPasswordError() {
    // Check for lowercase letters
    if (!/[a-z]/.test(passwordField.value)) {
      errorMessage = 'Missing a lowercase letter.';
      validateInput();
      return;
    }
    // Check for uppercase letters
    if (!/[A-Z]/.test(passwordField.value)) {
      errorMessage = 'Missing an uppercase letter.';
      validateInput();
      return;
    }

    // Check for digits
    if (!/[0-9]/.test(passwordField.value)) {
      errorMessage = 'Missing a digit.';
      validateInput();
      return;
    }

    // Check for length
    if (passwordField.validity.tooShort) {
      errorMessage = 'Password must be 8 characters long';
      validateInput();
      return;
    }

    errorMessage = '';
    validateInput();
  };

  passwordField.addEventListener('input', () => {
    showError();
  });
}
