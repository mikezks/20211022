import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DummyFlightService } from './dummy-flight.service';
import { Flight } from './flight';
import { FlightService } from './flight.service';

@Injectable(/*{
  providedIn: 'root',
  useFactory: (http: HttpClient) => {
    if(environment.production) {
      return new FlightService(http);
    }else {
      return new DummyFlightService();
    }
  },
  deps: [HttpClient]
}*/)
export abstract class AbstractFlightService {

  abstract search(from:string, to:string): Observable<Flight[]>;
  abstract save(selectedFlight: Flight): Observable<Flight>;


}
