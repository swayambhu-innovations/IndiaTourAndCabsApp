import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DatabaseService } from 'src/services/database/database.service';
import { PaymentService } from 'src/services/payment.service';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';
import { booking } from 'src/structures/booking.structure';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.page.html',
  styleUrls: ['./billing.page.scss'],
})
export class BillingPage implements OnInit {
  constructor(
    public dataProvider: DataProviderService,
    private router: Router,
    private paymentService:PaymentService,
    private alertify:AlertsAndNotificationsService,
    private database:DatabaseService
  ) {}

  async ngOnInit() {
    console.log(this.dataProvider.booking?.vehicle);
    if (this.dataProvider.booking?.type == 'cab'){
      this.dataProvider.loading = true;
      console.log("Getting data",this.dataProvider.booking);
      try {
        let res = await this.database.getCabService();
        if (res.exists()) {
          let cabServiceData: { packages: any[]; commissionPackages: any[] } = res.data() as any;
          let totalDistance = this.getDistance(this.dataProvider.booking.pickupLocation.lat, this.dataProvider.booking.pickupLocation.lng, this.dataProvider.booking.dropLocation.lat, this.dataProvider.booking.dropLocation.lng);
          console.log("totalDistance",totalDistance);
          console.log("cabServiceData['packages']",cabServiceData['packages']);
          if (cabServiceData['packages']) {
            let packages = cabServiceData['packages'];
            packages = packages.filter((element: any) => {
              return element.vehicleCategory == this.dataProvider.booking?.vehicle?.id;
            })
            console.log("packages",packages);
            let rentalPackage = packages.find((element: any) => {
              return (
                element.minimumHours <= totalDistance &&
                element.maximumHour >= totalDistance
              );
            });
            console.log("rentalPackage",rentalPackage);
            let totalCost = rentalPackage.pricePerHour * totalDistance;
            this.dataProvider.booking.costs = [
              {
                cost: totalCost,
                name: 'Cab',
              },
            ]
            console.log("step 1",this.dataProvider.booking);
            if (this.dataProvider.booking.guideAvailable) {
              console.log("Guide Available");
              let guideRes = await this.database.getGuideService();
              if (guideRes.exists()) {
                let commissions = guideRes.data()['commissionPackages'];
                let commission = commissions.find((element: any) => {
                  return (
                    element.minimumHours <= this.dataProvider.booking!.dropLocation.spotTime &&
                    element.maximumHour >= this.dataProvider.booking!.dropLocation.spotTime
                  );
                });
                this.dataProvider.booking.costs?.push({
                  cost: commission.value,
                  name: 'Guide',
                });
              }
            }
            let settings = await this.database.getSettings();
            if (settings.exists()) {
              let tax = settings.data()['tax'];
              this.dataProvider.booking.costs?.push({
                cost: (totalCost * tax) / 100,
                name: 'Tax',
              });
            }
            this.dataProvider.booking.grandTotal = this.dataProvider.booking.costs.reduce((a: any, b: any) => {
              return a + b.cost;
            },0);
            console.log(this.dataProvider.booking);
            this.dataProvider.loading = false;
          }
        }
      } catch (error) {
        this.dataProvider.loading = false;
      }
    }
  }

  startPayment() {
    this.router.navigate(['root/waiting']);
    this.dataProvider.loading = true;
    this.dataProvider.loading = true;
    if (this.dataProvider.booking){
      this.paymentService.handlePayment(this.dataProvider.booking).subscribe(
        (res) => {
          console.log(res);
          if (res.stage == 'paymentCaptureSuccess') {
            this.alertify.presentToast('Payment successful');
            // this.close.emit();
            if (this.dataProvider.booking){
              this.database
              .bookings({ ...this.dataProvider.booking, orderDetail: res })
              .then((res) => {
                console.log(res);
                this.alertify.presentToast('Booked Successfully');
                this.router.navigate(['/root/confirm-booking']);
              })
              .catch((err: any) => {
                console.log(err);
                this.alertify.presentToast('Error adding booking', 'error');
              })
              .finally(() => {
                this.dataProvider.loading = false;
              });
            }
          } else {
            this.dataProvider.loading = false;
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

  getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    }
    else {
        var radlat1 = Math.PI * lat1/180;
        var radlat2 = Math.PI * lat2/180;
        var theta = lon1-lon2;
        var radtheta = Math.PI * theta/180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        dist = dist * 1.609344
        // if (unit=="K") {  }
        // if (unit=="N") { dist = dist * 0.8684 }
        return dist;
    }
}
}
