/**
 * Setzt weiche Trennzeichen (U+00AD) an echten Wortfugen langer deutscher
 * Komposita („Treppenhaus|reinigung", „Wohnungs|unternehmen"), damit sie auf
 * 320px umbrechen statt seitliches Scrollen auszulösen. Bewusst kein
 * `overflow-wrap: break-word` und kein `hyphens: auto` (Wörterbücher fehlen
 * in manchen Browsern) — siehe CLAUDE.md, Fallgrube 9.
 *
 * Nur für Anzeige-Texte verwenden, nicht für JSON-LD oder Formularwerte.
 */
const FUGEN = [
  'reinigung', 'service', 'dienst', 'unternehmen', 'unternehmer', 'anforderungen', 'verwaltungen',
  'verwaltung', 'pflege', 'management', 'betreuung', 'kontrolle', 'verzeichnis',
];
const MINDESTLAENGE = 13;

export const weichTrennen = (text: string) =>
  text.replace(/[A-Za-zÄÖÜäöüß]+/g, (wort) => {
    if (wort.length < MINDESTLAENGE) return wort;
    const klein = wort.toLowerCase();
    for (const fuge of FUGEN) {
      const i = klein.lastIndexOf(fuge);
      // Fuge nicht am Wortanfang und vorne mindestens 4 Buchstaben
      if (i >= 4) return `${wort.slice(0, i)}­${wort.slice(i)}`;
    }
    return wort;
  });
