import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingExtentedPage } from './booking-extented.page';

const routes: Routes = [
  {
    path: '',
    component: BookingExtentedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingExtentedPageRoutingModule {}
