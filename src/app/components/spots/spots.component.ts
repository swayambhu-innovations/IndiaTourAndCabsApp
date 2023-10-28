import { Component, Input, OnInit,ViewEncapsulation  } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom ]);

@Component({
  selector: 'app-spots',
  templateUrl: './spots.component.html',
  styleUrls: ['./spots.component.scss'],
  
  encapsulation: ViewEncapsulation.None
})
export class SpotsComponent implements OnInit {

  @Input() Tours:any = []
  constructor() { }

  ngOnInit() {
    console.log("this.Tours",this.Tours);
  }

}
