import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FlightSearchComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [FlightSearchComponent]
})
export class FlightBookingModule { }
