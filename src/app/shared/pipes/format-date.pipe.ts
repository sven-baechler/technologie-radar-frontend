import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {
    transform(date: Date | null): string {
        if (date === null) {
            return '';
        }
        else {
            const format = 'dd.MM.yyyy HH:mm:ss';
            const locale = 'en-US';
            return formatDate(date, format, locale);
        }
    }
}
