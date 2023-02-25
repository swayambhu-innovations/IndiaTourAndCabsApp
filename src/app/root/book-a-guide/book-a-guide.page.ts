import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-a-guide',
  templateUrl: './book-a-guide.page.html',
  styleUrls: ['./book-a-guide.page.scss'],
})
export class BookAGuidePage implements OnInit {
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
