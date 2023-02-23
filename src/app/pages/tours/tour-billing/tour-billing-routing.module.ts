import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TourBillingPage } from './tour-billing.page';

const routes: Routes = [
  {
    path: '',
    component: TourBillingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TourBillingPageRoutingModule {}
