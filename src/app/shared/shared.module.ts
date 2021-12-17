import { CityPipe } from './city.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StatusPipe } from './status.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StatusPipe,
    CityPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    StatusPipe,
    CityPipe,
    FormsModule
]
})
export class SharedModule { }
