import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologieAdministrationComponent } from './technologie-administration.component';
import { RouterModule } from '@angular/router';
import { AppModule } from '../app.module';

@NgModule({
    declarations: [
        TechnologieAdministrationComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        TechnologieAdministrationComponent
    ]
})
export class TechnologieAdministrationModule { }
