import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  path:string = window.location.pathname;
  noTabPages:string[] = ['/start-screen','/login','/signup']
  constructor(private route:ActivatedRoute) {
  }

  ngOnInit(){
    console.log("this.route",this.route);
  }
}
