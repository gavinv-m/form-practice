import { COUNTRY_ADDRESS_POSTALS } from './country-list';
import validateZipCode from './zip-validation';

export default function validateCountry() {
  const countriesDatalist = document.getElementById('countries');

  (function () {
    COUNTRY_ADDRESS_POSTALS.forEach((country) => {
      const option = document.createElement('option');
      option.setAttribute('value', country.name);
      countriesDatalist.appendChild(option);
    });
  })();

  const country = document.getElementById('country');
  const countryError = document.querySelector('#country + .error');
  const zipCodeInput = document.getElementById('zip');
  let errorMessage = '';

  const validateInput = function validateCountryInput() {
    if (country.classList.contains('default-state')) {
      country.classList.remove('default-state');
    }
    country.setCustomValidity(errorMessage);
    countryError.textContent = errorMessage;
  };

  country.addEventListener('input', () => {
    const found = COUNTRY_ADDRESS_POSTALS.some(
      (countryDetails) => countryDetails.name === country.value,
    );

    zipCodeInput.disabled = true;

    if (country.validity.valueMissing) {
      errorMessage = 'You need to enter a country.';
      validateInput();
    } else if (!found) {
      errorMessage = 'Please check your spelling and try again.';
      validateInput();
    } else {
      errorMessage = '';
      validateInput();

      // Zip code section
      zipCodeInput.disabled = false;
      validateZipCode(country.value);
    }
  });
  return;
}
