function showWelcome() {
  const saved = localStorage.getItem('visitorName');
  const msg = document.getElementById('welcome-msg');
  if (!msg) return;
  if (saved) {
    msg.textContent = `Welcome back, ${saved}!`;
  }
}
