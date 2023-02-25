import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentingVehiclePageRoutingModule } from './renting-vehicle-routing.module';

import { RentingVehiclePage } from './renting-vehicle.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RentingVehiclePageRoutingModule,
    ComponentsModule
  ],
  declarations: [RentingVehiclePage]
})
export class RentingVehiclePageModule {}
