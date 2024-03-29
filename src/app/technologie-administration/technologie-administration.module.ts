import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologieAdministrationComponent } from './technologie-administration.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../shared/pipes/pipes.module';

@NgModule({
    declarations: [
        TechnologieAdministrationComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        PipesModule
    ],
    exports: [
        TechnologieAdministrationComponent
    ]
})
export class TechnologieAdministrationModule { }
