export default function confirmPassword(password) {
  console.log(password);
  const confirmPasswordField = document.getElementById('cpwd');
  const confirmPasswordError = document.querySelector('#cpwd + .error');

  confirmPasswordField.addEventListener('input', () => {
    if (confirmPasswordField.value !== password) {
      confirmPasswordField.setCustomValidity('Passwords do not match');
      confirmPasswordError.textContent = 'Passwords do not match';
    } else {
      confirmPasswordError.textContent = '';
    }
  });
}
