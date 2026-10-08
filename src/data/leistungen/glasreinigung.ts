/**
 * Glasreinigung — alte Adresse /glasreinigung/ bleibt erhalten.
 * Umfang laut alter Website: Fenster, Glastüren, Glasfassaden, Glasdächer.
 * Texte: ENTWURF, siehe docs/ABWEICHUNGEN.md.
 */
import foto from '../../assets/fotos/glasreinigung-team-fenster.jpg';
import { ablaufMitAngebot, faqHinweis, faqStandard, nr, versprechenPunkte } from './gemeinsam';
import type { Leistungsseite } from './typ';

export const glasreinigung: Leistungsseite = {
  slug: 'glasreinigung',
  keyword: 'glasreinigung',
  title: 'Glasreinigung Rhein-Neckar & Bergstraße | GDM',
  description:
    'Glasreinigung für Büros, Praxen und Wohnanlagen: Fenster, Rahmen, Glastüren und Glasfassaden im vereinbarten Intervall. Rhein-Neckar & Bergstraße.',
  kurz: 'Fenster, Rahmen und Glasflächen im vereinbarten Intervall.',
  formularLeistung: 'Glasreinigung',

  hero: {
    eyebrow: 'Gebäudereinigung · Im festen Intervall',
    zeilen: ['Glasreinigung', 'in Rhein-Neckar', '& an der Bergstraße.'],
    text: 'Fenster, Rahmen, Glastüren und Glasflächen streifenfrei sauber. Im vereinbarten Intervall, einzeln oder zusammen mit Ihrer Unterhaltsreinigung.',
    cta: 'Glasreinigung anfragen',
    bild: foto,
    alt: 'GDM-Mitarbeiter reinigt einen Fensterrahmen, im Hintergrund der Blick über die Stadt',
    motiv: 'Foto: Glasreinigung an einer Fensterfront',
    fakten: ['Fenster & Rahmen', 'Festes Intervall', 'Festes Team', 'Mit Unterhaltsreinigung kombinierbar'],
  },

  vergleich: {
    eyebrow: nr.vergleich,
    titel: 'Kennen Sie das?',
    lead: 'Saubere Fenster fallen nicht auf – schmutzige schon. Damit es gar nicht so weit kommt, braucht es einen festen Rhythmus.',
    paare: [
      { problem: 'Die Fenster werden erst geputzt, wenn es jemand bemerkt.', loesung: 'Ein festes Intervall, im Leistungsverzeichnis vereinbart.' },
      { problem: 'Nach dem Putzen bleiben Streifen und schmutzige Rahmen.', loesung: 'Glas, Rahmen und Falze gehören dazu. Wir kontrollieren das Ergebnis.' },
      { problem: 'Für Glas und Reinigung haben Sie zwei Dienstleister.', loesung: 'Glasreinigung im selben Vertrag wie Ihre Unterhaltsreinigung.' },
      { problem: 'Termine passen nicht zu Ihrem Betrieb.', loesung: 'Termine nach Absprache, abgestimmt auf Ihre Betriebszeiten.' },
    ],
  },

  umfang: {
    eyebrow: nr.umfang,
    titel: 'Was zur Glasreinigung gehört',
    lead: 'Welche Glasflächen wie oft gereinigt werden, legen wir gemeinsam fest. Das ist der übliche Rahmen.',
    gruppen: [
      { titel: 'Fenster', punkte: ['Glas innen und außen', 'Rahmen und Falze', 'Fensterbänke innen', 'Dachfenster nach Erreichbarkeit'] },
      { titel: 'Glastüren & Trennwände', punkte: ['Eingangstüren und Windfänge', 'Glastrennwände in Büros', 'Vitrinen und Glasflächen', 'Spiegel'] },
      { titel: 'Fassade & Außen', punkte: ['Schaufenster', 'Glasfassaden nach Erreichbarkeit', 'Glasdächer und Vordächer', 'Wintergärten'] },
      { titel: 'Rund ums Glas', punkte: ['Jalousien und Lamellen nach Absprache', 'Fensterbänke außen', 'Hartnäckige Verschmutzungen', 'Erstreinigung nach Bau oder Umbau'] },
    ],
  },

  turnus: {
    eyebrow: nr.turnus,
    titel: 'Im Intervall, das zu Ihrem Gebäude passt',
    lead: 'Wie oft Glas gereinigt werden sollte, hängt von Lage, Nutzung und Repräsentation ab. Wir empfehlen ein Intervall nach der Besichtigung.',
    karten: [
      { titel: 'Monatlich', text: 'Für Eingänge, Schaufenster und Empfangsbereiche, die sofort ins Auge fallen.' },
      { titel: 'Vierteljährlich', text: 'Der übliche Rhythmus für Bürofenster und Glastrennwände.' },
      { titel: 'Halbjährlich', text: 'Für Wohnanlagen, Treppenhausfenster und weniger exponierte Flächen.' },
      { titel: 'Einmalig', text: 'Zum Beispiel nach Bau, Umbau oder vor einer Übergabe.' },
    ],
  },

  zielgruppen: {
    eyebrow: nr.zielgruppen,
    titel: 'Für Büros, Praxen und Wohnanlagen',
    lead: 'Überall, wo Glas regelmäßig sauber sein muss – einzeln beauftragt oder als Teil Ihrer laufenden Reinigung.',
    karten: [
      { titel: 'Büros & Verwaltungen', text: 'Fensterfronten, Glastrennwände und Eingangsbereiche.' },
      { titel: 'Praxen & Kanzleien', text: 'Saubere Fenster und Glastüren für den ersten Eindruck.' },
      { titel: 'Hausverwaltungen', text: 'Treppenhausfenster, Haustüren und Gemeinschaftsflächen.' },
      { titel: 'Handel & Gastronomie', text: 'Schaufenster und Eingänge im kurzen Intervall.' },
    ],
  },

  versprechen: { eyebrow: nr.versprechen, titel: 'Klare Sicht, ohne nachzufragen.', punkte: versprechenPunkte },
  ablauf: { eyebrow: nr.ablauf, titel: 'In vier Schritten zur festen Glasreinigung', cta: 'Anfrage stellen', schritte: ablaufMitAngebot('mit Leistungsverzeichnis und festem Preis je Reinigung') },

  preis: {
    eyebrow: nr.preis,
    titel: 'Wovon der Preis abhängt',
    lead: 'Sie erhalten ein schriftliches Angebot mit festem Preis je Reinigung oder als Teil Ihres monatlichen Pauschalpreises.',
    karten: [
      { titel: 'Glasfläche', text: 'Zahl und Größe der Fenster, Türen und Glasflächen.' },
      { titel: 'Erreichbarkeit', text: 'Höhe, Zugang und ob Leitern oder Hilfsmittel nötig sind.' },
      { titel: 'Intervall', text: 'Monatlich, vierteljährlich, halbjährlich oder einmalig.' },
      { titel: 'Rahmen & Zusatz', text: 'Ob Rahmen, Falze, Fensterbänke oder Jalousien dazugehören.' },
    ],
  },

  einsatzgebiet: {
    eyebrow: nr.einsatzgebiet,
    text: 'Glasreinigung von Frankfurt bis Heidelberg und von Mainz bis in den Odenwald. Kurze Wege von Lorsch aus und feste Teams für Ihr Objekt.',
  },

  faq: {
    eyebrow: nr.faq,
    titel: 'Fragen zur Glasreinigung',
    hinweis: faqHinweis,
    eintraege: [
      { frage: 'Reinigen Sie auch die Rahmen?', antwort: 'Ja, wenn es vereinbart ist. Rahmen, Falze und Fensterbänke halten wir im Leistungsverzeichnis fest, damit klar ist, was zur Glasreinigung gehört.' },
      { frage: 'Kann ich die Glasreinigung mit der Unterhaltsreinigung kombinieren?', antwort: 'Ja. Die Glasreinigung läuft dann im selben Vertrag mit, mit demselben Ansprechpartner und einem festen monatlichen Preis.' },
      { frage: 'Wie setzen sich die Kosten zusammen?', antwort: 'Die Kosten richten sich nach Glasfläche, Erreichbarkeit und Intervall. Sie erhalten ein schriftliches Angebot mit festem Preis je Reinigung oder als Teil Ihres monatlichen Pauschalpreises.' },
      faqStandard.urlaub,
      faqStandard.versicherung,
    ],
  },

  verwandt: ['unterhaltsreinigung', 'bueroreinigung', 'treppenhausreinigung', 'hausmeisterservice'],
};
