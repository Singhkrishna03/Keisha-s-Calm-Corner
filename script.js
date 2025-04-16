function toggleMode() {
  document.body.classList.toggle('dark-mode');
  const icon = document.querySelector('.toggle-mode');
  icon.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

function showGreeting() {
  const hour = new Date().getHours();
  const greeting = document.getElementById('greeting');
  if (!greeting) return;
  if (hour < 12) {
    greeting.textContent = "Good morning, Keisha 🌞";
  } else if (hour < 18) {
    greeting.textContent = "Good afternoon, Keisha ☀️";
  } else {
    greeting.textContent = "Winding down, Keisha? 🌙";
  }
}

function startMeditation() {
  alert("Start your calm journey 🧘‍♀️");
}

showGreeting();