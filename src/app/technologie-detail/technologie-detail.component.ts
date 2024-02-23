import { Component } from '@angular/core';
import { Technologie } from '../shared/models/technologie';
import { TechnologieService } from '../shared/technologie.service';
import { ActivatedRoute } from '@angular/router';
import { Kategorie } from '../shared/enums/kategorie';
import { Ring } from '../shared/enums/ring';

@Component({
  selector: 'app-technologie-detail',
  templateUrl: './technologie-detail.component.html',
  styleUrl: './technologie-detail.component.css'
})
export class TechnologieDetailComponent {
    submitted = false;
  
    public technologie: Technologie = {
        id: 0,
        name: '',
        kategorie: Kategorie.LanguagesFrameworks,
        ring: Ring.NotDefined,
        beschreibungTechnologie: '',
        beschreibungEinordnung: null,
        publiziert: false,
        publikationsDatum: new Date()
    };

    constructor(
        private technologieService: TechnologieService,
        private route: ActivatedRoute
    ) {}

    onSubmit(data: Technologie) {
        this.submitted = true;
        if (this.technologie.id === 0) {
            this.technologieService.addTechnologie(this.technologie);
            console.log(this.technologie);
            /*
            // TODO-sven: return added object from backend?
            this.technologieService.addTechnologie(this.technologie).subscribe((technologie) => {
                this.technologie = technologie;
                console.log(this.technologie);
            });
            */
        }
        else {
            this.technologieService.updateTechnologie(this.technologie);
            console.log(this.technologie);
            /*
            // TODO-sven: return added object from backend?
            this.technologieService.updateTechnologie(this.technologie).subscribe((technologie) => {
                this.technologie = technologie;
                console.log(this.technologie);
            });
            */
        }
    }    

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        if (id !== 0) {
            this.technologieService.getTechnologie(id).subscribe((technologie) => {
                this.technologie = technologie;
                console.log(this.technologie);
            });
        }
    }
}
