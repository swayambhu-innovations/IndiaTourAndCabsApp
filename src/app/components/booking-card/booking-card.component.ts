import { Component, Input, OnInit } from '@angular/core';
import { cabRide } from 'src/structures/cabRide.structure';
import { guide } from 'src/structures/guide.structure';
import { renting } from 'src/structures/renting.structure';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.scss'],
})
export class BookingCardComponent implements OnInit {
@Input() bookingType:string = '';
@Input() cabRides: cabRide | any;
@Input() rentals: renting | any;
@Input() guide: guide| any;
@Input() outstations: any;
  constructor() { }
  ngOnInit() {}

}
