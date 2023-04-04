import { Component, Input, OnInit } from '@angular/core';
import { booking } from 'src/structures/booking.structure';

@Component({
  selector: 'app-booking-details-card',
  templateUrl: './booking-details-card.component.html',
  styleUrls: ['./booking-details-card.component.scss'],
})
export class BookingDetailsCardComponent implements OnInit {

  @Input() bookingType: string = '';
  @Input() booking: booking | any;

  constructor() { }

  ngOnInit() { }

}
