# Seitenstruktur und Leistungsseiten

Stand 05.10.2026. Grundlage: Keyword-Analyse Stolz Marketing (29.09.2026),
alte Website (Texte unter `docs/alte-website/`), Vorgaben Iwo:

- **Zwei Geschäftsbereiche:** (A) Gebäudereinigung & Service — regional,
  (B) Baureinigung & Sonderreinigung — bundesweit.
- **Fokus zuerst auf A:** Google Ads im Radius von ca. **60 km um Lorsch**,
  Ziel sind **laufende Aufträge (Retainer)**, nicht Einmalreinigungen.
- Jede Leistungsseite ist gleichzeitig **Landingpage** einer Anzeigengruppe.

Abweichungen vom Report sind markiert (▲).

---

## A — Gebäudereinigung & Service (regional, Retainer)

| Seite | Haupt-Keyword | Alte Adresse | Stufe | Anzeigengruppe |
|---|---|---|---|---|
| `/bueroreinigung` ✅ | büroreinigung (+ Mannheim/Heidelberg/Darmstadt) | — (neu) | 1 | Büroreinigung |
| `/unterhaltsreinigung` | unterhaltsreinigung | `/unterhaltsreinigung/` | 1 | Unterhaltsreinigung |
| `/praxisreinigung` | praxisreinigung, arztpraxis reinigung | `/praxisreinigung/` | 1 | Praxisreinigung |
| `/treppenhausreinigung` ▲ | treppenhausreinigung (1.000–10.000) | — (neu) | **1** statt 3 | Treppenhaus / Hausverwaltung |
| `/glasreinigung` | glasreinigung, fensterreinigung firma | `/glasreinigung/` | 1 | Glasreinigung |
| `/hausmeisterservice` | hausmeisterservice (+ Darmstadt/Mannheim) | `/hausmeisterdienste/` → 301 | 1 | Hausmeisterservice |
| `/winterdienst` | winterdienst (saisonal) | `/winterdienste/` → 301 | 1 (vor Saison live) | Winterdienst (Okt–Feb) |
| `/hotelreinigung` | hotelreinigung | `/hotelreinigung/` | 2 | — |
| `/gruenanlagenpflege` | grünanlagenpflege, grünflächenpflege | `/gruenanlagenpflege/` | 2 | — |
| `/waschraumloesungen` | waschraumhygiene | `/waschraumloesungen/` | 2 | — |
| `/gebaeudereinigung` (Übersicht) | gebäudereinigung, reinigungsfirma in der nähe | — | 1 | allgemein (Kampagne A) |

▲ **Treppenhausreinigung nach vorn:** Hausverwaltungen sind die typischen
Retainer-Kunden (wöchentlich, viele Objekte, lange Laufzeit). Report führt
die Seite als optional/Stufe 3 — für das Ziel „laufende Aufträge" ist sie
eine der wichtigsten Landingpages.

▲ **Kampagne A nach Leistung statt nach Ort:** Ortsbezug liefert der
Ads-Radius; die Anzeigengruppen zeigen direkt auf die Leistungsseite.
Ortsseiten (`/gebaeudereinigung-mannheim` …) erst in Stufe 3 und nur mit
echtem Inhalt (Referenz vor Ort).

## B — Baureinigung & Sonderreinigung (bundesweit, Projekte)

| Seite | Haupt-Keyword | Alte Adresse | Stufe |
|---|---|---|---|
| `/baureinigung` (Übersicht + Landingpage Kampagne B) | baureinigung, bauendreinigung | `/baureinigung/` | 1 |
| `/baureinigung/bauendreinigung` | bauendreinigung (1.000–10.000) | — | 2 |
| `/baureinigung/baufeinreinigung` | baufeinreinigung, bauschlussreinigung | — | 2 |
| `/baureinigung/baugrobreinigung` | baugrobreinigung, baustellenreinigung | — | 2 |
| `/sonderreinigung` | sonderreinigung, grundreinigung | `/sonderreinigung/` | 2 |
| `/fassadenreinigung` | fassadenreinigung | `/fassadenreinigung/` | 2 |
| `/industriereinigung` | industriereinigung, hallenreinigung | — | 3 |
| `/baureinigung-oesterreich` | baureinigung österreich/wien | — | 3 |

## Vertrauen, Anfrage, Sonstiges

| Seite | Stufe | Hinweis |
|---|---|---|
| `/ueber-uns` | 1 | alte Adresse bleibt |
| `/referenzen` | 2 | sobald Fotos/Freigaben da sind |
| `/kontakt` | 1 | alte Adresse bleibt; Formular-Block |
| `/karriere` | 2 | fängt Jobsuchende ab (siehe Ads-Ausschlüsse) |
| `/entruempelung`, `/montage` | — | „Beobachten" laut Report; vorerst 301 auf `/` oder Übersicht — **[Rückfrage]** ob weiter angeboten |
| `/management`, `/service` | — | alte Sammelseiten → 301 auf `/gebaeudereinigung` |
| Blog-Reste der Theme-Demo (Auto-Artikel) | — | 410 bzw. 301 auf `/` |

## Hauptmenü — [Rückfrage]
Der Entwurf zeigt: Leistungen · Über uns · Ablauf · Einsatzgebiet ·
Referenzen · Baureinigung (alles Anker der Startseite). Mit eigenen Seiten
schlage ich vor: **Gebäudereinigung ▾ · Baureinigung ▾ · Einsatzgebiet ·
Referenzen · Über uns** + „Angebot anfordern" (wie im Report). Umsetzung
erst nach Freigabe, weil es den Entwurf der Kopfzeile ändert.

---

## Vorlage jeder Leistungsseite (umgesetzt in `/bueroreinigung`)

Ziel: Landingpage für Ads (schnelle Anfrage) **und** SEO-Seite mit Substanz.

| # | Block | Zweck |
|---|---|---|
| 1 | `LeistungsHero` | H1 = Keyword + Region, Nutzen, CTA + Telefon, **Kurzformular ohne Scrollen**, Vertrauensleiste inkl. Google 5,0 |
| 2 | `Vergleich` „Kennen Sie das?" | holt Wechselkunden ab (Retainer!): Problem beim bisherigen Anbieter → Antwort GDM |
| 3 | `Leistungsumfang` | Checklisten je Bereich — beantwortet „was ist drin?" |
| 4 | `KartenRaster` Turnus (dunkel) | Retainer-Fokus: täglich bis 14-tägig |
| 5 | `KartenRaster` Für wen | Zielgruppen, Selbstzuordnung |
| 6 | `Versprechen` | Warum GDM + Ansprechpartner + Google-Bewertung |
| 7 | `Schritte` | Ablauf in 4 Schritten |
| 8 | `KartenRaster` Kosten | Preisfaktoren — fängt „… kosten"-Suchen ab, ohne Preise zu nennen |
| 9 | `Einsatzgebiet` | Orte im Ads-Radius, lokaler Bezug für SEO |
| 10 | `Faq` | 5–6 Fragen, FAQPage-Schema |
| 11 | `VerwandteLeistungen` | interne Verlinkung aus dem Katalog |
| 12 | `Anfrage` | volles Formular, Leistung vorausgewählt |

Technisch: `Service`-, `BreadcrumbList`- und `FAQPage`-JSON-LD, eigene
Title/Description, Brotkrumen. Neue Leistung = Datei in
`src/data/leistungen/<slug>.ts` + Eintrag in `index.ts` + `seite: true` im Katalog.

### Noch offen für richtig starke Seiten
- **Kundenstimmen** (Google-Bewertungen) als Block auf jeder Leistungsseite —
  sobald die Texte vorliegen.
- **Referenz je Leistung** (Objekt, Ort, Turnus, Foto) — stärkstes Argument
  für Ads und SEO.
- Eigene Fotos je Leistung (aktuell Stock-Fotos der alten Seite).
- Conversion-Tracking: Formular-Absenden und Klicks auf `tel:` (Ads-Pflicht
  laut Report) — Vorschlag folgt mit dem Ads-Setup.
