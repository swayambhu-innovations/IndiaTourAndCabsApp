import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/services/database/database.service';

@Component({
  selector: 'app-travel-tour',
  templateUrl: './travel-tour.component.html',
  styleUrls: ['./travel-tour.component.scss'],
})
export class TravelTourComponent implements OnInit {
  Tours:any[] = []
  constructor(private database:DatabaseService) { }
 
  ngOnInit() {
    this.tours()
  }

  tours(){
    this.database.tours().then((res)=>{
      res.forEach((element: any) => {
        this.Tours.push({
          ...element.data(),
          id: element.id,
        });
        console.log(this.Tours)
      });
    })
  }

}
