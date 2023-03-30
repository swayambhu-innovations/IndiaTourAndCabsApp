import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DatabaseService } from 'src/services/database/database.service';
import { Geolocation } from '@capacitor/geolocation';
import { Spot } from 'src/structures/service.structure';

// const printCurrentPosition = async () => {
//   const coordinates = await Geolocation.getCurrentPosition();

//   console.log('Current position:', coordinates);
// };
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {
  constructor(
    public dataProvider: DataProviderService,
    private databaseService: DatabaseService
  ) {}
  spots: Spot[] = [];
  filteredSpots:Spot[] = []
  showcaseSpots: any[] = [];
  windowsWidth = window.innerWidth;
  currentPosition: google.maps.LatLngLiteral | undefined;
  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12,
  };
  mapOptions: google.maps.MapOptions = {
    disableDefaultUI: false
  }
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markers: { position: google.maps.LatLngLiteral,label:string }[] = [];
  zoom = 20;
  locationForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    hours: new FormControl(0, Validators.required),
  });
  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      this.center = event.latLng.toJSON();
      this.currentPosition = event.latLng.toJSON();
    }
  }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
  ngOnInit() {
    this.getSpots();
    // this.updateSpots()
  }
  updateSpots() {
    // updating spots
    console.log("updating spots",this.spots);
    // filter spots by distance using current location and spot location
    this.filteredSpots = this.spots.filter((spot) => {
      const distance = this.getDistance(
        this.currentPosition?.lat || 0,
        this.currentPosition?.lng || 0,
        spot.location.lat,
        spot.location.lng
      );
      console.log("distance",this.currentPosition?.lat || 0,
      this.currentPosition?.lng || 0,
      spot.location.lat,
      spot.location.lng,distance);
      return distance < 10;
    });
    // create markers from filtered spots
    this.markers = this.filteredSpots.map((spot) => {
      return {
        label: spot.name,
        position: {
          lat: spot.location.lat,
          lng: spot.location.lng,
        },
      };
    });
    this.showcaseSpots = this.filteredSpots.map((spot) => {
      return {
        id:spot.id,
        name: spot.name,
        image: spot.images[0],
        location: spot.address,
        rating: spot.rating || 0,
        type: spot.category,
      }
    })
  }

  /** calculates the distance between two locations in MILES */
  getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
      if ((lat1 == lat2) && (lon1 == lon2)) {
          return 0;
      }
      else {
          var radlat1 = Math.PI * lat1/180;
          var radlat2 = Math.PI * lat2/180;
          var theta = lon1-lon2;
          var radtheta = Math.PI * theta/180;
          var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
          if (dist > 1) {
              dist = 1;
          }
          dist = Math.acos(dist);
          dist = dist * 180/Math.PI;
          dist = dist * 60 * 1.1515;
          dist = dist * 1.609344
          // if (unit=="K") {  }
          // if (unit=="N") { dist = dist * 0.8684 }
          return dist;
      }
  }
  async getCurrentLocation() {
    const coordinates = await Geolocation.watchPosition(
      { enableHighAccuracy: true, timeout: 5000,maximumAge:500 },
      (position, err) => {
        console.log(position);
        if (position) {
          this.currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }
          this.updateSpots()
        }
      }
    );
    // let currentPosition = coordinates.coords;
  }

  getSpots() {
    this.databaseService.getSpots().then((data) => {
      console.log("SPOTS DOCS",data.docs);
      this.spots = data.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        } as Spot;
      })
      this.getCurrentLocation();
    });
  }
}
