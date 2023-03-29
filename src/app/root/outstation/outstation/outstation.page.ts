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


 
  time: { start: Date, end: Date, returnStart:Date, returnEnd:Date } = {
    start: new Date(),
    end: new Date(),
    returnStart: new Date(),
    returnEnd: new Date()
  }
  pickupLocation : FormGroup = new FormGroup({
    address: new FormControl('outstation up location added'),
    landmark: new FormControl('landmark added'),
    pinCode: new FormControl('23232'),
    lat: new FormControl('434343434'),
    lng: new FormControl('23232324234'),
  });
  public outstation: FormGroup = new FormGroup({
    guideAvailable: new FormControl(true),
    status: new FormControl('pending'),
    created: new FormControl(Date.now()),
    tripType: new FormControl(''),
    returnStartDate:  new FormControl(''),
    returnEndDate:  new FormControl(''),
  });


  
  constructor(private database: DatabaseService, private dataProvider: DataProviderService, private router: Router, private UI : AlertsAndNotificationsService) { }

  ngOnInit() {
  }

  changedTime(event: any, type: 'start' | 'end' |'returnStart' | 'returnEnd') {
    this.time[type] = new Date(event.detail.value);
    console.log(this.time);
  }

  guide() {
    const data: booking = {
      ...this.outstation.value,
      pickupLocation: this.pickupLocation.value,
      dropLocation: this.pickupLocation.value,
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
      type: 'outstation',
    };
    console.log(data);
    this.dataProvider.booking = data;
    this.router.navigateByUrl('/root/vehicle/outstation');
    console.log(this.dataProvider.booking);
    
  }


}
