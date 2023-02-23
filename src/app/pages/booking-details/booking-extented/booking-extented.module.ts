import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingExtentedPageRoutingModule } from './booking-extented-routing.module';

import { BookingExtentedPage } from './booking-extented.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingExtentedPageRoutingModule
  ],
  declarations: [BookingExtentedPage]
})
export class BookingExtentedPageModule {}
