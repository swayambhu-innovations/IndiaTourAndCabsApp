import { Component, Input, OnInit } from '@angular/core';
import {
  MenuController,
  NavController,
  Platform,
  PopoverController,
} from '@ionic/angular';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

import { Router } from '@angular/router';

import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Auth, authState, User } from '@angular/fire/auth';
import { EMPTY, Observable, Subject } from 'rxjs';

import { AuthService } from 'src/services/Auth/auth.service';
import { urls } from 'src/services/url';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public readonly user: Observable<User | null> = EMPTY;

  public loggedInUserData: Subject<any> = new Subject();

  public userdata: any;
  constructor(
    private platform: Platform,
    public authService: AuthService,
    private router: Router,

    private auth: Auth,
    public dataProvider: DataProviderService,
    private fs: Firestore,
    // private database: DatabaseService,
    private popOverController: PopoverController
  ) {
    if (!this.platform.is('capacitor')) {
      this.platform.ready().then(() => {
        GoogleAuth.initialize({
          clientId:'461704917744-okgeube23vb6rpg6puv9ah3arfa6uphp.apps.googleusercontent.com',
          scopes: ['profile', 'email'],
          grantOfflineAccess: true,
        });
        console.log(GoogleAuth);
      });
    }
    // this.database.getSettings().then((res) => { this.dataProvider.appSettings = res.data(); console.log(this.dataProvider.appSettings); });
    this.user = authState(this.auth);
    this.user.subscribe((user: any) => {
      if (user) {
        console.log(user.uid);
        this.dataProvider.LoggedInUser = true;
        this.loggedInUserData.next(user);
        const userUrl = urls.user.replace('{USER_ID}', user.uid);
        // this.database
        //   .getNotifications(user.uid)
        //   .subscribe((res: any) => {
        //     this.database.notifications = res;
        //     // alert('reacher2')
        //     this.database.notificationChanged.next(res);
        //     // alert('reacher3')
        //   });
        docData(doc(this.fs, userUrl)).subscribe((res) => {
          this.dataProvider.user = res;
          console.log(this.dataProvider?.user);
          // console.log(this.dataProvider?.user?.phoneVerify)
          if (!this.dataProvider?.user) {
            this.router.navigate(['/auth/login']);
          }
          if (this.dataProvider?.user != undefined && this.dataProvider?.user?.termsCondition == undefined) {
            this.router.navigate(['/root/terms-condition']);
          }
          // if (this.dataProvider?.user?.termsCondition == true && this.dataProvider?.user?.currentAddress == "") {
          //   this.router.navigate(['/pick-up-address']);
          // }
          if (this.dataProvider?.user?.termsCondition == true && this.dataProvider.LoggedInUser == true) {
            this.router.navigate(['/root/homepage']);
          }
          // let unReadNotifications: notificationStructure[] = [];
          let showBackDrop = true;
          // this.database.notificationChanged.subscribe(async (res) => {
          //   var value: any = {}
          //   for (value of res) {
          //     console.log("value", value);

          //     if (value.viewed != true) {
          //       const isUnRead = unReadNotifications.find((existingValue) => {
          //         return existingValue.id == value.id;
          //       })
          //       console.log(value, unReadNotifications);
          //       if (isUnRead == undefined
          //       ) {
          //         unReadNotifications.push(value);
          //         const popOver = await this.popOverController.create({
          //           component: NotificationPopOverComponent,
          //           componentProps: value,
          //           showBackdrop: showBackDrop,
          //           cssClass: 'removeShadow'
          //         });
          //         popOver.present();
          //         showBackDrop = false;
          //       }
          //     }
          //   }
          // });
        });
      } else {
        console.log("logged out");
        this.router.navigate(['login']);
        this.dataProvider.LoggedInUser = false;
        this.dataProvider.user = null;
        this.loggedInUserData.next(false);
        return
      }
    });
  }

}
