/**
 * Alle fertigen Leistungsseiten. Neue Seite: Datei anlegen, hier eintragen,
 * im Katalog (katalog.ts) `seite: true` setzen.
 */
import { bueroreinigung } from './bueroreinigung';
import type { Leistungsseite } from './typ';

export const leistungsseiten: Leistungsseite[] = [bueroreinigung];
