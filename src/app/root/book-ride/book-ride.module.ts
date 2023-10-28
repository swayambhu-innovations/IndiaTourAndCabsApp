import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookRidePageRoutingModule } from './book-ride-routing.module';

import { BookRidePage } from './book-ride.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookRidePageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [BookRidePage]
})
export class BookRidePageModule {}