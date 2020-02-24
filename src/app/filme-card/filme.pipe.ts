import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filme'
})
export class FilmePipe implements PipeTransform {

  transform(value: any, tipo: any): any {
    if (tipo === 'title') {
      if (value.length > 33) {
        return value.substr(0, 33)   + '...' ;
      } else {
        return value;
      }
    } else if (tipo === 'overview') {
      if (value.length > 167) {
        return value.substr(0, 167)   + '...' ;
      } else {
        return value;
      }
    }

  }

}
