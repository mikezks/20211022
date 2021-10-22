import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Hello World!';
  niceGreeting = 'Hello I was here! :)';

  changeMyGreeting(): void {
    this.niceGreeting = 'LV ends soon, juhu!';
  }
}
