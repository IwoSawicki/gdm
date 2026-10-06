import type { ImageMetadata } from 'astro';
import type { AkkordeonEintrag } from '../../components/blocks/Akkordeon.astro';
import type { Schritt } from '../../components/blocks/Schritte.astro';

export interface Karte {
  titel: string;
  text: string;
}

/**
 * Gemeinsamer Typ aller Leistungsseiten. Eine neue Leistung = eine Datei in
 * src/data/leistungen/<slug>.ts + Eintrag in index.ts — kein neues Markup.
 */
export interface Leistungsseite {
  /** Adresse /<slug> — muss im Katalog stehen (katalog.ts) */
  slug: string;
  /** Haupt-Keyword (je Seite nur eins, keine Dopplungen) */
  keyword: string;
  /** ≤ 60 Zeichen */
  title: string;
  /** ≤ 155 Zeichen */
  description: string;
  /** Ein Satz für Kacheln auf Übersichtsseiten */
  kurz: string;
  /** Option im Anfrageformular, die vorausgewählt wird */
  formularLeistung: string;
  hero: {
    eyebrow: string;
    /** H1 in Zeilen; die letzte Zeile ist gold */
    zeilen: string[];
    text: string;
    cta: string;
    bild?: ImageMetadata;
    alt?: string;
    motiv: string;
    /** kurze Versprechen in der Leiste unter dem Hero */
    fakten: string[];
  };
  /** „Kennen Sie das?" — typische Probleme mit dem bisherigen Dienstleister und unsere Antwort */
  vergleich: { eyebrow: string; titel: string; lead: string; paare: { problem: string; loesung: string }[] };
  umfang: { eyebrow: string; titel: string; lead: string; gruppen: { titel: string; punkte: string[] }[] };
  turnus: { eyebrow: string; titel: string; lead: string; karten: Karte[] };
  zielgruppen: { eyebrow: string; titel: string; lead: string; karten: Karte[] };
  versprechen: { eyebrow: string; titel: string; punkte: Karte[] };
  ablauf: { eyebrow: string; titel: string; cta: string; schritte: Schritt[] };
  preis: { eyebrow: string; titel: string; lead: string; karten: Karte[] };
  einsatzgebiet: { eyebrow: string; text: string };
  faq: { eyebrow: string; titel: string; hinweis: string; eintraege: AkkordeonEintrag[] };
  /** Slugs verwandter Leistungen aus dem Katalog */
  verwandt: string[];
}
