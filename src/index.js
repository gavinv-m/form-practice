import './styles/styles.css';
import validateEmail from './email-validation';
import validateCountry from './country-validation';

document.addEventListener('DOMContentLoaded', () => {
  validateEmail();
  validateCountry();
});
