import { Pipe, PipeTransform } from '@angular/core';

import { Flight } from '../../flight-booking/entities/flight';

@Pipe({
  name: 'status',
  pure: false
})
export class StatusPipe implements PipeTransform {

  transform(flights: Array<Flight>, status: boolean): Array<Flight> {
    return flights.filter(f => status? f.delayed: !f.delayed)
  }

}
