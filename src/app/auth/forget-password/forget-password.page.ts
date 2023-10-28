import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/Auth/auth.service';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {
  public forgetForm: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required]),
  });

  constructor(public auth: AuthService, private router:Router,private alertify:AlertsAndNotificationsService) { }

  ngOnInit() { }

  forgetWithEmail() {
    // if(this.forgetForm.valid){
    //   this.auth.loginWithEmailPassword(this.forgetForm.value.email)
    // }else{
    //   alert('Invalid Login Credentials')
    // }
    // this.forgetForm.reset()
  }

}
