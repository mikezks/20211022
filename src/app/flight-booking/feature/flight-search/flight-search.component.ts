import { Component, Inject } from '@angular/core';
import { CONFIG } from '../../../app.module';

import { Flight } from '../../entities/flight';
import { FlightService } from '../../data-access/flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  providers: [
    {
      provide: FlightService,
      useClass: FlightService
    }
  ]
})
export class FlightSearchComponent {
  from: string = 'Hamburg';
  to: string = 'Graz';
  flights: Array<Flight> = [];
  selectedFlight?: Flight;
  message: string = '';

  basket: Record<number, boolean> = {
    3: true,
    5: true
  };

  constructor(private flightService: FlightService, @Inject(CONFIG) coolConfig: string) {
    console.log(coolConfig)
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

  search(): void {
    this.flightService.search(this.from, this.to).subscribe({
      next: (flights: Flight[]) => {
        this.flights = flights;
      },
      error: (errResp) => {
        console.error('Error loading flights', errResp);
      },
    });
  }

  updateSelection(id: number, selected: boolean): void {
    this.selectedFlight = selected ? this.flights.find(f => f.id === id) : undefined;
    this.basket[id] = selected;
  }

  save(): void {
    if (this.selectedFlight) {
      this.flightService.save(this.selectedFlight).subscribe({
        next: (flight) => {
          this.selectedFlight = flight;
          this.message = 'Update successful!';
        },
        error: (errResponse) => {
          this.message = 'Error on updating the Flight';
          console.error(this.message, errResponse);
        },
      });
    } else {
      this.message = 'No flight selected to update!';
    }
  }

  addFlight() {
    this.flights.push(  {
      id: 1,
      from: 'Random Destination',
      to: 'Random Destination',
      date: new Date().toISOString(),
      delayed: false,
    },);
  }
}
