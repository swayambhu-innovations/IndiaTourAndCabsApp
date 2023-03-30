import { Component, OnInit } from '@angular/core';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.page.html',
  styleUrls: ['./billing.page.scss'],
})
export class BillingPage implements OnInit {

  constructor(public dataProvider:DataProviderService) { }

  ngOnInit() {
    console.log(this.dataProvider.booking.vehicle);
  }

}
