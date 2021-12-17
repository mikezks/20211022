import { InjectionToken, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';

export const CONFIG = new InjectionToken<string>('config', {
  providedIn: 'root',
  factory: () => 'hello'
});


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    CoreModule,
    FlightBookingModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
