import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.page.html',
  styleUrls: ['./book-ride.page.scss'],
})
export class BookRidePage implements OnInit {

  time:{start:Date,end:Date}={
    start:new Date(),
    end:new Date()
  }
  constructor() { }

  ngOnInit() {
  }

  changedTime(event:any,type:'start'|'end'){
    this.time[type]=new Date(event.detail.value);
  }

}
