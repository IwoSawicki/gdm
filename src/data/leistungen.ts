/**
 * Katalog aller Leistungen. Aus ihm leiten sich die Footer-Spalten ab;
 * später entsteht hier je Eintrag eine Leistungsseite (`slug`).
 *
 * Solange es die Seite nicht gibt, zeigt der Link — wie im Entwurf — auf
 * die Leistungsübersicht der Startseite (`/#leistungen`).
 */
export type Leistungsgruppe = 'gebaeudeservice' | 'baureinigung';

export interface Leistung {
  name: string;
  /** künftige Adresse /leistungen/<slug> (Kleinbuchstaben, ohne Umlaute) */
  slug: string;
  gruppe: Leistungsgruppe;
}

export const leistungen: Leistung[] = [
  { name: 'Unterhaltsreinigung', slug: 'unterhaltsreinigung', gruppe: 'gebaeudeservice' },
  { name: 'Büroreinigung', slug: 'bueroreinigung', gruppe: 'gebaeudeservice' },
  { name: 'Praxisreinigung', slug: 'praxisreinigung', gruppe: 'gebaeudeservice' },
  { name: 'Hotelreinigung', slug: 'hotelreinigung', gruppe: 'gebaeudeservice' },
  { name: 'Glasreinigung', slug: 'glasreinigung', gruppe: 'gebaeudeservice' },
  { name: 'Hausmeisterservice', slug: 'hausmeisterservice', gruppe: 'gebaeudeservice' },
  { name: 'Winterdienst', slug: 'winterdienst', gruppe: 'gebaeudeservice' },
  { name: 'Baugrobreinigung', slug: 'baugrobreinigung', gruppe: 'baureinigung' },
  { name: 'Bauzwischenreinigung', slug: 'bauzwischenreinigung', gruppe: 'baureinigung' },
  { name: 'Baufeinreinigung', slug: 'baufeinreinigung', gruppe: 'baureinigung' },
  { name: 'Bauendreinigung', slug: 'bauendreinigung', gruppe: 'baureinigung' },
  { name: 'Sonder- & Grundreinigung', slug: 'sonder-und-grundreinigung', gruppe: 'baureinigung' },
  { name: 'Fassadenreinigung', slug: 'fassadenreinigung', gruppe: 'baureinigung' },
  { name: 'Industriereinigung', slug: 'industriereinigung', gruppe: 'baureinigung' },
];

export const leistungenNachGruppe = (gruppe: Leistungsgruppe) =>
  leistungen.filter((l) => l.gruppe === gruppe);
