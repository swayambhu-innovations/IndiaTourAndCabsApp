import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom ]);

@Component({
  selector: 'app-spots',
  templateUrl: './spots.component.html',
  styleUrls: ['./spots.component.scss'],
  
  encapsulation: ViewEncapsulation.None
})
export class SpotsComponent implements OnInit {

  Tours = [
    {
      id: 4,
      name: 'Tour 4',
      image: 'https://i.natgeofe.com/n/8eba070d-14e5-4d07-8bab-9db774029063/93080_3x4.jpg',
      location: 'Taj Mahal',
      ratings:'4.5',
      type:'Travel'
    },
    {
      id: 1,
      name: 'Tour 1',
      image: 'https://images.moneycontrol.com/static-mcnews/2021/04/Roof-top-pool-2-taj-goa.jpg?impolicy=website&width=770&height=431',
      location: 'Goa',
      ratings:'4.5',
      type:'Travel'
    },
    {
      id: 2,
      name: 'Tour 2',
      image: 'https://a.cdn-hotels.com/gdcs/production33/d1957/3dca8448-04b8-41f7-9484-831ee08e0f53.jpg?impolicy=fcrop&w=800&h=533&q=medium',
      location: 'Hawaii',
      ratings:'4.5',
      type:'Travel'
    },
    {
      id: 3,
      name: 'Tour 3',
      image: 'https://media.architecturaldigest.com/photos/6032b3c9a0b9bd2edd5510d1/master/pass/Hero_Soneva%20Jani%20Chapter%20Two%20by%20Aksham%20Abdul%20Ghadir.jpg',
      location: 'Maldives',
      ratings:'4.5',
      type:'Travel'
    },
   
  ]
  constructor() { }

  ngOnInit() {}

}
