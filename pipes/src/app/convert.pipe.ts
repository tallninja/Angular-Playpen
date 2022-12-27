import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: number, unit: string): number {
    switch (unit) {
      case 'mps':
        return value * (18 / 5);
      case 'kph':
        return value * (5 / 18);
      default:
        throw new Error('Enter the conversion unit');
    }
  }
}
