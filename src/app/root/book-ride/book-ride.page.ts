import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DatabaseService } from 'src/services/database/database.service';
import { booking } from 'src/structures/booking.structure';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.page.html',
  styleUrls: ['./book-ride.page.scss'],
})
export class BookRidePage implements OnInit {
  locationsList: any[] = [];
  time: { start: Date, end: Date } = {
    start: new Date(),
    end: new Date()
  }

  public bookRideForm: FormGroup = new FormGroup({
    dropLocation: new FormControl(),
    pickupLocation: new FormControl(),
    guideAvailable: new FormControl(false),
    status: new FormControl('pending'),
    created: new FormControl(Date.now()),
    // user: user;
  });
  constructor(private database: DatabaseService, private dataProvider: DataProviderService, private router: Router) { }

  ngOnInit() {
    this.locations();
    
  }
  ionViewDidEnter(){
    this.bookRideForm.controls['dropLocation'].setValue(this.dataProvider?.routeData.location.id);
  }

  changedTime(event: any, type: 'start' | 'end') {
    this.time[type] = new Date(event.detail.value);
    console.log(this.time);
  }

  bookRide() {
    console.log(this.bookRideForm.value.dropLocation);
    const data: booking = {
      ...this.bookRideForm.value,
      dropLocation:this.locationsList.find((element:any) => element.id == this.bookRideForm.value.dropLocation),
      pickupStartDate: this.time.start,
      pickupEndDate: this.time.end,
      user: {
        displayName: this.dataProvider?.user.displayName,
        email: this.dataProvider?.user.email,
        photoURL: this.dataProvider?.user.photoURL,
        phone: this.dataProvider?.user.phone,
        userId: this.dataProvider?.user.id,
        address: this.dataProvider?.user.address,
      },
      type: 'cab'
    };
    // -----------------
    console.log(data);
    this.dataProvider.booking = data;
    console.log(this.dataProvider.booking);
    this.router.navigateByUrl('/root/vehicle/cab')
  }

  locations() {
    this.database.getLocations().then(res => {
      res.forEach((element: any) => {
        this.locationsList.push({
          ...element.data(),
          id: element.id,
        });
        console.log(this.locationsList)
      });
    })
  }

}
