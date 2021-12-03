import { CityPipe } from './city.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StatusPipe } from './status.pipe';

@NgModule({
  declarations: [StatusPipe, CityPipe],
  imports: [
    CommonModule
  ],
  exports: [StatusPipe, CityPipe]
})
export class SharedModule { }
