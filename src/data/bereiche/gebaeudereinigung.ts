/**
 * Übersicht Gebäudereinigung & Gebäudeservice (regional, ~60 km um Lorsch).
 * Landingpage der allgemeinen Anzeigengruppe der Kampagne A
 * („gebäudereinigung", „reinigungsfirma in der nähe").
 * Texte: ENTWURF, siehe docs/ABWEICHUNGEN.md.
 */
import foto from '../../assets/fotos/hero-gebaeudereinigung-team-fenster.jpg';
import { ablaufSchritte, faqHinweis, faqStandard, versprechenPunkte } from '../leistungen/gemeinsam';
import type { Bereichsseite } from './typ';

export const gebaeudereinigung: Bereichsseite = {
  slug: 'gebaeudereinigung',
  name: 'Gebäudereinigung',
  keyword: 'gebäudereinigung',
  title: 'Gebäudereinigung Rhein-Neckar & Bergstraße | GDM',
  description:
    'Gebäudereinigung aus Lorsch: Unterhalts-, Büro-, Praxis- und Glasreinigung, Hausmeisterservice und Winterdienst für Rhein-Neckar und die Bergstraße.',
  formularLeistung: 'Mehrere Leistungen',

  hero: {
    eyebrow: 'Gebäudereinigung & Gebäudeservice',
    zeilen: ['Gebäudereinigung', 'in Rhein-Neckar', '& an der Bergstraße.'],
    text: 'Laufende Reinigung und Betreuung für Gewerbe, Praxen und Hausverwaltungen. Mit festem Turnus, festem Team und einem Ansprechpartner — aus Lorsch, mitten in der Region.',
    cta: 'Gebäudereinigung anfragen',
    bild: foto,
    alt: 'Zwei GDM-Mitarbeiter reinigen Fensterfront und Jalousien in einem hellen Raum',
    motiv: 'Foto: GDM-Team bei der Reinigung',
    fakten: ['Fester Turnus', 'Festes Team', 'Ein Ansprechpartner', 'Fester Monatspreis'],
  },

  leistungen: {
    eyebrow: '01 — Leistungen',
    titel: 'Alles für Ihr Objekt aus einer Hand',
    lead: 'Jede Leistung einzeln oder kombiniert in einem Vertrag, mit demselben Ansprechpartner.',
    slugs: ['unterhaltsreinigung', 'bueroreinigung', 'praxisreinigung', 'treppenhausreinigung', 'glasreinigung', 'hausmeisterservice', 'winterdienst'],
    weitere: ['Hotelreinigung', 'Grünanlagenpflege', 'Waschraumlösungen'],
  },

  vergleich: {
    eyebrow: '02 — Der Unterschied',
    titel: 'Kennen Sie das?',
    lead: 'Die meisten wechseln ihre Reinigungsfirma nicht wegen des Preises, sondern weil sie hinterherlaufen müssen. Genau das soll bei uns nicht passieren.',
    paare: [
      { problem: 'Jede Woche kommt jemand anderes, und niemand weiß, was zu tun ist.', loesung: 'Ein festes Team, eingearbeitet in Ihr Objekt und Ihr Leistungsverzeichnis.' },
      { problem: 'Bei Urlaub oder Krankheit fällt die Reinigung einfach aus.', loesung: 'Für jedes Objekt gibt es eine eingearbeitete Vertretung.' },
      { problem: 'Mängel müssen Sie selbst finden und nachfordern.', loesung: 'Regelmäßige Qualitätskontrollen mit Protokoll.' },
      { problem: 'Für Reinigung, Glas, Hausmeister und Winterdienst gibt es je eine Firma.', loesung: 'Alles aus einer Hand, mit einem Ansprechpartner.' },
    ],
  },

  zielgruppen: {
    eyebrow: '03 — Für wen',
    titel: 'Für Gewerbe, Praxen und Hausverwaltungen',
    lead: 'Unser Schwerpunkt ist die regelmäßige Reinigung und Betreuung von Objekten in der Region.',
    karten: [
      { titel: 'Gewerbe & Verwaltung', text: 'Büros, Verwaltungsgebäude und Gewerbeflächen.' },
      { titel: 'Praxen & Einrichtungen', text: 'Arzt-, Zahnarzt- und Therapiepraxen, MVZ und Ärztehäuser.' },
      { titel: 'Hausverwaltungen & Wohnanlagen', text: 'Treppenhäuser, Gemeinschaftsflächen und Außenanlagen.' },
      { titel: 'Hotels', text: 'Zimmer, Empfang und öffentliche Bereiche — auf Anfrage.' },
    ],
  },

  versprechen: { eyebrow: '04 — Warum GDM', titel: 'Regelmäßig sauber. Ohne Hinterherlaufen.', punkte: versprechenPunkte },
  ablauf: { eyebrow: '05 — Ablauf', titel: 'In vier Schritten zur festen Betreuung', cta: 'Anfrage stellen', schritte: ablaufSchritte },

  gebiet: {
    art: 'regional',
    eyebrow: '06 — Einsatzgebiet',
    text: 'Laufende Gebäudereinigung und Gebäudeservice von Frankfurt bis Heidelberg und von Mainz bis in den Odenwald. Kurze Wege und feste Teams, die Ihr Objekt kennen.',
  },

  faq: {
    eyebrow: '07 — FAQ',
    titel: 'Häufige Fragen',
    hinweis: faqHinweis,
    eintraege: [
      { frage: 'In welchem Gebiet sind Sie tätig?', antwort: 'Laufende Gebäudereinigung und Gebäudeservice bieten wir in der Rhein-Neckar-Region und im südlichen Rhein-Main-Gebiet an, unter anderem in Bensheim, Weinheim, Worms, Mannheim, Heidelberg, Darmstadt, Mainz und Frankfurt.' },
      { frage: 'Kann ich mehrere Leistungen kombinieren?', antwort: 'Ja. Reinigung, Glasreinigung, Hausmeisterservice und Winterdienst laufen auf Wunsch in einem Vertrag, mit einem Ansprechpartner und einem festen monatlichen Preis.' },
      faqStandard.urlaub,
      faqStandard.kosten,
      faqStandard.laufzeit,
      faqStandard.versicherung,
    ],
  },
};
