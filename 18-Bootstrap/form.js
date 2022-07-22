const form = document.getElementById('form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const output = document.getElementById('output');
  
  for (const [key, value] of formData) {
    output.textContent += `${key}: ${value}\n`;
  }
}
