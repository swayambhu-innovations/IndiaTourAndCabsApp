import { Component, Input, OnInit } from '@angular/core';
import { DatabaseService } from 'src/services/database/database.service';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.scss'],
})
export class TourCardComponent implements OnInit {

  @Input() Tours:any[] = []
  constructor(private database:DatabaseService) { }
 
  ngOnInit() {
  }

  

}
