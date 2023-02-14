import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { OrderCardComponent } from './order-card/order-card.component';
import { SpotsComponent } from './spots/spots.component';
import { SwiperModule } from 'swiper/angular';
import { OutStationsComponent } from './out-stations/out-stations.component';
import { TravelTourComponent } from './travel-tour/travel-tour.component';
import { BlogsComponent } from './blogs/blogs.component';
import { QuestionsComponent } from './questions/questions.component';
import { ContactComponent } from './contact/contact.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LanguageComponent } from './language/language.component';
import { BookingCardComponent } from './booking-card/booking-card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    OrderCardComponent,
    SpotsComponent,
    OutStationsComponent,
    TravelTourComponent,
    BlogsComponent,
    QuestionsComponent,
    ContactComponent,
    CarouselComponent,
    LanguageComponent,
    BookingCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    SwiperModule
    
  ],
  exports: [
    HeaderComponent,
    OrderCardComponent,
    SpotsComponent,
    OutStationsComponent,
    TravelTourComponent,
    BlogsComponent,
    QuestionsComponent,
    ContactComponent,
    CarouselComponent,
    LanguageComponent,
    BookingCardComponent
  ]
})
export class ComponentsModule { }
