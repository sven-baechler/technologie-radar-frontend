import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KategorieToBezeichnungPipe } from './kategorie-to-bezeichnung.pipe';
import { RingToBezeichnungPipe } from './ring-to-bezeichnung.pipe';
import { PubliziertToBezeichnungPipe } from './publiziert-to-bezeichnung.pipe';
import { FormatDatePipe } from './format-date.pipe';

@NgModule({
    declarations: [
        KategorieToBezeichnungPipe,
        RingToBezeichnungPipe,
        PubliziertToBezeichnungPipe,
        FormatDatePipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        KategorieToBezeichnungPipe,
        RingToBezeichnungPipe,
        PubliziertToBezeichnungPipe,
        FormatDatePipe
    ]
})
export class PipesModule { }
