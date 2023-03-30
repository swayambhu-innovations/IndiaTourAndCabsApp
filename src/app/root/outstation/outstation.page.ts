import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DatabaseService } from 'src/services/database/database.service';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';
import { booking } from 'src/structures/booking.structure';


@Component({
  selector: 'app-outstation',
  templateUrl: './outstation.page.html',
  styleUrls: ['./outstation.page.scss'],
})
export class OutstationPage implements OnInit {


  locationsList: any[] = [];
  time: { start: Date, end: Date, returnStart:Date, returnEnd:Date } = {
    start: new Date(),
    end: new Date(),
    returnStart: new Date(),
    returnEnd: new Date()
  }
  
  public outstation: FormGroup = new FormGroup({
    dropLocation: new FormControl(),
    pickupLocation: new FormControl(),
    guideAvailable: new FormControl(true),
    status: new FormControl('pending'),
    created: new FormControl(Date.now()),
    tripType: new FormControl(''),
    returnStartDate:  new FormControl(''),
    returnEndDate:  new FormControl(''),
  });


  
  constructor(private database: DatabaseService, private dataProvider: DataProviderService, private router: Router, private UI : AlertsAndNotificationsService) { }

  ngOnInit() {
    this.locations();
  }

  changedTime(event: any, type: 'start' | 'end' |'returnStart' | 'returnEnd') {
    this.time[type] = new Date(event.detail.value);
    console.log(this.time);
  }

  guide() {
    const data: booking = {
      ...this.outstation.value,
      pickupStartDate: this.time.start,
      pickupEndDate: this.time.end,
      returnEndDate: this.time.returnEnd,
      returnStartDate: this.time.returnStart,
      user: {
        displayName: this.dataProvider?.user.displayName,
        email: this.dataProvider?.user.email,
        photoURL: this.dataProvider?.user.photoURL,
        phone: this.dataProvider?.user.phone,
        userId: this.dataProvider?.user.id,
        address: this.dataProvider?.user.address,
      },
      type: 'outstation',
    };
    console.log(data);
    this.dataProvider.booking = data;
    this.router.navigateByUrl('/root/vehicle/outstation');
    console.log(this.dataProvider.booking);
    
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
