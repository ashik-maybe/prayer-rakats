// Fade-in on load
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 1.2s ease';
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});
