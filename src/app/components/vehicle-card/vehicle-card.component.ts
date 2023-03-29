import { Component, Input, OnInit } from '@angular/core';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { vehicle } from 'src/structures/booking.structure';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.scss'],
})
export class VehicleCardComponent implements OnInit {

  @Input() vehicle:vehicle | any;
  public data: any[] = [];
  chooseDate: any;
  constructor(private dataProvider:DataProviderService) { }

  ngOnInit() {}
  selectDate(value: any) {
    // console.log(value);
    // console.log(this.chooseDate + 'value');
    this.dataProvider.vehicle = value;
    if (this.chooseDate.length >= 0) {
      this.chooseDate.pop();
      this;
      // console.log(this.chooseDate);
      this.chooseDate.checked = true;
      this.dataProvider.vehicle = value;
      return;
    }
  }

  



}
