/**
 * Externe Dienste. Wer hier etwas ergänzt, ergänzt gleichzeitig die
 * Datenschutzerklärung (src/data/rechtstexte/datenschutz.html).
 */
export const dienste = {
  /** Formularversand über FormSubmit.co — wie bei Memoria und HEPA Bau.
   *  Kein Schlüssel nötig: Beim ersten Absenden an eine neue Adresse schickt
   *  FormSubmit eine Aktivierungs-Mail, die einmal bestätigt wird. Danach
   *  kann statt der Adresse der Hash aus der Aktivierungs-Mail stehen (schützt
   *  die Adresse vor Spam-Bots).
   *  AKTUELL: Testphase an iwo@stolz-marketing.de. Vor dem Livegang auf
   *  info@service-gdm.de umstellen und dort aktivieren (docs/GOLIVE.md). */
  formsubmit: {
    ziel: 'iwo@stolz-marketing.de',
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
