/**
 * Winterdienst — saisonal, Ads Oktober bis Februar. Alte Adresse
 * /winterdienste/ → 301 hierher. Umfang laut Entwurf („Räum- und Streudienst
 * mit Einsatzdokumentation") und alter Website (Räumen, Streuen, Eiszapfen,
 * Schneeverwehungen). Texte: ENTWURF, siehe docs/ABWEICHUNGEN.md.
 */
import foto from '../../assets/fotos/winterdienst-streuen.jpg';
import { ablaufSchritte, faqHinweis, faqStandard, nr, versprechenPunkte } from './gemeinsam';
import type { Leistungsseite } from './typ';

export const winterdienst: Leistungsseite = {
  slug: 'winterdienst',
  keyword: 'winterdienst',
  title: 'Winterdienst Rhein-Neckar & Bergstraße | GDM',
  description:
    'Winterdienst für Wohnanlagen und Gewerbe: Räumen und Streuen nach Wetterlage, mit Einsatzdokumentation. Für die Region Rhein-Neckar & Bergstraße.',
  formularLeistung: 'Winterdienst',

  hero: {
    eyebrow: 'Gebäudeservice · Räum- und Streudienst',
    zeilen: ['Winterdienst', 'in Rhein-Neckar', '& an der Bergstraße.'],
    text: 'Geräumte und gestreute Wege, Zufahrten und Parkplätze, wenn Schnee und Glätte kommen. Mit Einsatzdokumentation für jeden Einsatz.',
    cta: 'Winterdienst anfragen',
    bild: foto,
    alt: 'Hand im Handschuh streut Streugut auf einen verschneiten Weg',
    motiv: 'Foto: Winterdienst auf einem Gehweg',
    fakten: ['Räumen & Streuen', 'Nach Wetterlage', 'Einsatzdokumentation', 'Ein Ansprechpartner'],
  },

  vergleich: {
    eyebrow: nr.vergleich,
    titel: 'Kennen Sie das?',
    lead: 'Beim Winterdienst zählt der eine Morgen, an dem es glatt ist. Dann muss klar sein, wer räumt — und dass es nachgewiesen ist.',
    paare: [
      { problem: 'Es schneit, und niemand weiß, ob der Dienstleister kommt.', loesung: 'Einsatz nach Wetterlage, ohne dass Sie anrufen müssen.' },
      { problem: 'Nach einem Sturz fehlt der Nachweis, dass geräumt wurde.', loesung: 'Jeder Einsatz wird dokumentiert.' },
      { problem: 'Für den Winter brauchen Sie extra einen weiteren Dienstleister.', loesung: 'Winterdienst im selben Vertrag wie Reinigung oder Hausmeisterservice.' },
      { problem: 'Wer verantwortlich ist, ist unklar.', loesung: 'Klare Vereinbarung über Flächen, Zeiten und Ansprechpartner.' },
    ],
  },

  umfang: {
    eyebrow: nr.umfang,
    titel: 'Was zum Winterdienst gehört',
    lead: 'Welche Flächen geräumt und gestreut werden, halten wir in einem Plan fest. Das ist der übliche Rahmen.',
    gruppen: [
      { titel: 'Räumen', punkte: ['Gehwege vor dem Grundstück', 'Hauszugänge und Eingänge', 'Zufahrten und Parkplätze', 'Schneeverwehungen beseitigen'] },
      { titel: 'Streuen', punkte: ['Streuen bei Glätte und Eis', 'Kritische Stellen wie Treppen und Rampen', 'Nachstreuen nach Wetterlage', 'Streugut nach Absprache'] },
      { titel: 'Sicherheit', punkte: ['Kontrolle von Eiszapfen', 'Gefahrenstellen melden', 'Abstimmung mit der Hausverwaltung', 'Einsatzdokumentation'] },
      { titel: 'Im Paket', punkte: ['Mit Hausmeisterservice', 'Mit Treppenhausreinigung', 'Mit Grünanlagenpflege im Sommer', 'Ein Vertrag, ein Ansprechpartner'] },
    ],
  },

  turnus: {
    eyebrow: nr.turnus,
    titel: 'Im Einsatz, wenn das Wetter es verlangt',
    lead: 'Winterdienst läuft nicht nach Kalender, sondern nach Wetterlage. Wie wir abrechnen und wann wir kommen, vereinbaren wir vor der Saison.',
    karten: [
      { titel: 'Saisonvertrag', text: 'Für die ganze Wintersaison, mit festem Ansprechpartner und Plan.' },
      { titel: 'Nach Wetterlage', text: 'Räumen und Streuen, sobald Schnee oder Glätte es erfordern.' },
      { titel: 'Nachstreuen', text: 'Erneute Einsätze, wenn die Glätte länger anhält.' },
      { titel: 'Dokumentation', text: 'Jeder Einsatz mit Datum und Uhrzeit festgehalten.' },
    ],
  },

  zielgruppen: {
    eyebrow: nr.zielgruppen,
    titel: 'Für Wohnanlagen und Gewerbe',
    lead: 'Für alle, die für sichere Wege auf ihrem Grundstück sorgen müssen.',
    karten: [
      { titel: 'Hausverwaltungen', text: 'Gehwege, Zugänge und Parkplätze aller Objekte aus einer Hand.' },
      { titel: 'Eigentümer & WEG', text: 'Sichere Wege für Bewohner und Besucher.' },
      { titel: 'Gewerbe & Praxen', text: 'Kundenparkplätze und Eingänge vor Geschäftsbeginn begehbar.' },
      { titel: 'Verwaltungen', text: 'Zugänge mit Publikumsverkehr.' },
    ],
  },

  versprechen: { eyebrow: nr.versprechen, titel: 'Sichere Wege, dokumentiert.', punkte: versprechenPunkte },
  ablauf: { eyebrow: nr.ablauf, titel: 'In vier Schritten zum Winterdienst', cta: 'Anfrage stellen', schritte: ablaufSchritte },

  preis: {
    eyebrow: nr.preis,
    titel: 'Wovon der Preis abhängt',
    lead: 'Sie erhalten vor der Saison ein schriftliches Angebot. Diese Punkte bestimmen den Preis.',
    karten: [
      { titel: 'Fläche', text: 'Länge der Gehwege, Größe von Zufahrten und Parkplätzen.' },
      { titel: 'Art der Flächen', text: 'Treppen, Rampen und Engstellen brauchen mehr Aufwand.' },
      { titel: 'Abrechnung', text: 'Als Saisonpauschale oder nach Einsätzen.' },
      { titel: 'Kombination', text: 'Im Paket mit Hausmeisterservice oder Reinigung.' },
    ],
  },

  einsatzgebiet: {
    eyebrow: nr.einsatzgebiet,
    text: 'Winterdienst für Objekte in der Region um Lorsch. Kurze Wege sind beim Winterdienst entscheidend — deshalb betreuen wir Objekte in der Nähe.',
  },

  faq: {
    eyebrow: nr.faq,
    titel: 'Fragen zum Winterdienst',
    hinweis: faqHinweis,
    eintraege: [
      { frage: 'Wann räumen und streuen Sie?', antwort: 'Nach Wetterlage, sobald Schnee oder Glätte es erfordern. Die genauen Zeiten und Flächen halten wir vor der Saison im Plan fest.' },
      { frage: 'Bekomme ich einen Nachweis der Einsätze?', antwort: 'Ja. Jeder Einsatz wird mit Datum und Uhrzeit dokumentiert.' },
      { frage: 'Bis wann muss ich den Winterdienst beauftragen?', antwort: 'Am besten vor Beginn der Saison, damit Flächen und Einsatzplan rechtzeitig feststehen.' },
      { frage: 'Wie wird abgerechnet?', antwort: 'Sie erhalten vor der Saison ein schriftliches Angebot mit den vereinbarten Flächen, als Saisonpauschale oder nach Einsätzen.' },
      faqStandard.versicherung,
    ],
  },

  verwandt: ['hausmeisterservice', 'treppenhausreinigung', 'unterhaltsreinigung', 'glasreinigung'],
};
