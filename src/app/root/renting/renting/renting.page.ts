import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DatabaseService } from 'src/services/database/database.service';
import { booking, RentalPackage } from 'src/structures/booking.structure';


@Component({
  selector: 'app-renting',
  templateUrl: './renting.page.html',
  styleUrls: ['./renting.page.scss'],
})
export class RentingPage implements OnInit {

  selectedPackage: any;
  packages: RentalPackage[] = []
  time: { start: Date, end: Date } = {
    start: new Date(),
    end: new Date()
  }
  pickupLocation: FormGroup = new FormGroup({
    address: new FormControl('Pick up location added'),
    landmark: new FormControl('landmark added'),
    pinCode: new FormControl('23232'),
    lat: new FormControl('434343434'),
    lng: new FormControl('23232324234'),
  });
  public rentingForm: FormGroup = new FormGroup({
    guideAvailable: new FormControl(false),
    status: new FormControl('pending'),
    created: new FormControl(Date.now()),
    // user: user;
  });



  constructor(private database: DatabaseService, private dataProvider: DataProviderService, private router: Router) { }

  ngOnInit() {
    this.rentalPackages();
  }

  rentalPackages() {
    this.database.getRentalPackages().then(res => {
      res.forEach((element: any) => {
        this.packages.push({
          ...element.data(),
          id: element.id,
        });
        console.log(this.packages)
      });
    })
  }

  changedTime(event: any, type: 'start' | 'end') {
    this.time[type] = new Date(event.detail.value);
    console.log(this.time);
  }

  selectPackage(value: any) {
    console.log(value);
    this.selectedPackage = value;
  }

  renting() {
    const data: booking = {
      ...this.rentingForm.value,
      pickupLocation: this.pickupLocation.value,
      pickupStartDate: this.time.start,
      pickupEndDate: this.time.end,
      package: this.selectedPackage,
      user: {
        displayName: this.dataProvider?.user.displayName,
        email: this.dataProvider?.user.email,
        photoURL: this.dataProvider?.user.photoURL,
        phone: this.dataProvider?.user.phone,
        userId: this.dataProvider?.user.id,
        address: this.dataProvider?.user.address,
      },
      type: 'rental'

    };
    console.log(data);
    this.dataProvider.booking = data;
    console.log(this.dataProvider.booking);
    this.router.navigateByUrl('/root/vehicle/renting')
  }

}
