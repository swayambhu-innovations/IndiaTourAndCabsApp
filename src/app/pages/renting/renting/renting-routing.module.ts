import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentingPage } from './renting.page';

const routes: Routes = [
  {
    path: '',
    component: RentingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentingPageRoutingModule {}
