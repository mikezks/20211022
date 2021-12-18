import { CityPipe } from './pipes/city.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StatusPipe } from './pipes/status.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CityValidatorDirective } from './validation/city-validator.directive';

@NgModule({
  declarations: [
    StatusPipe,
    CityPipe,
    CityValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    StatusPipe,
    CityPipe,
    CityValidatorDirective,
    FormsModule,
    ReactiveFormsModule
]
})
export class SharedModule { }
