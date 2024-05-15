export default function confirmPassword(password) {
  const confirmPasswordField = document.getElementById('cpwd');
  const confirmPasswordError = document.querySelector('#cpwd + .error');

  confirmPasswordField.addEventListener('input', () => {
    if (confirmPasswordField.validity.valueMissing) {
      confirmPasswordField.setCustomValidity('You need to eneter a password');
      confirmPasswordError.textContent = 'You need to enter a password';
      return;
    }

    if (confirmPasswordField.value !== password) {
      confirmPasswordField.setCustomValidity('Passwords do not match');
      confirmPasswordError.textContent = 'Passwords do not match';
      return;
    } else {
      confirmPasswordField.setCustomValidity('');
      confirmPasswordError.textContent = '';
    }
  });
}
