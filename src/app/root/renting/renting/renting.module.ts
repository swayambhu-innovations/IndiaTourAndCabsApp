import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentingPageRoutingModule } from './renting-routing.module';

import { RentingPage } from './renting.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RentingPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule

  ],
  declarations: [RentingPage]
})
export class RentingPageModule {}
