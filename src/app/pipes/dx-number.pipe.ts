import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dxNumber',
  standalone: true
})
export class DxNumberPipe implements PipeTransform {

  transform(value: number): string {
    return value.toFixed(2);
  }

}
