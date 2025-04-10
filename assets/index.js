const phrases = ['Full Stack Developer', 'Android Enthusiast', 'React Dev'];
let i = 0, j = 0, current = '', isDeleting = false;

function type() {
  current = phrases[i];
  let display = document.getElementById('typed-text');

  if (!display) return; // Prevent error

  if (!isDeleting && j <= current.length) {
    display.textContent = current.substring(0, j++);
  } else if (isDeleting && j >= 0) {
    display.textContent = current.substring(0, j--);
  }

  if (j === current.length + 1) isDeleting = true;
  if (j === 0) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }

  setTimeout(type, isDeleting ? 60 : 120);
}

window.onload = type;
