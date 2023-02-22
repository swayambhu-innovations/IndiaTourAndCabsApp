import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookAGuidePageRoutingModule } from './book-a-guide-routing.module';

import { BookAGuidePage } from './book-a-guide.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookAGuidePageRoutingModule,
    ComponentsModule
  ],
  declarations: [BookAGuidePage]
})
export class BookAGuidePageModule {}
