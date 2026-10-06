# Blöcke und Bauteile

Jeder neue Block kommt hierher **und** auf `/styleguide`.

## `components/ui/` — Atome
| Bauteil | Props | Einsatz |
|---|---|---|
| `Icon` | `name: IconName`, `gefuellt?` | überall; Schrift enthält nur die Icons aus `IconName` |
| `Eyebrow` | `variante: 'hell' \| 'dunkel'` | Mono-Label über H2 |
| `Button` | `variante: 'dunkel' \| 'hell' \| 'kontur' \| 'gold'`, `groesse: 'm' \| 'l' \| 'xl' \| 'leiste'`, `href?`, `vorauswahl?` | Karten-CTAs, Ablauf, 404 |
| `KachelButton` | `variante: 'hero' \| 'dunkel' \| 'gold'`, `href?`, `type?`, `vorauswahl?` | CTA mit Pfeilkachel: Hero, Bento, Formular |
| `Bildflaeche` | `bild?`, `alt?`, `motiv`, `sizes`, `widths`, `ausschnitt?`, `prioritaet?` | füllt positionierten Container; ohne `bild` Motiv-Platzhalter |
| `TelefonButton` | `tabindex?` | Telefon-CTA mit Goldkachel (Hero, Leistungs-Hero) |
| `Logo` | `variante: 'hell' \| 'dunkel'`, `hoehe: 52 \| 64` | Kopfzeile, Footer |

## `components/blocks/` — wiederverwendbar
| Block | Props | Einsatz |
|---|---|---|
| `SektionsKopf` | `eyebrow`, `titel`, `lead?`, `variante`, `abstand: 'standard' \| 'gross'`, `ausgleichen?`, Slot `rechts` | Kopf jeder Sektion |
| `Karussell` | `id?`, `spurId`, `eyebrow`, `titel`, `abstand: 'referenzen' \| 'stimmen'`, `label`, Slot = Karten | Referenzen, Kundenstimmen |
| `GoogleBewertung` | `variante: 'bento' \| 'karussell'` | Bento (03), Kundenstimmen (07); Werte aus `firma.ts` |
| `Akkordeon` | `eintraege`, `id`, `offen?` | FAQ |
| `Formular` | `felder: Feld[]`, `betreff`, `absendenText`, `vorauswahlFeld?`, `datenschutzHref`, Slot `danke` | Anfrage; Web3Forms, Honeypot, Fehler, Danke |
| `Laufband` | `eintraege` | Startseite unter dem Hero |
| `Schritte` | `id?`, `eyebrow`, `titel`, `cta?`, `schritte` | Ablauf (Startseite 04, Leistungsseiten) |
| `Einsatzgebiet` | `eyebrow`, `text?` | Startseite 06, Leistungsseiten; Orte aus `data/einsatzgebiet.ts` |
| `Faq` | `id?`, `eyebrow`, `titel`, `hinweis`, `eintraege` | Startseite 08, Leistungsseiten; JSON-LD über `faqJsonLd()` |
| `Anfrage` | `vorauswahl?` | Abschluss jeder Seite (`#anfrage`) |
| `AnsprechpartnerKarte` | `satz`, `zusatz` | Bento 03, „Warum GDM" der Leistungsseiten |
| `LeistungsHero` | `hero`, `pfad`, `aktuell`, `formularLeistung` | Leistungsseiten: H1, CTAs, Kurzformular, Vertrauensleiste |
| `Vergleich` | `vergleich` | Leistungsseiten: „Kennen Sie das?" |
| `Leistungsumfang` | `umfang` | Leistungsseiten: Checklisten-Karten |
| `KartenRaster` | `eyebrow`, `titel`, `lead?`, `karten`, `variante: 'hell' \| 'sand' \| 'dunkel'`, `nummeriert?` | Turnus, Zielgruppen, Kosten |
| `Versprechen` | `versprechen` | Leistungsseiten: Warum GDM + Bewertung |
| `LeistungsKacheln` | `id?`, `eyebrow`, `titel`, `lead`, `seiten`, `weitere?` | Übersicht Gebäudereinigung: Foto-Kacheln je Leistungsseite + Pills ohne eigene Seite |
| `VerwandteLeistungen` | `slugs` | Leistungsseiten; Ziele aus dem Katalog |

## `components/seo/`
`Breadcrumb` (`pfad`, `aktuell`, `variante`), `JsonLd`, `jsonld.ts` (`faqJsonLd`, `breadcrumbJsonLd`, `dienstJsonLd`).

## `lib/`
`trennen.ts` → `weichTrennen(text)`: weiche Trennzeichen an Wortfugen langer Komposita (Fallgrube 9). Wird in den Leistungsseiten-Blöcken auf Überschriften und Kartentitel angewendet; nie auf JSON-LD oder Formularwerte.

## Seiten
`src/components/sections/bereich/Bereichsseite.astro` setzt die Übersichtsseiten der Geschäftsbereiche zusammen (`/gebaeudereinigung`, `/baureinigung`), Typ `Bereichsseite` in `src/data/bereiche/typ.ts`. Optionale Sektionen: Kacheln, Bauphasen, Sonderreinigung; Einsatzgebiet regional (Ortstabelle) oder bundesweit (Karten).

`src/pages/[leistung].astro` setzt jede Leistungsseite aus den Blöcken zusammen (Reihenfolge: `docs/SEITENSTRUKTUR.md`).

## `components/layout/`
`Header` (`variante: 'ueber-bild' \| 'hell'`), `Footer`, `MobileLeiste` — im `BaseLayout`.

## `components/sections/startseite/`
`Hero`, `Manifest`, `Bereiche`, `Leistungen`, `Warum`, `Ablauf`, `Referenzen`,
`Einsatzgebiet`, `Kundenstimmen`, `Faq`, `Anfrage`. Texte aus `src/data/startseite.ts`.
Taucht eine davon auf einer zweiten Seite auf → nach `blocks/` ziehen.

## Mechaniken über `data-*`
| Attribut | Wirkung |
|---|---|
| `data-reveal`, `data-delay` | Einblenden beim Scrollen (BaseLayout) |
| `data-vorauswahl="…"` | belegt beim Klick das Feld „Leistung" im Formular vor |
