# Abweichungen vom Entwurf

Alles, was bewusst anders ist als in `design/GDM_Startseite_v4.dc.html`.
Offene Entscheidungen tragen **[Rückfrage]**, bis Iwo (Stolz Marketing)
entschieden hat; danach **Geklärt:** dazuschreiben.

Grundlage ist allein der Prototyp — ein Handoff-Dokument (`design/README.md`)
gibt es nicht (Absprache 05.10.2026).

---

## Inhalte und Platzhalter

### 1. Platzhalter des Entwurfs bleiben sichtbar — [Rückfrage]
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

### 5. „Cookie-Einstellungen" im Footer entfernt — [Rückfrage]
- **Vorlage:** Link „Cookie-Einstellungen" (auf `#`).
- **Umgesetzt:** weggelassen.
- **Grund:** Es gibt keine Cookies und kein Banner (Umami ist cookielos).
  Kommt mit Google Analytics zurück und öffnet dann das Banner.

### 6. „Karriere" ausgegraut
- **Vorlage:** Link auf `#`.
- **Umgesetzt:** `nochNicht: true` in `navigation.ts` → grau, nicht klickbar.

### 7. Footer-Leistungslinks zeigen auf `/#leistungen`
- Wie im Entwurf. Die künftigen Leistungsseiten (`/leistungen/<slug>`) sind
  in `src/data/leistungen.ts` schon angelegt; Link umstellen, sobald die
  Seite existiert.

### 8. Sektion 01 ohne Menüpunkt — [Rückfrage]
- **Vorlage:** Menüpunkt „Leistungen" springt zu 02, „Baureinigung" zur
  zweiten Karte in 01; 01 selbst hat keinen eigenen Menüpunkt.
- **Umgesetzt:** 1:1. Bitte bestätigen, dass das so gewollt ist.

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
