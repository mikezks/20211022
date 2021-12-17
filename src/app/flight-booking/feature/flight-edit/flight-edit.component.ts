import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'flight-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {
  id: number = 0;
  showDetails: boolean = false;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id')!;
      this.showDetails = params.get('showDetails') === 'true';
    });
  }

  ngOnInit(): void {
  }

}
