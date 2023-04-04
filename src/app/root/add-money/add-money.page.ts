import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/Auth/auth.service';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DatabaseService } from 'src/services/database/database.service';
import { PaymentService } from 'src/services/payment.service';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.page.html',
  styleUrls: ['./add-money.page.scss'],
})
export class AddMoneyPage implements OnInit {

  // public walletForm: FormGroup = new FormGroup({
  //   amount: new FormControl(500,[Validators.required]),
  // });

  amount:number = 500;
  constructor(private router:Router, private dataProvider:DataProviderService, private alertify:AlertsAndNotificationsService, private paymentService:PaymentService, public database:DatabaseService, public auth:AuthService ) { }

  ngOnInit() {
  }

  addMoneyToWallet(amount:number){
    console.log(amount);
    this.amount = amount;
  }

  startPayment() {
    this.dataProvider.loading = true;
    if (this.amount){
      this.paymentService.handleWallet(this.amount).subscribe(
        (res) => {
          console.log(res);
          if (res.stage == 'paymentCaptureSuccess') {
            this.alertify.presentToast('Payment successful');
            // this.close.emit();
            if (this.amount){
              const data = {
                ...this.dataProvider.user,
                wallet: this.amount,
              }
              this.auth.userDetail(this.dataProvider.user.id, data)
              .then((res) => {
                console.log(res);
                this.router.navigate(['/root/confirm-booking']);
                this.alertify.presentToast('Adding Money on Wallet Successfully');
              })
              .catch((err: any) => {
                console.log(err);
                this.router.navigateByUrl('/root/error-page');
                this.alertify.presentToast('Error adding on Wallet', 'error');
                
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

}
