import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogDetailPageRoutingModule } from './blog-detail-routing.module';

import { BlogDetailPage, RemoveExtraBrPipe } from './blog-detail.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { BodyComponent } from './body/body.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogDetailPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BlogDetailPage,RemoveExtraBrPipe,BodyComponent]
})
export class BlogDetailPageModule {}
