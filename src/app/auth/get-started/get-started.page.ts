import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.page.html',
  styleUrls: ['./get-started.page.scss'],
})
export class GetStartedPage implements OnInit {

  items = [
    {
      img: 'assets/images/img1.png',
      text:'Book Daily rides'
    },
    {
      img: 'assets/images/img2.png',
      text:'Rent A Cab'
    },
    {
      img: 'assets/images/img3.png',
      text:'Book Cabs for Outstation'
    },
    {
      img: 'assets/images/img4.png',
      text:'Book Hotels'
    },
    {
      img: 'assets/images/img5.png',
      text:'Book Guides to explore local culture'
    },
  ];
  constructor() { }
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true,
    loop:true,
    speed:300
   };

   ngOnInit(){
    
   }

}