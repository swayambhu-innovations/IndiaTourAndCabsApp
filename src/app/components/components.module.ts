import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { OrderCardComponent } from './order-card/order-card.component';
import { SpotsComponent } from './spots/spots.component';
import { SwiperModule } from 'swiper/angular';
import { OutStationsComponent } from './out-stations/out-stations.component';

@NgModule({
  declarations: [
    HeaderComponent,
    OrderCardComponent,
    SpotsComponent,
    OutStationsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    SwiperModule
    
  ],
  exports: [
    HeaderComponent,
    OrderCardComponent,
    SpotsComponent,
    OutStationsComponent
  ]
})
export class ComponentsModule { }
