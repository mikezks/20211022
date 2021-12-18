import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, filter } from 'rxjs/operators';
import { validateCity, validateCityWithParams } from 'src/app/shared/validation/city-validator';

@Component({
  selector: 'flight-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {
  id: number = 0;
  showDetails: boolean = false;
  editForm: FormGroup = this.getInitialEditForm();

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder) {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id')!;
      this.editForm.controls.id.setValue(this.id);
      this.showDetails = params.get('showDetails') === 'true';
    });
  }

  ngOnInit(): void {
    this.editForm.valueChanges.pipe(
      filter(() => this.editForm.valid),
      debounceTime(300)
    ).subscribe(console.log);
  }

  getInitialEditForm(): FormGroup {
    return this.fb.group({
      id: [0],
      from: ['Graz', [
        Validators.required,
        Validators.minLength(3),
        validateCity
      ]],
      to: ['Hamburg', [
        Validators.required,
        Validators.minLength(3),
        validateCityWithParams(['Hamburg', 'Berlin'])
      ]],
      date: [new Date().toISOString()]
    });
  }

  save(): void {
    console.log('value', this.editForm.value);
    console.log('valid', this.editForm.valid);
    console.log('dirty', this.editForm.dirty);
    console.log('touched', this.editForm.touched);
  }
}
