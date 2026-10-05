/**
 * Bausteine, die auf allen Leistungsseiten gleich sind. Eine Quelle — wird
 * hier geändert, ändert es sich überall. Aussagen stammen aus dem Entwurf
 * der Startseite (Warum GDM, FAQ, Ablauf).
 */
import type { AkkordeonEintrag } from '../../components/blocks/Akkordeon.astro';
import { ablauf } from '../startseite';
import type { Karte } from './typ';

/** Eyebrow-Nummern der Sektionen in fester Reihenfolge */
export const nr = {
  vergleich: '01 — Der Unterschied',
  umfang: '02 — Leistungsumfang',
  turnus: '03 — Turnus',
  zielgruppen: '04 — Für wen',
  versprechen: '05 — Warum GDM',
  ablauf: '06 — Ablauf',
  preis: '07 — Kosten',
  einsatzgebiet: '08 — Einsatzgebiet',
  faq: '09 — FAQ',
} as const;

export const versprechenPunkte: Karte[] = [
  { titel: 'Festes Team', text: 'Dieselben Kräfte in Ihrem Objekt, eingearbeitet in Ihre Abläufe und Ihr Leistungsverzeichnis.' },
  { titel: 'Vertretung inklusive', text: 'Für jedes Objekt gibt es eine eingearbeitete Vertretung. Die Arbeit findet wie vereinbart statt.' },
  { titel: 'Kontrollen mit Protokoll', text: 'Regelmäßige Qualitätskontrollen im Objekt. Mängel beheben wir, bevor sie Ihnen auffallen.' },
  { titel: 'Ein Ansprechpartner', text: 'Direkt erreichbar, ohne Hotline und ohne Ticketsystem.' },
];

export const ablaufSchritte = ablauf.schritte;

/** Standardfragen — jede Seite ergänzt eigene Fragen davor */
export const faqStandard = {
  urlaub: { frage: 'Was passiert bei Urlaub oder Krankheit?', antwort: 'Für jedes Objekt gibt es eine eingearbeitete Vertretung aus dem festen Team. Die Arbeit findet wie vereinbart statt.' },
  kosten: { frage: 'Wie setzen sich die Kosten zusammen?', antwort: 'Die Kosten richten sich nach Fläche, Turnus und Leistungsumfang. Sie erhalten ein schriftliches Angebot mit Leistungsverzeichnis und einem festen monatlichen Preis.' },
  laufzeit: { frage: 'Welche Vertragslaufzeit gilt?', antwort: 'Verträge für laufende Leistungen schließen wir mit einer Laufzeit von [X] Monaten und einer Kündigungsfrist von [X] Wochen ab.' },
  reklamation: { frage: 'Wie schnell reagieren Sie bei Reklamationen?', antwort: 'Reklamationen bearbeiten wir innerhalb von [X] Stunden. Ihr Ansprechpartner ist direkt erreichbar, ohne Hotline und ohne Ticketsystem.' },
  versicherung: { frage: 'Sind Sie für Schäden versichert?', antwort: 'GDM verfügt über eine Betriebshaftpflichtversicherung mit einer Deckungssumme von [X] Mio. €. Einen Nachweis senden wir Ihnen auf Anfrage zu.' },
} satisfies Record<string, AkkordeonEintrag>;

export const faqHinweis = 'Ihre Frage ist nicht dabei?';
