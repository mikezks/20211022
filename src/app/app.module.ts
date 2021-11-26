import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { AbstractFlightService } from './flight-search/abstract-flight.service';
import { FlightService } from './flight-search/flight.service';
import { CityPipe } from './shared/city.pipe';
import { StatusPipe } from './shared/status.pipe';


export const CONFIG = new InjectionToken<string>('config', {
  providedIn: 'root',
  factory: () => 'hello'
});


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FlightSearchComponent,
    CityPipe,
    StatusPipe,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, HttpClientModule],
  providers: [FlightService],
  bootstrap: [AppComponent],
})
export class AppModule {}
