/**
 * Externe Dienste. Wer hier etwas ergänzt, ergänzt gleichzeitig die
 * Datenschutzerklärung (src/data/rechtstexte/datenschutz.html).
 */
export const dienste = {
  /** Formularversand über Web3Forms — dasselbe Verfahren wie bei Stolz
   *  Marketing. Der Zugangsschlüssel ist ein öffentlicher Formularschlüssel,
   *  kein Geheimnis: Er steht als verstecktes Feld im HTML und legt nur fest,
   *  an welche Adresse Web3Forms die Anfrage schickt.
   *  AKTUELL: Schlüssel von Stolz Marketing (Eingang iwo@stolz-marketing.de)
   *  für die Testphase. Vor dem Livegang durch einen eigenen GDM-Schlüssel
   *  (Empfänger info@service-gdm.de) ersetzen — siehe docs/GOLIVE.md. */
  web3forms: {
    endpunkt: 'https://api.web3forms.com/submit',
    zugangsschluessel: 'e1ef8886-9026-40a1-9a3e-d130c209d607',
  },
  /** Google Analytics 4 — NUR nach Einwilligung im Cookie-Banner und nur auf
   *  der Produktionsdomain. Vorher wird kein Skript geladen, kein Cookie gesetzt. */
  googleAnalytics: {
    id: 'G-1PP556MRYB',
    domains: ['service-gdm.de', 'www.service-gdm.de'],
  },
  /** Umami (cookielos, ohne Einwilligung). Lädt nur auf der Produktionsdomain. */
  umami: {
    skript: 'https://analytics.stolz-marketing.de/script.js',
    websiteId: 'b249daba-0c0d-40a3-af38-806c16569829',
    domains: 'service-gdm.de',
  },
} as const;
