import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TourReviewPage } from './tour-review.page';

const routes: Routes = [
  {
    path: '',
    component: TourReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TourReviewPageRoutingModule {}
