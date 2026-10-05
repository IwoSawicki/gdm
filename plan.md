# Plan: Nachbau GDM Startseite v4

Grundlage: `design/GDM_Startseite_v4.dc.html` (Prototyp) und `CLAUDE.md`
(Stack und Regeln). Ziel ist ein 1:1-Nachbau als statische Astro-Seite,
der von Anfang an aus wiederverwendbaren Blöcken besteht.

---

## 1. Inventur: was da ist und was fehlt

**Vorhanden**
- `design/GDM_Startseite_v4.dc.html`: Prototyp der Startseite (v4)
- `design/support.js`, `design/image-slot.js`: Runtime des Prototyps,
  wird **nicht** übernommen

**Fehlt (bitte nachliefern)**

| Datei / Info | Wo im Entwurf | Ohne sie |
|---|---|---|
| `design/README.md` (Handoff-Dokument) | — | Es gilt allein der Prototyp. Breakpoint, Animationen und Tokens leite ich aus dem Code ab. |
| `assets/gdm-logo-light.png` | Header auf dem Hero (hell auf dunkel) | Platzhalter, Header nicht abnahmefähig |
| `assets/gdm-logo-dark.png` | Header nach dem Scrollen, Footer | wie oben |
| `assets/taha-ali-portrait.png` | Bento, Anfrage-Karte, Footer | Platzhalter |
| `assets/google-g.svg` | Bewertungskarten | Kann ich als offizielles „G" nachbauen, lieber aber die Datei aus dem Entwurf |
| 12 Fotos (im Entwurf leere Bildslots mit Motivbeschreibung) | 4× Hero-Slider, 2× Geschäftsbereiche, 2× Bento, 4× Referenzen | Neutrale Flächen in Entwurfsgröße, bis die Fotos da sind |

Am liebsten Logos als **SVG**. Bei PNG brauche ich sie mindestens in 2× Höhe
(Header 52 px, Footer 64 px, also ≥ 128 px hoch).

---

## 2. Aufbau der Seite (Reihenfolge laut Prototyp)

| # | Sektion | Block | Hintergrund | Interaktion |
|---|---|---|---|---|
| — | Header | `Header` | transparent → weiß ab 40 px Scroll | blendet beim Runterscrollen aus (> 400 px), Lesefortschritt als goldene Linie, Burger-Menü unter 1080 px |
| — | Hero-Slider | `HeroSlider` | Foto + Verlauf | 4 Slides, 7 s Autoplay, Fortschrittsbalken, Pause, Pfeile, Wischen, Parallaxe 0.25, Zeilen fahren ein |
| — | Laufband | `Laufband` | weiß | Endlos-Marquee, 50 px/s |
| — | Manifest „Unser Anspruch" | `Manifest` | weiß | Wörter färben sich beim Scrollen ein, 4 Zielgruppen-Icons |
| 01 | Geschäftsbereiche | `Bereiche` (2 Karten) | `#F5F3EE` | — |
| 02 | Leistungen | `Leistungsliste` | dunkel | Zeile füllt sich beim Hover von unten, Pfeil dreht sich 45° (nur Desktop), Projekt-Pills |
| 03 | Warum GDM | `Bento` | weiß | 3-spaltiges Raster ab 1080 px, darunter einspaltig |
| 04 | Ablauf | `Schritte` (`<ol>`) | weiß | — |
| 05 | Referenzen | `Karussell` | `#F5F3EE` | horizontal scrollend mit Snap, Pfeile |
| 06 | Einsatzgebiet | `Einsatzgebiet` | dunkel | Orts-Tabelle (Desktop) / Liste (Mobil) |
| 07 | Kundenstimmen | `Karussell` (gleiche Mechanik wie 05) | `#F5F3EE` | wie 05 |
| 08 | FAQ | `Faq` → `Akkordeon` | weiß | eine Frage offen, erste standardmäßig offen |
| — | Anfrage | `Anfrage` → `Formular` | dunkel | Leistung wird von CTAs vorbelegt, Danke-Zustand |
| — | Footer | `Footer` | `#F5F3EE` | — |
| — | Mobile Leiste | `MobileLeiste` | weiß, fixiert | nur unter 1080 px |

Dazu global: Einblend-Animation `data-reveal` (IntersectionObserver),
alles aus bei `prefers-reduced-motion`.

---

## 3. Technische Umsetzung (Schritte nach deinem Go)

1. **Projekt aufsetzen**: Astro + Tailwind v4 + TypeScript strict +
   Sitemap, `astro.config.mjs` wie in `CLAUDE.md`, `Dockerfile`,
   `deploy/nginx.conf` (inkl. `noindex` für `dev.`), `.dockerignore`.
2. **Fonts selbst hosten**: Geist und Geist Mono (OFL) als woff2 in
   `public/fonts/`. Material Symbols **auf die 20 genutzten Icons
   reduziert** als eigene woff2 (siehe Frage 4). Kein Request an Google.
3. **Tokens extrahieren**, *bevor* Komponenten entstehen: alle Farben,
   Schriftgrößen, Clamp-Kurven, Radien, Abstände, Easings in `@theme`
   (`global.css`), dokumentiert in `docs/DESIGN-SYSTEM.md`.
   Erste Sichtung:
   - Farben: `#1A1A19` (ink), `#C9A965` (gold), `#9A7329` / `#8C6A28`
     (gold dunkel, fast gleich → Rückfrage), `#F5F3EE`, `#EFECE5`,
     `#EFECE6`, `#F1EEE7`, `#F8F7F3`, `#E7E3DA`, `#DDD8CE`, `#D9D5CC`,
     `#D4CFC4`, `#BDB9B0`, `#A9A59C`, `#9C988F`, `#8A867E`, `#6A665E`,
     `#57534C`, `#3C3A36`, `#383734`, `#3A3936`, `#3E3D39`, `#55534E`,
     `#BD9C56`, `#EDEAE3`, `#EAE6DE`, `#ECE9E2`
   - Ein einziger Breakpoint: **1080 px** (`--breakpoint-nav`)
   - Contentbreite 1440 px, Seitenrand `clamp(20px,4vw,56px)`,
     Sektionsabstand `clamp(80px,10vw,144px)`
   - Easing `cubic-bezier(.2,.8,.2,1)` durchgehend
4. **`/styleguide`** (intern, noindex) mit allen Tokens und Blöcken.
5. **Basiskomponenten** (`ui/`): Button (Varianten: dunkel, hell, gold,
   Kontur; mit/ohne Pfeil-Kachel), Eyebrow (Mono-Label mit Nummer),
   Icon, Logo, Pill, Sektionskopf (Eyebrow + H2 + Lead).
6. **Blöcke** in der Reihenfolge oben, Texte aus `src/data/startseite.ts`,
   Eckdaten aus `src/data/firma.ts`, Navigation und CTA-Ziel aus
   `src/data/navigation.ts`. Leistungen **eine** Liste, aus der Menü,
   Footer, Laufband, Formular-Optionen abgeleitet werden, wo es inhaltlich
   passt.
7. **Interaktionen** als Vanilla-`<script>` je Block, über `data-*`.
   Die React-artige Zustandslogik des Prototyps wird zu CSS-Klassen und
   Attributen (`aria-expanded`, `data-aktiv`), keine Inline-Styles aus JS
   außer für Werte, die sich pro Frame ändern (Marquee, Parallaxe,
   Fortschrittsbalken).
8. **Barrierefreiheit ergänzen**: Fokus-Stile, Burger-Menü mit
   `aria-expanded`/`inert`/Escape, FAQ als `<button>` in `<h3>`,
   Slider mit `aria-live`, Pausenknopf auch auf Mobil erreichbar.
9. **SEO**: Title, Description, OG, `LocalBusiness`-JSON-LD aus
   `firma.ts`, `FAQPage`-JSON-LD, Sitemap, robots.txt.
10. **Messen statt schätzen**: Prototyp und Nachbau per Playwright auf
    1440 / 820 / 390 / 320 px nebeneinander vergleichen, seitliches
    Scrollen prüfen, Abweichungen in `docs/ABWEICHUNGEN.md`.
11. Impressum, Datenschutz, 404 als Gerüst (Texte von euch).

---

## 4. Was mir am Entwurf aufgefallen ist (kommt in `ABWEICHUNGEN.md`)

- **Platzhalter im Entwurf**: Antwortzeit „[X] Werktage" (2×),
  Reklamation „[X] Stunden", Vertragslaufzeit „[X] Monate / [X] Wochen",
  Versicherung „[X] Mio. €", **alle 4 Kundenstimmen** und **alle 4
  Referenzen** (Ort, Objekt). Laut Regel: nichts erfinden.
- **Section-Nummern**: im Code-Kommentar heißt Referenzen „04", sichtbar
  ist „05". Ich übernehme die sichtbaren Nummern 01–08.
- **Nav-Link „Leistungen"** springt zu 02 (`#leistungen`), die Sektion 01
  „Geschäftsbereiche" (`#bereiche`) hat keinen Menüpunkt. Ist das so
  gewollt?
- **Tote Links**: Datenschutz (Formular + Footer), Impressum,
  Cookie-Einstellungen, Karriere zeigen auf `#`. Werden echte Seiten bzw.
  `nochNicht`.
- **Footer-Leistungslinks** zeigen alle auf `#leistungen`. Später
  sinnvollerweise auf eigene Leistungsseiten (SEO); bis dahin Anker.
- **H1 ist visuell versteckt** (die großen Hero-Zeilen sind `<p>`). Das
  übernehme ich, weil die Slide-Texte wechseln. Ok für SEO.
- **Schrift-Stack** `'Geist', system-ui, sans-serif`: übernehme ich exakt
  (CLAUDE.md Fallgrube 3).
- **Box-Sizing**: Der Prototyp setzt global `border-box`, die
  content-box-Fallgrube aus dem Stolz-Projekt entfällt hier.
- **Gold-Töne** `#9A7329` (Icons) und `#8C6A28` (Footer-Hover) liegen dicht
  beieinander: getrennt lassen oder zusammenlegen?
- **Formular** hat keinen Versand (nur Danke-Zustand) und keinen
  Honeypot. Fläche, Turnus und Start sind optional, Leistung auch.

---

## 5. Fragen vor dem Start

1. **Fehlende Dateien**: Hast du die vollständige ZIP (mit `README.md` und
   `assets/`)? Hier sind nur die `.dc.html` und die zwei JS-Dateien
   angekommen.
2. **Domain**: `service-gdm.de` (aus der E-Mail-Adresse)? Gibt es dort
   einen alten Auftritt → dann Relaunch mit 301-Weiterleitungen.
3. **Platzhalter** (Kundenstimmen, Referenzen, [X]-Werte): bis die echten
   Inhalte da sind **weglassen** (meine Empfehlung für die Live-Seite) oder
   als sichtbare Platzhalter auf `dev` stehen lassen?
4. **Icons**: Material Symbols als selbst gehostete, auf ~20 Icons
   reduzierte Schriftdatei (pixelgleich zum Entwurf) – oder lieber als
   inline-SVG? Empfehlung: reduzierte Schrift.
5. **Formular-Versand**: Web3Forms wie bei Stolz? An welche Adresse?
6. **Analytics**: Umami (cookielos) wie bei Stolz, GA/Clarity hinter
   Cookie-Banner – oder vorerst nichts?
7. **Freigabe**: Wer gibt Änderungen frei (`[Ansprechpartner]` in
   CLAUDE.md)? Du?

---

## 6. Branches und Deployment

- `main` = Produktion, `dev` = Staging (`dev.[domain]`)
- Initiales Setup liegt auf beiden Branches (gleicher Commit).
- Ab jetzt laut `CLAUDE.md`: Arbeit auf `dev`, ansehen auf Staging, dann
  Fast-Forward nach `main` nur nach deiner Freigabe.
