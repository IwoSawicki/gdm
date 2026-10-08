/**
 * Zusagen mit Zahl — EINE Quelle für Startseite, Leistungsseiten und
 * Anfrageformular. Die Werte muss GDM liefern (docs/GOLIVE.md).
 *
 * Solange ein Wert `null` ist, erscheint der Satz ohne Zahl, statt „[X]“
 * auf der Seite zu zeigen. Sobald GDM die Zahl nennt: hier eintragen,
 * alle Stellen ziehen nach. (docs/ABWEICHUNGEN.md, Nr. 32)
 */
export const zusagen = {
  /** „Wir melden uns innerhalb von … Werktagen“ */
  antwortWerktage: null as number | null,
  /** „Reklamationen bearbeiten wir innerhalb von … Stunden“ */
  reklamationStunden: null as number | null,
  /** Vertragslaufzeit laufender Leistungen in Monaten */
  laufzeitMonate: null as number | null,
  /** Kündigungsfrist in Wochen */
  kuendigungWochen: null as number | null,
  /** Deckungssumme der Betriebshaftpflicht in Mio. € (z. B. '3' oder '5') */
  deckungMio: null as string | null,
};

const { antwortWerktage, reklamationStunden, laufzeitMonate, kuendigungWochen, deckungMio } = zusagen;

/** Rückmeldung nach einer Anfrage, z. B. „innerhalb von 2 Werktagen“ / „zeitnah“ */
export const rueckmeldung = antwortWerktage ? `innerhalb von ${antwortWerktage} Werktag${antwortWerktage === 1 ? '' : 'en'}` : 'zeitnah';

export const reklamationSatz = reklamationStunden
  ? `Reklamationen bearbeiten wir innerhalb von ${reklamationStunden} Stunden.`
  : 'Reklamationen bearbeiten wir umgehend.';

/** @param gegenstand z. B. „für die Unterhaltsreinigung“ oder „für laufende Leistungen“ */
export const laufzeitSatz = (gegenstand: string) =>
  laufzeitMonate && kuendigungWochen
    ? `Verträge ${gegenstand} schließen wir mit einer Laufzeit von ${laufzeitMonate} Monaten und einer Kündigungsfrist von ${kuendigungWochen} Wochen ab.`
    : `Laufzeit und Kündigungsfrist der Verträge ${gegenstand} stehen vorab im schriftlichen Angebot und werden gemeinsam festgelegt.`;

export const versicherungSatz = deckungMio
  ? `GDM verfügt über eine Betriebshaftpflichtversicherung mit einer Deckungssumme von ${deckungMio} Mio. €. Einen Nachweis senden wir Ihnen auf Anfrage zu.`
  : 'GDM verfügt über eine Betriebshaftpflichtversicherung. Einen Nachweis senden wir Ihnen auf Anfrage zu.';
