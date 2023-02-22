import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookAGuidePage } from './book-a-guide.page';

const routes: Routes = [
  {
    path: '',
    component: BookAGuidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookAGuidePageRoutingModule {}
