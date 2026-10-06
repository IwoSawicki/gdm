# Livegang service-gdm.de — Checkliste

Stand 06.10.2026. ✅ = erledigt · 🟡 = vorbereitet, wartet auf Zuarbeit · ⬜ = offen

## Blocker — ohne diese Punkte nicht live

| | Punkt | Wer | Was genau |
|---|---|---|---|
| 🟡 | **Formulare / Web3Forms** | Iwo | Läuft wie bei Stolz Marketing (öffentlicher Schlüssel als verstecktes Feld, kein Geheimnis). **Aktuell mit dem Stolz-Schlüssel** → Anfragen landen bei iwo@stolz-marketing.de. 1) Auf Staging je einmal Kurzformular (Hero) und Hauptformular absenden, Eingang prüfen. Ein Testversand aus der Cloud-Umgebung ist nicht möglich, weil Web3Forms Server-IPs per Cloudflare sperrt. 2) Vor dem Livegang auf web3forms.com mit **info@service-gdm.de** einen eigenen Schlüssel erzeugen (kostenlos, nur E-Mail) und in `src/data/dienste.ts` (`web3forms.zugangsschluessel`) eintragen. Sonst gehen Kundenanfragen an Stolz und zählen auf das Stolz-Kontingent. |
| 🟡 | **[X]-Werte im Text** | GDM | Antwortzeit („innerhalb von [X] Werktagen", 2×), Reklamation „[X] Stunden", Vertragslaufzeit „[X] Monate / [X] Wochen", Versicherung „[X] Mio. €". Stehen in `src/data/anfrage.ts`, `src/data/startseite.ts`, `src/data/leistungen/gemeinsam.ts`. Alternative: Sätze ohne Zahl freigeben. |
| 🟡 | **Impressum** | GDM | USt-IdNr., ggf. Rechtsform/Handelsregister, Berufshaftpflicht. Gelb markiert in `src/data/rechtstexte/impressum.html`. |
| 🟡 | **Datenschutzerklärung** | GDM / Iwo | Hoster, Logfile-Dauer, Web3Forms-Anbieter, Serverstandort Umami + AV-Vertrag, GA-Speicherdauer, Datum. Gelb markiert. **Rechtlich prüfen lassen.** |
| 🟡 | **Texte freigeben** | GDM | Entwürfe der Leistungs- und Übersichtsseiten (Liste offener Fragen: `docs/ABWEICHUNGEN.md` 20, 22, 25). |
| ⬜ | **Produktion in Dokploy** | Iwo | Zweite Application: Branch `main`, Build Type Dockerfile, Port 80, Domains `service-gdm.de` **und** `www.service-gdm.de` (www leitet nginx auf ohne-www). |
| ⬜ | **DNS umstellen** | Iwo | A/AAAA von service-gdm.de und www auf den Dokploy-Server. Vorher TTL senken. **E-Mail (MX) nicht anfassen** — info@service-gdm.de muss weiterlaufen. |
| ⬜ | **`main` vorspulen** | Claude, nach Freigabe | `dev` → `main` (Fast-Forward). |

## Erledigt
- ✅ Startseite nach Entwurf v4, 2 Übersichts- und 7 Leistungsseiten, Impressum, Datenschutz, 404
- ✅ Echte Google-/MyHammer-Bewertungen eingebaut
- ✅ Referenzen-Platzhalter ausgeblendet (Schalter in `src/data/startseite.ts`, sobald echte Referenzen da sind)
- ✅ **Alle 29 alten Adressen umgeleitet** (`deploy/nginx.conf`, mit nginx getestet): bestehende Seiten 301, später neue Seiten 302, Theme-Demo-Artikel und WordPress-Pfade 410, Schrägstrich am Ende → ohne
- ✅ www → ohne www (301)
- ✅ Staging `noindex` per Header, Produktion ohne
- ✅ Umami eingebunden (nur service-gdm.de), Ereignisse: `anruf-klick`, `email-klick`, `anfrage`
- ✅ Google Analytics hinter Cookie-Banner, nur service-gdm.de; Ereignisse `anruf_klick`, `email_klick`, `generate_lead` — getestet: vor Einwilligung kein Request an Google, keine Cookies
- ✅ Lighthouse Mobil: Startseite Performance 99 · Barrierefreiheit 96 · Best Practices 96 · SEO 100; Büroreinigung 100 · 100 · 96 · 100
- ✅ Alle Seiten auf 1440/820/390/320 ohne seitliches Scrollen
- ✅ Sitemap, robots.txt, Canonical, Open Graph, JSON-LD (LocalBusiness, Service, Breadcrumb, FAQ)
- ✅ Alte Website archiviert: Texte + HTML (`docs/alte-website/`), Fotos (`bildarchiv/`)

## Direkt nach dem Livegang
| | Punkt | Wer |
|---|---|---|
| ⬜ | Google Search Console: Domain-Property anlegen/prüfen, `https://service-gdm.de/sitemap-index.xml` einreichen | Iwo |
| ⬜ | Search Console nach 1–2 Wochen: 404-Fehler prüfen → fehlende Weiterleitungen ergänzen | Claude (mit Export) |
| ⬜ | Google-Unternehmensprofil: Website-Link auf `https://service-gdm.de` prüfen | GDM |
| ⬜ | Google Ads: Konto mit GA4 verknüpfen, `generate_lead` als Conversion importieren; Anruf-Tracking | Iwo |
| ⬜ | Je einen echten Formular-Eingang aus Produktion prüfen | Iwo |
| ⬜ | Umami: Ereignisse `anfrage`/`anruf-klick` sichtbar? | Iwo |

## Sollte bald folgen (kein Blocker)
- Eigene Fotos statt Stockfotos der alten Seite; Lizenz der verwendeten Stockfotos klären (`bildarchiv/README.md`)
- Echte Referenzen (Objekt, Ort, Turnus, Foto) → Schalter in `startseite.ts` auf `true`
- Seiten `/ueber-uns`, `/kontakt`, `/karriere`, Hotelreinigung, Sonder-/Fassadenreinigung (die 302-Umleitungen dann auf die neuen Seiten umstellen)
- Formular Baureinigung mit eigenen Feldern (Bauvorhaben, Bauphase, Termin)
