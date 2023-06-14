import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, NavController } from '@ionic/angular';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() currentPanel: String = '';
  @Input() showbackButton:boolean = true;
  constructor(public router:Router,private navController: NavController, public dataProvider:DataProviderService,private location: Location , private actionSheetCtrl:ActionSheetController) { }

  ngOnInit() {}

  get path(){
    return this.location.path();
  }

  back(){
    this.navController.setDirection('back');
    const firstRoute = this.router.url;
    this.navController.pop()
    setTimeout(() => {
      console.log("navigated",firstRoute,this.router.url);
      if  (firstRoute == this.router.url){
        this.navController.navigateBack('/root/homepage');
      }
    },10)
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Select Language',
      buttons: [
        {
          text: 'English',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Hindi',
          data: {
            action: 'share',
          },
        },
        
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    console.log(result);
  }
}


