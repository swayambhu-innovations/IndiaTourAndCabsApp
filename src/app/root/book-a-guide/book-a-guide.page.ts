import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DatabaseService } from 'src/services/database/database.service';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';
import { booking } from 'src/structures/booking.structure';


@Component({
  selector: 'app-book-a-guide',
  templateUrl: './book-a-guide.page.html',
  styleUrls: ['./book-a-guide.page.scss'],
})
export class BookAGuidePage implements OnInit {
  
  selectedPackage: any;
  packages:any [] = [
    {
      hours: 1,
      kms: 100
    },
    {
      hours: 2,
      kms: 200
    },
    {
      hours: 3,
      kms: 300
    },
    {
      hours: 4,
      kms: 400
    }

  ]
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
  public rentingForm: FormGroup = new FormGroup({
    guideAvailable: new FormControl(true),
    status: new FormControl('pending'),
    created: new FormControl(Date.now()),
    // user: user;
  });


  
  constructor(private database: DatabaseService, private dataProvider: DataProviderService, private router: Router, private UI : AlertsAndNotificationsService) { }

  ngOnInit() {
  }

  changedTime(event: any, type: 'start' | 'end') {
    this.time[type] = new Date(event.detail.value);
    console.log(this.time);
  }

  selectPackage(value: any) {
    console.log(value);
    this.selectedPackage = value;
  }

  guide() {
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
      }

    };
    console.log(data);
    this.dataProvider.booking = data;
    this.database.guide(data).then((res: any) => {
      console.log(res);
      this.UI.presentToast('Guide Booked Successful');
      this.router.navigate(['/root/billing']);
    });
    console.log(this.dataProvider.booking);
    
  }


}
