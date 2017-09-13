import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ngxSelectOptions'
})
export class NgxSelectOptionsPipe implements PipeTransform {

  transform(value: any, options: Array<any>): any {
    for(let option of options) {
      if(option.value === value && !!option.key) {
        return option.key;
      }
    }
    return value;
  }

}
