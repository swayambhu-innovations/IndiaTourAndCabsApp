import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaitingPageRoutingModule } from './waiting-routing.module';

import { WaitingPage } from './waiting.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaitingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [WaitingPage]
})
export class WaitingPageModule {}
