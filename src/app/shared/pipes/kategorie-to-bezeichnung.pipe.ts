import { Pipe, PipeTransform } from '@angular/core';
import { Kategorie } from '../enums/kategorie';

@Pipe({
  name: 'kategorieToBezeichnung'
})
export class KategorieToBezeichnungPipe implements PipeTransform {
    transform(kategorie: Kategorie): string {
        switch (kategorie) {
            case Kategorie.Techniques:
                return 'Techniques';
            case Kategorie.Tools:
                return 'Tools';
            case Kategorie.Platforms:
                return 'Platforms';
            case Kategorie.LanguagesFrameworks:
            default:
                return 'Languages & Frameworks';
        }
    }
}
