// FAQ acordeones
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    const expanded = item.getAttribute('aria-expanded') === 'true';
    item.setAttribute('aria-expanded', !expanded);
    item.classList.toggle('active');
    const content = item.nextElementSibling;
    if (!expanded) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }
  });
  // keyboard accessibility
  item.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      item.click();
    }
  });
});

// Contador de preinscripción (ejemplo 10 días desde hoy)
function startCountdown(days=10) {
  const countdownEl = document.getElementById('countdown-timer');
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + days);

  function updateTimer() {
    const now = new Date();
    const diff = endDate - now;

    if (diff <= 0) {
      countdownEl.textContent = "¡Cerrado!";
      clearInterval(timerInterval);
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    countdownEl.textContent = `${d}d ${h}h ${m}m ${s}s`;
  }

  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);
}
startCountdown(10);
