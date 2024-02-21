import { Component } from '@angular/core';
import { Technologie } from '../shared/models/technologie';
import { TechnologieService } from '../shared/technologie.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Kategorie } from '../shared/enums/kategorie';
import { Ring } from '../shared/enums/ring';

// TODO-sven: auslagern
interface FormValues {
    name: string,
    email: string
}

@Component({
  selector: 'app-technologie-detail',
  templateUrl: './technologie-detail.component.html',
  styleUrl: './technologie-detail.component.css'
})
export class TechnologieDetailComponent {
    public technologie: Technologie | null = null;

    constructor(
        private technologieService: TechnologieService,
        private route: ActivatedRoute
    ) {}

    // TODO-sven: reactive forms

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));

        if (id === 0) {
            let newTechnologie: Technologie = {
                id: 0,
                name: '',
                kategorie: Kategorie.LanguagesFrameworks, // TODO-sven: default wert?
                ring: Ring.NotDefined,
                beschreibungTechnologie: '',
                beschreibungEinordnung: '',
                publiziert: false,
                publikationsDatum: new Date()
            };
            this.technologie = newTechnologie;
        }
        else {
            this.technologieService.getTechnologie(id).subscribe((technologie) => {
                this.technologie = technologie;
                console.log(this.technologie);
            });
        }
    }

    saveTechnologie() {
        this.technologieService.addTechnologie(this.technologie).subscribe((technologie) => {
            this.technologie = technologie;
        });
    }
}
