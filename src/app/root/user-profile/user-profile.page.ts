import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DatabaseService } from 'src/services/database/database.service';

import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';
import { UserService } from 'src/services/User/user.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  public url: any;
  public file: any;
  public change: boolean = false;
  
  public profileForm: FormGroup = new FormGroup({
    displayName: new FormControl(''),
    phone: new FormControl(''),
    alternativePhone: new FormControl(''),
    address: new FormControl(''),
    landmark: new FormControl(''),
    pincode: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),

    photoURL: new FormControl(''),
    DateOfBirth: new FormControl(''),

  });


  constructor(private database: DatabaseService, public dataProvider: DataProviderService, private user: UserService, private alertify: AlertsAndNotificationsService, private router: Router) { }

  ngOnInit() {
    console.log(this.dataProvider?.user)
    if(this.dataProvider?.user){
      this.profileForm.patchValue(this.dataProvider?.user);
      console.log(this.profileForm.value); 
    }
    this.profileForm.valueChanges.subscribe((value) => {
      console.log(value);
      this.change = true
    });
    
  }

  async uploadFile(files: FileList | null) {
    if (files) {
      const file = files[0];
      const url = await this.database.upload('users/' + file.name, file);
      this.url = url;
      console.log(this.url)
    }
  }

  async profile() {
    // console.log(this.file.target.files[0]);
    await this.uploadFile(this.file?.target?.files);
    if (this.url) {
      const profile = {
        ...this.profileForm.value,
        photoURL: this.url,
      }
      console.log(profile)
      this.user.updateUser(this.dataProvider?.user.id, profile);
      this.alertify.presentToast('Profile Updated');
      this.router.navigate(['/root/homepage']);
    }
    else {
      const profile = {
        ...this.profileForm.value,
        photoURL: this.dataProvider?.user.photoURL,
      }
      console.log(profile)
      this.user.updateUser(this.dataProvider?.user.id, profile);
      this.alertify.presentToast('Profile Updated');
      this.router.navigate(['/root/homepage']);


    }



  }
}
