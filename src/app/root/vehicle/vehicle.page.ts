import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DatabaseService } from 'src/services/database/database.service';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';
import { vehicle, VehicleCategory } from 'src/structures/booking.structure';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.page.html',
  styleUrls: ['./vehicle.page.scss'],
})
export class VehiclePage implements OnInit {

  public fromUrl: any = this.activatedRoute.snapshot.paramMap.get('page');



  vehicleList: VehicleCategory[] = [];

  constructor(private dataProvider: DataProviderService, private database: DatabaseService, private router: Router, private navController: NavController, private UI: AlertsAndNotificationsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.fromUrl);
    this.getVehicleDetails();
  }

  getVehicleDetails() {
    if (this.fromUrl == 'cab') {
      this.database.cabVehicles().then((res) => {
        res.forEach((element: any) => {
          this.vehicleList.push({
            ...element.data(),
            id: element.id,
          });
          console.log(this.vehicleList)
        });
      })
    }
    if (this.fromUrl == 'renting') {
      this.database.rentalVehicles().then((res) => {
        res.forEach((element: any) => {
          this.vehicleList.push({
            ...element.data(),
            id: element.id,
          });
          console.log(this.vehicleList)
        });
      })

    }
    if (this.fromUrl == 'outstation') {
      this.database.outstationVehicles().then((res) => {
        res.forEach((element: any) => {
          this.vehicleList.push({
            ...element.data(),
            id: element.id,
          });
          console.log(this.vehicleList)
        });
      })

    }
  }


  // CAB RIDE BOOKING
  booking() {
    const data = {
      ...this.dataProvider.booking,
      vehicle: this.dataProvider.vehicle
    }
    console.log(data);
    if (this.fromUrl == 'cab') {
      this.database.bookings(data).then((res) => {
        console.log(res);
        this.UI.presentToast("Ride Booked Successfully");
        this.router.navigate(['/root/billing']);
      })
      return;
    }
    if (this.fromUrl == 'renting') {
      this.database.bookings(data).then((res) => {
        console.log(res);
        this.UI.presentToast("Renting Booked Successfully");
        this.router.navigate(['/root/billing']);
      })
      return;
    }
    if (this.fromUrl == 'outstation') {
      this.database.bookings(data).then((res) => {
        console.log(res);
        this.UI.presentToast("outstation Booked Successfully");
        this.router.navigate(['/root/billing']);
      })
      return;
    }

  }




}
