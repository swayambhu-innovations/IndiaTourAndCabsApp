import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit {
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true,
    speed:300,
    pagination: true
   };
  constructor() { }
  images=[
    {
      id:1,
      image:'assets/carousel.jpg'
    },
    {
      id:2,
      image:'assets/carousel.jpg'
    },
    {
      id:3,
      image:'assets/carousel.jpg'
    },
 
  ]
  ngOnInit() {}
  setSwiperInstance(swiper: Swiper) {
    setInterval(() => {
      swiper.slideNext();
   
    }, 3000);

  }
}
