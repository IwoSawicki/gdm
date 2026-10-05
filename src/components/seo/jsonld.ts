/** Bausteine für strukturierte Daten (nur Angaben, die sichtbar auf der Seite stehen) */
import type { AkkordeonEintrag } from '../blocks/Akkordeon.astro';
import { firma } from '../../data/firma';

export const faqJsonLd = (eintraege: AkkordeonEintrag[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: eintraege.map((e) => ({
    '@type': 'Question',
    name: e.frage,
    acceptedAnswer: { '@type': 'Answer', text: e.antwort },
  })),
});

export interface Krume {
  text: string;
  href: string;
}
export const breadcrumbJsonLd = (pfad: Krume[], site: URL) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: pfad.map((k, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: k.text,
    item: new URL(k.href, site).href,
  })),
});

export const dienstJsonLd = (name: string, beschreibung: string, url: string, gebiet: string[], site: URL) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description: beschreibung,
  url,
  provider: { '@id': `${site.origin}/#unternehmen`, name: firma.name },
  areaServed: gebiet.map((o) => ({ '@type': 'City', name: o })),
});
