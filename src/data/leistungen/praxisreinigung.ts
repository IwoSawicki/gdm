/**
 * Praxisreinigung — alte Adresse /praxisreinigung/ bleibt erhalten.
 * Texte: ENTWURF, siehe docs/ABWEICHUNGEN.md. Keine Zusagen zu Normen oder
 * Zertifikaten, solange GDM sie nicht bestätigt hat.
 */
import foto from '../../assets/fotos/praxisreinigung-behandlungsstuhl.jpg';
import { ablaufSchritte, faqHinweis, faqStandard, nr, versprechenPunkte } from './gemeinsam';
import type { Leistungsseite } from './typ';

export const praxisreinigung: Leistungsseite = {
  slug: 'praxisreinigung',
  keyword: 'praxisreinigung',
  title: 'Praxisreinigung Rhein-Neckar & Bergstraße | GDM',
  description:
    'Praxisreinigung für Arzt-, Zahnarzt- und Therapiepraxen: hygienegerecht, außerhalb der Sprechzeiten, mit festem Team. Rhein-Neckar & Bergstraße.',
  kurz: 'Hygienegerecht und außerhalb der Sprechzeiten.',
  formularLeistung: 'Büro- & Praxisreinigung',

  hero: {
    eyebrow: 'Gebäudereinigung · Außerhalb der Sprechzeiten',
    zeilen: ['Praxisreinigung', 'in Rhein-Neckar', '& an der Bergstraße.'],
    text: 'Hygienegerechte Reinigung von Behandlungsräumen, Wartezimmer und Sanitärräumen. Abgestimmt auf Ihre Sprechzeiten, mit festem Team, das Ihre Praxis kennt.',
    cta: 'Praxisreinigung anfragen',
    bild: foto,
    alt: 'Reinigungskraft desinfiziert die Armlehne eines Behandlungsstuhls in einer Praxis',
    motiv: 'Foto: Behandlungsraum einer Praxis',
    fakten: ['Außerhalb der Sprechzeiten', 'Hygieneplan', 'Festes Team', 'Ein Ansprechpartner'],
  },

  vergleich: {
    eyebrow: nr.vergleich,
    titel: 'Kennen Sie das?',
    lead: 'In einer Praxis reicht „sieht sauber aus" nicht. Patienten und Team müssen sich darauf verlassen können, dass Hygiene jeden Tag stimmt.',
    paare: [
      { problem: 'Wechselnde Reinigungskräfte kennen Ihre Hygienevorgaben nicht.', loesung: 'Ein festes Team, eingewiesen in Ihren Hygieneplan und Ihre Räume.' },
      { problem: 'Gereinigt wird, während noch Patienten im Haus sind.', loesung: 'Reinigung außerhalb der Sprechzeiten, abgestimmt auf Ihren Praxisalltag.' },
      { problem: 'Sie müssen selbst kontrollieren, ob Kontaktflächen desinfiziert wurden.', loesung: 'Regelmäßige Kontrollen mit Protokoll.' },
      { problem: 'Bei Ausfällen fehlt die Reinigung ausgerechnet vor einem vollen Tag.', loesung: 'Eine eingearbeitete Vertretung. Gereinigt wird wie vereinbart.' },
    ],
  },

  umfang: {
    eyebrow: nr.umfang,
    titel: 'Was zur Praxisreinigung gehört',
    lead: 'Was wann gereinigt und desinfiziert wird, legen wir gemeinsam nach Ihrem Hygieneplan im Leistungsverzeichnis fest.',
    gruppen: [
      { titel: 'Behandlungsräume', punkte: ['Böden reinigen und desinfizieren', 'Kontaktflächen, Griffe und Schalter', 'Arbeitsflächen und Ablagen', 'Waschbecken und Spender'] },
      { titel: 'Empfang & Wartezimmer', punkte: ['Empfangstresen und Wartebereich', 'Stühle, Tische und Ablagen', 'Türen und Glasflächen', 'Papierkörbe leeren'] },
      { titel: 'Sanitärräume', punkte: ['WCs, Waschbecken und Armaturen', 'Spiegel, Fliesen und Trennwände', 'Seife, Desinfektion und Papier auffüllen', 'Desinfektion der Kontaktflächen'] },
      { titel: 'Personal- & Nebenräume', punkte: ['Teeküche und Aufenthaltsraum', 'Umkleiden', 'Flure und Treppen', 'Lager- und Nebenräume'] },
    ],
  },

  turnus: {
    eyebrow: nr.turnus,
    titel: 'Gereinigt, wenn die Praxis leer ist',
    lead: 'Die meisten Praxen brauchen eine tägliche Reinigung. Den genauen Rhythmus richten wir nach Ihren Sprechzeiten.',
    karten: [
      { titel: 'Täglich nach Sprechstunde', text: 'Der Standard für Arzt- und Zahnarztpraxen mit vollem Betrieb.' },
      { titel: 'Mehrmals pro Woche', text: 'Für Therapie- und Beratungspraxen mit weniger Patientenverkehr.' },
      { titel: 'Zwischenreinigung', text: 'Zusätzlich in der Mittagspause, etwa für Sanitärräume und Wartebereich.' },
      { titel: 'Grundreinigung', text: 'In größeren Abständen, zum Beispiel in den Praxisferien.' },
    ],
  },

  zielgruppen: {
    eyebrow: nr.zielgruppen,
    titel: 'Für Praxen und medizinische Einrichtungen',
    lead: 'Von der Einzelpraxis bis zum Ärztehaus — mit Reinigung, die zu Ihren Abläufen passt.',
    karten: [
      { titel: 'Arztpraxen', text: 'Allgemein- und Facharztpraxen mit täglichem Patientenverkehr.' },
      { titel: 'Zahnarztpraxen', text: 'Behandlungszimmer, Wartebereich und Sanitärräume.' },
      { titel: 'Therapie & Physiotherapie', text: 'Behandlungsräume, Liegen, Umkleiden und Sanitärräume.' },
      { titel: 'MVZ & Ärztehäuser', text: 'Mehrere Praxen und Gemeinschaftsflächen aus einer Hand.' },
    ],
  },

  versprechen: { eyebrow: nr.versprechen, titel: 'Hygiene, auf die Sie sich verlassen können.', punkte: versprechenPunkte },
  ablauf: { eyebrow: nr.ablauf, titel: 'In vier Schritten zur festen Praxisreinigung', cta: 'Anfrage stellen', schritte: ablaufSchritte },

  preis: {
    eyebrow: nr.preis,
    titel: 'Wovon der Preis abhängt',
    lead: 'Sie erhalten ein schriftliches Angebot mit Leistungsverzeichnis und einem festen monatlichen Preis. Diese Punkte bestimmen ihn.',
    karten: [
      { titel: 'Fläche & Räume', text: 'Größe der Praxis, Zahl der Behandlungsräume und Sanitärräume.' },
      { titel: 'Turnus', text: 'Täglich, mehrmals pro Woche oder mit Zwischenreinigung.' },
      { titel: 'Hygieneanforderungen', text: 'Welche Flächen wie oft desinfiziert werden müssen.' },
      { titel: 'Zeitfenster', text: 'Wann gereinigt werden kann, etwa abends oder am Wochenende.' },
    ],
  },

  einsatzgebiet: {
    eyebrow: nr.einsatzgebiet,
    text: 'Praxisreinigung von Frankfurt bis Heidelberg und von Mainz bis in den Odenwald. Kurze Wege von Lorsch aus und feste Teams, die Ihre Praxis kennen.',
  },

  faq: {
    eyebrow: nr.faq,
    titel: 'Fragen zur Praxisreinigung',
    hinweis: faqHinweis,
    eintraege: [
      { frage: 'Wann wird gereinigt?', antwort: 'Außerhalb Ihrer Sprechzeiten, meist abends nach der letzten Behandlung. Die Zeiten stimmen wir mit Ihnen ab.' },
      { frage: 'Arbeiten Sie nach unserem Hygieneplan?', antwort: 'Ja. Wir richten Leistungsverzeichnis und Reinigungsmittel nach Ihrem Hygieneplan und weisen das feste Team darin ein.' },
      faqStandard.urlaub,
      faqStandard.kosten,
      faqStandard.laufzeit,
      faqStandard.versicherung,
    ],
  },

  verwandt: ['bueroreinigung', 'unterhaltsreinigung', 'glasreinigung', 'hausmeisterservice'],
};
