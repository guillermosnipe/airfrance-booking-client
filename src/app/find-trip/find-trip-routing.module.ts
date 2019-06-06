import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindTripComponent } from './find-trip/find-trip.component';
import { FindTripFormComponent } from './find-trip-form/find-trip-form.component';
import { FindTripSummaryComponent } from './find-trip-summary/find-trip-summary.component';

const routes: Routes = [
  {
    path: 'check-in',
    component: FindTripComponent,
    children: [
      {
        path: '',
        component: FindTripFormComponent
      },
      {
        path: ':bookingCode',
        component: FindTripSummaryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FindTripRoutingModule { }
