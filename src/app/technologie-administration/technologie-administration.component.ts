import { Component } from '@angular/core';
import { TechnologieService } from '../shared/technologie.service';
import { Technologie } from '../shared/models/technologie';

@Component({
    selector: 'app-technologie-administration',
    templateUrl: './technologie-administration.component.html',
    styleUrl: './technologie-administration.component.css'
})
export class TechnologieAdministrationComponent {
    public technologien: Technologie[] = [];

    constructor(private technologieService: TechnologieService) {}

    ngOnInit(): void {
        this.technologieService.getTechnologien().subscribe((technologien) => {
            this.technologien = technologien;
        });
    }
}
