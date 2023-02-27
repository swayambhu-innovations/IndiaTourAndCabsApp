import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/services/Auth/auth.service';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { AlertsAndNotificationsService } from 'src/services/uiService/alerts-and-notifications.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public signupForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]), 
    username: new FormControl(null, [Validators.required]),
  });

  constructor(
    public authservice: AuthService,
    private alertify: AlertsAndNotificationsService,
    private router: Router,
    private dataProvider:DataProviderService,
    public auth: AuthService
  ) {}

  ngOnInit() {}

  signUpWithEmailAndPassword() {
    if (this.signupForm.valid) {
      this.dataProvider.signUp = this.signupForm.value;
      this.auth.signUpWithEmailAndPassword(this.signupForm.value.email,this.signupForm.value.password, this.signupForm.value.username)
      console.log(this.dataProvider.signUp);
      this.router.navigateByUrl('/root/terms-condition')
      
      // this.router.navigate(['/login'])
    }
    // this.signupForm.reset();
  }
}
