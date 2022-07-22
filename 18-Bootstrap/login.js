const form = document.getElementById('form');
const log = document.getElementById('log');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const form = document.getElementById('form');
  const formData = new FormData(form);
  for (const entry of formData.entries()) {
    const [key, value] = entry;
    log.textContent += `${key}: ${value}\n`;
  }
}
