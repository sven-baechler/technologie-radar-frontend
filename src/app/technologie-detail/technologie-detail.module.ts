import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologieDetailComponent } from './technologie-detail.component';



@NgModule({
    declarations: [
        TechnologieDetailComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TechnologieDetailComponent
    ]
})
export class TechnologieDetailModule { }
