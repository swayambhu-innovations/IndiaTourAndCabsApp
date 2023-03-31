import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DatabaseService } from 'src/services/database/database.service';
import { PaymentService } from 'src/services/payment.service';
import { booking, RentalPackage } from 'src/structures/booking.structure';

@Component({
  selector: 'app-renting',
  templateUrl: './renting.page.html',
  styleUrls: ['./renting.page.scss'],
})
export class RentingPage implements OnInit {
  locationsList: any[] = [];
  selectedPackage: any;
  packages: RentalPackage[] = [];
  time: { start: Date; end: Date } = {
    start: new Date(),
    end: new Date(),
  };

  public rentingForm: FormGroup = new FormGroup({
    pickupLocation: new FormControl(),
    guideAvailable: new FormControl(false),
    status: new FormControl('pending'),
    created: new FormControl(Date.now()),
    // user: user;
    pickupEndDate: new FormControl(''),
    pickupStartDate: new FormControl(''),
  });

  constructor(
    private database: DatabaseService,
    private dataProvider: DataProviderService,
    private router: Router
  ) {}

  ngOnInit() {
    this.rentalPackages();
    this.locations();
  }

  rentalPackages() {
    this.database.getRentalPackages().then((res) => {
      res.forEach((element: any) => {
        this.packages.push({
          ...element.data(),
          id: element.id,
        });
        console.log(this.packages);
      });
    });
  }

  changedTime(event: any, type: 'start' | 'end') {
    this.time[type] = new Date(event.detail.value);
    console.log(this.time);
  }

  selectPackage(value: any) {
    console.log(value);
    this.selectedPackage = value;
  }

  async renting() {
    this.dataProvider.loading = true;
    try {
      const data: booking = {
        ...this.rentingForm.value,
        pickupStartDate: this.time.start,
        pickupEndDate: this.time.end,
        package: this.selectedPackage,
        user: {
          displayName: this.dataProvider?.user.displayName,
          email: this.dataProvider?.user.email,
          photoURL: this.dataProvider?.user.photoURL,
          phone: this.dataProvider?.user.phone,
          userId: this.dataProvider?.user.id,
          address: this.dataProvider?.user.address,
        },
        type: 'rental',
      };
      let res = await this.database.getRentalService();
      if (res.exists()) {
        let cabServiceData: { packages: any[]; commissionPackages: any[] } =
          res.data() as any;
        let totalHours = data.package.hours;
        if (cabServiceData['packages']) {
          let rentalPackage = cabServiceData.packages.find((element: any) => {
            return (
              element.minimumHours <= totalHours &&
              element.maximumHour >= totalHours
            );
          });
          let totalCost = rentalPackage.pricePerHour * totalHours;
          data.costs = [
            {
              cost: totalCost,
              name: 'Rental',
            },
          ]
          if (data.guideAvailable) {
            let guideRes = await this.database.getGuideService();
            if (guideRes.exists()) {
              let commissions = guideRes.data()['commissionPackages'];
              let commission = commissions.find((element: any) => {
                return (
                  element.minimumHours <= totalHours &&
                  element.maximumHour >= totalHours
                );
              });
              data.costs?.push({
                cost: commission.value,
                name: 'Guide',
              });
            }
          }
          let settings = await this.database.getSettings();
          if (settings.exists()) {
            let tax = settings.data()['tax'];
            data.costs?.push({
              cost: (totalCost * tax) / 100,
              name: 'Tax',
            });
          }
          data.grandTotal = data.costs.reduce((a: any, b: any) => {
            return a + b.cost;
          },0)
          console.log(data);
          this.dataProvider.booking = data;
          console.log(this.dataProvider.booking);
          this.dataProvider.loading = false;
          this.router.navigateByUrl('/root/vehicle/renting');
        }
      }
    } catch (error) {
      this.dataProvider.loading = false;
    }
  }

  locations() {
    this.database.getLocations().then((res) => {
      res.forEach((element: any) => {
        this.locationsList.push({
          ...element.data(),
          id: element.id,
        });
        console.log(this.locationsList);
      });
    });
  }
}
