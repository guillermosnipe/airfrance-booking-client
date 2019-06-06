import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FindTripRoutingModule } from './find-trip-routing.module';
import { FindTripComponent } from './find-trip/find-trip.component';
import { FindTripFormComponent } from './find-trip-form/find-trip-form.component';
import { FindTripSummaryComponent } from './find-trip-summary/find-trip-summary.component';
import { FindTripHeaderComponent } from './find-trip-header/find-trip-header.component';

@NgModule({
  declarations: [
    FindTripComponent,
    FindTripFormComponent,
    FindTripSummaryComponent,
    FindTripHeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FindTripRoutingModule
  ]
})
export class FindTripModule { }
