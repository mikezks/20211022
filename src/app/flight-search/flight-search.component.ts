import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Flight } from './flight';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
})
export class FlightSearchComponent {
  from: string = '';
  to: string = '';
  flights: Array<Flight> = [];
  selectedFlight: Flight | null = null;
  message: string = '';
  constructor(private http: HttpClient) {}

  select(f: Flight): void {
    this.selectedFlight = f;
  }

  search(): void {
    const url = 'http://www.angular.at/api/flight';

    const headers = new HttpHeaders().set('Accept', 'application/json');

    const params = new HttpParams().set('from', this.from).set('to', this.to);

    this.http.get<Flight[]>(url, { headers, params }).subscribe({
      next: (flights: Flight[]) => {
        this.flights = flights;
      },
      error: (errResp) => {
        console.error('Error loading flights', errResp);
      },
    });
  }

  save(): void {
    const url = 'http://www.angular.at/api/flight';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    this.http
      .post<Flight>(url, this.selectedFlight, { headers })
      .subscribe({
        next: flight => {
          this.selectedFlight = flight;
          this.message = 'Update successful!';
        },
        error: errResponse => {
          this.message = 'Error on updating the Flight';
          console.error(this.message, errResponse);
        }
      });
  }

}
