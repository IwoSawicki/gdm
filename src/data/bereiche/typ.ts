import type { AkkordeonEintrag } from '../../components/blocks/Akkordeon.astro';
import type { Schritt } from '../../components/blocks/Schritte.astro';
import type { Karte, Leistungsseite } from '../leistungen/typ';

interface KartenSektion {
  eyebrow: string;
  titel: string;
  lead: string;
  karten: Karte[];
}

/**
 * Übersichtsseite eines Geschäftsbereichs (/gebaeudereinigung, /baureinigung).
 * Zugleich Landingpage der jeweiligen Google-Ads-Kampagne.
 */
export interface Bereichsseite {
  slug: string;
  /** Name in Brotkrumen und Schema */
  name: string;
  keyword: string;
  /** ≤ 60 Zeichen */
  title: string;
  /** ≤ 155 Zeichen */
  description: string;
  formularLeistung: string;
  hero: Leistungsseite['hero'];
  /** Kacheln der Leistungsseiten dieses Bereichs (Slugs aus dem Katalog) */
  leistungen?: { eyebrow: string; titel: string; lead: string; slugs: string[]; weitere: string[] };
  /** Bauphasen o. Ä. als nummerierte Karten (dunkel) */
  phasen?: KartenSektion;
  vergleich: Leistungsseite['vergleich'];
  zielgruppen: KartenSektion;
  /** weitere Leistungen ohne eigene Seite (sand) */
  zusatz?: KartenSektion;
  versprechen: { eyebrow: string; titel: string; punkte: Karte[] };
  ablauf: { eyebrow: string; titel: string; cta: string; schritte: Schritt[] };
  gebiet: ({ art: 'regional' } & { eyebrow: string; text: string }) | ({ art: 'bundesweit' } & KartenSektion);
  faq: { eyebrow: string; titel: string; hinweis: string; eintraege: AkkordeonEintrag[] };
}
