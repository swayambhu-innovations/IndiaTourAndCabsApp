import { Component, Input, OnInit } from '@angular/core';
import { booking } from 'src/structures/booking.structure';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.scss'],
})
export class BookingCardComponent implements OnInit {
@Input() bookingType:string = '';
@Input() cabRides: booking | any;
@Input() rentals: booking | any;
@Input() guide: booking | any;
@Input() outstations: any;
  constructor() { }
  ngOnInit() {}

}
