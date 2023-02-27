import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/Auth/auth.service';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
// import { DatabaseService } from 'src/services/DataBase/database.service';
import { UserService } from 'src/services/User/user.service';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.page.html',
  styleUrls: ['./terms-condition.page.scss'],
})
export class TermsConditionPage implements OnInit {

  checked:boolean= true
  policyData:any;
  constructor(public auth:AuthService, public dataProvider:DataProviderService, private router:Router, private user:UserService, 
    // private database:DatabaseService
    ) { }

  ngOnInit() {
    // this.database.policy().then((res) => {
    //   this.policyData =  res.data()
    // });
  }

  triggerCheckBox(){
    this.checked = !this.checked;
    console.log(this.checked) 
  }

  signUp(){
    console.log("triigerd")
    
      const data = {
        ...this.dataProvider.user,
        termsCondition:true
      }
      this.user.updateUser(this.dataProvider.user.id, data)
      this.router.navigateByUrl('/root/homepage') 
    }
     
  }


