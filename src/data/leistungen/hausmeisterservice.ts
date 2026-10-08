/**
 * Hausmeisterservice — alte Adresse /hausmeisterdienste/ → 301 hierher.
 * Umfang laut Entwurf („Kontrollgänge, Kleinreparaturen und Objektbetreuung
 * durch einen festen Ansprechpartner") und alter Website.
 * Texte: ENTWURF, siehe docs/ABWEICHUNGEN.md.
 */
import foto from '../../assets/fotos/hausmeisterservice-aussenanlage.jpg';
import { ablaufSchritte, faqHinweis, faqStandard, nr, versprechenPunkte } from './gemeinsam';
import type { Leistungsseite } from './typ';

export const hausmeisterservice: Leistungsseite = {
  slug: 'hausmeisterservice',
  keyword: 'hausmeisterservice',
  title: 'Hausmeisterservice Rhein-Neckar & Bergstraße | GDM',
  description:
    'Hausmeisterservice für Wohnanlagen und Gewerbe: Kontrollgänge, Kleinreparaturen, Außenanlagen und ein fester Ansprechpartner. Rhein-Neckar & Bergstraße.',
  kurz: 'Kontrollgänge, Kleinreparaturen und Außenanlagen.',
  formularLeistung: 'Hausmeisterservice',

  hero: {
    eyebrow: 'Gebäudeservice · Fester Ansprechpartner',
    zeilen: ['Hausmeisterservice', 'in Rhein-Neckar', '& an der Bergstraße.'],
    text: 'Kontrollgänge, Kleinreparaturen und Objektbetreuung für Wohnanlagen und Gewerbeobjekte. Ein fester Hausmeister kennt Ihr Objekt und kümmert sich, bevor Sie nachfragen müssen.',
    cta: 'Hausmeisterservice anfragen',
    bild: foto,
    alt: 'Hausmeister bläst mit einem Laubbläser Blätter von einem Weg vor einem Gebäude',
    motiv: 'Foto: Hausmeister im Außenbereich',
    fakten: ['Feste Kontrollgänge', 'Kleinreparaturen', 'Außenanlagen', 'Ein Ansprechpartner'],
  },

  vergleich: {
    eyebrow: nr.vergleich,
    titel: 'Kennen Sie das?',
    lead: 'Ein guter Hausmeister ist der, von dem Sie wenig hören – weil Kleinigkeiten erledigt sind, bevor sie zum Problem werden.',
    paare: [
      { problem: 'Defekte Lampen und klemmende Türen fallen erst auf, wenn Mieter anrufen.', loesung: 'Regelmäßige Kontrollgänge mit Protokoll.' },
      { problem: 'Für jede Kleinigkeit muss ein Handwerker bestellt werden.', loesung: 'Kleinreparaturen erledigt der Hausmeister direkt beim Rundgang.' },
      { problem: 'Reinigung, Außenanlagen und Winterdienst laufen über verschiedene Firmen.', loesung: 'Alles aus einer Hand, mit einem Ansprechpartner.' },
      { problem: 'Niemand fühlt sich für das Objekt verantwortlich.', loesung: 'Ein fester Hausmeister, der Ihr Objekt kennt.' },
    ],
  },

  umfang: {
    eyebrow: nr.umfang,
    titel: 'Was zum Hausmeisterservice gehört',
    lead: 'Welche Aufgaben im Objekt anfallen, legen wir gemeinsam fest. Das ist der übliche Rahmen.',
    gruppen: [
      { titel: 'Kontrollgänge', punkte: ['Treppenhäuser, Keller und Technikräume', 'Beleuchtung und Türen', 'Sichtkontrolle technischer Anlagen', 'Protokoll und Meldung von Mängeln'] },
      { titel: 'Kleinreparaturen', punkte: ['Leuchtmittel tauschen', 'Türen und Schlösser nachstellen', 'Kleine Instandsetzungen', 'Koordination von Handwerkern'] },
      { titel: 'Außenanlagen', punkte: ['Wege und Zufahrten sauber halten', 'Laub und Unkraut entfernen', 'Müllplatz und Mülltonnen', 'Grünanlagenpflege nach Absprache'] },
      { titel: 'Objektbetreuung', punkte: ['Ansprechpartner vor Ort', 'Zählerstände ablesen nach Absprache', 'Schlüssel- und Terminbegleitung', 'Winterdienst im selben Vertrag'] },
    ],
  },

  turnus: {
    eyebrow: nr.turnus,
    titel: 'Feste Rundgänge statt Feuerwehreinsätze',
    lead: 'Wie oft der Hausmeister im Objekt ist, hängt von Größe und Technik ab. Wir schlagen einen Rhythmus nach der Besichtigung vor.',
    karten: [
      { titel: 'Wöchentlich', text: 'Für größere Wohnanlagen und Gewerbeobjekte mit viel Technik.' },
      { titel: '14-tägig', text: 'Der übliche Rhythmus für Mehrfamilienhäuser.' },
      { titel: 'Monatlich', text: 'Für kleinere Objekte mit wenig Technik.' },
      { titel: 'Nach Bedarf', text: 'Zusätzliche Einsätze bei Meldungen von Mietern oder Verwaltung.' },
    ],
  },

  zielgruppen: {
    eyebrow: nr.zielgruppen,
    titel: 'Für Verwalter und Eigentümer',
    lead: 'Für alle, die ein Objekt betreuen und dafür jemanden vor Ort brauchen.',
    karten: [
      { titel: 'Hausverwaltungen', text: 'Ein Hausmeister für mehrere Objekte, ein Ansprechpartner.' },
      { titel: 'WEG & Eigentümer', text: 'Gemeinschaftseigentum in gutem Zustand, nachvollziehbar dokumentiert.' },
      { titel: 'Gewerbeobjekte', text: 'Bürogebäude, Praxishäuser und gemischt genutzte Objekte.' },
      { titel: 'Wohnungsunternehmen', text: 'Bestände mit festen Hausmeistern je Gebiet.' },
    ],
  },

  versprechen: { eyebrow: nr.versprechen, titel: 'Erledigt, bevor Sie nachfragen.', punkte: versprechenPunkte },
  ablauf: { eyebrow: nr.ablauf, titel: 'In vier Schritten zum festen Hausmeister', cta: 'Anfrage stellen', schritte: ablaufSchritte },

  preis: {
    eyebrow: nr.preis,
    titel: 'Wovon der Preis abhängt',
    lead: 'Sie erhalten ein schriftliches Angebot mit Leistungsverzeichnis und einem festen monatlichen Preis. Diese Punkte bestimmen ihn.',
    karten: [
      { titel: 'Objektgröße', text: 'Zahl der Einheiten, Geschosse und Außenflächen.' },
      { titel: 'Rhythmus', text: 'Wie oft Kontrollgänge und Arbeiten im Objekt stattfinden.' },
      { titel: 'Leistungsumfang', text: 'Welche Aufgaben im Leistungsverzeichnis stehen.' },
      { titel: 'Zusatzleistungen', text: 'Ob Reinigung, Grünpflege oder Winterdienst mit im Vertrag sind.' },
    ],
  },

  einsatzgebiet: {
    eyebrow: nr.einsatzgebiet,
    text: 'Hausmeisterservice von Frankfurt bis Heidelberg und von Mainz bis in den Odenwald. Kurze Wege von Lorsch aus und feste Hausmeister für Ihre Objekte.',
  },

  faq: {
    eyebrow: nr.faq,
    titel: 'Fragen zum Hausmeisterservice',
    hinweis: faqHinweis,
    eintraege: [
      { frage: 'Welche Reparaturen übernimmt der Hausmeister?', antwort: 'Kleinreparaturen wie das Tauschen von Leuchtmitteln oder das Nachstellen von Türen erledigt der Hausmeister direkt. Für größere Arbeiten koordinieren wir Fachbetriebe und halten Sie auf dem Laufenden.' },
      { frage: 'Kann ich Hausmeisterservice und Reinigung kombinieren?', antwort: 'Ja. Treppenhausreinigung, Grünanlagenpflege und Winterdienst laufen auf Wunsch im selben Vertrag, mit einem Ansprechpartner.' },
      faqStandard.urlaub,
      faqStandard.kosten,
      faqStandard.laufzeit,
      faqStandard.versicherung,
    ],
  },

  verwandt: ['treppenhausreinigung', 'winterdienst', 'unterhaltsreinigung', 'glasreinigung'],
};
