import { COUNTRY_ADDRESS_POSTALS } from './country-list';

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

  country.addEventListener('input', () => {
    const found = COUNTRY_ADDRESS_POSTALS.some(
      (countryDetails) => countryDetails.name === country.value,
    );

    zipCodeInput.disabled = true;

    if (country.validity.valueMissing) {
      countryError.textContent = 'You need to enter a country.';
    } else if (!found) {
      countryError.textContent =
        'Invalid country entered. Please check your spelling and try again.';
      country.style.backgroundColor = '#fdd';
    } else {
      countryError.textContent = '';
      country.style.backgroundColor = '#FFFFFF';
      zipCodeInput.disabled = false;
    }
  });
}
