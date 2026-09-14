/**
 * ÉducHTech - Core Frontend Scripts
 */
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  document.querySelectorAll('.nav-item-dropdown').forEach(item => {
    const trigger = item.querySelector('.nav-link');
    const menu = item.querySelector('.nav-dropdown-menu');

    if (!trigger || !menu) return;

    let closeTimeout;

    const closeAll = () => {
      document.querySelectorAll('.nav-item-dropdown').forEach(other => {
        if (other !== item) other.classList.remove('open');
      });
    };

    const openMenu = () => {
      clearTimeout(closeTimeout);
      closeAll();
      item.classList.add('open');
    };

    const closeMenu = () => {
      clearTimeout(closeTimeout);
      closeTimeout = setTimeout(() => {
        if (!item.matches(':hover') && !menu.matches(':hover')) {
          item.classList.remove('open');
        }
      }, 120);
    };

    trigger.addEventListener('mouseenter', openMenu);
    item.addEventListener('mouseenter', openMenu);
    menu.addEventListener('mouseenter', openMenu);

    trigger.addEventListener('mouseleave', closeMenu);
    item.addEventListener('mouseleave', closeMenu);
    menu.addEventListener('mouseleave', closeMenu);

    trigger.addEventListener('click', (event) => {
      if (trigger.getAttribute('href') === '#') {
        event.preventDefault();
      }
      const isOpen = item.classList.contains('open');
      closeAll();
      item.classList.toggle('open', !isOpen);
    });

    item.addEventListener('focusin', openMenu);
    item.addEventListener('focusout', (event) => {
      const nextFocus = event.relatedTarget;
      if (!item.contains(nextFocus)) {
        item.classList.remove('open');
      }
    });
  });

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
