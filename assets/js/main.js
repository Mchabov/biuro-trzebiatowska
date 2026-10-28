/**
 * Główny skrypt JavaScript - Biuro Rachunkowe Trzebiatowska
 * Obsługa menu mobilnego, kalkulatora wyceny (stawki z autentycznego cennika biura), akordeonów FAQ oraz formularzy.
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

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. INTERAKTYWNY KALKULATOR WYCENY (DOKŁADNY CENNIK PANI KATARZYNY)
  const calcForm = document.getElementById('pricing-calculator-form');
  if (calcForm) {
    const entityButtons = calcForm.querySelectorAll('.calc-entity-btn');
    const docButtons = calcForm.querySelectorAll('.calc-doc-btn');
    const employeeButtons = calcForm.querySelectorAll('.calc-emp-btn');
    const estimatePrice = document.getElementById('estimate-price');
    const estimateSubtitle = document.getElementById('estimate-subtitle');

    let selectedEntity = 'jdg'; // jdg, spolka, new
    let selectedDocs = '6-30'; // 0-5, 6-30, 31-60, 60+
    let selectedEmployees = '0'; // 0, 1-3, 4+

    // Matryca stawek netto uzgodniona z p. Katarzyną
    const pricingMatrix = {
      jdg: {
        '0':   { '0-5': 350,  '6-30': 400,  '31-60': 500,  '60+': 700 },
        '1-3': { '0-5': 440,  '6-30': 490,  '31-60': 640,  '60+': 840 },
        '4+':  { '0-5': 710,  '6-30': 760,  '31-60': 910,  '60+': 1110 }
      },
      spolka: {
        '0':   { '0-5': 950,  '6-30': 1050, '31-60': 1250, '60+': 1800 },
        '1-3': { '0-5': 1050, '6-30': 1150, '31-60': 1350, '60+': 1900 },
        '4+':  { '0-5': 1350, '6-30': 1450, '31-60': 1650, '60+': 2200 }
      }
    };

    function calculateEstimate() {
      if (!estimatePrice) return;

      if (selectedEntity === 'new') {
        estimatePrice.innerHTML = '<span class="text-[#a82682] font-black text-2xl">0 zł</span> <span class="text-xs text-slate-700 font-semibold">za 1. konsultację</span>';
        if (estimateSubtitle) {
          estimateSubtitle.textContent = 'Darmowe pierwsze spotkanie doradcze. Pomoc przy formalnej rejestracji firmy w CEIDG/KRS jest usługą odpłatną.';
        }
      } else {
        const rates = pricingMatrix[selectedEntity][selectedEmployees];
        const price = rates[selectedDocs];
        estimatePrice.innerHTML = `od ok. <span class="text-[#a82682] font-black text-2xl">${price} zł</span> <span class="text-xs text-slate-500 font-normal">netto / mc</span>`;
        if (estimateSubtitle) {
          estimateSubtitle.textContent = 'Szacunkowa stawka bazowa. Ostateczna kwota zależy m.in. od specyfiki transakcji (np. handel zagraniczny) i jest potwierdzana po bezpłatnej rozmowie.';
        }
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

      if (!phoneInput.value && !emailInput.value) {
        alert('Proszę podać numer telefonu lub adres e-mail, abyśmy mogli przesłać kalkulację.');
        return;
      }

      const submitBtn = calcForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Wysyłanie zapytania...';

      setTimeout(() => {
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
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Wysyłanie wiadomości...';

      setTimeout(() => {
        contactForm.innerHTML = `
          <div class="bg-[#fdf2f8] border border-[#a82682]/30 text-[#701a53] p-6 rounded-2xl text-center">
            <h4 class="font-bold text-lg mb-1">Dziękujemy za wiadomość!</h4>
            <p class="text-sm">Pani Katarzyna skontaktuje się z Tobą najszybciej jak to możliwe.</p>
          </div>
        `;
      }, 600);
    });
  }
});
