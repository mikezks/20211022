import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: 'input[city]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CityValidatorDirective,
    multi: true
  }]
})
export class CityValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const validCitites: string[] = [
      'Graz', 'Hamburg', 'Wien'
    ];

    if (control.value && !validCitites.includes(control.value)) {
      return {
        city: true
      };
    }

    return null;
  }
}
