import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(elements: any[], args: string, attr: string): any[] {
    
    if (args == '') return elements;

    args = args.toLowerCase();

    return elements.filter( item => {
      return item[attr].toLowerCase().includes(args);
    });
  
  }

}
