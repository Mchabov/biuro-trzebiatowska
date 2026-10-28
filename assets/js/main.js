/**
 * Główny skrypt JavaScript - Biuro Rachunkowe Trzebiatowska
 * Pełna obsługa 3 wersji językowych (PL, EN, UA):
 * - Nawigacja i menu mobilne
 * - Interaktywny kalkulator wyceny (autentyczny cennik wg notatek Pani Katarzyny)
 * - Rozwijana tabela pełnego cennika i matrycy stawek
 * - Akordeony FAQ
 * - Formularze wyceny i kontaktu
 */

document.addEventListener('DOMContentLoaded', function () {
  // Wykrywanie aktualnego języka strony
  const docLang = (document.documentElement.lang || 'pl').toLowerCase();
  const isEn = docLang.startsWith('en');
  const isUa = docLang.startsWith('uk') || docLang.startsWith('ua');

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

    // Dokładna matryca stawek netto z odręcznych notatek Pani Katarzyny:
    // JDG: baza 0 prac (350, 400, 500, 700), 1-3 prac (+90 zł: 440, 490, 590, 790), pow. 4 prac (+360 zł: 710, 760, 860, 1060)
    // Spółki: baza 0 prac (950, 1050, 1250, 1800), 1-3 prac (+100 zł: 1050, 1150, 1350, 1900), pow. 4 prac (+400 zł: 1350, 1450, 1650, 2200)
    const pricingMatrix = {
      jdg: {
        '0':   { '0-5': 350,  '6-30': 400,  '31-60': 500,  '60+': 700 },
        '1-3': { '0-5': 440,  '6-30': 490,  '31-60': 590,  '60+': 790 },
        '4+':  { '0-5': 710,  '6-30': 760,  '31-60': 860,  '60+': 1060 }
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
        if (isEn) {
          estimatePrice.innerHTML = '<span class="text-[#a82682] font-black text-2xl">PLN 0</span> <span class="text-xs text-slate-700 font-semibold">for 1st consultation</span>';
          if (estimateSubtitle) {
            estimateSubtitle.textContent = 'Free initial advisory consultation (tax structure, ZUS and PKD codes). Full formal company registration in CEIDG / KRS is a paid service.';
          }
        } else if (isUa) {
          estimatePrice.innerHTML = '<span class="text-[#a82682] font-black text-2xl">0 zł</span> <span class="text-xs text-slate-700 font-semibold">за 1-шу консультацію</span>';
          if (estimateSubtitle) {
            estimateSubtitle.textContent = 'Безкоштовна перша консультація (вибір форми оподаткування, пільги ZUS та коди PKD). Допомога при офіційній реєстрації в CEIDG/KRS є платною послугою.';
          }
        } else {
          estimatePrice.innerHTML = '<span class="text-[#a82682] font-black text-2xl">0 zł</span> <span class="text-xs text-slate-700 font-semibold">za 1. konsultację</span>';
          if (estimateSubtitle) {
            estimateSubtitle.textContent = 'Darmowe pierwsze spotkanie doradcze (dobór formy opodatkowania, analiza ZUS i kodów PKD). Rejestracja działalności w CEIDG / KRS jest usługą odpłatną.';
          }
        }
      } else {
        const rates = pricingMatrix[selectedEntity][selectedEmployees];
        const price = rates[selectedDocs];

        if (isEn) {
          estimatePrice.innerHTML = `from approx. <span class="text-[#a82682] font-black text-2xl">PLN ${price}</span> <span class="text-xs text-slate-500 font-normal">net / mo</span>`;
          if (estimateSubtitle) {
            estimateSubtitle.textContent = 'Standard base rate from official price matrix. Final fee depends on transaction specifics (e.g. international VAT) and is confirmed during free consultation.';
          }
        } else if (isUa) {
          estimatePrice.innerHTML = `від прибл. <span class="text-[#a82682] font-black text-2xl">${price} zł</span> <span class="text-xs text-slate-500 font-normal">нетто / міс</span>`;
          if (estimateSubtitle) {
            estimateSubtitle.textContent = 'Базовий тариф з офіційного прейскуранта. Остаточна вартість узгоджується індивідуально після безкоштовного знайомства.';
          }
        } else {
          estimatePrice.innerHTML = `od ok. <span class="text-[#a82682] font-black text-2xl">${price} zł</span> <span class="text-xs text-slate-500 font-normal">netto / mc</span>`;
          if (estimateSubtitle) {
            estimateSubtitle.textContent = 'Szacunkowa stawka bazowa. Ostateczna kwota zależy m.in. od specyfiki transakcji (np. handel zagraniczny) i jest potwierdzana po bezpłatnej rozmowie.';
          }
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

    // Obsługa wysyłki formularza kalkulatora
    calcForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const phoneInput = calcForm.querySelector('input[type="tel"]');
      const emailInput = calcForm.querySelector('input[type="email"]');

      if (!phoneInput.value && !emailInput.value) {
        const errorMsg = isEn 
          ? 'Please provide your phone number or email address.'
          : isUa
          ? 'Будь ласка, вкажіть ваш номер телефону або e-mail.'
          : 'Proszę podać numer telefonu lub adres e-mail, abyśmy mogli przesłać kalkulację.';
        alert(errorMsg);
        return;
      }

      const submitBtn = calcForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML = isEn ? 'Sending request...' : isUa ? 'Надсилання запиту...' : 'Wysyłanie zapytania...';

      setTimeout(() => {
        if (isEn) {
          calcForm.innerHTML = `
            <div class="text-center py-8">
              <div class="w-16 h-16 bg-[#fdf2f8] text-[#a82682] border border-[#a82682]/20 rounded-full flex items-center justify-center mx-auto text-3xl mb-4 font-bold">✓</div>
              <h3 class="text-xl font-bold text-slate-900 mb-2">Thank you for your enquiry!</h3>
              <p class="text-sm text-slate-600 max-w-md mx-auto mb-4">
                Ms. Katarzyna Trzebiatowska will review your requirements and get back to you within 24 hours with a free, tailor-made proposal.
              </p>
              <p class="text-xs text-slate-500">For urgent matters, call directly: <strong>+48 503 59 68 11</strong></p>
            </div>
          `;
        } else if (isUa) {
          calcForm.innerHTML = `
            <div class="text-center py-8">
              <div class="w-16 h-16 bg-[#fdf2f8] text-[#a82682] border border-[#a82682]/20 rounded-full flex items-center justify-center mx-auto text-3xl mb-4 font-bold">✓</div>
              <h3 class="text-xl font-bold text-slate-900 mb-2">Дякуємо за ваш запит!</h3>
              <p class="text-sm text-slate-600 max-w-md mx-auto mb-4">
                Пані Катажина Тшебятовська ознайомиться з вашими даними та зв'яжеться протягом 24 годин з індивідуальною пропозицією.
              </p>
              <p class="text-xs text-slate-500">У термінових питаннях телефонуйте: <strong>+48 503 59 68 11</strong></p>
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

  // 3. ROZWIJANA TABELA PEŁNEJ MATRYCY STAWEK CENNIKA
  const togglePriceTableBtn = document.getElementById('toggle-price-table');
  const priceTableContainer = document.getElementById('full-price-table-container');
  if (togglePriceTableBtn && priceTableContainer) {
    togglePriceTableBtn.addEventListener('click', function () {
      const isHidden = priceTableContainer.classList.contains('hidden');
      priceTableContainer.classList.toggle('hidden');
      const arrow = togglePriceTableBtn.querySelector('.toggle-arrow');
      if (arrow) {
        arrow.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
      }
    });
  }

  // 4. AKORDEONY FAQ
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

  // 5. OBSŁUGA FORMULARZA KONTAKTOWEGO
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML = isEn ? 'Sending message...' : isUa ? 'Надсилання...' : 'Wysyłanie wiadomości...';

      setTimeout(() => {
        const thankTitle = isEn ? 'Thank you for your message!' : isUa ? 'Дякуємо за ваше повідомлення!' : 'Dziękujemy za wiadomość!';
        const thankText = isEn 
          ? 'Ms. Katarzyna will get in touch with you as soon as possible.' 
          : isUa 
          ? 'Пані Катажина зв\'яжеться з вами найближчим часом.' 
          : 'Pani Katarzyna skontaktuje się z Tobą najszybciej jak to możliwe.';

        contactForm.innerHTML = `
          <div class="bg-[#fdf2f8] border border-[#a82682]/30 text-[#701a53] p-6 rounded-2xl text-center">
            <h4 class="font-bold text-lg mb-1">${thankTitle}</h4>
            <p class="text-sm">${thankText}</p>
          </div>
        `;
      }, 600);
    });
  }
});
