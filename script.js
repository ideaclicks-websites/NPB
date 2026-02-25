    'use strict';

    /* ─────────────────────────────────────────────
       1. TOGGLE CATEGORY (Expand/Collapse)
    ──────────────────────────────────────────────── */
function toggleCategory(header) {
  header.classList.toggle('collapsed');

  const productList = header.nextElementSibling;
  const icon = header.querySelector('.category-toggle');

  if (productList) {
    productList.classList.toggle('collapsed');
  }

  // Toggle + / -
  if (icon.textContent === "+") {
    icon.textContent = "−";
  } else {
    icon.textContent = "+";
  }
}


    /* ─────────────────────────────────────────────
       2. STICKY CATEGORY NAV - Active State on Scroll
    ──────────────────────────────────────────────── */
 (function initScrollSpy() {

  const sections = document.querySelectorAll('.category-block');
  const navLinks = document.querySelectorAll('.cat-link');

  function setActiveLink() {

    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop - 140) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");

        link.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest"
        });
      }
    });

  }

  window.addEventListener("scroll", setActiveLink);

})();

    /* ─────────────────────────────────────────────
       3. SMOOTH NAVBAR SHADOW ON SCROLL
    ──────────────────────────────────────────────── */
    (function initNavbarScroll() {
      const navbar = document.querySelector('.navbar');
      if (!navbar) return;

      window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
          navbar.style.boxShadow = '0 2px 16px rgba(0,0,0,0.10)';
        } else {
          navbar.style.boxShadow = 'none';
        }
      }, { passive: true });
    })();

    /* ─────────────────────────────────────────────
       4. LOGO IMAGE FALLBACK
    ──────────────────────────────────────────────── */
    (function initLogoFallback() {
      const logo = document.getElementById('hero-logo');
      const fallback = document.getElementById('logo-fallback');
      if (!logo || !fallback) return;

      logo.addEventListener('error', function () {
        this.style.display = 'none';
        fallback.style.display = 'flex';
      });
    })();
    // ========================================
        // PRELOADER
        // ========================================
        (function initPreloader() {
        const preloader = document.getElementById('preloader');
        const words = document.querySelectorAll('.preloader-tagline .word');
        
        words.forEach((word, index) => {
            setTimeout(() => {
            word.style.animation = 'wordReveal 0.6s ease forwards';
            }, 800 + (index * 250));
        });
        
        const totalAnimationTime = 800 + (words.length * 250) + 600;
        
        setTimeout(() => {
            preloader.classList.add('fade-out');
            setTimeout(() => {
            preloader.style.display = 'none';
            }, 800);
        }, totalAnimationTime);
        })();