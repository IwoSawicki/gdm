import { leistungenNachGruppe, leistungsHref, type Leistung } from './leistungen/katalog';

export interface NavLink {
  text: string;
  href: string;
  /** Seite existiert noch nicht → im Footer ausgegraut, nicht klickbar */
  nochNicht?: boolean;
  /** öffnet in neuem Tab mit rel="noopener" */
  extern?: boolean;
}

/** Zentrales Ziel aller „Angebot anfordern"-CTAs: das Anfrageformular am Ende
 *  jeder Seite. Seiten ohne Formular (Rechtstexte, 404) verlinken auf die
 *  Startseite (BaseLayout-Prop `mitAnfrage={false}`). */
export const anfrageZiel = '#anfrage';
export const anfrageZielStartseite = '/#anfrage';

/** Hauptnavigation (Kopfzeile und mobiles Menü) */
export const hauptnavigation: NavLink[] = [
  { text: 'Leistungen', href: '/#leistungen' },
  { text: 'Über uns', href: '/#warum' },
  { text: 'Ablauf', href: '/#ablauf' },
  { text: 'Einsatzgebiet', href: '/#gebiet' },
  { text: 'Referenzen', href: '/#referenzen' },
  { text: 'Baureinigung', href: '/baureinigung' },
];

const zuLink = (l: Leistung): NavLink => ({ text: l.name, href: leistungsHref(l) });

export interface FooterSpalte {
  titel: string;
  links: NavLink[];
}

/** Footer-Spalten. Die dritte Spalte trägt zwei Gruppen untereinander. */
export const footerSpalten: FooterSpalte[][] = [
  [{ titel: 'Gebäudeservice', links: leistungenNachGruppe('gebaeudeservice').map(zuLink) }],
  [{ titel: 'Baureinigung', links: leistungenNachGruppe('baureinigung').map(zuLink) }],
  [
    {
      titel: 'Einsatzgebiet',
      links: [
        { text: 'Gebäudeservice Rhein-Neckar', href: '/gebaeudereinigung' },
        { text: 'Baureinigung Deutschland', href: '/baureinigung' },
        { text: 'Baureinigung Österreich', href: '/baureinigung#gebiet' },
      ],
    },
    {
      titel: 'Unternehmen',
      links: [
        { text: 'Über uns', href: '/#warum' },
        { text: 'Referenzen', href: '/#referenzen' },
        { text: 'Ablauf', href: '/#ablauf' },
        { text: 'FAQ', href: '/#faq' },
        { text: 'Karriere', href: '/karriere', nochNicht: true },
      ],
    },
  ],
];

export const rechtlicheLinks: NavLink[] = [
  { text: 'Impressum', href: '/impressum' },
  { text: 'Datenschutz', href: '/datenschutz' },
];

export const credit: NavLink = {
  text: 'Stolz Marketing',
  href: 'https://stolz-marketing.de',
  extern: true,
};
