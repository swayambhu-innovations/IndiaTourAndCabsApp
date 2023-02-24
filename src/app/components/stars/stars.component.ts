import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss'],
})
export class StarsComponent implements OnInit {
  @Input() selectedStars:number = 0;
  @Input() maxStars:number = 5;
  @Output() selected:EventEmitter<number> = new EventEmitter<number>();
  constructor() { }
  selectedStarsArray:number[] = []
  unSelectedStarsArray:number[] = []
  ngOnInit() {
  }
  genArray(array:any[],length:number){
    array = []
    for (let index = 0; index < length; index++) {
      array.push(index)  
    }
    return array
  }

  clicked(index:number){
    console.log(index+1);
    this.selected.emit((index+1)+this.selectedStars);
    this.selectedStars=index+1+this.selectedStars
  }

}
