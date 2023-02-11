import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  page: string = window.location.pathname.split('/')[2];

  constructor() {
console.log(this.page);

  }

}
