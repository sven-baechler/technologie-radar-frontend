import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologieViewerComponent } from './technologie-viewer.component';
import { PipesModule } from '../shared/pipes/pipes.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        TechnologieViewerComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        PipesModule
    ]
})
export class TechnologieViewerModule { }
