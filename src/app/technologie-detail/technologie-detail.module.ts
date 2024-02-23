import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologieDetailComponent } from './technologie-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        TechnologieDetailComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        TechnologieDetailComponent
    ]
})
export class TechnologieDetailModule { }
