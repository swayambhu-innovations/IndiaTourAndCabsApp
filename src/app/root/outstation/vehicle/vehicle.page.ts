import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DatabaseService } from 'src/services/database/database.service';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';
import { vehicle } from 'src/structures/cabRide.structure';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.page.html',
  styleUrls: ['./vehicle.page.scss'],
})
export class VehiclePage implements OnInit {

  public fromUrl: any = this.activatedRoute.snapshot.paramMap.get('page');



  vehicleList: vehicle[] = [
    {
      vehicleName: "Maruti Suzuki Swift Dzire",
      vehicleImage: "https://www.pngmart.com/files/22/Sedan-PNG-Clipart.png",
      modelType: "Sedan",
      noOfSeats: 4,
      ratePerKm: 10,
      vehicleNumber: "MH 12 AB 1234",
      color: "Blue",
      fuelTankCapacity: 50,
      airConditioner: true,
      vehicleDescription: "Maruti Suzuki Swift Dzire is a 5 seater sedan car available at a price range of Rs. 5.89 - 9.34 Lakh in India. It is available in 10 variants, 1 engine option and 1 transmission option: Manual. Other key specifications of the Swift Dzire include a kerb weight of 970kg, ground clearance of 170mm and boot space of 378 litres.",
    },
    {
      vehicleName: "Audi A4",
      vehicleImage: "https://purepng.com/public/uploads/large/sedan-0hx.png",
      modelType: "Sedan",
      noOfSeats: 5,
      ratePerKm: 10,
      vehicleNumber: "MH 12 AB 1234",
      color: "Blue",
      fuelTankCapacity: 20,
      airConditioner: false,
      vehicleDescription: "Maruti Suzuki Swift Dzire is a 5 seater sedan car available at a price range of Rs. 5.89 - 9.34 Lakh in India. It is available in 10 variants, 1 engine option and 1 transmission option: Manual. Other key specifications of the Swift Dzire include a kerb weight of 970kg, ground clearance of 170mm and boot space of 378 litres.",
    }
  ];

  constructor(private dataProvider: DataProviderService, private database: DatabaseService, private router: Router, private navController: NavController, private UI: AlertsAndNotificationsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.fromUrl);
  }

  // CAB RIDE BOOKING
  booking() {
    const data = {
      ...this.dataProvider.booking,
      vehicle: this.dataProvider.vehicle
    }
    console.log(data);
    if (this.fromUrl == 'cab') {
      this.database.bookRide(data).then((res) => {
        console.log(res);
        this.UI.presentToast("Ride Booked Successfully");
        this.router.navigate(['/root/billing']);
      })
      return;
    }
    if (this.fromUrl == 'renting') {
      this.database.renting(data).then((res) => {
        console.log(res);
        this.UI.presentToast("Renting Booked Successfully");
        this.router.navigate(['/root/billing']);
      })
      return;
    }
    if (this.fromUrl == 'outstation') {
      this.database.outstation(data).then((res) => {
        console.log(res);
        this.UI.presentToast("outstation Booked Successfully");
        this.router.navigate(['/root/billing']);
      })
      return;
    }

  }




}
