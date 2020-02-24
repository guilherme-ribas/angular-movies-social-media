import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descricao'
})
export class FilmeDescricaoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value.length > 167){
      return value.substr(0, 167)   + '...' ;
    }
  }

}
