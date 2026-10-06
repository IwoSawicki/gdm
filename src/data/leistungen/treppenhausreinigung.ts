/**
 * Treppenhausreinigung — Zielgruppe Hausverwaltungen und Eigentümer:
 * typische Retainer-Aufträge mit vielen Objekten (docs/SEITENSTRUKTUR.md).
 * Neue Adresse. Texte: ENTWURF, siehe docs/ABWEICHUNGEN.md.
 */
import foto from '../../assets/fotos/hero-gebaeudeservice-flur.jpg';
import { ablaufSchritte, faqHinweis, faqStandard, nr, versprechenPunkte } from './gemeinsam';
import type { Leistungsseite } from './typ';

export const treppenhausreinigung: Leistungsseite = {
  slug: 'treppenhausreinigung',
  keyword: 'treppenhausreinigung',
  title: 'Treppenhausreinigung für Hausverwaltungen | GDM',
  description:
    'Treppenhausreinigung für Hausverwaltungen und Eigentümer in Rhein-Neckar & an der Bergstraße: fester Turnus, festes Team, Kontrolle mit Protokoll.',
  kurz: 'Treppenhäuser, Eingänge und Gemeinschaftsflächen für Hausverwaltungen.',
  formularLeistung: 'Treppenhausreinigung',

  hero: {
    eyebrow: 'Für Hausverwaltungen & Eigentümer',
    zeilen: ['Treppenhausreinigung', 'in Rhein-Neckar', '& an der Bergstraße.'],
    text: 'Saubere Treppenhäuser, Eingänge und Gemeinschaftsflächen in Ihren Wohnanlagen. Mit festem Turnus, festem Team und einem Ansprechpartner für alle Objekte.',
    cta: 'Treppenhausreinigung anfragen',
    bild: foto,
    alt: 'Reinigungskraft mit Einscheibenmaschine in einem langen Flur',
    motiv: 'Foto: Treppenhaus einer Wohnanlage',
    fakten: ['Fester Turnus', 'Festes Team', 'Ein Ansprechpartner für alle Objekte', 'Kontrolle mit Protokoll'],
  },

  vergleich: {
    eyebrow: nr.vergleich,
    titel: 'Kennen Sie das?',
    lead: 'Beschwerden über das Treppenhaus landen bei der Hausverwaltung. Damit das nicht passiert, muss die Reinigung einfach laufen.',
    paare: [
      { problem: 'Mieter beschweren sich, und Sie wissen nicht, ob überhaupt gereinigt wurde.', loesung: 'Kontrollen mit Protokoll. Sie sehen, was erledigt ist.' },
      { problem: 'Jedes Objekt hat einen anderen Dienstleister und andere Absprachen.', loesung: 'Ein Ansprechpartner und ein Leistungsverzeichnis für alle Ihre Objekte.' },
      { problem: 'Im Urlaub oder bei Krankheit fällt die Reinigung aus.', loesung: 'Eine eingearbeitete Vertretung. Gereinigt wird wie vereinbart.' },
      { problem: 'Kleinigkeiten wie defekte Lampen bleiben wochenlang unbemerkt.', loesung: 'Auf Wunsch kombiniert mit Hausmeisterservice und Kontrollgängen.' },
    ],
  },

  umfang: {
    eyebrow: nr.umfang,
    titel: 'Was zur Treppenhausreinigung gehört',
    lead: 'Was in Ihren Objekten gereinigt wird und wie oft, legen wir im Leistungsverzeichnis fest. Das ist der übliche Rahmen.',
    gruppen: [
      { titel: 'Treppen & Podeste', punkte: ['Stufen und Podeste kehren und wischen', 'Handläufe und Geländer', 'Treppenhausfenster innen', 'Spinnweben entfernen'] },
      { titel: 'Eingang', punkte: ['Hauseingang und Eingangstür', 'Briefkastenanlage und Klingeltableau', 'Sauberlaufzone und Fußmatten', 'Glasflächen an der Haustür'] },
      { titel: 'Gemeinschaftsflächen', punkte: ['Kellergänge und Waschküche', 'Aufzug: Kabine und Türen', 'Fahrradraum', 'Müllplatz sauber halten'] },
      { titel: 'Auf Wunsch zusätzlich', punkte: ['Mülltonnen bereitstellen', 'Hausmeisterservice und Kontrollgänge', 'Winterdienst', 'Grünanlagenpflege'] },
    ],
  },

  turnus: {
    eyebrow: nr.turnus,
    titel: 'Wie oft das Treppenhaus dran ist',
    lead: 'Der passende Turnus hängt von der Zahl der Parteien und der Nutzung ab. Wir empfehlen ihn nach der Besichtigung.',
    karten: [
      { titel: 'Wöchentlich', text: 'Der übliche Rhythmus für Mehrfamilienhäuser und Wohnanlagen.' },
      { titel: 'Mehrmals pro Woche', text: 'Für große Anlagen mit vielen Parteien oder Gewerbe im Haus.' },
      { titel: '14-tägig', text: 'Für kleinere Häuser mit wenigen Parteien.' },
      { titel: 'Monatlich ergänzend', text: 'Treppenhausfenster, Keller und Nebenräume im größeren Intervall.' },
    ],
  },

  zielgruppen: {
    eyebrow: nr.zielgruppen,
    titel: 'Für alle, die Wohnanlagen betreuen',
    lead: 'Ob ein einzelnes Haus oder ein ganzer Bestand: Sie bekommen feste Teams und einen Ansprechpartner.',
    karten: [
      { titel: 'Hausverwaltungen', text: 'Mehrere Objekte, ein Vertrag, ein Ansprechpartner.' },
      { titel: 'WEG-Verwaltungen', text: 'Gemeinschaftseigentum sauber, Leistungen nachvollziehbar dokumentiert.' },
      { titel: 'Eigentümer & Vermieter', text: 'Für Mehrfamilienhäuser, ohne dass Sie sich selbst kümmern müssen.' },
      { titel: 'Wohnungsunternehmen', text: 'Größere Bestände mit festen Teams je Gebiet.' },
    ],
  },

  versprechen: { eyebrow: nr.versprechen, titel: 'Sie müssen nicht nachkontrollieren.', punkte: versprechenPunkte },
  ablauf: { eyebrow: nr.ablauf, titel: 'In vier Schritten zur festen Betreuung', cta: 'Anfrage stellen', schritte: ablaufSchritte },

  preis: {
    eyebrow: nr.preis,
    titel: 'Wovon der Preis abhängt',
    lead: 'Sie erhalten ein schriftliches Angebot mit Leistungsverzeichnis und einem festen monatlichen Preis je Objekt.',
    karten: [
      { titel: 'Geschosse & Fläche', text: 'Wie viele Etagen, wie groß Treppenhaus und Nebenflächen sind.' },
      { titel: 'Turnus', text: 'Wöchentlich, mehrmals pro Woche oder 14-tägig.' },
      { titel: 'Leistungsumfang', text: 'Nur Treppenhaus oder auch Keller, Aufzug, Fenster und Außenbereich.' },
      { titel: 'Zahl der Objekte', text: 'Mehrere Objekte in einem Vertrag lassen sich besser planen.' },
    ],
  },

  einsatzgebiet: {
    eyebrow: nr.einsatzgebiet,
    text: 'Treppenhausreinigung von Frankfurt bis Heidelberg und von Mainz bis in den Odenwald. Kurze Wege von Lorsch aus und feste Teams für Ihre Objekte.',
  },

  faq: {
    eyebrow: nr.faq,
    titel: 'Fragen zur Treppenhausreinigung',
    hinweis: faqHinweis,
    eintraege: [
      { frage: 'Betreuen Sie auch mehrere Objekte?', antwort: 'Ja. Sie bekommen einen Ansprechpartner und ein Leistungsverzeichnis je Objekt, auf Wunsch in einem gemeinsamen Vertrag.' },
      { frage: 'Wie sehen wir, dass gereinigt wurde?', antwort: 'Wir kontrollieren regelmäßig im Objekt und protokollieren das Ergebnis. Auffälligkeiten beheben wir, bevor sie zum Problem werden.' },
      faqStandard.urlaub,
      faqStandard.kosten,
      faqStandard.laufzeit,
      faqStandard.versicherung,
    ],
  },

  verwandt: ['unterhaltsreinigung', 'hausmeisterservice', 'winterdienst', 'glasreinigung'],
};
