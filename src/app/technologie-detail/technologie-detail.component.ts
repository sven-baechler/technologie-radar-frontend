import { Component } from '@angular/core';
import { Technologie } from '../shared/models/technologie';
import { TechnologieService } from '../shared/services/technologie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Kategorie } from '../shared/enums/kategorie';
import { Ring } from '../shared/enums/ring';

@Component({
  selector: 'app-technologie-detail',
  templateUrl: './technologie-detail.component.html',
  styleUrl: './technologie-detail.component.css'
})
export class TechnologieDetailComponent {
    submitted: boolean = false;
    initialRing: Ring = Ring.NotDefined;
    initialBeschreibungEinordnung: string | null = null;
  
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
                this.initialRing = technologie.ring;
                this.initialBeschreibungEinordnung = technologie.beschreibungEinordnung;
            });
        }
    }
    
    onSubmit(data: any) {
        this.submitted = true;

        if (this.beschreibungEinordnungNotSet() || this.beschreibungEinordnungNotEdited() || this.ringNotSet()) {
            return;
        }

        if (this.technologie.id === 0) {
            this.technologieService.saveTechnologie(this.technologie).subscribe((insertId) => {
                this.technologie.id = insertId;
                this.router.navigateByUrl(`administration/${insertId}`);
            });
        }
        else {
            this.technologieService.saveTechnologie(this.technologie).subscribe();
        }
    }
    
    public beschreibungEinordnungNotSet() {
        return this.technologie.publiziert && 
            this.technologie.beschreibungEinordnung === '';
    }

    public beschreibungEinordnungNotEdited() {
        return this.technologie.id !== 0 
            && this.technologie.ring != this.initialRing 
            && this.technologie.beschreibungEinordnung === this.initialBeschreibungEinordnung;
    }

    public ringNotSet() {
        return this.technologie.publiziert 
            && this.technologie.ring == Ring.NotDefined;
    }
}
