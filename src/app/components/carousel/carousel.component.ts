import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import Swiper, { SwiperOptions } from 'swiper';
import { Browser } from '@capacitor/browser';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';
import { PaginationOptions } from 'swiper/types';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit {
  loaded=false;
  constructor(private platform:Platform,private router:Router,private alertify:AlertsAndNotificationsService) { }
  @Input() banners:Banner[] =[]
  ngOnInit() {

  }
  async click(banner:Banner){
    // handle banner click
    if (banner.bannerUrlType == 'Url') {
      if(this.platform.is('capacitor')){
        await Browser.open({url:banner.bannerUrl})
        console.log('browser url',banner.bannerUrl)
      } else {
        window.open(banner.bannerUrl, '_blank');
        console.log('url',banner.bannerUrl)
      }
    } else if(banner.bannerUrlType == 'App'){
      // handle app navigation
      console.log('app',banner.bannerUrl)
      this.router.navigateByUrl(banner.bannerUrl).catch(err=>this.alertify.presentToast('Not available for you.','error'))
    }
  }
  setSwiperInstance(swiper: Swiper) {
    setInterval(() => {
      swiper.slideNext();
    }, 3000);
  }
}

export type Banner ={
  bannerImage:string
  bannerUrl:string
  bannerUrlType:'App'|'Url'
  enabled:boolean
  endDate:Timestamp
  startDate:Timestamp
  title:string
  loaded?:boolean
}