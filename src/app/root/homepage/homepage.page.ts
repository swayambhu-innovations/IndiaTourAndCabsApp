import { Component, OnInit } from '@angular/core';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  constructor(public dataProvider:DataProviderService) { }
  windowsWidth = window.innerWidth;
 
  ngOnInit() {
  }

}
