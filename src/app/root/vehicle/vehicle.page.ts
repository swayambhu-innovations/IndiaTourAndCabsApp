import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DatabaseService } from 'src/services/database/database.service';
import { PaymentService } from 'src/services/payment.service';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';
import { booking, vehicle, VehicleCategory } from 'src/structures/booking.structure';
import { paymentDetail } from 'src/structures/payment.structure';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.page.html',
  styleUrls: ['./vehicle.page.scss'],
})
export class VehiclePage implements OnInit {

  public fromUrl: any = this.activatedRoute.snapshot.paramMap.get('page');



  vehicleList: VehicleCategory[] = [];

  constructor(private dataProvider: DataProviderService, private database: DatabaseService, private router: Router, private alertify: AlertsAndNotificationsService, private activatedRoute: ActivatedRoute,private paymentService:PaymentService) { }

  ngOnInit() {
    console.log(this.fromUrl);
    this.getVehicleDetails();
  }

  getVehicleDetails() {
    if (this.fromUrl == 'cab') {
      this.database.cabVehicles().then((res) => {
        res.forEach((element: any) => {
          this.vehicleList.push({
            ...element.data(),
            id: element.id,
          });
          console.log(this.vehicleList)
        });
      })
    }
    if (this.fromUrl == 'renting') {
      this.database.rentalVehicles().then((res) => {
        res.forEach((element: any) => {
          this.vehicleList.push({
            ...element.data(),
            id: element.id,
          });
          console.log(this.vehicleList)
        });
      })

    }
    if (this.fromUrl == 'outstation') {
      this.database.outstationVehicles().then((res) => {
        res.forEach((element: any) => {
          this.vehicleList.push({
            ...element.data(),
            id: element.id,
          });
          console.log(this.vehicleList)
        });
      })

    }
  }


  // CAB RIDE BOOKING
  booking() {
    if(this.dataProvider.booking){
      const data:booking = {
        ...this.dataProvider.booking,
        vehicle: this.dataProvider.vehicle
      }
      this.dataProvider.booking = data;
      console.log(data);
      this.router.navigate(['/root/billing']);
    }
    // if (this.fromUrl == 'cab') {
    //   this.dataProvider.loading = true;
    //   this.database.getCabService().then((res) => {
    //     let cabServiceData = res.data();
    //     let totalHours = data.package
    //   })
    //   this.database.bookings(data).then((res) => {
    //     console.log(res);
    //     this.alertify.presentToast("Ride Booked Successfully");
    //     this.router.navigate(['/root/billing']);
    //   })
    //   return;
    // }
    // if (this.fromUrl == 'renting') {
      // this.dataProvider.loading = true;
      // this.database.getRentalService().then((res) => {
      //   if (res.exists()){
      //     let cabServiceData:{packages:any[],commissionPackages:any[]} = res.data() as any;
      //     let totalHours = data.package.hours;
      //     if (cabServiceData['packages']){
      //       let rentalPackage = cabServiceData.packages.find((element:any) => {
      //         return element.minimumHours <= totalHours && element.maximumHour >= totalHours;
      //       })
      //       let totalCost = rentalPackage.pricePerHour * totalHours;
      //       let billingDetail:paymentDetail = {
      //         ...data,
      //         cost: totalCost,
      //       }
      //       this.dataProvider.loading = true;
      //       this.paymentService.handlePayment(billingDetail).subscribe((res)=>{
      //         console.log(res);
      //         if(res.stage=='paymentCaptureSuccess'){
      //           this.alertify.presentToast("Payment successful");
      //           // this.close.emit();
      //           this.database.bookings({...data,orderDetail:res}).then((res) => {
      //             console.log(res);
      //             this.alertify.presentToast("Renting Booked Successfully");
      //             this.router.navigate(['/root/billing']);
      //           }).catch((err:any)=>{
      //             console.log(err);
      //             this.alertify.presentToast("Error adding booking",'error');
      //           }).finally(()=>{
      //             this.dataProvider.loading = false;
      //           })
      //         }else {
      //           this.dataProvider.loading = false;
      //         }
      //         // this._snackBar.open("Payment successful");
      //         // this.close.emit(); 
      //       },(err)=>{
      //         this.dataProvider.loading = false;
      //       })
      //     }
      //   }
      // })
    //   return;
    // }
    // if (this.fromUrl == 'outstation') {
    //   this.database.outstation(data).then((res) => {
    //     console.log(res);
    //     this.alertify.presentToast("outstation Booked Successfully");
    //     this.router.navigate(['/root/billing']);
    //   })
    //   return;
    // }

  }




}
