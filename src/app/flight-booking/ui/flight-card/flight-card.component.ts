import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Flight } from '../../entities/flight';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit, OnDestroy {
  @Input() item: Flight | undefined;
  @Input() selected: boolean = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  ngOnInit(): void {
    console.log('FlightCard INIT');
  }

  ngOnDestroy(): void {
    console.log('FlightCard DESTROY');
  }

  toggleSelection(): void {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
}
