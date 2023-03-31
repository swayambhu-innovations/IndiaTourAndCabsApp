import { Component, Input, OnInit } from '@angular/core';
import { booking } from 'src/structures/booking.structure';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent implements OnInit {
  @Input() booking:booking|undefined;
  constructor() { }

  ngOnInit() {}

}
