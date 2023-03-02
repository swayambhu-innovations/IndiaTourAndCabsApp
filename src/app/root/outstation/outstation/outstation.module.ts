import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutstationPageRoutingModule } from './outstation-routing.module';

import { OutstationPage } from './outstation.page';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutstationPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
    
  ],
  declarations: [OutstationPage]
})
export class OutstationPageModule {}
