import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentingVehiclePage } from './renting-vehicle.page';

const routes: Routes = [
  {
    path: '',
    component: RentingVehiclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentingVehiclePageRoutingModule {}
