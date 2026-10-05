/**
 * Alle fertigen Leistungsseiten. Neue Seite: Datei anlegen, hier eintragen,
 * im Katalog (katalog.ts) `seite: true` setzen.
 */
import { bueroreinigung } from './bueroreinigung';
import { glasreinigung } from './glasreinigung';
import { hausmeisterservice } from './hausmeisterservice';
import { praxisreinigung } from './praxisreinigung';
import { treppenhausreinigung } from './treppenhausreinigung';
import { unterhaltsreinigung } from './unterhaltsreinigung';
import { winterdienst } from './winterdienst';
import type { Leistungsseite } from './typ';

export const leistungsseiten: Leistungsseite[] = [
  bueroreinigung,
  unterhaltsreinigung,
  treppenhausreinigung,
  praxisreinigung,
  glasreinigung,
  hausmeisterservice,
  winterdienst,
];
