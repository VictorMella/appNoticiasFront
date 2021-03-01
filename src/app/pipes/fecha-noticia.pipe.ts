import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

;
@Pipe({
  name: 'fechaNoticia'
})
export class FechaNoticiaPipe implements PipeTransform {

  transform(date: string): string {
    moment.locale('es');
    return moment(date).format('LLLL');
  }

}
