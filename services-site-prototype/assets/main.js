/* ============================================================
   Чистый Формат — Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* === Mobile Menu === */
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      nav.classList.toggle('open');
      document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
    });

    // Close menu on link click
    nav.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('active');
        nav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }


  /* === Header Scroll Shadow === */
  const header = document.querySelector('.header');

  if (header) {
    const onScroll = () => {
      if (window.scrollY > 10) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }


  /* === Back to Top Button === */
  const backToTop = document.querySelector('.back-to-top');

  if (backToTop) {
    const toggleBackToTop = () => {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    toggleBackToTop();

    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  /* === FAQ Accordion === */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-item__question');

    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all items
        faqItems.forEach(i => i.classList.remove('active'));

        // Open clicked item if it was not active
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });


  /* === Price Tabs === */
  const priceTabs = document.querySelectorAll('.price-tab');
  const priceSections = document.querySelectorAll('.price-section');

  if (priceTabs.length > 0 && priceSections.length > 0) {
    priceTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetId = tab.dataset.tab;

        // Update tabs
        priceTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Update sections
        priceSections.forEach(section => {
          if (section.id === targetId) {
            section.classList.add('active');
          } else {
            section.classList.remove('active');
          }
        });
      });
    });
  }


  /* === Form Handling === */
  const forms = document.querySelectorAll('form[data-demo-form]');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Check HTML5 validation
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // Demo submission
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.textContent : '';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Отправка...';
      }

      setTimeout(() => {
        alert('Заявка отправлена (демо)');
        form.reset();

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
      }, 800);
    });
  });


  /* === Smooth Scroll for Anchor Links === */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

});
