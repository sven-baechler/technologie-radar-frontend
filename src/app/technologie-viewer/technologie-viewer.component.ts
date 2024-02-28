import { Component } from '@angular/core';
import { Technologie } from '../shared/models/technologie';
import { TechnologieService } from '../shared/services/technologie.service';

@Component({
  selector: 'app-technologie-viewer',
  templateUrl: './technologie-viewer.component.html',
  styleUrl: './technologie-viewer.component.css'
})
export class TechnologieViewerComponent {
    public publishedTechnologien: Technologie[] = [];

    constructor(private technologieService: TechnologieService) {}

    ngOnInit(): void {
        this.technologieService.getPublishedTechnologien().subscribe((publishedTechnologien) => {
            this.publishedTechnologien = publishedTechnologien;
        });
    }
}
