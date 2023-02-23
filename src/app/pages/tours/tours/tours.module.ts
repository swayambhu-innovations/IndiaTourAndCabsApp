import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ToursPageRoutingModule } from './tours-routing.module';
import { ToursPage } from './tours.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToursPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ToursPage]
})
export class ToursPageModule {}
