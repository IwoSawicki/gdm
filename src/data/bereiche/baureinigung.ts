/**
 * Baureinigung (bundesweit, Projektgeschäft) — alte Adresse /baureinigung/
 * bleibt erhalten. Landingpage der Kampagne B (Report S. 10).
 * Aussagen aus dem Entwurf: jede Bauphase, nach Bauzeitenplan,
 * deutschlandweit und in Österreich, übergabefertig. Bauphasen laut alter
 * Website. Texte: ENTWURF, siehe docs/ABWEICHUNGEN.md.
 */
import foto from '../../assets/fotos/baureinigung-fensterreinigung.jpg';
import { faqHinweis, faqStandard } from '../leistungen/gemeinsam';
import type { Bereichsseite } from './typ';

export const baureinigung: Bereichsseite = {
  slug: 'baureinigung',
  name: 'Baureinigung',
  keyword: 'baureinigung',
  title: 'Baureinigung deutschlandweit & Österreich | GDM',
  description:
    'Baureinigung für Bauträger, Generalunternehmer und Bauunternehmen: Grob-, Zwischen-, Fein- und Endreinigung nach Bauzeitenplan, deutschlandweit.',
  formularLeistung: 'Baureinigung',

  hero: {
    eyebrow: 'Deutschlandweit · Österreich',
    zeilen: ['Baureinigung', 'deutschlandweit,', 'übergabefertig.'],
    text: 'Baugrob-, Bauzwischen-, Baufein- und Bauendreinigung für Bauträger, Generalunternehmer und Bauunternehmen. Wir reinigen in jeder Bauphase und richten uns nach Ihrem Bauzeitenplan.',
    cta: 'Baureinigung anfragen',
    bild: foto,
    alt: 'Zwei GDM-Mitarbeiter reinigen auf Leitern die Fensterfront eines hellen Neubaus',
    motiv: 'Foto: Neubau kurz vor Übergabe',
    fakten: ['Jede Bauphase', 'Nach Bauzeitenplan', 'Deutschlandweit & Österreich', 'Ein Ansprechpartner'],
  },

  vergleich: {
    eyebrow: '01 — Der Unterschied',
    titel: 'Kennen Sie das?',
    lead: 'Auf der Baustelle zählt der Termin. Wenn die Reinigung nicht sitzt, verschiebt sich die Übergabe – und das kostet.',
    paare: [
      { problem: 'Die Reinigung passt nicht zum Bauablauf und steht anderen Gewerken im Weg.', loesung: 'Wir richten uns nach Ihrem Bauzeitenplan, Bauphase für Bauphase.' },
      { problem: 'Bei der Abnahme fallen Rückstände auf, und es muss nachgereinigt werden.', loesung: 'Endreinigung bis zum übergabefertigen Zustand, mit gemeinsamer Begehung.' },
      { problem: 'Für jede Bauphase braucht es eine andere Firma.', loesung: 'Grob-, Zwischen-, Fein- und Endreinigung aus einer Hand.' },
      { problem: 'Für Baustellen außerhalb der Region findet sich niemand.', loesung: 'Baureinigung deutschlandweit und in Österreich.' },
    ],
  },

  phasen: {
    eyebrow: '02 — Bauphasen',
    titel: 'Wir reinigen in jeder Bauphase',
    lead: 'Einzeln beauftragt oder als Paket über den ganzen Bauablauf – abgestimmt auf Ihren Bauzeitenplan.',
    karten: [
      { titel: 'Baugrobreinigung', text: 'Entfernen von Schutt, Staub und Ablagerungen von Böden, Wänden und Flächen während der Rohbau- und Ausbauphase.' },
      { titel: 'Bauzwischenreinigung', text: 'Reinigung zwischen den Gewerken, damit nachfolgende Arbeiten auf sauberem Untergrund starten.' },
      { titel: 'Baufeinreinigung', text: 'Fenster, Türen, Schalter, Steckdosen und Sanitäranlagen – die Reinigung vor der Abnahme.' },
      { titel: 'Bauendreinigung', text: 'Die letzte, gründliche Reinigung aller Bereiche vor Übergabe oder Inbetriebnahme.' },
    ],
  },

  zusatz: {
    eyebrow: '03 — Sonderreinigung',
    titel: 'Wenn mehr gebraucht wird als die laufende Reinigung',
    lead: 'Projektbezogen, nach Umbau, vor Übergabe oder im laufenden Betrieb.',
    karten: [
      { titel: 'Sonder- & Grundreinigung', text: 'Intensive Reinigung einzelner Flächen, zum Beispiel nach Umbau oder Mieterwechsel.' },
      { titel: 'Fassadenreinigung', text: 'Reinigung von Außenwänden aus Beton, Stein, Klinker und anderen Materialien.' },
      { titel: 'Industriereinigung', text: 'Hallen, Produktions- und Lagerflächen, abgestimmt auf Ihren Betrieb.' },
      { titel: 'Entrümpelung & Montage', text: 'Räumen von Flächen und Montagearbeiten rund um Ihr Projekt.' },
    ],
  },

  zielgruppen: {
    eyebrow: '04 — Für wen',
    titel: 'Für Bauträger, Generalunternehmer und Bauunternehmen',
    lead: 'Für alle, die Bauprojekte termingerecht übergeben müssen.',
    karten: [
      { titel: 'Bauträger', text: 'Wohn- und Gewerbeneubauten bis zur Übergabe an Käufer oder Mieter.' },
      { titel: 'Generalunternehmer', text: 'Reinigung nach Bauzeitenplan, abgestimmt mit allen Gewerken.' },
      { titel: 'Bauunternehmen', text: 'Grob- und Zwischenreinigung während der Bauphase.' },
      { titel: 'Eigentümer & Verwaltungen', text: 'Reinigung nach Sanierung, Umbau oder Renovierung.' },
    ],
  },

  versprechen: {
    eyebrow: '05 — Warum GDM',
    titel: 'Baustellen, übergabefertig gereinigt.',
    punkte: [
      { titel: 'Nach Ihrem Bauzeitenplan', text: 'Wir planen die Reinigung entlang Ihres Bauablaufs und der übrigen Gewerke.' },
      { titel: 'Jede Bauphase aus einer Hand', text: 'Von der Grob- bis zur Endreinigung ein Dienstleister.' },
      { titel: 'Gemeinsame Abnahme', text: 'Zum Abschluss gehen wir mit Ihnen durch das Objekt.' },
      { titel: 'Ein Ansprechpartner', text: 'Direkt erreichbar, ohne Hotline und ohne Ticketsystem.' },
    ],
  },

  ablauf: {
    eyebrow: '06 — Ablauf',
    titel: 'In vier Schritten zur übergabefertigen Baustelle',
    cta: 'Anfrage stellen',
    schritte: [
      { n: '01', titel: 'Anfrage', text: 'Sie schildern Bauvorhaben, Ort, Fläche und gewünschte Termine per Formular oder Telefon.' },
      { n: '02', titel: 'Besichtigung & Angebot', text: 'Wir sehen uns die Baustelle an und erstellen ein schriftliches Angebot je Bauphase.' },
      { n: '03', titel: 'Reinigung nach Plan', text: 'Die Reinigung läuft entlang Ihres Bauzeitenplans, abgestimmt mit den übrigen Gewerken.' },
      { n: '04', titel: 'Abnahme', text: 'Gemeinsame Begehung zum Abschluss. Das Objekt ist übergabefertig.' },
    ],
  },

  gebiet: {
    art: 'bundesweit',
    eyebrow: '07 — Einsatzgebiet',
    titel: 'Deutschlandweit & Österreich',
    lead: 'Für Bauprojekte sind wir bundesweit im Einsatz. Firmensitz ist Lorsch an der Bergstraße.',
    karten: [
      { titel: 'Deutschland', text: 'Baureinigung für Bauprojekte im ganzen Bundesgebiet.' },
      { titel: 'Österreich', text: 'Baureinigung für Projekte in Österreich.' },
      { titel: 'Rhein-Neckar & Rhein-Main', text: 'Kurze Wege vom Firmensitz in Lorsch an der Bergstraße.' },
    ],
  },

  faq: {
    eyebrow: '08 — FAQ',
    titel: 'Fragen zur Baureinigung',
    hinweis: faqHinweis,
    eintraege: [
      { frage: 'In welchen Regionen übernehmen Sie Baureinigungen?', antwort: 'Baureinigungen übernehmen wir deutschlandweit und in Österreich. Unser Firmensitz ist in Lorsch an der Bergstraße.' },
      { frage: 'Welche Bauphasen reinigen Sie?', antwort: 'Alle: Baugrob-, Bauzwischen-, Baufein- und Bauendreinigung. Sie können einzelne Phasen beauftragen oder den ganzen Bauablauf.' },
      { frage: 'Richten Sie sich nach unserem Bauzeitenplan?', antwort: 'Ja. Wir planen die Reinigung entlang Ihres Bauzeitenplans und stimmen uns mit den übrigen Gewerken ab.' },
      { frage: 'Wie setzen sich die Kosten zusammen?', antwort: 'Die Kosten richten sich nach Fläche, Bauphase, Verschmutzung und Terminen. Sie erhalten ein schriftliches Angebot je Bauphase oder für das ganze Projekt.' },
      faqStandard.versicherung,
    ],
  },
};
