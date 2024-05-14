import { COUNTRY_ADDRESS_POSTALS } from './country-list';

export default function validateZipCode(countrySelected) {
  // Clear any value if the user changed countries
  const zipCodeInput = document.getElementById('zip');
  zipCodeInput.value = '';

  let countryZipCodePattern = COUNTRY_ADDRESS_POSTALS.filter(
    (country) => country.name === countrySelected,
  );
  countryZipCodePattern = countryZipCodePattern[0].postal;

  if (!(countryZipCodePattern instanceof RegExp)) {
    countryZipCodePattern = /^[a-zA-Z0-9]{3,10}$/;
  }

  const zipCodeError = document.querySelector('#zip + .error');

  const showError = function showZipCodeError() {
    if (zipCodeInput.validity.valueMissing) {
      zipCodeError.textContent = 'You need to enter a zip code';
    } else if (!countryZipCodePattern.test(zipCodeInput.value)) {
      zipCodeError.textContent = 'You need to enter a valid zip code';
    } else {
      zipCodeError.textContent = '';
    }
  };

  zipCodeInput.addEventListener('input', () => {
    showError();
  });
}
