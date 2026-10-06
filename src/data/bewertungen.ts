/**
 * Echte Bewertungen (Google-Unternehmensprofil und MyHammer), Stand
 * 06.10.2026, geliefert von Iwo. Texte WÖRTLICH — nicht korrigieren oder
 * kürzen. Bei Google mit „… Mehr" gekürzte Bewertungen nur, wenn der
 * sichtbare Text ein vollständiger Satz ist. Jahr statt „vor X Monaten",
 * damit nichts veraltet. Alle 5/5.
 *
 * Nicht übernommen: Alina, Eva Evita (Text abgeschnitten), Ansophie Strydom
 * (englisch, abgeschnitten), Justin-Joshua Sauer (enthält „dauerte länger"),
 * Dennis Rosolen, adi (ohne Text).
 */
export interface Bewertung {
  /** angezeigter Name (Vorname + Initial) */
  name: string;
  quelle: 'Google' | 'MyHammer';
  jahr: number;
  text: string;
  /** Leistungsseiten, auf denen diese Bewertung zuerst gezeigt wird */
  passtZu?: string[];
}

export const bewertungen: Bewertung[] = [
  { name: 'Eric U.', quelle: 'Google', jahr: 2023, text: 'Bin sehr zufrieden mit meiner regelmäßigen Büro Reinigung top Qualität 🙏nur zum weiterempfehlen', passtZu: ['bueroreinigung', 'unterhaltsreinigung', 'gebaeudereinigung'] },
  { name: 'Kunde via MyHammer', quelle: 'MyHammer', jahr: 2026, text: 'Alles perfekt erledigt wie abgemacht. Folgeauftrag wird erteilt.', passtZu: ['baureinigung'] },
  { name: 'Anna M.', quelle: 'Google', jahr: 2026, text: 'Auf meine kurzfristige Anfrage vor dem Wochenende wurde schnell reagiert und donnerstags war ein Mitarbeiter da. Bin sehr zufrieden.' },
  { name: 'Marina H.', quelle: 'Google', jahr: 2026, text: 'Super schnelle Preisangabe reibungsloser Ablauf sehr freundlich am Telefon der junge Mann und Vorort wurde alles Mega gut gereinigt habe nichts zu beanstanden Vielen Dank gerne weiterempfehlen' },
  { name: 'Ahmad A.', quelle: 'Google', jahr: 2023, text: 'Die Reinigungsfirma GDM hat meine Erwartungen übertroffen. Freundliches Personal, gründliche Reinigung und hervorragender Kundenservice. Sehr empfehlenswert!' },
  { name: 'Kunde via MyHammer', quelle: 'MyHammer', jahr: 2026, text: 'Freundlicher Kontakt, zuverlässig und sehr flexibel. Kann ich nur empfehlen. Vielen Dank. Gerne wieder.' },
  { name: 'Amn C.', quelle: 'Google', jahr: 2023, text: 'Engagiertes und sauberes Arbeiten! Bin mit dem vielfältigem Dienstleistungspaket sehr zufrieden. Gerne wieder', passtZu: ['hausmeisterservice', 'gebaeudereinigung'] },
  { name: 'Anchal', quelle: 'Google', jahr: 2024, text: 'Ich bin wirklich positiv von der professionellen und kompetenten Arbeit der Firma GDM überrascht. Kann ich wirklich nur an jeden weiterempfehlen!' },
  { name: 'Manan S.', quelle: 'Google', jahr: 2025, text: 'Sehr zuverlässige Firma und erstklassige Arbeit.' },
  { name: 'Sou Z.', quelle: 'Google', jahr: 2025, text: 'Super Betrieb alle sehr hilfreich und top Preise immer wieder gerne!' },
];

/** Bewertungen für eine Seite: passende zuerst, dann der Rest in fester Reihenfolge */
export const bewertungenFuer = (slug?: string, anzahl = bewertungen.length) =>
  [...bewertungen]
    .sort((a, b) => Number(b.passtZu?.includes(slug ?? '') ?? false) - Number(a.passtZu?.includes(slug ?? '') ?? false))
    .slice(0, anzahl);

/** Initialen für den Kreis: „Anna M." → „AM", „Kunde via MyHammer" → „MH" */
export const initialen = (b: Bewertung) =>
  b.quelle === 'MyHammer' && b.name.startsWith('Kunde')
    ? 'MH'
    : b.name.replace('.', '').split(' ').map((t) => t[0]?.toUpperCase()).join('').slice(0, 2);
