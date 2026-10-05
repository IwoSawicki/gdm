/**
 * Alle Texte der Startseite, 1:1 aus design/GDM_Startseite_v4.dc.html.
 * Platzhalter des Entwurfs ([X], [Ort] …) bleiben sichtbar Platzhalter,
 * bis echte Inhalte geliefert sind (siehe docs/ABWEICHUNGEN.md).
 */

export const meta = {
  title: 'Gebäudereinigung Rhein-Neckar | GDM aus Lorsch',
  description:
    'Gebäudereinigung und Gebäudeservice in der Rhein-Neckar-Region: Unterhalts-, Büro- und Glasreinigung mit festem Team. Baureinigung bundesweit.',
};

/** Leistung, mit der ein CTA das Anfrageformular vorbelegt */
export type Vorauswahl =
  | 'Unterhaltsreinigung'
  | 'Baureinigung'
  | 'Sonder- & Grundreinigung';

export interface Slide {
  label: string;
  eyebrow: string;
  zeilen: string[];
  text: string;
  cta: string;
  vorauswahl?: Vorauswahl;
  /** Motivbeschreibung aus dem Entwurf, solange kein Foto da ist */
  motiv: string;
}

export const hero = {
  h1: 'Gebäudereinigung und Gebäudeservice in der Rhein-Neckar-Region – GDM aus Lorsch',
  slides: [
    {
      label: 'Gebäudereinigung',
      eyebrow: 'GDM · Gebäude Dienstleistung Management',
      zeilen: ['Sauberkeit, die', 'Eindruck', 'hinterlässt.'],
      text: 'Ihr Gebäude ist Ihre Visitenkarte. Wir kümmern uns um einen Auftritt, der bis ins Detail überzeugt.',
      cta: 'Angebot anfordern',
      motiv: 'Foto Slide 1: modernes Bürogebäude oder Fassade, abends oder bei Tageslicht',
    },
    {
      label: 'Gebäudeservice',
      eyebrow: 'Rhein-Neckar & darüber hinaus',
      zeilen: ['Ein Partner', 'für Ihr ganzes', 'Objekt.'],
      text: 'Unterhalts- und Glasreinigung, Hausmeisterservice und Winterdienst aus einer Hand.',
      cta: 'Gebäudereinigung anfragen',
      vorauswahl: 'Unterhaltsreinigung',
      motiv: 'Foto Slide 4: gepflegter Eingangsbereich oder Treppenhaus',
    },
    {
      label: 'Sonderreinigung',
      eyebrow: 'Grund-, Fassaden- und Industriereinigung',
      zeilen: ['Gründlich', 'bis in jede', 'Fuge.'],
      text: 'Für Flächen, die mehr brauchen als die laufende Reinigung. Nach Umbau, vor Übergabe oder im laufenden Betrieb.',
      cta: 'Sonderreinigung anfragen',
      vorauswahl: 'Sonder- & Grundreinigung',
      motiv: 'Foto Slide 3: Glasfassade oder Industriehalle bei der Reinigung',
    },
    {
      label: 'Baureinigung',
      eyebrow: 'Deutschlandweit · Österreich',
      zeilen: ['Baustellen,', 'übergabefertig', 'gereinigt.'],
      text: 'Baugrob-, Bauzwischen-, Baufein- und Bauendreinigung, abgestimmt auf Ihren Bauzeitenplan.',
      cta: 'Baureinigung anfragen',
      vorauswahl: 'Baureinigung',
      motiv: 'Foto Slide 2: Neubau kurz vor Übergabe, Team auf der Baustelle',
    },
  ] satisfies Slide[],
};

export const laufband = [
  'Unterhaltsreinigung',
  'Büroreinigung',
  'Praxisreinigung',
  'Glasreinigung',
  'Hausmeisterservice',
  'Winterdienst',
  'Hotelreinigung',
  'Grundreinigung',
];

export const manifest = {
  eyebrow: 'Unser Anspruch',
  text: 'Wir reinigen so, dass Sie nicht nachkontrollieren müssen. Jede Woche in gleicher Qualität, mit festem Team und festem Turnus. Ein Ansprechpartner kennt Ihr Objekt und kümmert sich, bevor Sie nachfragen müssen.',
  zielgruppen: [
    { icon: 'apartment', text: 'Gewerbe & Verwaltung' },
    { icon: 'medical_services', text: 'Praxen & Einrichtungen' },
    { icon: 'home_work', text: 'Hausverwaltungen & Wohnanlagen' },
    { icon: 'location_on', text: 'Rhein-Neckar & darüber hinaus' },
  ],
} as const;

export const bereiche = {
  eyebrow: '01 — Geschäftsbereiche',
  titel: 'Ihr Objekt in festen Händen',
  lead: 'Unser Schwerpunkt ist die regelmäßige Reinigung und Betreuung von Objekten in der Region. Für Bauprojekte sind wir zusätzlich bundesweit im Einsatz.',
  karten: [
    {
      id: undefined,
      motiv: 'Foto: Büro- oder Praxisflur, gepflegt, Tageslicht',
      label: 'Schwerpunkt · Rhein-Neckar & darüber hinaus',
      titel: 'Gebäudereinigung & Service',
      text: 'Für Hausverwaltungen, Praxen, Hotels, Büros und Gewerbe. Regelmäßige Reinigung nach Leistungsverzeichnis und Objektbetreuung aus einer Hand.',
      liste: ['Unterhaltsreinigung', 'Büro- & Praxisreinigung', 'Hotelreinigung', 'Glasreinigung', 'Hausmeisterservice', 'Winterdienst'],
      cta: 'Gebäudereinigung anfragen',
      vorauswahl: 'Unterhaltsreinigung' as Vorauswahl,
      link: { text: 'Alle Leistungen', href: '#leistungen' },
    },
    {
      id: 'baureinigung',
      motiv: 'Foto: Innenraum Neubau nach Baufeinreinigung, Tageslicht',
      label: 'Deutschlandweit · Österreich',
      titel: 'Baureinigung bundesweit',
      text: 'Für Bauträger, Generalunternehmer und Bauunternehmen. Wir reinigen in jeder Bauphase und richten uns nach Ihrem Bauzeitenplan.',
      liste: ['Baugrobreinigung', 'Bauzwischenreinigung', 'Baufeinreinigung', 'Bauendreinigung', 'Fassadenreinigung', 'Grund- & Industriereinigung'],
      cta: 'Baureinigung anfragen',
      vorauswahl: 'Baureinigung' as Vorauswahl,
      link: { text: 'Referenzen', href: '#referenzen' },
    },
  ],
};

export const leistungsliste = {
  eyebrow: '02 — Leistungen',
  titel: 'Laufende Betreuung für Ihr Objekt',
  lead: 'Regelmäßige Reinigung und Objektbetreuung in der Rhein-Neckar-Region und darüber hinaus. Mit festem Turnus, festem Team und einem Ansprechpartner.',
  eintraege: [
    { titel: 'Unterhaltsreinigung', text: 'Regelmäßige Reinigung von Büro-, Verwaltungs- und Gewerbeflächen nach festem Leistungsverzeichnis und Turnus.' },
    { titel: 'Büro-, Praxis- & Hotelreinigung', text: 'Hygienegerechte Reinigung von Arbeitsplätzen, Behandlungsräumen und Zimmern, abgestimmt auf Ihre Betriebszeiten.' },
    { titel: 'Glasreinigung', text: 'Fenster, Rahmen und Glasflächen im vereinbarten Intervall.' },
    { titel: 'Hausmeisterservice', text: 'Kontrollgänge, Kleinreparaturen und Objektbetreuung durch einen festen Ansprechpartner.' },
    { titel: 'Winterdienst & Grünanlagenpflege', text: 'Räum- und Streudienst mit Einsatzdokumentation, Pflege der Außenanlagen über das ganze Jahr.' },
    { titel: 'Waschraumlösungen', text: 'Ausstattung und regelmäßige Befüllung Ihrer Sanitärräume.' },
  ],
  projektLabel: 'Projektbezogen',
  projekte: ['Baureinigung', 'Sonder- & Grundreinigung', 'Fassadenreinigung', 'Industriereinigung', 'Entrümpelung & Montage'],
};

export const warum = {
  eyebrow: '03 — Warum GDM',
  titel: 'Regelmäßig sauber. Ohne Hinterherlaufen.',
  lead: 'Qualität ist bei uns kein Zusatz, sondern der Auftrag. Sie bekommen eine Leistung, die Sie nicht prüfen und nicht nachfordern müssen.',
  a: {
    motiv: 'Foto: gepflegter Büro- oder Praxisraum, Detail Boden oder Fensterrahmen',
    titel: 'Fester Turnus, festes Team. Sie müssen nicht nachkontrollieren.',
    cta: 'Gebäudereinigung anfragen',
    vorauswahl: 'Unterhaltsreinigung' as Vorauswahl,
  },
  b: {
    satz: 'Ein Ansprechpartner.',
    zusatz: 'Für Ihr Objekt, dauerhaft.',
  },
  d: {
    pills: ['Leistungsnachweis', 'Qualitätskontrolle', 'Festes Objektteam'],
    satz: 'Regelmäßige Qualitätskontrollen.',
    zusatz: 'Mängel beheben wir, bevor sie Ihnen auffallen.',
    motiv: 'Foto: Objektleiter bei der Qualitätskontrolle im Objekt',
  },
};

export const ablauf = {
  eyebrow: '04 — Ablauf',
  titel: 'In vier Schritten zur festen Betreuung',
  cta: 'Anfrage stellen',
  schritte: [
    { n: '01', titel: 'Anfrage', text: 'Sie schildern Objekt, Fläche und gewünschten Turnus per Formular oder Telefon.' },
    { n: '02', titel: 'Besichtigung & Angebot', text: 'Wir sehen uns das Objekt vor Ort an und erstellen ein schriftliches Angebot mit Leistungsverzeichnis und festem Monatspreis.' },
    { n: '03', titel: 'Start mit festem Team', text: 'Ihr Team wird im Objekt eingearbeitet. Ein fester Objektleiter ist ab dem ersten Tag Ihr Ansprechpartner.' },
    { n: '04', titel: 'Laufende Qualitätskontrolle', text: 'Regelmäßige Kontrollen im Objekt mit Protokoll. Auffälligkeiten beheben wir, bevor sie zum Problem werden.' },
  ],
};

export const referenzen = {
  eyebrow: '05 — Referenzen',
  titel: 'Objekte, die wir betreuen',
  /** Platzhalter aus dem Entwurf — echte Referenzen fehlen noch */
  eintraege: [
    { motiv: 'Projektfoto: Wohnanlage oder Treppenhaus einer Hausverwaltung', ort: '[Ort]', leistung: 'Unterhaltsreinigung', titel: '[Objekt, z. B. Wohnanlage, [X] Treppenhäuser, wöchentlich]' },
    { motiv: 'Projektfoto: Bürogebäude, Empfang oder Großraumbüro', ort: '[Ort]', leistung: 'Büro- & Glasreinigung', titel: '[Objekt, z. B. Bürogebäude, [X] m², 3× pro Woche]' },
    { motiv: 'Projektfoto: Arztpraxis oder MVZ, Behandlungsraum', ort: '[Ort]', leistung: 'Praxisreinigung', titel: '[Objekt, z. B. Facharztpraxis, [X] m², täglich]' },
    { motiv: 'Projektfoto: Neubau nach Bauendreinigung', ort: '[Ort]', leistung: 'Bauendreinigung', titel: '[Projekt, z. B. Neubau Wohnanlage, [X] Wohneinheiten]' },
  ],
};

export const gebiet = {
  eyebrow: '06 — Einsatzgebiet',
  zeile1: 'Rhein-Neckar',
  zeile2: 'darüber hinaus.',
  text: 'Laufende Gebäudereinigung und Gebäudeservice von Frankfurt bis Heidelberg und von Mainz bis in den Odenwald. Kurze Wege und feste Teams, die Ihr Objekt kennen.',
  hinweis: 'Baureinigung zusätzlich deutschlandweit und in Österreich · Firmensitz',
  spalten: ['Ort', 'Region', 'Luftlinie'],
  orte: [
    { ort: 'Bensheim', region: 'Bergstraße', km: 5 },
    { ort: 'Weinheim', region: 'Bergstraße', km: 13 },
    { ort: 'Worms', region: 'Rheinhessen', km: 15 },
    { ort: 'Mannheim', region: 'Rhein-Neckar', km: 19 },
    { ort: 'Ludwigshafen', region: 'Rhein-Neckar', km: 21 },
    { ort: 'Darmstadt', region: 'Südhessen', km: 25 },
    { ort: 'Heidelberg', region: 'Rhein-Neckar', km: 29 },
    { ort: 'Mainz', region: 'Rheinhessen', km: 44 },
    { ort: 'Frankfurt am Main', region: 'Rhein-Main', km: 52 },
  ],
};

export const kundenstimmen = {
  eyebrow: '07 — Kundenstimmen',
  titel: 'Was unsere Auftraggeber sagen',
  /** Platzhalter aus dem Entwurf — echte Kundenstimmen fehlen noch */
  eintraege: [
    { zitat: '[Kundenstimme Hausverwaltung: zwei bis drei Sätze zur laufenden Reinigung und zum festen Ansprechpartner.]', name: '[Vorname Nachname]', rolle: '[Objektbetreuung, Hausverwaltung]', initialen: '[–]' },
    { zitat: '[Kundenstimme Büro: zwei bis drei Sätze zu gleichbleibender Qualität und Verlässlichkeit.]', name: '[Vorname Nachname]', rolle: '[Office Management, Unternehmen]', initialen: '[–]' },
    { zitat: '[Kundenstimme Praxis: zwei bis drei Sätze zu Hygiene und Reinigung außerhalb der Sprechzeiten.]', name: '[Vorname Nachname]', rolle: '[Inhaber/in, Praxis]', initialen: '[–]' },
    { zitat: '[Kundenstimme Bauträger: zwei bis drei Sätze zu Termintreue bei der Bauendreinigung.]', name: '[Vorname Nachname]', rolle: '[Projektleitung, Bauträger]', initialen: '[–]' },
  ],
};

export const faq = {
  eyebrow: '08 — FAQ',
  titel: 'Häufige Fragen',
  hinweis: 'Ihre Frage ist nicht dabei?',
  eintraege: [
    { frage: 'In welchem Gebiet sind Sie tätig?', antwort: 'Laufende Gebäudereinigung und Gebäudeservice bieten wir in der Rhein-Neckar-Region und im südlichen Rhein-Main-Gebiet an, unter anderem in Bensheim, Weinheim, Worms, Mannheim, Heidelberg, Darmstadt, Mainz und Frankfurt. Baureinigungen übernehmen wir zusätzlich deutschlandweit und in Österreich.' },
    { frage: 'Wie schnell reagieren Sie bei Reklamationen?', antwort: 'Reklamationen bearbeiten wir innerhalb von [X] Stunden. Ihr Ansprechpartner ist direkt erreichbar, ohne Hotline und ohne Ticketsystem.' },
    { frage: 'Was passiert bei Urlaub oder Krankheit?', antwort: 'Für jedes Objekt gibt es eine eingearbeitete Vertretung aus dem festen Team. Die Reinigung findet wie vereinbart statt.' },
    { frage: 'Wie setzen sich die Kosten zusammen?', antwort: 'Die Kosten richten sich nach Fläche, Reinigungsturnus und Leistungsumfang. Sie erhalten ein schriftliches Angebot mit Leistungsverzeichnis und einem festen monatlichen Preis.' },
    { frage: 'Welche Vertragslaufzeit gilt für die laufende Reinigung?', antwort: 'Verträge für die Unterhaltsreinigung schließen wir mit einer Laufzeit von [X] Monaten und einer Kündigungsfrist von [X] Wochen ab.' },
    { frage: 'Sind Sie für Schäden versichert?', antwort: 'GDM verfügt über eine Betriebshaftpflichtversicherung mit einer Deckungssumme von [X] Mio. €. Einen Nachweis senden wir Ihnen auf Anfrage zu.' },
  ],
};

export const anfrage = {
  zeile1: 'Angebot',
  zeile2: 'anfordern',
  lead: 'Beschreiben Sie kurz Ihr Objekt und den gewünschten Turnus. Wir melden uns innerhalb von [X] Werktagen mit einem Termin zur Besichtigung.',
  kontaktRolle: 'Inhaber · Ihr Ansprechpartner',
  optionenLeistung: ['Unterhaltsreinigung', 'Büro- & Praxisreinigung', 'Hotelreinigung', 'Glasreinigung', 'Hausmeisterservice', 'Winterdienst', 'Mehrere Leistungen', 'Baureinigung', 'Sonder- & Grundreinigung', 'Sonstiges'],
  optionenTurnus: ['Täglich', 'Mehrmals pro Woche', 'Wöchentlich', '14-tägig', 'Monatlich', 'Einmalig'],
  danke: {
    titel: 'Vielen Dank für Ihre Anfrage',
    text: 'Wir melden uns innerhalb von [X] Werktagen. Bei Rückfragen erreichen Sie uns unter',
    nochmal: 'Weitere Anfrage',
  },
};
