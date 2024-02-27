import { Kategorie } from "../enums/kategorie";
import { Ring } from "../enums/ring";

export interface Technologie {
    id: number;
    name: string;
    kategorie: Kategorie;
    ring: Ring;
    beschreibungTechnologie: string;
    beschreibungEinordnung: string | null;
    publiziert: boolean;
    publikationsDatum: Date | null;
}
