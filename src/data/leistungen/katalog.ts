/**
 * Katalog aller Leistungen. Aus ihm leiten sich die Footer-Spalten ab;
 * später entsteht hier je Eintrag eine Leistungsseite (`slug`).
 *
 * Solange es die Seite nicht gibt, zeigt der Link — wie im Entwurf — auf
 * die Leistungsübersicht der Startseite (`/#leistungen`). Sobald eine Datei
 * in src/data/leistungen/ existiert, `seite: true` setzen.
 */
export type Leistungsgruppe = 'gebaeudeservice' | 'baureinigung';

export interface Leistung {
  name: string;
  /** künftige Adresse /leistungen/<slug> (Kleinbuchstaben, ohne Umlaute) */
  slug: string;
  gruppe: Leistungsgruppe;
  /** Leistungsseite existiert unter /<slug> */
  seite?: boolean;
}

export const leistungen: Leistung[] = [
  { name: 'Unterhaltsreinigung', slug: 'unterhaltsreinigung', gruppe: 'gebaeudeservice', seite: true },
  { name: 'Büroreinigung', slug: 'bueroreinigung', gruppe: 'gebaeudeservice', seite: true },
  { name: 'Treppenhausreinigung', slug: 'treppenhausreinigung', gruppe: 'gebaeudeservice', seite: true },
  { name: 'Praxisreinigung', slug: 'praxisreinigung', gruppe: 'gebaeudeservice', seite: true },
  { name: 'Hotelreinigung', slug: 'hotelreinigung', gruppe: 'gebaeudeservice' },
  { name: 'Glasreinigung', slug: 'glasreinigung', gruppe: 'gebaeudeservice', seite: true },
  { name: 'Hausmeisterservice', slug: 'hausmeisterservice', gruppe: 'gebaeudeservice', seite: true },
  { name: 'Winterdienst', slug: 'winterdienst', gruppe: 'gebaeudeservice', seite: true },
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

/** Ziel eines Leistungslinks: eigene Seite oder (noch) die Übersicht der Startseite */
export const leistungsHref = (l: Leistung) => (l.seite ? `/${l.slug}` : '/#leistungen');

export const leistungPerSlug = (slug: string) => leistungen.find((l) => l.slug === slug);
