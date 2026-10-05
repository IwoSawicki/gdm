# Design-System

Einzige Quelle: `@theme` in `src/styles/global.css`. Live-Übersicht aller
Werte: `/styleguide` (liest die Tokens direkt aus der CSS-Datei).
Tailwind-Standardwerte sind entfernt — `bg-blue-500`, `text-lg` gibt es nicht.

## Grundregeln
- `--spacing: 1px` → `p-40` = 40 px.
- Schriftgrößen fest nach px (`text-17`), fluide als Rollen (`text-h2`).
- Zeilenhöhe separat: `leading-155` = 1.55, `leading-normal` = normal.
- Laufweiten: `tracking-n040` = −0.04em, `tracking-p010` = +0.1em.
- Einziger Breakpoint: `nav:` = ab 1080 px (Entwurf: < 1080 = mobil).

## Farben (Rolle → Wert)
| Token | Wert | Verwendung |
|---|---|---|
| `ink` | #1A1A19 | Text, dunkle Sektionen, Primärbutton |
| `ink-hover` | #383734 | Hover dunkler Buttons |
| `paper` / `white` | #FFF | Grund / Weiß auf Dunkel |
| `sand` | #F5F3EE | helle Sektionen, Leistungs-Hover |
| `sand-card` | #EFECE5 | Bento-Karten |
| `sand-menu` | #EFECE6 | Linien Mobilmenü |
| `sand-avatar` | #F1EEE7 | Initialen Kundenstimme |
| `sand-input` | #F8F7F3 | Formularfelder |
| `sand-hover` | #EDEAE3 | Hover heller Hero-Button |
| `sand-quote` | #ECE9E2 | Linie Kundenstimme |
| `sand-schrift` | #EAE6DE | „GDM Service" im Footer |
| `line` | #E7E3DA | Linien auf Hell |
| `line-strong` | #DDD8CE | Konturbuttons, FAQ, Felder |
| `stone` | #D9D5CC | heller Text auf Dunkel |
| `manifest-aus` | #D4CFC4 | Manifest-Wörter vor dem Einfärben |
| `mute-on-dark` | #BDB9B0 | Fließtext auf Dunkel |
| `mute-on-dark-2` | #A9A59C | Labels/Leads auf Dunkel |
| `mute-bento` | #9C988F | Bento D Nachsatz |
| `dim-on-dark` | #8A867E | Nummern, Hinweise auf Dunkel |
| `label` | #6A665E | Mono-Labels auf Hell |
| `muted` | #57534C | Fließtext auf Hell |
| `quote` | #3C3A36 | Zitattext |
| `line-dark` | #3A3936 | Linien auf Dunkel |
| `pill-dark` | #3E3D39 | Pill-Kontur auf Dunkel |
| `arrow-dark` | #55534E | Pfeilkachel-Kontur auf Dunkel |
| `gold` | #C9A965 | Akzent |
| `gold-hover` | #BD9C56 | Hover Gold-Buttons |
| `gold-icon` | #9A7329 | Zielgruppen-Icons |
| `gold-text` | #8C6A28 | Link-Hover Footer |
Transparenzen über Modifier (`bg-ink/45`, `border-white/30`).

## Fluide Schriftrollen
| Token | Kurve | Wo |
|---|---|---|
| `hero` | clamp(36px,5.8vw,96px) | Hero-Zeilen |
| `hero-lead` | clamp(17px,1.4vw,20px) | Hero-Text, Anfrage-Lead |
| `hero-cta` / `hero-tel` | clamp(15px,1.2vw,17px) / clamp(15px,1.3vw,18px) | Hero-Buttons |
| `laufband` | clamp(28px,3.6vw,56px) | Laufband |
| `manifest` | clamp(30px,4.4vw,72px) | Unser Anspruch |
| `h2` | clamp(34px,4.4vw,64px) | Sektionsüberschriften |
| `h3-karte` | clamp(26px,2.4vw,34px) | Geschäftsbereiche |
| `leistung` | clamp(24px,3vw,46px) | Leistungsliste Desktop |
| `bento-a` / `-b` / `-d` | clamp(24,2.2vw,32) / (22,1.9vw,28) / (22,2.2vw,32) | Bento |
| `bewertung` / `-gross` | clamp(56px,5.6vw,88px) / clamp(64px,6vw,96px) | „5,0" |
| `schritt` | clamp(72px,8vw,136px) | Ablauf-Nummern |
| `referenz` | clamp(22px,2vw,28px) | Referenztitel |
| `gebiet` / `-lead` / `-zeile` | clamp(44,9.4vw,156) / (18,1.5vw,22) / (15,1.3vw,18) | Einsatzgebiet |
| `faq` | clamp(19px,1.7vw,24px) | FAQ-Fragen |
| `anfrage` | clamp(52px,8vw,136px) | „Angebot anfordern" |
| `kontakt` / `credit` | clamp(17,1.5vw,20) / (18,1.6vw,22) | Footer |

## Abstände
- `content` 1440px, `page-x` clamp(20px,4vw,56px), `section-y` clamp(80px,10vw,144px),
  `kopf` 84px, `hero-min` clamp(680px,100svh,1000px), `buehne` (Karussell-Einzug),
  `leistung-hero-min` clamp(640px,92svh,980px) (Leistungs-Hero, eigene Ergänzung).
- Fluide Abstände `f<min>-<max>` (z. B. `gap-f16-32` = clamp(16px,2vw,32px)); bei
  gleicher Spanne mit anderer Kurve Zusatz im Namen (`f32-48` vs. `f32-48-mt`).
- Kartenbreiten `karte-referenz` min(84vw,600px), `karte-stimme` min(80vw,340px).

## Raster
- `raster-<min>`: `repeat(auto-fit, minmax(min(100%, <min>px), 1fr))` — Mindestbreiten
  170/180/200/220/260/280/380/420/440.
- Feste Spalten: `spalten-leistungs-hero` (Text | Kurzformular 460px, eigene Ergänzung), `spalten-leistung`, `spalten-gebiet`, `spalten-bento`, `spalten-leiste`.

## Radien
8, 10, 14, 18, 20, 24, 28, `pill` (999px).

## Bewegung
- Easing `ease-gdm` cubic-bezier(.2,.8,.2,1); Kopfzeile `ease-kopf` cubic-bezier(.2,.7,.2,1).
- Einblenden: 0,8 s / 32 px / Verzögerung × 0,8 (mobil 0,38 s / 14 px / × 0,25).

## Schriften
`public/fonts/` — Geist und Geist Mono (Variable, latin + latin-ext), Material
Symbols reduziert. Neues Icon: `IconName` in `Icon.astro` erweitern und die Datei neu
laden über
`https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,300,0..1,0&icon_names=<alphabetisch,kommagetrennt>`
(woff2-URL aus der CSS-Antwort, mit Browser-User-Agent abrufen).
