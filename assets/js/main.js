/**
 * Główny skrypt JavaScript - Biuro Rachunkowe Trzebiatowska
 * Obsługa menu mobilnego, kalkulatora wyceny, akordeonów FAQ oraz formularzy.
 */

document.addEventListener('DOMContentLoaded', function () {
  // 1. MENU MOBILNE
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function () {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });

    // Zamknięcie menu po kliknięciu w link wewnętrzny
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. INTERAKTYWNY KALKULATOR WYCENY (LEAD GENERATOR)
  const calcForm = document.getElementById('pricing-calculator-form');
  if (calcForm) {
    const entityButtons = calcForm.querySelectorAll('.calc-entity-btn');
    const docButtons = calcForm.querySelectorAll('.calc-doc-btn');
    const employeeButtons = calcForm.querySelectorAll('.calc-emp-btn');
    const estimatePrice = document.getElementById('estimate-price');

    let selectedEntity = 'jdg'; // jdg, spolka, new
    let selectedDocs = '10-30'; // 0-10, 10-30, 31-60, 60+
    let selectedEmployees = '0'; // 0, 1-3, 4+

    function calculateEstimate() {
      if (!estimatePrice) return;

      let basePrice = 250;

      if (selectedEntity === 'jdg') {
        if (selectedDocs === '0-10') basePrice = 250;
        else if (selectedDocs === '10-30') basePrice = 350;
        else if (selectedDocs === '31-60') basePrice = 500;
        else basePrice = 650;
      } else if (selectedEntity === 'spolka') {
        if (selectedDocs === '0-10') basePrice = 650;
        else if (selectedDocs === '10-30') basePrice = 850;
        else if (selectedDocs === '31-60') basePrice = 1100;
        else basePrice = 1400;
      } else if (selectedEntity === 'new') {
        basePrice = 0;
      }

      let employeeAddon = 0;
      if (selectedEntity !== 'new') {
        if (selectedEmployees === '1-3') employeeAddon = 120;
        else if (selectedEmployees === '4+') employeeAddon = 250;
      }

      const isEn = document.documentElement.lang === 'en';
      if (selectedEntity === 'new') {
        estimatePrice.innerHTML = isEn
          ? '<span class="text-emerald-600 font-bold">0 PLN</span> <span class="text-xs text-slate-500 font-normal">(with service contract)</span>'
          : '<span class="text-emerald-600 font-bold">0 zł</span> <span class="text-xs text-slate-500 font-normal">(przy umowie na obsługę)</span>';
      } else {
        const total = basePrice + employeeAddon;
        estimatePrice.innerHTML = isEn
          ? `from approx. <span class="text-[#a82682] font-black text-2xl">${total} PLN</span> <span class="text-xs text-slate-500 font-normal">net / mo</span>`
          : `od ok. <span class="text-[#a82682] font-black text-2xl">${total} zł</span> <span class="text-xs text-slate-500 font-normal">netto / mc</span>`;
      }
    }

    function setupButtonGroup(buttons, callback) {
      buttons.forEach(btn => {
        btn.addEventListener('click', function () {
          buttons.forEach(b => {
            b.classList.remove('border-[#a82682]', 'bg-[#fdf2f8]', 'text-[#701a53]', 'font-bold');
            b.classList.add('border-slate-200', 'text-slate-700');
          });
          btn.classList.remove('border-slate-200', 'text-slate-700');
          btn.classList.add('border-[#a82682]', 'bg-[#fdf2f8]', 'text-[#701a53]', 'font-bold');
          callback(btn.dataset.value);
          calculateEstimate();
        });
      });
    }

    if (entityButtons.length) setupButtonGroup(entityButtons, val => selectedEntity = val);
    if (docButtons.length) setupButtonGroup(docButtons, val => selectedDocs = val);
    if (employeeButtons.length) setupButtonGroup(employeeButtons, val => selectedEmployees = val);

    calculateEstimate();

    calcForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const phoneInput = calcForm.querySelector('input[type="tel"]');
      const emailInput = calcForm.querySelector('input[type="email"]');

      const isEn = document.documentElement.lang === 'en';
      if (!phoneInput.value && !emailInput.value) {
        alert(isEn 
          ? 'Please provide a phone number or email address so we can send you the quote.' 
          : 'Proszę podać numer telefonu lub adres e-mail, abyśmy mogli przesłać kalkulację.');
        return;
      }

      const submitBtn = calcForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML = isEn ? 'Sending inquiry...' : 'Wysyłanie zapytania...';

      setTimeout(() => {
        if (isEn) {
          calcForm.innerHTML = `
            <div class="text-center py-8">
              <div class="w-16 h-16 bg-[#fdf2f8] text-[#a82682] border border-[#a82682]/20 rounded-full flex items-center justify-center mx-auto text-3xl mb-4 font-bold">✓</div>
              <h3 class="text-xl font-bold text-slate-900 mb-2">Thank you for submitting your inquiry!</h3>
              <p class="text-sm text-slate-600 max-w-md mx-auto mb-4">
                Ms. Katarzyna will review your business requirements and contact you within 24 hours with a tailored, no-obligation proposal.
              </p>
              <p class="text-xs text-slate-500">For urgent inquiries, feel free to call us directly: <strong>+48 503 59 68 11</strong></p>
            </div>
          `;
        } else {
          calcForm.innerHTML = `
            <div class="text-center py-8">
              <div class="w-16 h-16 bg-[#fdf2f8] text-[#a82682] border border-[#a82682]/20 rounded-full flex items-center justify-center mx-auto text-3xl mb-4 font-bold">✓</div>
              <h3 class="text-xl font-bold text-slate-900 mb-2">Dziękujemy za przesłanie zapytania!</h3>
              <p class="text-sm text-slate-600 max-w-md mx-auto mb-4">
                Pani Katarzyna przeanalizuje Twoje zapotrzebowanie i skontaktuje się w ciągu 24 godzin z dedykowaną, bezpłatną propozycją współpracy.
              </p>
              <p class="text-xs text-slate-500">W pilnych sprawach zapraszamy do bezpośredniego kontaktu: <strong>+48 503 59 68 11</strong></p>
            </div>
          `;
        }
      }, 700);
    });
  }

  // 3. AKORDEONY FAQ
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');

    if (trigger && content) {
      trigger.addEventListener('click', () => {
        const isOpen = !content.classList.contains('hidden');
        
        faqItems.forEach(other => {
          const otherContent = other.querySelector('.faq-content');
          const otherIcon = other.querySelector('.faq-icon');
          if (otherContent && other !== item) {
            otherContent.classList.add('hidden');
            if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
          }
        });

        if (isOpen) {
          content.classList.add('hidden');
          if (icon) icon.style.transform = 'rotate(0deg)';
        } else {
          content.classList.remove('hidden');
          if (icon) icon.style.transform = 'rotate(180deg)';
        }
      });
    }
  });

  // 4. OBSŁUGA FORMULARZA KONTAKTOWEGO
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const isEn = document.documentElement.lang === 'en';
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = isEn ? 'Sending message...' : 'Wysyłanie wiadomości...';
      }

      setTimeout(() => {
        contactForm.innerHTML = `
          <div class="bg-[#fdf2f8] border border-[#a82682]/30 text-[#701a53] p-6 rounded-2xl text-center">
            <h4 class="font-bold text-lg mb-1">${isEn ? 'Thank you for your message!' : 'Dziękujemy za wiadomość!'}</h4>
            <p class="text-sm">${isEn ? 'We will get back to you as soon as possible.' : 'Pani Katarzyna skontaktuje się z Tobą najszybciej jak to możliwe.'}</p>
          </div>
        `;
      }, 600);
    });
  }

  // 5. OBSŁUGA LIGHTBOX DLA CERTYFIKATÓW I ZDJĘĆ
  const lightboxTriggers = document.querySelectorAll('[data-lightbox-src]');
  if (lightboxTriggers.length > 0) {
    let lightbox = document.getElementById('cert-lightbox');
    if (!lightbox) {
      lightbox = document.createElement('div');
      lightbox.id = 'cert-lightbox';
      lightbox.className = 'fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm hidden items-center justify-center p-4 cursor-zoom-out';
      lightbox.innerHTML = `
        <div class="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl p-2 shadow-2xl overflow-hidden cursor-default flex flex-col items-center">
          <button id="lightbox-close" class="absolute top-3 right-3 w-9 h-9 bg-slate-900/70 hover:bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm z-10 transition">✕</button>
          <img id="lightbox-img" src="" alt="Powiększenie" class="max-h-[80vh] w-auto object-contain rounded-xl">
          <p id="lightbox-caption" class="text-xs text-slate-700 font-medium mt-2 px-4 py-1 text-center"></p>
        </div>
      `;
      document.body.appendChild(lightbox);

      const closeBtn = lightbox.querySelector('#lightbox-close');
      const closeLightbox = () => {
        lightbox.classList.add('hidden');
      };

      closeBtn.addEventListener('click', closeLightbox);
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
      });
    }

    const lbImg = document.getElementById('lightbox-img');
    const lbCaption = document.getElementById('lightbox-caption');

    lightboxTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const src = trigger.getAttribute('data-lightbox-src');
        const caption = trigger.getAttribute('data-lightbox-caption') || '';
        if (src && lbImg) {
          lbImg.src = src;
          if (lbCaption) lbCaption.textContent = caption;
          lightbox.classList.remove('hidden');
        }
      });
    });
  }
});
