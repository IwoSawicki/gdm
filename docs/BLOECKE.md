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
