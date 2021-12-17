import { Routes } from "@angular/router";
import { HomeComponent } from "./core/feature/home/home.component";
import { FlightSearchComponent } from "./flight-booking/feature/flight-search/flight-search.component";
import { PassengerSearchComponent } from "./flight-booking/feature/passenger-search/passenger-search.component";

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'flight-booking/flight-search',
    component: FlightSearchComponent
  },
  {
    path: 'flight-booking/passenger-search',
    component: PassengerSearchComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
