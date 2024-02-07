import { Kategorie } from "../enums/kategorie";
import { Ring } from "../enums/ring";

export class Technologie {
    constructor(name: string, kategorie: Kategorie, ring: Ring = Ring.NotDefined, beschreibungTechnologie: string, beschreibungEinordnung: string = '') {
        this.name = name;
        this.kategorie = kategorie;
        this.ring = ring;
        this.beschreibungTechnologie = beschreibungTechnologie;
        this.beschreibungEinordnung = beschreibungEinordnung;
    }

    private name: string;
    private kategorie: Kategorie;
    private ring: Ring;
    private beschreibungTechnologie: string;
    private beschreibungEinordnung: string;
}
