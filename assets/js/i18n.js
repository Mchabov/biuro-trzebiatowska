/**
 * System Wielojęzyczności (PL / EN) - Biuro Rachunkowe Trzebiatowska
 * Automatyczna zmiana języka, obsługa atrybutów data-i18n, data-i18n-ph oraz zapamiętywanie w localStorage.
 */

const translations = {
  pl: {
    // Top Bar
    "top_address": "📍 ul. Piastowska 89, Gdańsk Przymorze",
    "top_hours": "⏰ Pn – Pt: 8:00 – 16:00",
    
    // Nawigacja
    "nav_home": "Strona Główna",
    "nav_about": "O biurze",
    "nav_certificates": "Certyfikaty",
    "nav_offer": "Oferta",
    "nav_jdg": "Księgowość JDG i B2B",
    "nav_spolki": "Pełna Księgowość (Spółki z o.o.)",
    "nav_kadry": "Kadry i Płace",
    "nav_ksef": "Wdrożenie KSeF",
    "nav_ksef_badge": "Nowość",
    "nav_rejestracja": "Zakładanie firmy za 0 zł",
    "nav_how_we_work": "Jak pracujemy",
    "nav_reviews": "Opinie",
    "nav_contact": "Kontakt",
    "nav_quote_btn": "Szybka wycena",
    "nav_mobile_quote": "Wyceń księgowość w 1 minutę",
    "mobile_offer_title": "Oferta:",

    // Hero Section
    "hero_tag": "☕ Indywidualne podejście • Księgowość z ludzką twarzą",
    "hero_title": "Spokojna głowa o podatki i finanse Twojej firmy w Gdańsku",
    "hero_desc": "Prowadzimy pełną księgowość dla spółek, KPiR, ryczałt oraz kadry i płace. Łączymy ponad 15 lat rzetelnego doświadczenia z partnerską atmosferą i wygodnym obiegiem dokumentów w 100% online.",
    "hero_btn_calc": "Wyceń księgowość w 1 minutę",
    "hero_btn_call": "📞 Zadzwoń: +48 503 59 68 11",
    "trust_mf_title": "Licencja MF",
    "trust_mf_sub": "Wpis nr 28310",
    "trust_oc_title": "Polisa OC",
    "trust_oc_sub": "Lloyd's Insurance",
    "trust_orly_title": "Orły Rachunkowości",
    "trust_orly_sub": "Laureat plebiscytu",
    "card_coffee_badge": "Księgowość przy kawie",
    "card_loc_badge": "Gdańsk Przymorze",
    "card_owner_role": "Właścicielka & Główna Księgowa",
    "card_quote": "„Wiem, że przedsiębiorcy najbardziej potrzebują spokoju, jasnych odpowiedzi bez żargonu i pewności, że rozliczenia są bezpieczne. Zapraszam na rozmowę o Państwa biznesie – przy dobrej kawie.”",
    "card_f1": "<strong>Licencja MF nr 28310</strong> (państwowe uprawnienia)",
    "card_f2": "Ponad 15 lat nieprzerwanej praktyki gospodarczej",
    "card_f3": "Absolwentka Uniwersytetu Gdańskiego",
    "card_link_story": "Poznaj historię biura →",
    "card_link_cert": "Certyfikaty i polisa OC",

    // Social proof bar
    "proof_lead": "Zaufali nam liderzy nauki, przemysłu i B2B:",
    "proof_sub": "Wieloletnia współpraca oparta na odpowiedzialności",
    "proof_pan": "Polska Akademia Nauk",
    "proof_sosn": "Wyposażenie Serwisów",
    "proof_damar": "Przemysł & Usługi",
    "proof_orly": "★ Orły Rachunkowości",
    "proof_lloyds": "Ubezpieczenie Lloyd's",

    // Trzy filary
    "pillars_title": "Dlaczego przedsiębiorcy wybierają nasze biuro?",
    "pillars_sub": "Przejrzyste zasady, bezpieczeństwo finansowe i partnerski kontakt na każdym etapie.",
    "pil1_title": "100% Bezpieczeństwa",
    "pil1_desc": "Bierzemy pełną odpowiedzialność za prowadzone księgi. Posiadamy ubezpieczenie OC w renomowanym towarzystwie Lloyd’s oraz państwową licencję MF.",
    "pil1_link": "Dowiedz się więcej o ochronie →",
    "pil2_title": "Pewna Terminowość",
    "pil2_desc": "Zawsze z wyprzedzeniem wiesz, jakie podatki i składki ZUS masz do zapłacenia. Pilnujemy wszystkich terminów ustawowych, abyś Ty mógł spać spokojnie.",
    "pil2_link": "Sprawdź procedury →",
    "pil3_title": "Partnerstwo i Czas",
    "pil3_desc": "U nas nie jesteś kolejnym numerem w korporacyjnym systemie. Masz bezpośredni kontakt ze swoją księgową, która zna specyfikę Twojej branży.",
    "pil3_link": "O naszym podejściu →",

    // Oferta
    "offer_tag": "Dopasowana do Ciebie",
    "offer_title": "Kompleksowe usługi księgowo-kadrowe",
    "offer_sub": "Wybierz interesujący Cię obszar, aby przejść do szczegółów oferty i poznać dokładny zakres obsługi.",
    "srv1_tag": "Dla Samozatrudnionych",
    "srv1_title": "Księgowość JDG i B2B",
    "srv1_desc": "Obsługa jednoosobowych działalności gospodarczych, programistów na ryczałcie oraz firm usługowych.",
    "srv1_f1": "Ryczałt ewidencjonowany i KPiR",
    "srv1_f2": "Rozliczenia VAT, transakcje UE i JPK",
    "srv1_f3": "Optymalizacja formy opodatkowania",
    "srv1_link": "Szczegóły oferty dla JDG →",
    "srv2_tag": "Dla Spółek",
    "srv2_title": "Pełna Księgowość",
    "srv2_desc": "Prowadzenie ksiąg handlowych dla Spółek z o.o., komandytowych oraz innych podmiotów gospodarczych.",
    "srv2_f1": "Prowadzenie pełnych ksiąg rachunkowych",
    "srv2_f2": "Roczne sprawozdania finansowe (e-KRS)",
    "srv2_f3": "Raportowanie dla zarządu i banków",
    "srv2_link": "Szczegóły pełnej księgowości →",
    "srv3_tag": "Dla Pracodawców",
    "srv3_title": "Kadry i Płace",
    "srv3_desc": "Zdejmujemy z Twojej głowy formalności związane z zatrudnianiem pracowników i rozliczeniami z ZUS.",
    "srv3_f1": "Listy płac, paski wynagrodzeń, ZUS",
    "srv3_f2": "Umowy o pracę, zlecenia, o dzieło",
    "srv3_f3": "Prowadzenie akt osobowych i PIT-11",
    "srv3_link": "Szczegóły obsługi kadr →",

    // KSeF + Rejestracja
    "ksef_tag": "Wymóg Prawny",
    "ksef_sub": "Krajowy System e-Faktur",
    "ksef_title": "Wdrażamy KSeF i cyfrowy obieg faktur w Twojej firmie",
    "ksef_desc": "Koniec z wożeniem papierowych segregatorów. Zapewniamy nadanie uprawnień, integrację programów, bieżący odbiór faktur ustrukturyzowanych i wygodne przesyłanie kosztów online (e-mail / PDF).",
    "ksef_btn": "Sprawdź nasz 4-etapowy przewodnik wdrożenia KSeF →",
    "reg_tag": "Start Biznesu",
    "reg_sub": "Bezpłatne doradztwo",
    "reg_title": "Zakładasz nową firmę w Gdańsku?",
    "reg_desc": "Pomożemy Ci zarejestrować działalność w CEIDG lub spółkę w S24, dobrać kody PKD oraz najkorzystniejszą formę opodatkowania (ryczałt, skala, liniowy).",
    "reg_promo_title": "🎁 0 zł za procedurę rejestracji",
    "reg_promo_desc": "Przy podpisaniu umowy o stałą obsługę księgową, całą pomoc przy zakładaniu firmy otrzymujesz bezpłatnie.",
    "reg_btn": "Skonsultuj założenie firmy z księgową →",

    // Certyfikaty na Home
    "cert_sec_tag": "Autentyczne Kwalifikacje",
    "cert_sec_title": "Państwowa licencja i potwierdzone certyfikaty",
    "cert_sec_link": "Zobacz wszystkie dyplomy i polisę OC →",
    "cert_zoom_hint": "Kliknij, aby powiększyć 🔍",

    // Kalkulator
    "calc_tag": "Kalkulator Orientacyjny",
    "calc_title": "Oblicz koszt księgowości dla Twojej firmy",
    "calc_sub": "Zaznacz parametry swojego biznesu, sprawdź szacunkowy koszt i wyślij formularz, aby otrzymać precyzyjną, niezobowiązującą ofertę w 24h.",
    "calc_step1": "1. Forma prawna Twojej działalności:",
    "calc_e1": "Jednoosobowa (JDG / B2B)",
    "calc_e2": "Spółka z o.o. / Komandytowa",
    "calc_e3": "Dopiero planuję założyć firmę",
    "calc_step2": "2. Szacowana liczba dokumentów kosztowych i przychodowych miesięcznie:",
    "calc_d1": "Do 10 szt.",
    "calc_d2": "11 – 30 szt.",
    "calc_d3": "31 – 60 szt.",
    "calc_d4": "Powyżej 60",
    "calc_step3": "3. Liczba zatrudnionych pracowników / zleceniobiorców:",
    "calc_emp0": "Tylko właściciel (0)",
    "calc_emp1": "1 – 3 pracowników",
    "calc_emp2": "4 i więcej",
    "calc_est_label": "Szacowany koszt miesięcznej obsługi:",
    "calc_est_from": "od ok.",
    "calc_est_netto": "netto / mc",
    "calc_disclaimer": "Ostateczna cena zależy m.in. od specyfiki transakcji (np. handel zagraniczny) i jest potwierdzana po bezpłatnej rozmowie.",
    "calc_phone_lbl": "Twój numer telefonu (wymagany)",
    "calc_email_lbl": "Twój adres e-mail (wymagany)",
    "calc_submit_btn": "Odbierz bezpłatną propozycję i wycenę w 24h →",
    "calc_privacy": "🔒 Szanujemy Twoją prywatność. Żadnego spamu – kontaktujemy się wyłącznie w celu przedstawienia wyceny.",

    // Opinie
    "rev_tag": "Prawdziwy Dowód Społeczny",
    "rev_title": "Co mówią o nas nasi Klienci?",
    "rev_link": "Zobacz wszystkie referencje i opinie Google →",

    // FAQ
    "faq_title": "Często zadawane pytania (FAQ)",
    "faq_sub": "Odpowiedzi na najczęstsze wątpliwości przed podjęciem współpracy.",
    "faq_q1": "Jak wygląda zmiana biura rachunkowego w trakcie roku?",
    "faq_a1": "Zmiana biura w trakcie roku obrotowego jest całkowicie bezproblemowa. Pomagamy we wszystkich formalnościach – sporządzamy protokół przejęcia dokumentacji od poprzedniej księgowej i weryfikujemy ciągłość zapisów, dzięki czemu proces odbywa się bez stresu dla Twojej firmy.",
    "faq_q2": "Czy muszę przyjeżdżać do biura osobiście z papierowymi dokumentami?",
    "faq_a2": "Nie! Działamy w 100% cyfrowo. Dokumenty możesz przesyłać e-mailem jako pliki PDF lub czytelne skany. Oczywiście jeśli wolisz tradycyjne spotkania – nasze biuro na Przymorzu jest zawsze otwarte na spotkanie przy kawie.",
    "faq_q3": "W jaki sposób biuro pomaga przy wdrożeniu KSeF?",
    "faq_a3": "Przeprowadzamy naszych klientów przez cały proces: od nadania uprawnień w Urzędzie Skarbowym (formularz ZAW-FA), przez dobór narzędzia do wystawiania e-faktur, aż po bieżącą weryfikację faktur ustrukturyzowanych w systemie rządowym.",

    // Dodatkowe CTA i Mobile
    "nav_consultation_btn": "Bezpłatna konsultacja",
    "mobile_call_now": "📞 Zadzwoń teraz",
    "mobile_quote_btn": "☕ Szybka wycena",
    
    // Nagłówki i teksty podstron
    "about_hero_tag": "Doświadczenie • Zaufanie • Relacje",
    "about_hero_title": "O Biurze Rachunkowym Trzebiatowska",
    "about_hero_desc": "Księgowość prowadzona z pasją, oparta na solidnych podstawach akademickich, ponad 15-letniej praktyce gospodarczej i wzajemnym szacunku.",
    "cert_hero_tag": "Oficjalne Kwalifikacje i Bezpieczeństwo",
    "cert_hero_title": "Certyfikaty, Dyplomy i Polisa OC",
    "cert_hero_desc": "Pełna transparentność i potwierdzone państwowe uprawnienia do usługowego prowadzenia ksiąg rachunkowych.",
    "contact_hero_tag": "Zapraszamy na rozmowę przy kawie",
    "contact_hero_title": "Skontaktuj się z Biurem Rachunkowym",
    "contact_hero_desc": "Chętnie odpowiemy na Twoje pytania i przygotujemy indywidualną ofertę dla Twojej działalności.",
    "reviews_hero_tag": "Referencje i Opinie",
    "reviews_hero_title": "Co mówią o nas nasi Klienci?",
    "reviews_hero_desc": "Wieloletnia współpraca z liderami nauki, przemysłu oraz lokalnymi przedsiębiorcami z Gdańska.",
    "workflow_hero_tag": "Bezpiecznie i w 100% cyfrowo",
    "workflow_hero_title": "Jak pracujemy w Biurze Trzebiatowska",
    "workflow_hero_desc": "Prosty i wygodny obieg dokumentów bez konieczności wychodzenia z domu lub biura.",
    "ksef_hero_tag": "Krajowy System e-Faktur",
    "ksef_hero_title": "Wdrożenie KSeF w Twojej firmie",
    "ksef_hero_desc": "Kompleksowe przygotowanie przedsiębiorstwa do obowiązkowych e-faktur ustrukturyzowanych.",
    "jdg_hero_tag": "Dla Samozatrudnionych i Specjalistów",
    "jdg_hero_title": "Księgowość JDG i B2B",
    "jdg_hero_desc": "Prowadzimy ryczałt ewidencjonowany oraz KPiR dla programistów, konsultantów i firm usługowych.",
    "spolki_hero_tag": "Dla Spółek Prawa Handlowego",
    "spolki_hero_title": "Pełna Księgowość (Księgi Handlowe)",
    "spolki_hero_desc": "Prowadzenie pełnych ksiąg rachunkowych dla Spółek z o.o., komandytowych i innych podmiotów.",
    "kadry_hero_tag": "Rozliczenia Pracownicze",
    "kadry_hero_title": "Kadry i Płace",
    "kadry_hero_desc": "Bezpieczne prowadzenie akt osobowych, naliczanie wynagrodzeń oraz terminowe rozliczenia z ZUS.",
    "rejestracja_hero_tag": "Start Twojego Biznesu",
    "rejestracja_hero_title": "Zakładanie firmy za 0 zł",
    "rejestracja_hero_desc": "Bezpłatna pomoc w rejestracji działalności i doborze optymalnej formy opodatkowania.",

    // Stopka
    "footer_desc": "Profesjonalne usługi księgowe i kadrowo-płacowe w Gdańsku na Przymorzu. Licencja Ministerstwa Finansów nr 28310. Ubezpieczenie w Lloyd's.",
    "footer_nav_hdr": "Nawigacja",
    "footer_offer_hdr": "Oferta",
    "footer_contact_hdr": "Kontakt",
    "footer_rights": "© 2026 Biuro Rachunkowe Trzebiatowska. Wszelkie prawa zastrzeżone."
  },

  en: {
    // Top Bar
    "top_address": "📍 89 Piastowska St., Gdańsk Przymorze, Poland",
    "top_hours": "⏰ Mon – Fri: 8:00 AM – 4:00 PM",

    // Navigation
    "nav_home": "Home",
    "nav_about": "About Us",
    "nav_certificates": "Certificates",
    "nav_offer": "Services",
    "nav_jdg": "Sole Trader & B2B Accounting",
    "nav_spolki": "Full Accounting (LLC / Sp. z o.o.)",
    "nav_kadry": "Payroll & HR",
    "nav_ksef": "KSeF E-Invoicing",
    "nav_ksef_badge": "New",
    "nav_rejestracja": "Company Formation for 0 PLN",
    "nav_how_we_work": "How We Work",
    "nav_reviews": "Testimonials",
    "nav_contact": "Contact",
    "nav_quote_btn": "Quick Quote",
    "nav_mobile_quote": "Estimate Cost in 1 Minute",
    "mobile_offer_title": "Services:",

    // Hero Section
    "hero_tag": "☕ Personal Approach • Accounting with a Human Touch",
    "hero_title": "Peace of Mind Regarding Taxes & Finance for Your Business in Gdańsk",
    "hero_desc": "We provide comprehensive full accounting for limited companies (Sp. z o.o.), sole traders, flat-rate taxation, and payroll services. Combining over 15 years of certified experience with an English-friendly partnership and 100% digital document workflows.",
    "hero_btn_calc": "Estimate Accounting Cost in 1 Min",
    "hero_btn_call": "📞 Call us: +48 503 59 68 11",
    "trust_mf_title": "Ministry of Finance",
    "trust_mf_sub": "Official License no. 28310",
    "trust_oc_title": "Liability Insurance",
    "trust_oc_sub": "Lloyd's Insurance",
    "trust_orly_title": "Accounting Eagles",
    "trust_orly_sub": "Top Quality Winner",
    "card_coffee_badge": "Accounting over Coffee",
    "card_loc_badge": "Gdańsk Przymorze",
    "card_owner_role": "Owner & Certified Chief Accountant",
    "card_quote": "„I know that entrepreneurs, especially international founders, need clarity without bureaucratic jargon and certainty that their tax filings are completely secure. I warmly invite you to talk about your business – over coffee or video call.”",
    "card_f1": "<strong>Ministry of Finance License no. 28310</strong>",
    "card_f2": "Over 15 years of continuous commercial practice",
    "card_f3": "University of Gdańsk Graduate",
    "card_link_story": "Discover our story →",
    "card_link_cert": "Certificates & Insurance policy",

    // Social proof bar
    "proof_lead": "Trusted by leaders in science, industry & B2B:",
    "proof_sub": "Long-term partnership founded on mutual trust and responsibility",
    "proof_pan": "Polish Academy of Sciences",
    "proof_sosn": "Automotive Equipment",
    "proof_damar": "Industry & Services",
    "proof_orly": "★ Accounting Eagles",
    "proof_lloyds": "Lloyd's Insurance",

    // Trzy filary
    "pillars_title": "Why Entrepreneurs Choose Our Accounting Office",
    "pillars_sub": "Transparent conditions, financial security, and personal communication at every stage.",
    "pil1_title": "100% Security",
    "pil1_desc": "We take full professional responsibility for the books we keep. We carry comprehensive civil liability insurance at Lloyd's and hold a prestigious Ministry of Finance license.",
    "pil1_link": "Learn more about protection →",
    "pil2_title": "Guaranteed Punctuality",
    "pil2_desc": "You always know your taxes and social security contributions well in advance. We meet all statutory deadlines so you can sleep soundly.",
    "pil2_link": "Explore our workflows →",
    "pil3_title": "Partnership & Time",
    "pil3_desc": "You are never just a ticket number in a corporate call center. You have direct contact with your dedicated accountant who understands your business needs.",
    "pil3_link": "About our approach →",

    // Oferta
    "offer_tag": "Tailored to You",
    "offer_title": "Comprehensive Accounting & Payroll Services",
    "offer_sub": "Select an area to explore the detailed scope of our services in English and Polish.",
    "srv1_tag": "For Self-Employed & Expats",
    "srv1_title": "Sole Trader & B2B Accounting",
    "srv1_desc": "Support for sole proprietorships (JDG), IT contractors on flat-rate taxation (Ryczałt), and service providers in Poland.",
    "srv1_f1": "Flat-rate tax (Ryczałt) & Revenue Ledger (KPiR)",
    "srv1_f2": "VAT filings, EU intra-community trade & SAF-T (JPK)",
    "srv1_f3": "Tax form optimization & legal deductions",
    "srv1_link": "Sole trader service details →",
    "srv2_tag": "For Companies & LLCs",
    "srv2_title": "Full Accounting (Sp. z o.o.)",
    "srv2_desc": "Commercial ledger bookkeeping for Limited Liability Companies (Spółka z o.o.), foreign subsidiaries, and partnerships.",
    "srv2_f1": "Statutory double-entry bookkeeping",
    "srv2_f2": "Annual financial statements (e-KRS & CIT)",
    "srv2_f3": "Bilingual management reports for Board & Banks",
    "srv2_link": "Full accounting details →",
    "srv3_tag": "For Employers",
    "srv3_title": "Payroll & Human Resources",
    "srv3_desc": "Handling all Polish labor code formalities, employee onboarding, payroll lists, and Social Security (ZUS) filings.",
    "srv3_f1": "Monthly payroll lists, payslips & ZUS DRA",
    "srv3_f2": "Employment contracts (UoP, UZ, UoD, B2B)",
    "srv3_f3": "Personnel records & annual employee PIT-11 tax forms",
    "srv3_link": "Payroll service details →",

    // KSeF + Rejestracja
    "ksef_tag": "Legal Compliance",
    "ksef_sub": "National e-Invoicing System",
    "ksef_title": "We Implement KSeF & Digital Invoicing for Your Business",
    "ksef_desc": "No more driving paper folders around town. We handle tax office authorizations, software integration, electronic structured invoices, and convenient online document transfers (e-mail / PDF).",
    "ksef_btn": "Check our 4-step KSeF implementation guide →",
    "reg_tag": "Business Launch",
    "reg_sub": "Free English consultation",
    "reg_title": "Setting Up a New Business or LLC in Poland?",
    "reg_desc": "We guide foreign entrepreneurs through registering in CEIDG or setting up an LLC via the S24 court system, obtaining PESEL, choosing PKD business codes, and picking optimal tax forms.",
    "reg_promo_title": "🎁 0 PLN for the registration procedure",
    "reg_promo_desc": "When signing a continuous accounting contract, all company formation assistance is completely free of charge.",
    "reg_btn": "Consult company formation with an accountant →",

    // Certyfikaty na Home
    "cert_sec_tag": "Verified Qualifications",
    "cert_sec_title": "State License and Certified Qualifications",
    "cert_sec_link": "View all diplomas and insurance policy →",
    "cert_zoom_hint": "Click to enlarge 🔍",

    // Kalkulator
    "calc_tag": "Quick Cost Estimator",
    "calc_title": "Calculate Accounting Costs for Your Business",
    "calc_sub": "Select your company parameters, view the estimated monthly fee, and request an official quote within 24h.",
    "calc_step1": "1. Legal form of your business in Poland:",
    "calc_e1": "Sole Trader (JDG / B2B Contractor)",
    "calc_e2": "Limited Liability Company (Sp. z o.o.)",
    "calc_e3": "Planning to register a new company",
    "calc_step2": "2. Estimated monthly document volume (sales + purchase invoices):",
    "calc_d1": "Up to 10 docs",
    "calc_d2": "11 – 30 docs",
    "calc_d3": "31 – 60 docs",
    "calc_d4": "Over 60 docs",
    "calc_step3": "3. Number of hired employees / contractors:",
    "calc_emp0": "Owner only (0)",
    "calc_emp1": "1 – 3 employees",
    "calc_emp2": "4 and more",
    "calc_est_label": "Estimated monthly fee:",
    "calc_est_from": "from approx.",
    "calc_est_netto": "net / month",
    "calc_disclaimer": "Final fee depends on specific transaction profiles (e.g. international cross-border VAT) and is confirmed during a free consultation.",
    "calc_phone_lbl": "Your phone number (required)",
    "calc_email_lbl": "Your email address (required)",
    "calc_submit_btn": "Receive free customized quote in 24h →",
    "calc_privacy": "🔒 We respect your privacy. No spam – we only reach out to discuss your quote.",

    // Opinie
    "rev_tag": "Authentic Social Proof",
    "rev_title": "What Our Clients Say About Us",
    "rev_link": "View all testimonials and Google reviews →",

    // FAQ
    "faq_title": "Frequently Asked Questions (FAQ)",
    "faq_sub": "Clear answers to essential questions for business owners in Poland.",
    "faq_q1": "How does switching accounting offices work mid-year?",
    "faq_a1": "Switching accounting offices mid-year in Poland is smooth and seamless. We handle all handovers, prepare documentation protocols with your previous accountant, and verify ledger continuity without disrupting your business.",
    "faq_q2": "Do I need to visit the office with paper documents?",
    "faq_a2": "No! We operate 100% digitally. You can send documents via email, cloud, or as PDF files. If you prefer in-person meetings, our Gdańsk Przymorze office is always open for an English conversation over coffee.",
    "faq_q3": "How do you assist with KSeF structured e-invoicing?",
    "faq_a3": "We manage the entire setup: submitting authorization forms (ZAW-FA) to the Polish Tax Office, connecting your invoicing software with the government gateway, and validating incoming/outgoing XML invoices.",

    // Additional CTAs & Mobile
    "nav_consultation_btn": "Free consultation",
    "mobile_call_now": "📞 Call now",
    "mobile_quote_btn": "☕ Quick quote",

    // Subpages headers & common keys
    "about_hero_tag": "Experience • Trust • Relationships",
    "about_hero_title": "About Trzebiatowska Accounting Office",
    "about_hero_desc": "Accounting driven by passion, grounded in solid academic qualifications, 15+ years of business experience, and mutual respect.",
    "cert_hero_tag": "Official Credentials & Security",
    "cert_hero_title": "Certificates, Diplomas & Liability Insurance",
    "cert_hero_desc": "Complete transparency and state-certified licenses for commercial bookkeeping services.",
    "contact_hero_tag": "Join us for a conversation over coffee",
    "contact_hero_title": "Contact Our Accounting Office",
    "contact_hero_desc": "We will gladly answer your questions and prepare a personalized offer for your business in Poland.",
    "reviews_hero_tag": "Client References & Reviews",
    "reviews_hero_title": "What Our Clients Say About Us",
    "reviews_hero_desc": "Years of ongoing partnership with scientific institutes, industry leaders, and Gdańsk entrepreneurs.",
    "workflow_hero_tag": "Secure & 100% Digital",
    "workflow_hero_title": "How We Work at Trzebiatowska Office",
    "workflow_hero_desc": "Simple, paperless document workflows without leaving your home or office.",
    "ksef_hero_tag": "National e-Invoicing System",
    "ksef_hero_title": "KSeF Implementation for Your Business",
    "ksef_hero_desc": "Comprehensive preparation and onboarding for mandatory Polish structured electronic invoices.",
    "jdg_hero_tag": "For Sole Traders & Contractors",
    "jdg_hero_title": "Sole Trader & B2B Accounting",
    "jdg_hero_desc": "Flat-rate taxation (Ryczałt) and revenue ledgers for software developers, consultants, and service providers.",
    "spolki_hero_tag": "For Commercial Companies",
    "spolki_hero_title": "Full Accounting (Commercial Books)",
    "spolki_hero_desc": "Statutory double-entry bookkeeping for Limited Liability Companies (Sp. z o.o.) and partnerships.",
    "kadry_hero_tag": "Employee Payroll & Social Security",
    "kadry_hero_title": "Payroll & Human Resources",
    "kadry_hero_desc": "Secure personnel records management, payroll calculations, and timely ZUS filings in Poland.",
    "rejestracja_hero_tag": "Start Your Business in Poland",
    "rejestracja_hero_title": "Company Registration for 0 PLN",
    "rejestracja_hero_desc": "Free assistance with business registration, PESEL, PKD codes, and optimal tax form selection.",

    // Stopka
    "footer_desc": "Professional certified accounting, tax, and payroll services in Gdańsk Przymorze. Ministry of Finance License no. 28310. Insured at Lloyd's.",
    "footer_nav_hdr": "Navigation",
    "footer_offer_hdr": "Services",
    "footer_contact_hdr": "Contact",
    "footer_rights": "© 2026 Biuro Rachunkowe Trzebiatowska. All rights reserved."
  }
};

/**
 * Inicjalizacja i obsługa zmiany języka
 */
function initI18n() {
  // 1. Sprawdź zapisany język lub parametr URL ?lang=en
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  const savedLang = localStorage.getItem('preferred_lang');
  
  let currentLang = 'pl';
  if (urlLang === 'en' || (!urlLang && savedLang === 'en')) {
    currentLang = 'en';
  }

  // 2. Aplikuj język
  applyLanguage(currentLang);

  // 3. Nasłuchuj kliknięć w przyciski przełącznika
  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const targetLang = this.getAttribute('data-lang');
      if (targetLang && (targetLang === 'pl' || targetLang === 'en')) {
        applyLanguage(targetLang);
      }
    });
  });
}

/**
 * Podmiana tekstów i aktualizacja interfejsu
 */
function applyLanguage(lang) {
  if (!translations[lang]) return;

  const dict = translations[lang];

  // Podmień teksty w elementach z data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Podmień placeholdery
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Aktualizuj stan wizualny przycisków PL/EN
  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    const isDark = btn.closest('.bg-slate-800') || btn.closest('header');
    if (btnLang === lang) {
      btn.classList.add('bg-brand-600', 'text-white', 'font-bold');
      btn.classList.remove('text-slate-400', 'text-slate-600', 'hover:text-white', 'hover:text-slate-900', 'bg-transparent');
    } else {
      btn.classList.remove('bg-brand-600', 'text-white', 'font-bold');
      if (isDark) {
        btn.classList.add('text-slate-400', 'hover:text-white', 'bg-transparent');
        btn.classList.remove('text-slate-600', 'hover:text-slate-900');
      } else {
        btn.classList.add('text-slate-600', 'hover:text-slate-900', 'bg-transparent');
        btn.classList.remove('text-slate-400', 'hover:text-white');
      }
    }
  });

  // Ustaw język w tagu <html>
  document.documentElement.lang = lang;

  // Zaktualizuj kalkulator wyceny (tekst "od ok. / from approx.")
  const estimatePrice = document.getElementById('estimate-price');
  if (estimatePrice) {
    const spanPrice = estimatePrice.querySelector('span');
    const priceText = spanPrice ? spanPrice.outerHTML : '350 zł';
    if (lang === 'en') {
      estimatePrice.innerHTML = `from approx. ${priceText} net / mo`;
    } else {
      estimatePrice.innerHTML = `od ok. ${priceText} netto / mc`;
    }
  }

  // Zapisz preferencję w localStorage
  try {
    localStorage.setItem('preferred_lang', lang);
  } catch (e) {
    console.warn('localStorage not available', e);
  }

  // Zaktualizuj URL bez przeładowania strony
  try {
    const url = new URL(window.location.href);
    if (lang === 'en') {
      url.searchParams.set('lang', 'en');
    } else {
      url.searchParams.delete('lang');
    }
    window.history.replaceState({}, '', url.toString());
  } catch (e) {
    // ignoruj błędy w starszych przeglądarkach
  }
}

// Inicjalizacja po załadowaniu DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
