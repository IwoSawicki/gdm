import { rueckmeldung } from './zusagen';

/** Texte und Optionen des Anfrageformulars (Abschluss jeder Seite) */
export const anfrage = {
  zeile1: 'Angebot',
  zeile2: 'anfordern',
  lead: `Beschreiben Sie kurz Ihr Objekt und den gewünschten Turnus. Wir melden uns ${rueckmeldung} mit einem Termin zur Besichtigung.`,
  kontaktRolle: 'Inhaber · Ihr Ansprechpartner',
  optionenLeistung: ['Unterhaltsreinigung', 'Treppenhausreinigung', 'Büro- & Praxisreinigung', 'Hotelreinigung', 'Glasreinigung', 'Hausmeisterservice', 'Winterdienst', 'Mehrere Leistungen', 'Baureinigung', 'Sonder- & Grundreinigung', 'Sonstiges'],
  optionenTurnus: ['Täglich', 'Mehrmals pro Woche', 'Wöchentlich', '14-tägig', 'Monatlich', 'Einmalig'],
  danke: {
    titel: 'Vielen Dank für Ihre Anfrage',
    text: `Wir melden uns ${rueckmeldung}. Bei Rückfragen erreichen Sie uns unter`,
    nochmal: 'Weitere Anfrage',
  },
};
