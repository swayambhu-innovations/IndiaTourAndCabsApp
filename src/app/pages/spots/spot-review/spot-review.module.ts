import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpotReviewPageRoutingModule } from './spot-review-routing.module';

import { SpotReviewPage } from './spot-review.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpotReviewPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SpotReviewPage]
})
export class SpotReviewPageModule {}
