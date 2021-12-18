import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city'
})
export class CityPipe implements PipeTransform {

  transform(city: string, fmt: string): unknown {

    let short;
    let long;
    switch (city) {
      case 'Graz':
        short= 'GRZ';
        long= 'Flughafen Graz Thalerhof'
        break;
        case 'Hamburg':
          short= 'HAM';
          long= 'Flughafen Hamburg'
          break;
      default:
         short= long= 'ROM'
        break;
    }

    return fmt === 'short'? short: long;
  }

}
