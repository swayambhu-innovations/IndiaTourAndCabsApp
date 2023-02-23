import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TourBillingPageRoutingModule } from './tour-billing-routing.module';

import { TourBillingPage } from './tour-billing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TourBillingPageRoutingModule
  ],
  declarations: [TourBillingPage]
})
export class TourBillingPageModule {}
