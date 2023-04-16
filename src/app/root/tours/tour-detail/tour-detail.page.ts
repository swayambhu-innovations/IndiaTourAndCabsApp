import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DatabaseService } from 'src/services/database/database.service';

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.page.html',
  styleUrls: ['./tour-detail.page.scss'],
})
export class TourDetailPage implements OnInit {

  status: string = 'overview';
  public id: any = this.activatedRoute.snapshot.paramMap.get('id');
  constructor(private database: DatabaseService, private activatedRoute: ActivatedRoute, private dataProvider: DataProviderService, private router:Router) { }

  public currentTour: any;
  ngOnInit() {
    this.tour();
    console.log(this.currentTour);
  }

  tour() {
    this.database.singleTours(this.id).then((res) => {
      this.currentTour = res.data();
      console.log(res.data());
    })
  }

  bookTour() {
    const data = {
      dropLocation: this.currentTour.dropOffLocation,
      pickupLocation: this.currentTour.pickupLocation,
      guideAvailable: true,
      guide: this.currentTour.tourAgent,
      status: 'pending',
      created: Date.now(),
      type: 'tour',
      grandTotal: this.currentTour.tourPrice,
      user: {
        address: this.dataProvider.user.address,
        email: this.dataProvider.user.email,
        displayName: this.dataProvider.user.displayName,
        phone: this.dataProvider.user.phone,
        photoURL: this.dataProvider.user.photoURL,
        userId: this.dataProvider.user.id,
      },
      tourDetails: {
        tourName: this.currentTour.tourName,
        tourId: this.id,
        days: this.currentTour.days,
        noOfDays: this.currentTour.noOfDays,
        noOfNights: this.currentTour.noOfNights,
      }

    }
    this.dataProvider.tour = data;
    console.log(this.dataProvider.tour);
    this.router.navigate(['/root/tours-billing']);
  }

}
