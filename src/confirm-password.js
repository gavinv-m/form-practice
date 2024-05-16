export default function confirmPassword(password) {
  const confirmPasswordField = document.getElementById('cpwd');
  const confirmPasswordError = document.querySelector('#cpwd + .error');

  const disableStyling = function disableDefaultStyling() {
    if (confirmPasswordField.classList.contains('default-state')) {
      confirmPasswordField.classList.remove('default-state');
    }
  };

  confirmPasswordField.addEventListener('input', () => {
    if (confirmPasswordField.validity.valueMissing) {
      confirmPasswordField.setCustomValidity('You need to eneter a password');
      confirmPasswordError.textContent = 'You need to enter a password';
      disableStyling();
      return;
    }

    if (confirmPasswordField.value !== password) {
      confirmPasswordField.setCustomValidity('Passwords do not match');
      confirmPasswordError.textContent = 'Passwords do not match';
      disableStyling();
      return;
    } else {
      confirmPasswordField.setCustomValidity('');
      confirmPasswordError.textContent = '';
    }
  });
}
