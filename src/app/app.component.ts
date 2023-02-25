import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  path:string = window.location.pathname;
  isUrlValid:boolean = true;
  constructor(public route:Router) {}
  
  ngOnInit(){
  }

}
