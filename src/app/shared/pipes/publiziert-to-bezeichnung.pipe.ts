import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'publiziertToBezeichnung'
})
export class PubliziertToBezeichnungPipe implements PipeTransform {
    transform(publiziert: boolean): string {
        return publiziert ? 'publiziert' : 'nicht publiziert';
    }
}
