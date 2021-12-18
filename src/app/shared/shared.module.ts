import { CityPipe } from './pipes/city.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StatusPipe } from './pipes/status.pipe';
import { FormsModule } from '@angular/forms';
import { CityValidatorDirective } from './validation/city-validator.directive';

@NgModule({
  declarations: [
    StatusPipe,
    CityPipe,
    CityValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    StatusPipe,
    CityPipe,
    CityValidatorDirective,
    FormsModule
]
})
export class SharedModule { }
