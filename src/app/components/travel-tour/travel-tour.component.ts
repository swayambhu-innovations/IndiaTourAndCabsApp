import { Component, Input, OnInit } from '@angular/core';
import { DatabaseService } from 'src/services/database/database.service';

@Component({
  selector: 'app-travel-tour',
  templateUrl: './travel-tour.component.html',
  styleUrls: ['./travel-tour.component.scss'],
})
export class TravelTourComponent implements OnInit {
  @Input() Tours:any[] = []
  constructor(private database:DatabaseService) { }
 
  ngOnInit() {
  }


}
