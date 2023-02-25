import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpotReviewPage } from './spot-review.page';

const routes: Routes = [
  {
    path: '',
    component: SpotReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpotReviewPageRoutingModule {}
