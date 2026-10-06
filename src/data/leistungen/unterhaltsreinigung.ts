/**
 * Unterhaltsreinigung — Kernleistung der laufenden Gebäudereinigung
 * (Retainer). Alte Adresse /unterhaltsreinigung/ bleibt erhalten.
 * Texte: ENTWURF, siehe docs/ABWEICHUNGEN.md.
 */
import foto from '../../assets/fotos/unterhaltsreinigung-teppich.jpg';
import { ablaufSchritte, faqHinweis, faqStandard, nr, versprechenPunkte } from './gemeinsam';
import type { Leistungsseite } from './typ';

export const unterhaltsreinigung: Leistungsseite = {
  slug: 'unterhaltsreinigung',
  keyword: 'unterhaltsreinigung',
  title: 'Unterhaltsreinigung Rhein-Neckar & Bergstraße | GDM',
  description:
    'Unterhaltsreinigung für Gewerbe, Verwaltung und Wohnanlagen: nach Leistungsverzeichnis, mit festem Team und Turnus. Region Rhein-Neckar & Bergstraße.',
  kurz: 'Die laufende Reinigung nach Leistungsverzeichnis und festem Turnus.',
  formularLeistung: 'Unterhaltsreinigung',

  hero: {
    eyebrow: 'Gebäudereinigung · Nach Leistungsverzeichnis',
    zeilen: ['Unterhaltsreinigung', 'in Rhein-Neckar', '& an der Bergstraße.'],
    text: 'Die regelmäßige Reinigung Ihrer Gewerbe-, Verwaltungs- und Gemeinschaftsflächen. Festgelegt im Leistungsverzeichnis, erledigt vom festen Team, kontrolliert mit Protokoll.',
    cta: 'Unterhaltsreinigung anfragen',
    bild: foto,
    alt: 'Reinigungskraft reinigt einen hellen Teppichboden mit einem Sprühextraktionsgerät',
    motiv: 'Foto: Unterhaltsreinigung in einem Objekt',
    fakten: ['Leistungsverzeichnis', 'Fester Turnus', 'Festes Team', 'Fester Monatspreis'],
  },

  vergleich: {
    eyebrow: nr.vergleich,
    titel: 'Kennen Sie das?',
    lead: 'Unterhaltsreinigung ist kein Einmalauftrag. Entscheidend ist, dass sie Woche für Woche gleich gut ist — ohne dass Sie sich darum kümmern müssen.',
    paare: [
      { problem: 'Niemand weiß genau, was eigentlich vereinbart ist.', loesung: 'Ein schriftliches Leistungsverzeichnis: welcher Raum, welche Leistung, wie oft.' },
      { problem: 'Die Qualität schwankt von Woche zu Woche.', loesung: 'Ein festes Team im Objekt und regelmäßige Kontrollen mit Protokoll.' },
      { problem: 'Bei Ausfällen bleibt einfach alles liegen.', loesung: 'Eine eingearbeitete Vertretung. Gereinigt wird wie vereinbart.' },
      { problem: 'Die monatliche Rechnung ist jedes Mal anders.', loesung: 'Ein fester monatlicher Preis auf Basis des Leistungsverzeichnisses.' },
    ],
  },

  umfang: {
    eyebrow: nr.umfang,
    titel: 'Was die Unterhaltsreinigung umfasst',
    lead: 'Welche Flächen wie oft gereinigt werden, halten wir im Leistungsverzeichnis fest. Diese Bereiche gehören typischerweise dazu.',
    gruppen: [
      { titel: 'Böden', punkte: ['Hartböden feucht wischen', 'Teppichböden saugen', 'Eingänge und Sauberlaufzonen', 'Flure, Treppen und Aufzüge'] },
      { titel: 'Räume & Oberflächen', punkte: ['Büros, Besprechungs- und Aufenthaltsräume', 'Tische, Ablagen und Fensterbänke', 'Türen, Griffe und Lichtschalter', 'Papierkörbe leeren, Müll trennen'] },
      { titel: 'Sanitär & Küche', punkte: ['WCs, Waschbecken und Armaturen', 'Spiegel, Fliesen und Trennwände', 'Verbrauchsmaterial auffüllen', 'Teeküchen und Sozialräume'] },
      { titel: 'Auf Wunsch zusätzlich', punkte: ['Glasreinigung im Intervall', 'Grundreinigung einzelner Flächen', 'Hausmeisterservice', 'Winterdienst im selben Vertrag'] },
    ],
  },

  turnus: {
    eyebrow: nr.turnus,
    titel: 'Ein Turnus, der zu Ihrem Objekt passt',
    lead: 'Nicht jede Fläche braucht jeden Tag dieselbe Leistung. Im Leistungsverzeichnis legen wir den Turnus je Bereich fest.',
    karten: [
      { titel: 'Täglich', text: 'Für stark genutzte Bereiche wie Eingang, Sanitärräume und Küchen.' },
      { titel: 'Mehrmals pro Woche', text: 'Für Büro- und Verwaltungsflächen mit normalem Betrieb.' },
      { titel: 'Wöchentlich', text: 'Für Treppenhäuser, Nebenräume und weniger genutzte Flächen.' },
      { titel: 'Monatlich', text: 'Für ergänzende Arbeiten wie Glas- oder Grundreinigung einzelner Flächen.' },
    ],
  },

  zielgruppen: {
    eyebrow: nr.zielgruppen,
    titel: 'Für Gewerbe, Verwaltung und Wohnanlagen',
    lead: 'Überall dort, wo regelmäßig gereinigt werden muss und Sie dafür einen verlässlichen Partner brauchen.',
    karten: [
      { titel: 'Gewerbe & Büro', text: 'Büroflächen, Empfang, Sozial- und Sanitärräume.' },
      { titel: 'Verwaltungen & Einrichtungen', text: 'Öffentliche und private Verwaltungsgebäude mit Publikumsverkehr.' },
      { titel: 'Hausverwaltungen', text: 'Gemeinschaftsflächen, Treppenhäuser und Gewerbeeinheiten im Bestand.' },
      { titel: 'Praxen & Hotels', text: 'Mit eigenen Anforderungen an Hygiene und Zeiten — siehe Praxis- und Hotelreinigung.' },
    ],
  },

  versprechen: { eyebrow: nr.versprechen, titel: 'Regelmäßig sauber. Ohne Hinterherlaufen.', punkte: versprechenPunkte },
  ablauf: { eyebrow: nr.ablauf, titel: 'In vier Schritten zur festen Betreuung', cta: 'Anfrage stellen', schritte: ablaufSchritte },

  preis: {
    eyebrow: nr.preis,
    titel: 'Wovon der Preis abhängt',
    lead: 'Sie erhalten ein schriftliches Angebot mit Leistungsverzeichnis und einem festen monatlichen Preis. Diese Punkte bestimmen ihn.',
    karten: [
      { titel: 'Fläche', text: 'Die zu reinigende Fläche in m², aufgeteilt nach Bereichen.' },
      { titel: 'Turnus', text: 'Wie oft welcher Bereich gereinigt wird.' },
      { titel: 'Leistungsumfang', text: 'Welche Leistungen im Leistungsverzeichnis stehen.' },
      { titel: 'Objekt & Nutzung', text: 'Bodenbeläge, Ausstattung und wie stark die Flächen genutzt werden.' },
    ],
  },

  einsatzgebiet: {
    eyebrow: nr.einsatzgebiet,
    text: 'Unterhaltsreinigung von Frankfurt bis Heidelberg und von Mainz bis in den Odenwald. Kurze Wege von Lorsch aus und feste Teams, die Ihr Objekt kennen.',
  },

  faq: {
    eyebrow: nr.faq,
    titel: 'Fragen zur Unterhaltsreinigung',
    hinweis: faqHinweis,
    eintraege: [
      { frage: 'Was ist der Unterschied zur Grundreinigung?', antwort: 'Die Unterhaltsreinigung ist die laufende, regelmäßige Reinigung nach festem Turnus. Eine Grundreinigung ist eine einmalige, intensive Reinigung, zum Beispiel nach einem Umbau. Beides bekommen Sie bei uns, auf Wunsch im selben Vertrag.' },
      { frage: 'Was steht im Leistungsverzeichnis?', antwort: 'Welche Räume und Flächen gereinigt werden, welche Leistung dort erbracht wird und in welchem Turnus. Es ist die Grundlage für Angebot, Reinigung und Qualitätskontrolle.' },
      faqStandard.urlaub,
      faqStandard.kosten,
      faqStandard.laufzeit,
      faqStandard.versicherung,
    ],
  },

  verwandt: ['bueroreinigung', 'treppenhausreinigung', 'glasreinigung', 'hausmeisterservice'],
};
