# Livegang service-gdm.de — To-do-Liste

Stand 08.10.2026. ☐ = offen · ☑ = erledigt

## A. Iwo — Blocker (ohne diese Punkte nicht live)

- ☐ **Formulare auf Staging testen:** auf gdm.stolz-marketing.de je einmal
  das Kurzformular (oben auf einer Leistungsseite) und das Hauptformular
  (unten) absenden → Eingang bei iwo@stolz-marketing.de prüfen. Aus der
  Cloud-Umgebung nicht testbar (Web3Forms sperrt Server-IPs).
- ☐ **Eigener Web3Forms-Schlüssel für GDM:** auf web3forms.com mit
  **info@service-gdm.de** erzeugen (kostenlos, nur E-Mail) und an Claude
  geben → kommt in `src/data/dienste.ts`. Sonst landen Kundenanfragen bei
  Stolz. Danach ein Testversand an GDM.
- ☐ **AV-Vertrag GDM ↔ Stolz Marketing** abschließen (Hosting auf Hetzner,
  Umami). Die Datenschutzerklärung sagt bereits, dass er besteht.
- ☐ **Google Analytics:** Verwaltung → Datenerfassung und -änderung →
  Datenaufbewahrung → **14 Monate** (steht so in der Datenschutzerklärung;
  Standard wäre 2 Monate).
- ☐ **Impressum und Datenschutz rechtlich prüfen lassen.** Danach den
  gelben Hinweis „Entwurf …“ oben in `src/data/rechtstexte/datenschutz.html`
  entfernen (oder Claude Bescheid geben).
- ☐ **Dokploy Produktion:** zweite Application, Branch `main`, Build Type
  Dockerfile, Port 80, Domains `service-gdm.de` **und** `www.service-gdm.de`.
- ☐ **DNS:** vorher TTL senken, dann A/AAAA von `service-gdm.de` und `www`
  auf den Dokploy-Server. **MX (E-Mail) nicht anfassen.**
- ☐ **Freigabe an Claude:** „`main` vorspulen“ → Seite ist live.

## B. GDM (Taha Ali) — bestätigen oder liefern

- ☐ **Impressum bestätigen** (aus der alten Seite übernommen):
  USt-IdNr. DE362377341 · Berufsbezeichnung (alt: „Gebäudereinigung“,
  korrekt wäre eher „Gebäudereiniger“) · Handwerkskammer Frankfurt-Rhein-Main ·
  Versicherung: Die alte Seite nennt die Agentur „AXA Center Selim
  Balcioglu“ — gefragt ist der **Versicherer laut Police** (z. B. AXA
  Versicherung AG, Köln) und der **Geltungsbereich** (z. B. Deutschland/EU).
- ☐ **Bildrechte:** Die Fotos der alten Seite stammen laut altem Impressum
  von Shutterstock und Freepik, gekauft vermutlich über AJ Webdesign. Gilt
  die Lizenz für GDM auch auf der neuen Seite? Wenn unklar: eigene Fotos
  oder neue Lizenzen (Liste der verwendeten Fotos: `bildarchiv/README.md`).
- ☐ **Texte freigeben:** Leistungs- und Übersichtsseiten sind Entwürfe
  (`docs/ABWEICHUNGEN.md` Nr. 22, 25, 27, 32, 34). Dabei fünf kurze Fragen:
  1. Ansprechpartner für Kunden: Taha Ali selbst oder ein fester Objektleiter?
  2. Winterdienst: nur im Nahbereich um Lorsch oder im ganzen Gebiet bis
     Frankfurt/Mainz?
  3. Baureinigung: gibt es immer eine gemeinsame Begehung und Abnahme?
  4. H1 „Büroreinigung in Rhein-Neckar“ → lieber „in der Rhein-Neckar-Region“?
  5. Wortmarke im Footer „GDM Service“ so lassen?
- ☐ *Optional, kein Blocker:* fünf Zahlen für stärkere Aussagen — Antwortzeit
  auf Anfragen (Werktage), Reklamation (Stunden), Vertragslaufzeit (Monate),
  Kündigungsfrist (Wochen), Deckungssumme der Haftpflicht (Mio. €). Bis
  dahin stehen die Sätze ohne Zahl auf der Seite (`src/data/zusagen.ts`).

## C. Direkt nach dem Livegang (Iwo)

- ☐ Google Search Console: Domain-Property anlegen/prüfen,
  `https://service-gdm.de/sitemap-index.xml` einreichen
- ☐ Echte Anfrage aus Produktion testen, Eingang bei GDM prüfen
- ☐ Umami: kommen Seitenaufrufe und Ereignisse `anfrage` / `anruf-klick` an?
- ☐ Google-Unternehmensprofil: Website-Link auf `https://service-gdm.de`
- ☐ Google Ads: GA4 verknüpfen, `generate_lead` als Conversion importieren,
  Anruf-Conversion einrichten
- ☐ Nach 1–2 Wochen: 404-Fehler aus der Search Console an Claude →
  fehlende Weiterleitungen ergänzen

## D. Sollte bald folgen (kein Blocker)

- Echte Referenzen (Objekt, Ort, Turnus, Foto) → Schalter `mitReferenzen`
  in `src/data/startseite.ts`
- Eigene Fotos statt Stockfotos
- Seiten `/ueber-uns`, `/kontakt`, `/karriere`, Hotelreinigung,
  Sonder-/Fassadenreinigung (302-Umleitungen dann umstellen)
- Formular Baureinigung mit eigenen Feldern (Bauvorhaben, Bauphase, Termin)
- Leistungsliste der Startseite auf die Leistungsseiten verlinken (SEO)

## Erledigt

- ☑ Startseite nach Entwurf v4, 2 Übersichts- und 7 Leistungsseiten,
  Impressum, Datenschutz, 404
- ☑ Impressum und Datenschutz befüllt (alte Seite + Stolz), keine
  Platzhalter mehr auf der Seite
- ☑ Formulare nach Stolz-Verfahren (Web3Forms, öffentlicher Schlüssel)
- ☑ Echte Google-/MyHammer-Bewertungen mit Plattform-Logo
- ☑ Alle 29 alten Adressen umgeleitet (301/302/410), www → ohne www
- ☑ Staging `noindex` per Header, Produktion ohne
- ☑ Umami (nur service-gdm.de) und Google Analytics hinter Cookie-Banner;
  vor Einwilligung kein Request an Google, keine Cookies
- ☑ Lighthouse Mobil 96–100 in allen Kategorien
- ☑ Alle Seiten auf 1440/820/390/320 ohne seitliches Scrollen
- ☑ Sitemap, robots.txt, Canonical, Open Graph, JSON-LD
- ☑ Fortschrittsbalken im Hero-Slider wieder sichtbar (08.10.2026)
- ☑ Lektorat aller Texte: Tippfehler, Widersprüche, unbelegte Aussagen (08.10.2026)
