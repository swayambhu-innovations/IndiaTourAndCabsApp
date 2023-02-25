import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {
  questions:Question[] = [
    {
      title:"Give us a rating.",
      description:"lorem ipsum",
      answerType:'stars',
      stars:{
        totalStars:6
      }
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  log(event:any){
    console.log(event);
  
  }
}
export interface Question {
  title:string;
  description:string;
  answerType:'stars'|'option'|'field';
  stars?:Stars;
  option?:Option;
  field?:Field;
}
interface Stars {
  totalStars:number;
}
interface Option {
  title:string;
}
interface Field {
  title:string;
  type:'text'|'number'|'date'|'color'|'email'|'tel'|'time'|'url';
}