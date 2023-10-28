import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomepagePageRoutingModule } from './homepage-routing.module';

import { HomepagePage } from './homepage.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomepagePageRoutingModule,
    ComponentsModule,
    SwiperModule,
    GoogleMapsModule
  ],
  declarations: [HomepagePage]
})
export class HomepagePageModule {}