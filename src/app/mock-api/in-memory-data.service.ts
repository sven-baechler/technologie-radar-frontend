import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Technologie } from '../shared/models/technologie';
import { Kategorie } from '../shared/enums/kategorie';
import { Ring } from '../shared/enums/ring';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

    createDb() {
        const technologien: Technologie[] = [
            { id: 1, name: 'Angular', kategorie: Kategorie.Techniques, ring: Ring.Assess, beschreibungTechnologie: 'Angular Beschreibung', beschreibungEinordnung: 'Beschreibung Einordnung Angular', publiziert: false, publikationsDatum: new Date() },
            { id: 2, name: 'C#', kategorie: Kategorie.Tools, ring: Ring.Trial, beschreibungTechnologie: 'C# Beschreibung', beschreibungEinordnung: 'Beschreibung Einordnung C#', publiziert: false, publikationsDatum: new Date() },
            { id: 3, name: 'HTML', kategorie: Kategorie.Platforms, ring: Ring.Adopt, beschreibungTechnologie: 'HTML Beschreibung', beschreibungEinordnung: 'Beschreibung Einordnung HTML', publiziert: false, publikationsDatum: new Date() },
            { id: 4, name: 'CSS', kategorie: Kategorie.LanguagesFrameworks, ring: Ring.Hold, beschreibungTechnologie: 'CSS Beschreibung', beschreibungEinordnung: 'Beschreibung Einordnung CSS', publiziert: false, publikationsDatum: new Date() }
        ];

        return { technologien };
    }
}
