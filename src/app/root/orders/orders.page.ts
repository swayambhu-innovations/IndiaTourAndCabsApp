import { Component, OnInit } from '@angular/core';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DatabaseService } from 'src/services/database/database.service';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  constructor(private database: DatabaseService, private UI: AlertsAndNotificationsService, private dataProvider: DataProviderService) { }

  ngOnInit() {
    this.carRides();
    this.renting();
    this.guide();
    this.outstation();
  }
  cabRides: any[] = [];
  userRenting: any[] = [];
  userGuide: any[] = [];
  userOutstation: any[] = [];

  carRides() {
    console.log(this.dataProvider.user.id);
    this.database.userRides(this.dataProvider.user.id.toString()).subscribe((res: any) => {
      console.log(res);
      this.cabRides = res;
    })
  }

  renting() {
    console.log(this.dataProvider.user.id);
    this.database.userRenting(this.dataProvider.user.id.toString()).subscribe((res: any) => {
      console.log(res);
      this.userRenting = res;
    })
  }

  guide() {
    console.log(this.dataProvider.user.id);
    this.database.userGuide(this.dataProvider.user.id.toString()).subscribe((res: any) => {
      console.log(res);
      this.userGuide = res;
    })
  }

  outstation() {
    console.log(this.dataProvider.user.id);
    this.database.userOutstation(this.dataProvider.user.id.toString()).subscribe((res: any) => {
      console.log(res);
      this.userOutstation = res;
    })
  }

}
