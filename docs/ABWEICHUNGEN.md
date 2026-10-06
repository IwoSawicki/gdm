# Abweichungen vom Entwurf

Alles, was bewusst anders ist als in `design/GDM_Startseite_v4.dc.html`.
Offene Entscheidungen tragen **[Rückfrage]**, bis Iwo (Stolz Marketing)
entschieden hat; danach **Geklärt:** dazuschreiben.

Grundlage ist allein der Prototyp — ein Handoff-Dokument (`design/README.md`)
gibt es nicht (Absprache 05.10.2026).

---

## Inhalte und Platzhalter

### 1. Platzhalter des Entwurfs bleiben sichtbar — [Rückfrage] (Kundenstimmen: Geklärt 06.10.2026)
- **Vorlage:** „[X] Werktage" (Anfrage-Lead, Danke-Text), „[X] Stunden",
  „[X] Monaten / [X] Wochen", „[X] Mio. €" (FAQ), alle 4 Referenzen
  („[Ort]", „[Objekt, z. B. …]"), alle 4 Kundenstimmen inkl. Initialen „[–]".
- **Umgesetzt:** 1:1 übernommen, damit auf Staging sichtbar ist, was fehlt.
- **Grund:** Nichts erfinden. Vor dem Livegang müssen echte Inhalte her oder
  die Stellen raus (Referenzen/Kundenstimmen ggf. ganz ausblenden).

### 2. Fotos fehlen — sichtbare Motiv-Platzhalter
- **Vorlage:** 12 leere Bildslots mit Motivbeschreibung.
- **Umgesetzt:** Neutrale Fläche mit der Motivbeschreibung (`Bildflaeche`).
  Sobald ein Foto da ist: Datei nach `src/assets/`, an der Stelle `bild`
  übergeben — Größen (`widths`/`sizes`) sind bereits gesetzt.
- **05.10.2026, Wunsch Iwo:** Geschäftsbereiche (01) mit gelieferten Fotos
  statt der Motive aus dem Entwurf: Gebäudereinigung = Edelstahlküche
  (`gebaeudereinigung-kueche.jpg`), Baureinigung = Fensterreinigung im
  Neubau (`baureinigung-fensterreinigung.jpg`). Die Originale sind nur
  1000 px breit; auf Retina-Desktops (Darstellung bis 690 px) wären
  1380 px ideal — bei Gelegenheit größere Fassungen nachliefern.
  Alt-Texte als Vorschlag zur Freigabe in `src/data/startseite.ts`.
- **05.10.2026, Wunsch Iwo:** Bilder der alten Website (`bildarchiv/alte-website/`)
  eingebaut. Hero: Team an Fensterfront (`newbild4`), Flur mit
  Einscheibenmaschine (`hausmeister2`), Fassaden-Hochdruckreinigung
  (`fassade1`), Rohbau mit Bauschutt (`bau1`). Bento A: Fensterrahmen
  (`newbilddown`), Bento D: Checkliste (`Slider2`). Referenzen bleiben ohne
  Foto — dort gehören echte Fotos der betreuten Objekte hin. **[Rückfrage]**
  Lizenzen der Fotos klären (siehe `bildarchiv/README.md`). Alle Originale
  nur 1000 px breit: im Hero (bis 1440 px Darstellung) leicht weich.

### 3. Meta-Texte ergänzt — [Rückfrage]
- **Vorlage:** keine.
- **Umgesetzt (Startseite):**
  - Title: „Gebäudereinigung Rhein-Neckar | GDM aus Lorsch" (46 Zeichen)
  - Description: „Gebäudereinigung und Gebäudeservice in der Rhein-Neckar-Region:
    Unterhalts-, Büro- und Glasreinigung mit festem Team. Baureinigung
    bundesweit." (144 Zeichen)
- **Grund:** aus H1 und Lead abgeleitet, zur Freigabe.

### 4. Impressum und Datenschutz neu — [Rückfrage]
- **Vorlage:** Links auf `#`.
- **Umgesetzt:** Seiten `/impressum` und `/datenschutz` (Entwurf). Offene
  Angaben (USt-IdNr., Hoster, Web3Forms-Anbieter, Umami-Serverstandort,
  Stand) sind gelb markiert. Datenschutz vor Livegang rechtlich prüfen.

---

## Struktur und Links

### 5. „Cookie-Einstellungen" im Footer — Geklärt 06.10.2026
- **Vorlage:** Link „Cookie-Einstellungen" (auf `#`).
- **Umgesetzt:** weggelassen.
- **Grund:** Es gab keine Cookies und kein Banner (Umami ist cookielos).
- **Geklärt:** Mit Google Analytics (06.10.2026) ist der Link wieder da und
  öffnet das Einwilligungs-Banner (`CookieBanner.astro`, eigene Gestaltung
  mit den Tokens — im Entwurf nicht vorhanden).

### 6. „Karriere" ausgegraut
- **Vorlage:** Link auf `#`.
- **Umgesetzt:** `nochNicht: true` in `navigation.ts` → grau, nicht klickbar.

### 7. Footer-Leistungslinks zeigen auf `/#leistungen`
- Wie im Entwurf. Die künftigen Leistungsseiten (`/leistungen/<slug>`) sind
  in `src/data/leistungen.ts` schon angelegt; Link umstellen, sobald die
  Seite existiert.

### 8. Sektion 01 ohne Menüpunkt — Geklärt
- **Vorlage:** Menüpunkt „Leistungen" springt zu 02, „Baureinigung" zur
  zweiten Karte in 01; 01 selbst hat keinen eigenen Menüpunkt.
- **Umgesetzt:** 1:1.
- **Geklärt 05.10.2026 (Wunsch Iwo):** Menü bleibt wie im Entwurf.

### 9. Links auf allen Seiten mit Startseiten-Präfix
- **Vorlage:** `#leistungen` usw.
- **Umgesetzt:** `/#leistungen` usw., damit Kopfzeile und Footer auch auf
  Impressum, Datenschutz und 404 funktionieren.

### 10. CTAs als Links statt Buttons
- **Vorlage:** „Angebot anfordern", „… anfragen" sind `<button>` mit JS-Scroll.
- **Umgesetzt:** `<a href="/#anfrage">` (funktioniert ohne JS und auf
  Unterseiten). Die Vorauswahl im Feld „Leistung" setzt `data-vorauswahl`.
  Damit die Maße gleich bleiben, tragen diese Links `leading-normal` wie
  ein `<button>` im Browser.

---

## Gestaltung

### 11. Einwilligungs-Checkbox: Text als ein Absatz — [Rückfrage]
- **Vorlage:** Das `<label>` ist `display:flex`; Text, Link und Punkt werden
  dadurch drei nebeneinanderstehende Spalten („… Hinweise in der" |
  „Datenschutzerklärung" | „.").
- **Umgesetzt:** Text in einem `<span>`, der Link fließt im Satz.
- **Grund:** sieht im Entwurf wie ein Versehen aus; auf dem Handy wird der
  Block im Entwurf dadurch auch ~100 px höher.

### 12. Sterne gefüllt
- **Vorlage:** `font-variation-settings:'FILL' 1` — gefüllte Sterne. In
  manchen Renderings des Prototyps erscheinen sie als Kontur (Schrift ohne
  FILL-Achse geladen).
- **Umgesetzt:** gefüllt, wie im Code vorgesehen.

### 13. Bildplatzhalter mit 3:2-Mindesthöhe in Bento A und D
- **Vorlage:** Der leere Bildslot hat `aspect-ratio: 3/2` und prägt so auf
  dem Handy die Höhe der Bento-Karten.
- **Umgesetzt:** unsichtbarer 3:2-Abstandhalter in diesen Karten, damit die
  Höhen identisch sind (gemessen: 491,5 px bei 320 px Breite in beiden).

### 14. Referenzkarten auf 320 px nicht breiter als `min(84vw, 600px)`
- **Vorlage:** Auf 320 px drückt der leere Bildslot (240 px hoch × 3:2) die
  Karte auf 360 px Breite.
- **Umgesetzt:** Karte bleibt 268,8 px (84vw) — so, wie sie mit echtem Foto
  auch im Entwurf wäre.

### 14a. Hero: zusätzlicher Verlauf am oberen Rand
- **Vorlage:** nur der Verlauf ink 55 % → 45 % → 90 %.
- **Umgesetzt:** zusätzlich 200 px Verlauf von ink 50 % nach transparent
  am oberen Rand.
- **Grund:** Mit den echten Fotos (Slide 1: weiße Jalousien) war das helle
  Logo in der transparenten Kopfzeile auf dem Handy kaum lesbar.

### 15. Leistungsliste: Hover per CSS, auch bei Tastaturfokus
- **Vorlage:** Hover-Zustand per JS (`onMouseEnter`).
- **Umgesetzt:** `:hover` und `:focus-visible`, gleiche Dauern und Easings.

---

## Ergänzt (im Entwurf nicht vorgesehen)

### 16. Barrierefreiheit
- Sichtbarer Fokus (`:focus-visible`, Gold, 3 px Abstand).
- Burger-Menü mit `aria-expanded`/`aria-controls`, Escape schließt, schließt
  ab 1080 px automatisch.
- FAQ: Frage als `<button>` in `<h3>`, Antwort mit `role="region"`.
- Hero als Karussell ausgezeichnet, verdeckte Slides `aria-hidden` und ihre
  Links nicht per Tab erreichbar.
- Kundenstimmen als `<figure>`/`<blockquote>`/`<figcaption>`, Schritte als
  `<ol>`, Footer-Spalten als `<nav aria-label>`.
- Zweite Laufband-Hälfte `aria-hidden`.
- `prefers-reduced-motion`: keine Einblendungen, kein Autoplay, keine
  Parallaxe, kein Laufband, Manifest sofort dunkel (wie im Entwurf), dazu
  global verkürzte Übergänge.

### 17. Formular: Fehlermeldung und Spam-Schutz
- Bei fehlgeschlagenem Versand erscheint ein Hinweis mit Telefonnummer
  (Gestaltung: 15 px, Ink). Honeypot `botcheck` für Web3Forms.
- Pflichtfelder wie im Entwurf: Ort/PLZ, Name, Telefon, E-Mail, Einwilligung.

### 18. Laufband pausiert außerhalb des Sichtbereichs
- Spart Rechenzeit; sichtbar kein Unterschied.

---

## Leistungsseiten (nicht im Entwurf)

### 19. Gestaltung der Leistungsseiten — [Rückfrage]
- **Vorlage:** Es gibt nur die Startseite.
- **Umgesetzt:** `/bueroreinigung` als Vorlage aller Leistungsseiten, gebaut
  ausschließlich aus Tokens und Bausteinen der Startseite (Hero-Look,
  Sektionsköpfe, Karten, FAQ, Ablauf, Einsatzgebiet, Anfrage). Neu sind nur
  Kurzformular im Hero, Vergleich „Kennen Sie das?", Checklisten- und
  Textkarten. Aufbau und Begründung: `docs/SEITENSTRUKTUR.md`.

### 20. Texte der Büroreinigung sind ein Entwurf — [Rückfrage]
- Aussagen nur aus dem Entwurf (fester Turnus, festes Team, Vertretung,
  Kontrollen mit Protokoll, Leistungsverzeichnis, fester Monatspreis,
  „abgestimmt auf Ihre Betriebszeiten"). Neu formuliert und zu prüfen:
  Leistungsumfang (Checklisten), Turnus-Empfehlungen, Zielgruppen,
  „Kennen Sie das?", FAQ „Wann wird gereinigt?". Platzhalter [X] wie auf
  der Startseite. Foto Hero: `hausmeisterdienste1` der alten Seite.

### 21. Anfrage-CTAs zeigen auf das Formular der eigenen Seite
- `#anfrage` statt `/#anfrage`; Seiten ohne Formular (Rechtstexte, 404)
  verlinken weiter auf die Startseite (`BaseLayout mitAnfrage={false}`).

### 22. Sechs weitere Leistungsseiten — Texte als Entwurf — [Rückfrage]
- `/unterhaltsreinigung`, `/treppenhausreinigung`, `/praxisreinigung`,
  `/glasreinigung`, `/hausmeisterservice`, `/winterdienst` nach der Vorlage
  von `/bueroreinigung`. Gemeinsame Aussagen (Versprechen, Standard-FAQ,
  Ablauf) stehen einmal in `src/data/leistungen/gemeinsam.ts`.
- Bitte von GDM bestätigen lassen, ob angeboten:
  - Treppenhaus: Mülltonnen bereitstellen, Fahrradraum, Aufzug.
  - Praxis: Arbeit nach Hygieneplan der Praxis, Zwischenreinigung mittags.
  - Glas: Glasfassaden/Glasdächer „nach Erreichbarkeit", Jalousien —
    **bis zu welcher Höhe / mit welchen Hilfsmitteln?** (FAQ dazu fehlt
    bewusst, bis die Antwort da ist).
  - Hausmeister: Zählerstände ablesen, Schlüssel- und Terminbegleitung,
    Koordination von Handwerkern.
  - Winterdienst: **Abrechnung als Saisonpauschale oder nach Einsätzen?**
    Welche Zeiten werden zugesagt? (Bewusst keine Uhrzeit genannt.)
- Antwort im FAQ „Urlaub/Krankheit": „Die Arbeit findet wie vereinbart
  statt" statt „Die Reinigung …" (Entwurf), weil der Satz auch für
  Hausmeister und Winterdienst gilt.

### 23. Treppenhausreinigung als neue Leistung im Katalog
- **Vorlage:** Footer-Spalte „Gebäudeservice" mit 7 Links, Formularfeld
  „Leistung" ohne Treppenhausreinigung.
- **Umgesetzt:** Footer listet 8 Leistungen (aus dem Katalog abgeleitet),
  Formular hat die Option „Treppenhausreinigung". Der Footer wird dadurch
  auf dem Handy 35 px höher.
- **Grund:** Seite für Hausverwaltungen (Retainer), siehe SEITENSTRUKTUR.md.

### 24. Alte Adressen und Schrägstrich am Ende
- nginx leitet `/hausmeisterdienste/` → `/hausmeisterservice` und
  `/winterdienste/` → `/winterdienst` (301). Alle Adressen mit Schrägstrich
  am Ende (z. B. `/praxisreinigung/` der alten Seite) → 301 auf die Fassung
  ohne Schrägstrich, damit es pro Inhalt nur eine Adresse gibt.

### 25. Übersichtsseiten Gebäudereinigung und Baureinigung — Texte als Entwurf — [Rückfrage]
- `/gebaeudereinigung`: Landingpage der allgemeinen Anzeigen, Kacheln auf alle
  Leistungsseiten; Hotelreinigung, Grünanlagenpflege, Waschraumlösungen als
  „Außerdem" (führen zur Anfrage).
- `/baureinigung` (alte Adresse bleibt): Bauphasen, Sonderreinigung,
  Einsatzgebiet Deutschland & Österreich. Bitte bestätigen:
  - „Gemeinsame Abnahme/Begehung" zum Abschluss — so üblich bei GDM?
  - Angebot „je Bauphase oder für das ganze Projekt".
  - Entrümpelung & Montage weiterhin im Angebot? (stehen im Entwurf als
    projektbezogene Leistung)
- Das Anfrageformular unten ist auf allen Seiten gleich (mit Feld „Turnus",
  Option „Einmalig"); für Baureinigung später ggf. eigene Felder
  (Bauvorhaben, Bauphase, Termin).

### 26. Links auf die neuen Übersichten
- Menüpunkt „Baureinigung" führt jetzt auf `/baureinigung` statt auf die
  Karte der Startseite (`/#baureinigung`); Beschriftung unverändert.
- Footer „Einsatzgebiet": „Gebäudeservice Rhein-Neckar" → `/gebaeudereinigung`,
  „Baureinigung Deutschland/Österreich" → `/baureinigung`.
- Leistungen ohne eigene Seite verlinken im Footer auf die Übersicht ihres
  Bereichs statt auf `/#leistungen`.
- Brotkrumen der Leistungsseiten: Startseite / Gebäudereinigung / Leistung.

### 27. Title der Startseite geändert — [Rückfrage]
- **Vorher:** „Gebäudereinigung Rhein-Neckar | GDM aus Lorsch" (mein Vorschlag aus #3).
- **Jetzt:** „GDM – Gebäudereinigung & Baureinigung aus Lorsch".
- **Grund:** „Gebäudereinigung Rhein-Neckar" ist jetzt das Keyword von
  `/gebaeudereinigung`; zwei Seiten sollen nicht auf dasselbe zielen. Die
  Startseite trägt Marke + beide Bereiche (wie im Report).

### 28. Echte Kundenstimmen statt Platzhalter
- **06.10.2026, geliefert von Iwo:** 10 Bewertungen (8 Google, 2 MyHammer)
  in `src/data/bewertungen.ts`, wörtlich. Namen als „Vorname I.", Jahr statt
  „vor X Monaten". Nicht übernommen: abgeschnittene, englische und
  textlose Bewertungen sowie eine mit „dauerte länger als gedacht".
- Startseite 07 wie im Entwurf (Zeile unter dem Namen: „Google-Bewertung ·
  Jahr" statt Rolle). Zusätzlich auf allen Leistungs- und Übersichtsseiten
  (6 Bewertungen, passende zuerst). Kein Review-Schema (Google wertet
  selbst veröffentlichte Bewertungen nicht als Sterne aus).

### 29. Referenzen (05) ausgeblendet bis echte Inhalte da sind — [Rückfrage]
- **Vorlage:** Sektion 05 mit vier Platzhalter-Karten.
- **Umgesetzt:** ausgeblendet (`mitReferenzen = false` in
  `src/data/startseite.ts`); Menüpunkt „Referenzen" und der Button in 01
  springen zu den Kundenstimmen; Nummern rücken auf (05 Einsatzgebiet,
  06 Kundenstimmen, 07 FAQ).
- **Grund:** Keine Platzhalter-Kacheln auf der Live-Seite (CLAUDE.md).

### 30. Performance: Fortschrittsbalken per transform, Slide-Fotos nachrangig
- Balken im Hero animieren `transform: scaleX()` statt `width` (optisch
  gleich, kein Layout pro Frame); Fotos der Slides 2–4 mit
  `fetchpriority="low"`. Lighthouse Mobil Startseite 91 → 99.
- Screenreader-Name der Slide-Reiter enthält jetzt die sichtbare Nummer
  („01 Gebäudereinigung").
- Lighthouse meldet geringen Kontrast der grauen Manifest-Wörter vor dem
  Einfärben — das ist der Effekt aus dem Entwurf, bewusst so belassen.

## Was ausdrücklich *nicht* abweicht
- Alle Texte, Farben, Schriftgrößen, Clamp-Kurven, Abstände und Radien.
- Schrift-Stack `'Geist', system-ui, sans-serif` exakt wie im Entwurf.
- Box-Sizing: Der Entwurf setzt selbst `*{box-sizing:border-box}` — kein
  `box-content` nötig.
- Zeilenhöhen: Basis `normal` (html), 1.55 ab `body` (im Entwurf am
  Seiten-Wrapper); Formularelemente `normal`.
- Breakpoint 1080 px (im Entwurf per JS, hier als `nav:`-Variante).
- Animationen: Dauern, Verzögerungen, Easings (`cubic-bezier(.2,.8,.2,1)`,
  Kopfzeile `cubic-bezier(.2,.7,.2,1)`), Slider 7 s, Laufband 50 px/s,
  Parallaxe 0,25, Einblendung 0,8 s / 32 px (mobil 0,38 s / 14 px).
- Gemessen per Playwright (1440/820/390 px): Sektionsanfänge auf ±2 px
  identisch mit dem Prototyp.

## Fast gleiche Werte (nicht zusammengelegt) — [Rückfrage]
| Werte | Verwendung |
|---|---|
| `#9A7329` / `#8C6A28` | Zielgruppen-Icons / Link-Hover Footer |
| `#EFECE5` / `#EFECE6` | Bento-Karten / Trennlinien Mobilmenü |
| `#EDEAE3` / `#ECE9E2` / `#EAE6DE` | Hover Hero-Button / Linie Kundenstimme / Footer-Schriftzug |
| `#3A3936` / `#3E3D39` | Linien auf Dunkel / Pill-Kontur |
Zusammenlegen wäre unsichtbar und vereinfacht die Palette — Freigabe?
