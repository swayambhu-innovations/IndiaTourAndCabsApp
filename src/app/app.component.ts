import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  path:string = window.location.pathname;
  noTabPages:string[] = ['/start-screen','/login','/signup']
  constructor(private router:Router) {
    router.events.subscribe(()=>{
      this.path = window.location.pathname;
    })
  }
  page: string = window.location.pathname.split('/')[2];
}
