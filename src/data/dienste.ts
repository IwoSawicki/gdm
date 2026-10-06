/**
 * Externe Dienste. Wer hier etwas ergänzt, ergänzt gleichzeitig die
 * Datenschutzerklärung (src/data/rechtstexte/datenschutz.html).
 */
export const dienste = {
  /** Formularversand über Web3Forms. Der Zugangsschlüssel ist öffentlich
   *  (steht im Formular) und an die Empfängeradresse gebunden — zum Testen
   *  iwo@stolz-marketing.de, vor dem Livegang auf GDM umstellen. */
  web3forms: {
    endpunkt: 'https://api.web3forms.com/submit',
    zugangsschluessel: '',
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
