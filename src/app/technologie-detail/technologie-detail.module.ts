import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologieDetailComponent } from './technologie-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        TechnologieDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        TechnologieDetailComponent
    ]
})
export class TechnologieDetailModule { }
