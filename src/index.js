import './styles/styles.css';
import validateEmail from './email-validation';
import validateCountry from './country-validation';
import validatePassword from './password-validation';

document.addEventListener('DOMContentLoaded', () => {
  validateEmail();
  validateCountry();
  validatePassword();
});
