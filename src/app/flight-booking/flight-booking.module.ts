import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './feature/flight-search/flight-search.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FlightCardComponent } from './ui/flight-card/flight-card.component';
import { PassengerSearchComponent } from './feature/passenger-search/passenger-search.component';
import { FlightBookingRoutingModule } from './flight-booking-routing.module';
import { FlightEditComponent } from './feature/flight-edit/flight-edit.component';

@NgModule({
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    PassengerSearchComponent,
    FlightEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlightBookingRoutingModule
  ]
})
export class FlightBookingModule { }
