import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TourReviewPageRoutingModule } from './tour-review-routing.module';

import { TourReviewPage } from './tour-review.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TourReviewPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TourReviewPage]
})
export class TourReviewPageModule {}
