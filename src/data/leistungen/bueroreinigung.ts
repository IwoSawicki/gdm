/**
 * Leistungsseite Büroreinigung — erste Seite der regionalen Gebäudereinigung
 * und Zielseite der Google-Ads-Anzeigengruppe „Büroreinigung" (Radius ~60 km).
 *
 * Texte sind ein ENTWURF (siehe docs/ABWEICHUNGEN.md): Aussagen stammen aus
 * dem Entwurf der Startseite (fester Turnus, festes Team, Vertretung,
 * Kontrollen mit Protokoll, Leistungsverzeichnis, fester Monatspreis) und der
 * alten Website. Keine Zahlen erfunden; offene Werte bleiben [X].
 */
import fotoHero from '../../assets/fotos/bueroreinigung-papierkorb.jpg';
import { ablauf } from '../startseite';
import type { Leistungsseite } from './typ';

export const bueroreinigung: Leistungsseite = {
  slug: 'bueroreinigung',
  keyword: 'büroreinigung',
  title: 'Büroreinigung Rhein-Neckar & Bergstraße | GDM',
  description:
    'Büroreinigung in Mannheim, Heidelberg, Darmstadt und an der Bergstraße: fester Turnus, festes Team, ein Ansprechpartner und ein fester Monatspreis.',
  formularLeistung: 'Büro- & Praxisreinigung',

  hero: {
    eyebrow: 'Gebäudereinigung · Fester Turnus, festes Team',
    // H1 = Keyword + Region (Report S. 2: „Seitentitel und H1 enthalten Keyword und ggf. Ort“)
    zeilen: ['Büroreinigung', 'in Rhein-Neckar', '& an der Bergstraße.'],
    text: 'Saubere Arbeitsplätze, gepflegte Besprechungsräume und hygienische Küchen und Sanitärräume. Regelmäßig, nach Leistungsverzeichnis und abgestimmt auf Ihre Betriebszeiten.',
    cta: 'Büroreinigung anfragen',
    bild: fotoHero,
    alt: 'Reinigungskraft in gelben Handschuhen leert einen Papierkorb unter einem Schreibtisch',
    motiv: 'Foto: Büro bei der Reinigung',
    fakten: ['Fester Turnus', 'Festes Team', 'Ein Ansprechpartner', 'Fester Monatspreis'],
  },

  vergleich: {
    eyebrow: '01 — Der Unterschied',
    titel: 'Kennen Sie das?',
    lead: 'Die meisten Büros wechseln ihre Reinigung nicht wegen des Preises, sondern weil sie hinterherlaufen müssen. Genau das soll bei uns nicht passieren.',
    paare: [
      { problem: 'Jede Woche kommt jemand anderes, und niemand weiß, was zu tun ist.', loesung: 'Ein festes Team, eingearbeitet in Ihr Objekt und Ihr Leistungsverzeichnis.' },
      { problem: 'Bei Urlaub oder Krankheit fällt die Reinigung einfach aus.', loesung: 'Für jedes Objekt gibt es eine eingearbeitete Vertretung. Gereinigt wird wie vereinbart.' },
      { problem: 'Mängel müssen Sie selbst finden und nachfordern.', loesung: 'Regelmäßige Qualitätskontrollen mit Protokoll. Mängel beheben wir, bevor sie Ihnen auffallen.' },
      { problem: 'Bei Fragen landen Sie in einer Hotline oder einem Ticketsystem.', loesung: 'Ein Ansprechpartner, der Ihr Objekt kennt und direkt erreichbar ist.' },
    ],
  },

  umfang: {
    eyebrow: '02 — Leistungsumfang',
    titel: 'Was zur Büroreinigung gehört',
    lead: 'Was wann gereinigt wird, legen wir gemeinsam in einem Leistungsverzeichnis fest. Das ist der übliche Rahmen.',
    gruppen: [
      {
        titel: 'Arbeitsplätze & Büros',
        punkte: ['Schreibtische und freie Arbeitsflächen', 'Papierkörbe leeren, Müll trennen', 'Türen, Griffe und Lichtschalter', 'Staubwischen auf Möbeln und Fensterbänken'],
      },
      {
        titel: 'Böden',
        punkte: ['Hartböden feucht wischen', 'Teppichböden saugen', 'Eingangsbereich und Laufwege', 'Treppen und Flure'],
      },
      {
        titel: 'Küchen & Sozialräume',
        punkte: ['Arbeitsflächen und Spülen', 'Tische und Stühle', 'Kühlschrank und Geräte außen', 'Geschirr in die Spülmaschine'],
      },
      {
        titel: 'Sanitärräume',
        punkte: ['WCs, Waschbecken und Armaturen', 'Spiegel und Fliesen', 'Seife, Papier und Handtücher auffüllen', 'Desinfektion der Kontaktflächen'],
      },
    ],
  },

  turnus: {
    eyebrow: '03 — Turnus',
    titel: 'So oft, wie Ihr Büro es braucht',
    lead: 'Wie oft wir kommen, hängt von Fläche, Mitarbeiterzahl und Publikumsverkehr ab. Wir empfehlen nach der Besichtigung einen passenden Turnus.',
    karten: [
      { titel: 'Täglich', text: 'Für Büros mit vielen Arbeitsplätzen, Kundenverkehr oder Empfangsbereich.' },
      { titel: 'Mehrmals pro Woche', text: 'Der häufigste Rhythmus für mittelgroße Büros und Verwaltungen.' },
      { titel: 'Wöchentlich', text: 'Für kleinere Büros und Kanzleien mit wenigen Arbeitsplätzen.' },
      { titel: '14-tägig', text: 'Als Grundpflege, ergänzt um einzelne Leistungen bei Bedarf.' },
    ],
  },

  zielgruppen: {
    eyebrow: '04 — Für wen',
    titel: 'Für Unternehmen, Kanzleien und Verwaltungen',
    lead: 'Ob ein Büro mit fünf Arbeitsplätzen oder mehrere Etagen: Sie bekommen ein festes Team, das Ihr Objekt kennt.',
    karten: [
      { titel: 'Unternehmen & Verwaltungen', text: 'Büroflächen, Besprechungsräume, Empfang und Sozialräume.' },
      { titel: 'Kanzleien & Steuerbüros', text: 'Diskret und außerhalb Ihrer Termine mit Mandanten.' },
      { titel: 'Agenturen & Coworking', text: 'Offene Flächen, Küchen und Meetingräume mit hoher Nutzung.' },
      { titel: 'Hausverwaltungen', text: 'Gewerbeeinheiten und Bürohäuser im Bestand, aus einer Hand.' },
    ],
  },

  versprechen: {
    eyebrow: '05 — Warum GDM',
    titel: 'Sie müssen nicht nachkontrollieren.',
    punkte: [
      { titel: 'Festes Team', text: 'Dieselben Reinigungskräfte in Ihrem Objekt, eingearbeitet in Ihre Abläufe.' },
      { titel: 'Vertretung inklusive', text: 'Für jedes Objekt gibt es eine eingearbeitete Vertretung. Die Reinigung findet wie vereinbart statt.' },
      { titel: 'Kontrollen mit Protokoll', text: 'Regelmäßige Qualitätskontrollen im Objekt. Mängel beheben wir, bevor sie Ihnen auffallen.' },
      { titel: 'Ein Ansprechpartner', text: 'Direkt erreichbar, ohne Hotline und ohne Ticketsystem.' },
    ],
  },

  ablauf: {
    eyebrow: '06 — Ablauf',
    titel: 'In vier Schritten zur festen Büroreinigung',
    cta: 'Anfrage stellen',
    schritte: ablauf.schritte,
  },

  preis: {
    eyebrow: '07 — Kosten',
    titel: 'Wovon der Preis abhängt',
    lead: 'Sie erhalten ein schriftliches Angebot mit Leistungsverzeichnis und einem festen monatlichen Preis. Diese Punkte bestimmen ihn.',
    karten: [
      { titel: 'Fläche', text: 'Die zu reinigende Fläche in m² und die Zahl der Räume.' },
      { titel: 'Turnus', text: 'Wie oft pro Woche oder Monat gereinigt wird.' },
      { titel: 'Leistungsumfang', text: 'Welche Leistungen im Leistungsverzeichnis stehen, etwa Küchen, Sanitärräume oder Glasflächen.' },
      { titel: 'Räume & Böden', text: 'Art der Bodenbeläge und Ausstattung, zum Beispiel Teppich, Hartboden oder viele Glaswände.' },
    ],
  },

  einsatzgebiet: {
    eyebrow: '08 — Einsatzgebiet',
    text: 'Büroreinigung von Frankfurt bis Heidelberg und von Mainz bis in den Odenwald. Kurze Wege von Lorsch aus und feste Teams, die Ihr Objekt kennen.',
  },

  faq: {
    eyebrow: '09 — FAQ',
    titel: 'Fragen zur Büroreinigung',
    hinweis: 'Ihre Frage ist nicht dabei?',
    eintraege: [
      { frage: 'Wann wird gereinigt?', antwort: 'Die Reinigungszeiten stimmen wir auf Ihre Betriebszeiten ab, zum Beispiel morgens vor Arbeitsbeginn oder abends nach Feierabend. So läuft Ihr Betrieb ungestört weiter.' },
      { frage: 'Was passiert bei Urlaub oder Krankheit?', antwort: 'Für jedes Objekt gibt es eine eingearbeitete Vertretung aus dem festen Team. Die Reinigung findet wie vereinbart statt.' },
      { frage: 'Wie setzen sich die Kosten zusammen?', antwort: 'Die Kosten richten sich nach Fläche, Reinigungsturnus und Leistungsumfang. Sie erhalten ein schriftliches Angebot mit Leistungsverzeichnis und einem festen monatlichen Preis.' },
      { frage: 'Welche Vertragslaufzeit gilt?', antwort: 'Verträge für die Büroreinigung schließen wir mit einer Laufzeit von [X] Monaten und einer Kündigungsfrist von [X] Wochen ab.' },
      { frage: 'Wie schnell reagieren Sie bei Reklamationen?', antwort: 'Reklamationen bearbeiten wir innerhalb von [X] Stunden. Ihr Ansprechpartner ist direkt erreichbar, ohne Hotline und ohne Ticketsystem.' },
      { frage: 'Sind Sie für Schäden versichert?', antwort: 'GDM verfügt über eine Betriebshaftpflichtversicherung mit einer Deckungssumme von [X] Mio. €. Einen Nachweis senden wir Ihnen auf Anfrage zu.' },
    ],
  },

  verwandt: ['unterhaltsreinigung', 'praxisreinigung', 'glasreinigung', 'hausmeisterservice'],
};
