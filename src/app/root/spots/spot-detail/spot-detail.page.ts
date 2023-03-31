import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/services/database/database.service';
import { Spot } from 'src/structures/service.structure';

@Component({
  selector: 'app-spot-detail',
  templateUrl: './spot-detail.page.html',
  styleUrls: ['./spot-detail.page.scss'],
})
export class SpotDetailPage implements OnInit {
  currentSpot:Spot|undefined;
  otherSpots:Spot[] = [];
  tabMode:'review'|'overview' = 'overview'
  constructor(private activatedRoute:ActivatedRoute,private databaseService:DatabaseService) {
    this.activatedRoute.params.subscribe((params)=>{
      console.log("params",params);
      this.getSpot(params['id']);
    })
  }

  getSpot(id:string){
    this.databaseService.getSpot(id).then((spot)=>{
      this.currentSpot = {...spot.data(),id:spot.id} as Spot;
    })
  }

  ngOnInit() {
  }

}
