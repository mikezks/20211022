import { Observable, of } from 'rxjs';

import { AbstractFlightService } from './abstract-flight.service';
import { Flight } from '../entities/flight';
import { Injectable } from '@angular/core';

@Injectable()
export class DummyFlightService implements AbstractFlightService {
  constructor() {}
  search(from: string, to: string): Observable<Flight[]> {
    return of([
      {
        id: 1,
        from: 'Graz',
        to: 'Hamburg',
        date: new Date().toISOString(),
        delayed: true,
      },
      {
        id: 2,
        from: 'Graz',
        to: 'Hamburg',
        date: new Date().toISOString(),
        delayed: true,
      }
    ]);
  }
  save(selectedFlight: Flight): Observable<Flight> {
    throw new Error('Method not implemented.');
  }
}
