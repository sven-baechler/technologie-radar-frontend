import { Pipe, PipeTransform } from '@angular/core';
import { Ring } from '../enums/ring';

@Pipe({
  name: 'ringToBezeichnung'
})
export class RingToBezeichnungPipe implements PipeTransform {
    transform(ring: Ring): string {
        switch (ring) {
            case Ring.Assess:
                return 'Assess';
            case Ring.Trial:
                return 'Trial';
            case Ring.Adopt:
                return 'Adopt';
            case Ring.Hold:
                return 'Hold';
            default:
                return 'Not Defined';
        }
    }
}
