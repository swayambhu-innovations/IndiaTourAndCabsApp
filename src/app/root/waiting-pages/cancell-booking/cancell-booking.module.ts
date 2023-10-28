import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancellBookingPageRoutingModule } from './cancell-booking-routing.module';

import { CancellBookingPage } from './cancell-booking.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CancellBookingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CancellBookingPage]
})
export class CancellBookingPageModule {}
