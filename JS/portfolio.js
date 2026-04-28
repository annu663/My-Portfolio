// ---- CURSOR ----
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
    });

    function animateRing() {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
      requestAnimationFrame(animateRing);
    }
    animateRing();


    // ---- TYPING EFFECT ----
    const roles = ['Full Stack Developer', 'Frontend Developer', 'React.js Developer', 'MERN Developer'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typedEl = document.getElementById('typedText');

    function typeEffect() {
      const currentWord = roles[roleIndex];

      if (!isDeleting) {
        typedEl.textContent = currentWord.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentWord.length) {
          isDeleting = true;
          setTimeout(typeEffect, 1600);
          return;
        }
      } else {
        typedEl.textContent = currentWord.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          setTimeout(typeEffect, 350);
          return;
        }
      }

      setTimeout(typeEffect, isDeleting ? 45 : 85);
    }

    typeEffect();


    // ---- SCROLL REVEAL ----
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(function (el) {
      observer.observe(el);
    });


    // ---- NAVBAR SHRINK ON SCROLL ----
    window.addEventListener('scroll', function () {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.style.padding = '10px 60px';
      } else {
        navbar.style.padding = '16px 60px';
      }

      // back to top button
      const btt = document.getElementById('back-to-top');
      if (window.scrollY > 400) {
        btt.classList.add('visible');
      } else {
        btt.classList.remove('visible');
      }
    });


    // ---- MOBILE MENU ----
    function openMobileNav() {
      document.getElementById('mobileNav').classList.add('open');
    }

    function closeMobileNav() {
      document.getElementById('mobileNav').classList.remove('open');
    }


    // ---- CONTACT FORM ----
    function handleSubmit(btn) {
      btn.textContent = 'Sent! ✅';
      btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
      document.getElementById('formSuccess').style.display = 'block';

      setTimeout(function () {
        btn.textContent = 'Send Message ✉️';
        btn.style.background = '';
        document.getElementById('formSuccess').style.display = 'none';
      }, 3500);
    }