import { InjectionToken, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export const CONFIG = new InjectionToken<string>('config', {
  providedIn: 'root',
  factory: () => 'hello'
});


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlightBookingModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
