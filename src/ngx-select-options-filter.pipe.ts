import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ngxSelectOptionsFilter'
})
export class NgxSelectOptionsFilterPipe implements PipeTransform {
  transform(items: Array<any>, filter?: string): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => item.label.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }
}
