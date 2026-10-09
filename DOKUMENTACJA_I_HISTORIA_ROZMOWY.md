# 📘 DOKUMENTACJA PROJEKTU: BIURO RACHUNKOWE TRZEBIATOWSKA
**Projekt rebrandingu, audytu i budowy nowej strony internetowej**  
Data wygenerowania: Październik 2026 | Właściciel: Katarzyna Trzebiatowska | Realizacja: Mchabov

---

## SPIS TREŚCI
1. [Podsumowanie i Cel Projektu](#1-podsumowanie-i-cel-projektu)
2. [Pełny Raport z Audytu Starej Strony (biurotrzebiatowska.pl)](#2-pełny-raport-z-audytu-starej-strony)
3. [Gotowy Brief i Pytania na Spotkanie z Klientką](#3-gotowy-brief-i-pytania-na-spotkanie-z-klientką)
4. [Architektura Nowego Serwisu (Sitemap i Podstrony)](#4-architektura-nowego-serwisu)
5. [Identyfikacja Wizualna i Kolorystyka Logo](#5-identyfikacja-wizualna-i-kolorystyka-logo)
6. [Pakiety Wyceny i Harmonogram Wdrożenia](#6-pakiety-wyceny-i-harmonogram-wdrożenia)
7. [Gotowy Szablon Wiadomości E-mail do Klientki](#7-gotowy-szablon-wiadomości-e-mail-do-klientki)
8. [Instrukcja Pracy na Drugim Komputerze](#8-instrukcja-pracy-na-drugim-komputerze)

---

## 1. Podsumowanie i Cel Projektu
Klientka, Pani Katarzyna Trzebiatowska (licencjonowana księgowa, licencja MF nr 28310, ponad 15 lat doświadczenia), zgłosiła się z potrzebą rozbudowy i gruntownego odświeżenia strony `https://biurotrzebiatowska.pl/`.

### Główne cele:
* **Budowa zaufania (Human Branding):** Wyeksponowanie osoby Pani Katarzyny, relacyjnego podejścia („porozmawiajmy przy kawie”), licencji MF, polisy OC w Lloyd's oraz nagrody *Orły Rachunkowości*.
* **Pozyskiwanie klientów (Lead Generation):** Wdrożenie interaktywnego kalkulatora wyceny (JDG, Spółki, Kadry) oraz pływającego paska szybkiego kontaktu na smartfonach.
* **Nowoczesność:** Wdrożenie sekcji KSeF (Krajowy System e-Faktur) oraz procedur cyfrowego obiegu faktur bez wożenia papierów.
* **Wielopodstronowa powaga instytucji:** Zbudowanie pełnoprawnego, 11-podstronowego serwisu dla spółek i przedsiębiorców zamiast ubogiego one-page'a.

---

## 2. Pełny Raport z Audytu Starej Strony
Stara strona powstała na przełomie 2018/2019 roku na motywie WordPress `accounting` z edytorem WPBakery 5.5.5 i Slider Revolution 5.4.8.

### 🚨 Krytyczne błędy wizerunkowe (do natychmiastowego usunięcia):
1. **Fikcyjne opinie i Lorem Ipsum:**
   W sekcji referencji widniały postacie demonstracyjne z szablonu: *Tania Cash*, *Sonia Feed*, *John Money* z tekstem:
   > *„I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet...”*
2. **Chaos adresowy (3 różne adresy w jednym serwisie):**
   * Stopka: `ul. Szczecińska 4/12, Gdańsk 80-392`
   * Strona Kontakt: `ul. Piastowska 89, II piętro, 80-363 Gdańsk`
   * Polityka Prywatności: `ul. Szczecińska 2 a/5, 80-392 Gdańsk`
   * *Rozwiązanie w nowej stronie:* Jednoznaczny adres obsługi klientów to **ul. Piastowska 89, Gdańsk Przymorze**, a dane rejestrowe NIP zostały odseparowane.
3. **Puste i niedokończone podstrony zaindeksowane w Google:**
   * `/doradztwo-podatkowe/` – pusta biała strona.
   * `/poradnik/` – pusta podstrona.
   * `/certyfikaty/` – tylko nagłówek, brak certyfikatów.
   * W bazie wisiały wpisy demo w języku angielskim (`/proper-invoice-info/`).
4. **Data w stopce:** `© 2019` – sprawiała wrażenie firmy nieaktywnej.
5. **Brak SEO i meta tagów:** Brak wtyczki SEO, brak `meta description`, brak nagłówka `<h1>` na stronie głównej (zaczynała się od `<h2>`), brak danych strukturalnych `LocalBusiness`.
6. **Mixed Content:** Favicon i logo ładowały się po niezabezpieczonym `http://`.

---

## 3. Gotowy Brief i Pytania na Spotkanie z Klientką

### Moduł 1: Lokalizacja i Model Pracy
1. Jaki jest aktualny adres fizycznego biura dla klientów, a jaki rejestrowy?
2. Czy klienci spotykają się stacjonarnie, czy obsługa jest hybrydowa/online?
3. Czy posiada Pani zweryfikowaną wizytówkę w Google Moja Firma?

### Moduł 2: Grupa Docelowa i Idealny Klient
1. Kto jest wymarzonym klientem: JDG / B2B, małe firmy usługowe, czy Spółki z o.o. na pełnych księgach?
2. Jakich branż lub tematów Pani unika (krypto, fundacje, zagraniczny e-commerce)?

### Moduł 3: Nowoczesność i KSeF
1. Jakiego oprogramowania Pani używa (Saldeo, Scanye, Symfonia, Comarch, inFakt)?
2. Jak przygotowuje Pani klientów na KSeF?

### Moduł 4: Wizerunek Osobisty (Human Branding)
1. Czy posiada Pani profesjonalne zdjęcia biznesowe? (Jeśli nie, warto zaplanować krótką sesję).
2. Czy możemy pokazać skany licencji MF 28310, certyfikaty UG oraz wyróżnienie Orły Rachunkowości?

### Moduł 5: Opinie i Cennik
1. Czy możemy odświeżyć referencje od IMP PAN i prezesa ZUH Sosnowski?
2. Czy preferuje Pani widełki cenowe (np. od 250 zł/mc), czy wycenę indywidualną?

---

## 4. Architektura Nowego Serwisu
Wszystkie 11 podstron zostało w pełni zakodowanych w standardzie HTML5 + Tailwind CSS + Vanilla JS:

1. `index.html` – **Strona Główna (Hub):** Hero section, 3 filary, przegląd oferty, kalkulator wyceny, opinie, FAQ, mobile sticky bar.
2. `o-biurze.html` – **O Biurze:** Pełna biografia p. Katarzyny, wykształcenie na UG, Stowarzyszenie Księgowych, podejście relacyjne.
3. `certyfikaty.html` – **Certyfikaty i Bezpieczeństwo:** Licencja MF 28310, polisa Lloyd's, Orły Rachunkowości, znaczenie licencji po deregulacji.
4. `ksiegowosc-jdg.html` – **Księgowość JDG i B2B:** Ryczałt, KPiR, rozliczenia VAT, ZUS właściciela, procedura zmiany biura.
5. `pelna-ksiegowosc-spolki.html` – **Pełna Księgowość:** Księgi handlowe dla spółek z o.o., bilanse e-KRS, CIT, raportowanie zarządcze.
6. `kadry-i-place.html` – **Kadry i Płace:** Akta osobowe, listy płac, ZUS DRA, PIT-11, poufność płac.
7. `ksef.html` – **Wdrożenie KSeF:** 4 etapy przygotowania firmy, ZAW-FA, integracje programów, procedury offline.
8. `rejestracja-firmy.html` – **Zakładanie Firmy za 0 zł:** Bezpłatna pomoc przy CEIDG/S24 przy umowie na księgowość, dobór kodów PKD.
9. `jak-pracujemy.html` – **Jak Pracujemy:** Cyfrowy obieg faktur, zdjęcia smartfonem, bezpieczeństwo RODO, harmonogram miesiąca.
10. `opinie.html` – **Referencje:** IMP PAN (prof. Kiciński), ZUH Sosnowski, Google Reviews 5.0.
11. `kontakt.html` – **Kontakt i Dojazd:** ul. Piastowska 89 Gdańsk Przymorze, interaktywna mapa Google, dane rejestrowe NIP, formularz.

---

## 5. Identyfikacja Wizualna i Kolorystyka Logo
Oryginalne logo biura zostało pobrane i zapisane w projekcie:
* `assets/img/logo-default.png` – Pełne logo z sygnetem i belką BIURO RACHUNKOWE.
* `assets/img/favicon.png` – Sygnet z literą "T".

### Paleta kolorystyczna:
* **Główny kolor marki (Brand Primary):** `#a82682` (fuksjowa purpura / szlachetna śliwka wyciągnięta z sygnetu logo).
* **Hover / Akcenty ciemniejsze:** `#8e1b6c` / `#701a53`.
* **Jasne tła i karty:** `#fdf2f8` (delikatny pudrowo-fuksjowy odcień).
* **Biznesowy kontrast:** Ciemny grafit / węgiel drzewny (`#1e1b2e` / `slate-900`) i złote akcenty (`#d97706`).

---

## 6. Pakiety Wyceny i Harmonogram Wdrożenia

### Pakiety dla klientki:
* **Pakiet Standard (2 800 – 3 500 PLN netto):** Szybki start, odświeżenie wizerunku, usunięcie błędów, wersja mobilna, uporządkowanie adresu.
* **Pakiet Optimum B2B – Rekomendowany (4 500 – 5 500 PLN netto):** Wszystkie 11 podstron, kalkulator szybkiej wyceny, sekcja KSeF, copywriting branżowy, lokalne SEO Gdańsk, integracja opinii Google.
* **Pakiet Premium (6 500 – 7 900 PLN netto):** Pełny pakiet z blogiem eksperckim, 3 artykułami na start, optymalizacją Google Moja Firma i 3 miesiącami opieki technicznej.

### Harmonogram (3–4 tygodnie):
* **Tydzień 1:** Brief, zebranie materiałów i zdjęć.
* **Tydzień 2:** Akceptacja projektu i dopasowanie treści.
* **Tydzień 3:** Wdrożenie techniczne, kalkulator, wersja mobile.
* **Tydzień 4:** Testy, publikacja pod domeną `biurotrzebiatowska.pl` i szkolenie.

---

## 7. Gotowy Szablon Wiadomości E-mail do Klientki
*(Tekst do skopiowania i wysłania Pani Katarzynie)*

```
Temat: Podsumowanie analizy strony biurotrzebiatowska.pl + propozycja nowego wizerunku biura

Dzień dobry Pani Katarzyno,

Bardzo dziękuję za kontakt i możliwość przyjrzenia się Pani obecnej stronie internetowej. 

Zgodnie z ustaleniami przeprowadziłem szczegółową analizę witryny biurotrzebiatowska.pl. Na wstępie chcę podkreślić, że Pani biuro ma ogromny potencjał i wspaniałe fundamenty: ponad 15 lat doświadczenia, prestiżową licencję Ministerstwa Finansów, ubezpieczenie w Lloyd's oraz to, co najważniejsze – bardzo ciepłe, ludzkie podejście do klienta („księgowość przy kawie”), które w dzisiejszym bezosobowym świecie jest na wagę złota.

Jednocześnie obecna strona powstała około 2018/2019 roku i z perspektywy technologii internetowych mocno się już zestarzała. Poniżej w prosty sposób zebrałem kluczowe wnioski oraz rekomendację dalszych kroków.

Co zauważyłem na obecnej stronie? (Główne wyzwania)
1. Pozostałości po dawnym szablonie: W sekcji referencji widnieją teksty zastępcze z szablonu (Lorem Ipsum) i fikcyjne postacie obok prawdziwych opinii od Dyrektora IMP PAN czy Prezesa Sosnowskiego.
2. Rozbieżne adresy biura: Na stronie głównej, w stopce oraz w zakładce Kontakt podane są trzy różne numery adresowe na Przymorzu, co może mylić klientów i Google Maps.
3. Puste zakładki: Podstrony Doradztwo podatkowe, Poradnik czy Certyfikaty są obecnie puste.
4. Wiek technologii: Strona działa na starym edytorze sprzed 6 lat, ładuje się powoli na telefonach i jest trudna w edycji.

Moja rekomendacja: Dlaczego warto postawić nową stronę od zera?
Zdecydowanie odradzam „łatanie” obecnego szablonu. Przypomina to remontowanie starego auta – wymiana pojedynczych części pochłonie mnóstwo czasu i pieniędzy, a silnik i tak pozostanie przestarzały. Postawienie nowej, lekkiej strony od zera jest bardziej opłacalne i da natychmiastowy efekt świeżości.

Co zyska Pani dzięki nowej witrynie?
- Wizerunek eksperta z ludzką twarzą: Wyeksponujemy Pani licencję MF, wyróżnienie Orły Rachunkowości oraz profesjonalne zdjęcia z motywem przewodnim „porozmawiajmy przy kawie”.
- Nowoczesna oferta i KSeF: Dedykowana sekcja o wdrożeniu KSeF oraz informacja o wygodnym przesyłaniu dokumentów online smartfonem.
- Więcej zapytań od nowych firm: Intuicyjny kalkulator szybkiej wyceny oraz przycisk „Zadzwoń teraz” na telefonach.
- Spokój i prostota: Szybka strona i intuicyjny panel do samodzielnej edycji.

Co przygotowałem na start?
Aby nie rozmawiać tylko teoretycznie, przygotowałem już wstępną, działającą wersję nowej strony, uwzględniającą Pani oficjalne logo i purpurowo-fuksjową kolorystykę.

Chętnie pokażę Pani, jak to wygląda na żywo. Czy moglibyśmy zdzwonić się na krótką, 15-minutową rozmowę telefoniczną w najbliższym tygodniu?

Z wyrazami szacunku,
[Twoje Imię i Nazwisko]
[Twój Telefon]
```

---

## 8. Instrukcja Pracy na Drugim Komputerze
Po sklonowaniu repozytorium na nowym urządzeniu:
```bash
git clone <URL_REPOZYTORIUM>
cd biuro-trzebiatowska
```
* **Otwarcie strony:** Wystarczy dwuklik w plik `index.html` lub uruchomienie dowolnego serwera lokalnego (`python -m http.server 8000` lub `npx serve`).
* Wszystkie zależności (Tailwind CDN, Google Fonts, ikony, lokalne grafiki) działają od razu bez konieczności instalowania `npm install`.
