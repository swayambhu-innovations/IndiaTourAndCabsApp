import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DatabaseService } from 'src/services/database/database.service';
import { cabRide } from 'src/structures/cabRide.structure';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.page.html',
  styleUrls: ['./book-ride.page.scss'],
})
export class BookRidePage implements OnInit {

  time: { start: Date, end: Date } = {
    start: new Date(),
    end: new Date()
  }
  pickupLocation : FormGroup = new FormGroup({
    address: new FormControl('Pick up location added'),
    landmark: new FormControl('landmark added'),
    pinCode: new FormControl('23232'),
    lat: new FormControl('434343434'),
    lng: new FormControl('23232324234'),
  });
  public bookRideForm: FormGroup = new FormGroup({
    dropLocation: new FormControl(''),

    guideAvailable: new FormControl(false),
    status: new FormControl('pending'),
    created: new FormControl(Date.now()),
    // user: user;
  });
  constructor(private database: DatabaseService, private dataProvider: DataProviderService, private router: Router) { }

  ngOnInit() {
  }

  changedTime(event: any, type: 'start' | 'end') {
    this.time[type] = new Date(event.detail.value);
    console.log(this.time);
  }

  bookRide() {
    const data: cabRide = {
      ...this.bookRideForm.value,
      pickupLocation: this.pickupLocation.value,
      pickupStartDate: this.time.start,
      pickupEndDate: this.time.end,
      user: {
        displayName: this.dataProvider?.user.displayName,
        email: this.dataProvider?.user.email,
        photoURL: this.dataProvider?.user.photoURL,
        phone: this.dataProvider?.user.phone,
        userId: this.dataProvider?.user.id,
        address: this.dataProvider?.user.address,
      }

    };
    console.log(data);
    this.dataProvider.booking = data;
    console.log(this.dataProvider.booking);
    this.router.navigateByUrl('/root/vehicle/cab')
  }

}
