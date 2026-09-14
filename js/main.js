/**
 * ÉducHTech - Core Frontend Scripts
 */
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggleBtn.innerHTML = isOpen ? '✕' : '☰';
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
          if (navMenu && navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
            if (toggleBtn) {
              toggleBtn.innerHTML = '☰';
              toggleBtn.setAttribute('aria-expanded', 'false');
            }
          }
        }
      }
    });
  });
});
