import { Component } from '@angular/core';
import { Technologie } from '../shared/models/technologie';
import { TechnologieService } from '../shared/technologie.service';
import { ActivatedRoute, Router } from '@angular/router';
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
        publikationsDatum: null
    };

    constructor(
        private technologieService: TechnologieService,
        private route: ActivatedRoute,
        private router: Router
    ) {}
    
    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        if (id !== 0) {
            this.technologieService.getTechnologie(id).subscribe((technologie) => {
                this.technologie = technologie;
            });
        }
    }
    
    onSubmit(data: Technologie) {
        this.submitted = true;
        if (this.technologie.id === 0) {
            this.technologieService.saveTechnologie(this.technologie).subscribe((insertId) => {
                this.technologie.id = insertId;
                this.router.navigateByUrl(`administration/${insertId}`);
            });
        }
        else {
            // TODO-sven: return wert von backend --> this.technologie anpassen
            this.technologieService.saveTechnologie(this.technologie).subscribe((result) => {
                // TODO-sven: gibt keinen insertId zurück --> ignorieren
                console.log(result);
            });

            /*
            this.technologieService.updateTechnologie(this.technologie);
            console.log(this.technologie);
            */
        }
    }    
}
