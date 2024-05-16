export default function validateFormSubmission() {
  const form = document.querySelector('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) {
      event.preventDefault();
    }
  });
  return;
}
