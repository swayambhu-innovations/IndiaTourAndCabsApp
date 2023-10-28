import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DatabaseService } from 'src/services/database/database.service';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';
import { booking, MapLocation } from 'src/structures/booking.structure';
import { GuideRentalPackage } from 'src/structures/service.structure';


@Component({
  selector: 'app-book-a-guide',
  templateUrl: './book-a-guide.page.html',
  styleUrls: ['./book-a-guide.page.scss'],
})
export class BookAGuidePage implements OnInit {
  
  selectedPackage: GuideRentalPackage|undefined;
  packages:GuideRentalPackage [] = []
  locations:MapLocation[] = [];
  time: { start: Date, end: Date } = {
    start: new Date(),
    end: new Date()
  }
  public rentingForm: FormGroup = new FormGroup({
    guideAvailable: new FormControl(true),
    status: new FormControl('pending'),
    pickupLocation:new FormControl(''),
    created: new FormControl(Date.now()),
    pickupStartDate: new FormControl(''),
  });
  
  constructor(private database: DatabaseService, private dataProvider: DataProviderService, private router: Router, private UI : AlertsAndNotificationsService) { }
  
  ngOnInit() {
    this.database.getGuidePackages().then((res) => {
      this.packages = res.docs.map((doc)=>{
        return {
          ...doc.data(),
          id: doc.id
        } as GuideRentalPackage
      })
    })
    this.database.getLocations().then((res) => {
      console.log(res);
      this.locations = res.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        } as MapLocation;
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

  async guide() {
    let taxRes = await this.database.getSettings();
    let tax = taxRes.data()!['tax']
    const data: booking = {
      ...this.rentingForm.value,
      package: this.selectedPackage,
      user: {
        displayName: this.dataProvider?.user.displayName,
        email: this.dataProvider?.user.email,
        photoURL: this.dataProvider?.user.photoURL,
        phone: this.dataProvider?.user.phone,
        userId: this.dataProvider?.user.id,
        address: this.dataProvider?.user.address,
      },
      costs:[
        {
          name: 'Guide',
          cost: this.selectedPackage!.price,
        },
        {
          name: 'Tax',
          cost: (this.selectedPackage!.price * tax) / 100,
        }
      ],
      grandTotal: this.selectedPackage!.price + (this.selectedPackage!.price * tax) / 100
    };
    console.log(data);
    this.dataProvider.booking = data;
    this.router.navigate(['/root/billing']);
    console.log(this.dataProvider.booking); 
  }
}
