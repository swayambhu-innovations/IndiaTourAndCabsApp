import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/services/database/database.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.page.html',
  styleUrls: ['./booking-details.page.scss'],
})
export class BookingDetailsPage implements OnInit {

  public fromUrl: any = this.activatedRoute.snapshot.paramMap.get('id');
  public currentBooking: any;
  constructor(private activatedRoute:ActivatedRoute, private database:DatabaseService) { }

  ngOnInit() {
    this.bookingDetails();
  }

  bookingDetails(){
    this.database.getBookingDetails(this.fromUrl).then((res:any)=>{
      this.currentBooking = res.data();
      console.log(res.data());

    })
  }

}
