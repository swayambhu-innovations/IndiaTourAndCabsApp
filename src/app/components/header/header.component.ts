import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() currentPanel: string = window.location.pathname.split('/')[2];
  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {}

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


