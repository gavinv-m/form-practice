import validateEmail from './email-validation';
import validateCountry from './country-validation';
import validatePassword from './password-validation';
import validateFormSubmission from './form-validation';
import './styles/styles.css';

document.addEventListener('DOMContentLoaded', () => {
  validateEmail();
  validateCountry();
  validatePassword();
  validateFormSubmission();
});
