import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DatabaseService } from 'src/services/database/database.service';
import { PaymentService } from 'src/services/payment.service';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';

@Component({
  selector: 'app-tour-billing',
  templateUrl: './tour-billing.page.html',
  styleUrls: ['./tour-billing.page.scss'],
})
export class TourBillingPage implements OnInit {

  public tourBooking: FormGroup = new FormGroup({
    noOfTourists: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required]),
    contact: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    specialRequest: new FormControl('',[Validators.required]),
    pickupLocation: new FormControl('',[Validators.required]), 
  });

  locationsList: any[] = [];
  constructor(private database: DatabaseService, private dataProvider: DataProviderService, private alertify:AlertsAndNotificationsService, private payment:PaymentService, private router:Router) { }

  ngOnInit() {
    this.locations();
  }
  locations() {
    this.database.getLocations().then((res) => {
      res.forEach((element: any) => {
        this.locationsList.push({
          ...element.data(),
          id: element.id,
        });
        console.log(this.locationsList);
      });
    });
  }

  startPayment(data:any) {
    this.dataProvider.loading = true;
    this.dataProvider.loading = true;
    if (this.dataProvider.tour){
      this.payment.handlePayment(data).subscribe(
        (res) => {
          console.log(res);
          if (res.stage == 'paymentCaptureSuccess') {
            this.alertify.presentToast('Payment successful');
            // this.close.emit();
            if (data){
              this.database
              .bookings({ ...data, orderDetail: res })
              .then((res) => {
                console.log(res);
                this.alertify.presentToast('Tour Booked Successfully');
                this.router.navigate(['/root/confirm-booking']);
              })
              .catch((err: any) => {
                console.log(err);
                this.alertify.presentToast('Error adding tour booking', 'error');
                this.router.navigate(['/root/error-page']);
              })
              .finally(() => {
                this.dataProvider.loading = false;
              });
            }
          } else {
            this.dataProvider.loading = false;
            this.alertify.presentToast('Error adding on Wallet', 'error');
            this.router.navigateByUrl('/root/error-page');
          }
          // this._snackBar.open("Payment successful");
          // this.close.emit();
        },
        (err) => {
          this.dataProvider.loading = false;
        }
      );
    }
  }



  tourBilling() {
    const data = {
      ...this.dataProvider.tour,
      pickupStartDate: 'April 2, 2023 at 4:12:49 PM UTC+5:30',
      touristDetails:this.tourBooking.value
    }
    console.log(data);
    if(data){
      this.startPayment(data)
    }
  }



}
