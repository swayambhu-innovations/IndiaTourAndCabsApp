import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookRidePage } from './book-ride.page';

const routes: Routes = [
  {
    path: '',
    component: BookRidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRidePageRoutingModule {}
