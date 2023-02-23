import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItenaryPageRoutingModule } from './itenary-routing.module';

import { ItenaryPage } from './itenary.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItenaryPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ItenaryPage]
})
export class ItenaryPageModule {}
