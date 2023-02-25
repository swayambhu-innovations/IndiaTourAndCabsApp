import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TourBillingPageRoutingModule } from './tour-billing-routing.module';

import { TourBillingPage } from './tour-billing.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TourBillingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TourBillingPage]
})
export class TourBillingPageModule {}
