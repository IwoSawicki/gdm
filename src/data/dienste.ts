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
  /** Umami (cookielos, ohne Einwilligung). Lädt nur auf der Produktionsdomain. */
  umami: {
    skript: '',
    websiteId: '',
    domains: 'service-gdm.de',
  },
} as const;
