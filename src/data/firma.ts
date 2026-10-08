/**
 * Eckdaten von GDM — EINE Quelle für Header, Footer, Formular,
 * Impressum und JSON-LD. Nirgends sonst abtippen.
 */
export const firma = {
  name: 'GDM Gebäude Dienstleistung Management',
  kurzname: 'GDM',
  inhaber: 'Taha Ali',
  rolle: 'Inhaber',
  strasse: 'Kolpingstr. 44',
  plz: '64653',
  ort: 'Lorsch',
  land: 'DE',
  email: 'info@service-gdm.de',
  telefon: '06251 / 826619-0',
  /** für tel:-Links und JSON-LD */
  telefonLink: '+4962518266190',
  /** Quelle: Impressum der alten Website (Stand 05.10.2026) */
  ustId: 'DE362377341',
  domain: 'https://service-gdm.de',
  google: {
    /** Stand Entwurf v4 — bei neuen Bewertungen hier pflegen */
    sterne: '5,0',
    anzahl: 14,
  },
} as const;

/** Setzt {{name}}, {{inhaber}}, {{strasse}}, {{plz}}, {{ort}}, {{telefon}},
 *  {{telefonLink}}, {{email}}, {{ustId}} in Rechtstexte (HTML) ein — damit die
 *  Eckdaten auch dort nur aus dieser Datei kommen. */
export const eckdatenEinsetzen = (html: string) =>
  html.replace(/\{\{(\w+)\}\}/g, (treffer, schluessel: string) => {
    const wert = (firma as Record<string, unknown>)[schluessel];
    if (typeof wert !== 'string') throw new Error(`Unbekannter Platzhalter ${treffer} im Rechtstext`);
    return wert;
  });

export const adresseEinzeilig = `${firma.strasse}, ${firma.plz} ${firma.ort}`;
export const telHref = `tel:${firma.telefonLink}`;
export const mailHref = `mailto:${firma.email}`;
