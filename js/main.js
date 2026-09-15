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
    // keep references to restore original location when closing
    const navOriginalParent = navMenu.parentElement;
    const navOriginalNext = navMenu.nextSibling;

    toggleBtn.addEventListener('click', () => {
      const willOpen = !navMenu.classList.contains('open');
      // if opening, move menu to body so it can be fixed/full-viewport
      if (willOpen && navMenu.parentElement !== document.body) {
        document.body.appendChild(navMenu);
      }

      // on mobile open, collapse any dropdowns so primary items are visible
      if (willOpen) {
        document.querySelectorAll('.nav-item-dropdown.open').forEach(d => d.classList.remove('open'));
      }

      navMenu.classList.toggle('open');

      // when opening, ensure menu scrolls to top and is visible; lock background scroll
      if (willOpen) {
        try {
          navMenu.scrollTop = 0;
          navMenu.scrollIntoView({ block: 'start', behavior: 'auto' });
          // prevent background from scrolling while menu is open
          document.documentElement.style.overflow = 'hidden';
          document.body.style.overflow = 'hidden';
        } catch (e) { /* ignore */ }
      }

      const isOpen = navMenu.classList.contains('open');
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggleBtn.innerHTML = isOpen ? '✕' : '☰';

      // if closing, restore original DOM position and background scroll
      if (!isOpen) {
        try {
          document.documentElement.style.overflow = '';
          document.body.style.overflow = '';
        } catch (e) {}
        if (navOriginalParent && navMenu.parentElement !== navOriginalParent) {
          if (navOriginalNext) navOriginalParent.insertBefore(navMenu, navOriginalNext);
          else navOriginalParent.appendChild(navMenu);
        }
      }
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
