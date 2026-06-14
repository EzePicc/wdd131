function showWelcome() {
  const saved = localStorage.getItem('visitorName');
  const msg = document.getElementById('welcome-msg');
  if (!msg) return;
  if (saved) {
    msg.textContent = `Welcome back ${saved}!`;
  }
}

function handleSubmit(event) {

  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const response = document.getElementById('form-response');

  if (name === '') {
    response.textContent = 'Please enter your name';
    return;
  }
  localStorage.setItem('visitorName', name);
  response.textContent = `Thank you, ${name}! We will get back to you soon.`;
  document.getElementById('contact-form').reset();

}

showWelcome();

document.getElementById('contact-form').addEventListener('submit', handleSubmit);