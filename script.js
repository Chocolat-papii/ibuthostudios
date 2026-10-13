const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

menuToggle.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navigation.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

// A gentle reveal effect as sections enter the viewport.
const revealItems = document.querySelectorAll('.intro-main, .service-card, .package-row, .gallery-grid img, .contact-panel');
if ('IntersectionObserver' in window) {
  revealItems.forEach(item => item.classList.add('reveal'));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
}
