import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/services/database/database.service';

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.page.html',
  styleUrls: ['./tour-detail.page.scss'],
})
export class TourDetailPage implements OnInit {

  status:string = 'overview';
  public id: any = this.activatedRoute.snapshot.paramMap.get('id');
  constructor(private database:DatabaseService, private activatedRoute:ActivatedRoute) { }

  public currentTour:any;
  ngOnInit() {
    this.tour();
  }

  tour(){
    this.database.singleTours(this.id).then((res)=>{
      this.currentTour = res.data();
      })
  }

}
