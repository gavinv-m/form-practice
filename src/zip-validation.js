import { COUNTRY_ADDRESS_POSTALS } from './country-list';

export default function validateZipCode(countrySelected) {
  // Clear any value if the user changed countries
  const zipCodeInput = document.getElementById('zip');
  zipCodeInput.value = '';

  let countryZipCodePattern = COUNTRY_ADDRESS_POSTALS.filter(
    (country) => country.name === countrySelected,
  );
  countryZipCodePattern = countryZipCodePattern[0].postal;

  // If no postal key in country list
  if (!(countryZipCodePattern instanceof RegExp)) {
    countryZipCodePattern = /^[a-zA-Z0-9]{3,10}$/;
  }

  const zipCodeError = document.querySelector('#zip + .error');
  let errorMessage = '';

  const validateInput = function validateZipInput() {
    if (zipCodeInput.classList.contains('default-state')) {
      zipCodeInput.classList.remove('default-state');
    }
    zipCodeInput.setCustomValidity(errorMessage);
    zipCodeError.textContent = errorMessage;
  };

  const showError = function showZipCodeError() {
    if (zipCodeInput.validity.valueMissing) {
      errorMessage = 'You need to enter a zip code';
    } else if (!countryZipCodePattern.test(zipCodeInput.value)) {
      errorMessage = 'You need to enter a valid zip code';
    } else {
      errorMessage = '';
    }
    validateInput();
  };

  zipCodeInput.addEventListener('input', () => {
    showError();
  });
}
