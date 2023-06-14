import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataProviderService } from 'src/services/Data-Provider/data-provider.service';
import { DatabaseService } from 'src/services/database/database.service';
import { Geolocation } from '@capacitor/geolocation';
import { Spot } from 'src/structures/service.structure';
import { Blog, TourData, booking } from 'src/structures/booking.structure';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { CoverflowEffectOptions } from 'swiper/types';
import SwiperCore, {
  Autoplay,
  EffectCoverflow,
  EffectFade,
  Swiper,
} from 'swiper';

import { AutoplayOptions } from 'swiper/types';
import { AuthService } from 'src/services/Auth/auth.service';
import { Subscription, filter, firstValueFrom } from 'rxjs';

// install Swiper modules
SwiperCore.use([EffectCoverflow, EffectFade, Autoplay]);

// const printCurrentPosition = async () => {
//   const coordinates = await Geolocation.getCurrentPosition();

//   console.log('Current position:', coordinates);
// };
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit, OnDestroy {
  constructor(
    public dataProvider: DataProviderService,
    private databaseService: DatabaseService,
    private authService:AuthService
  ) {}
  selectedSpot: Spot | undefined;
  tours:TourData[] = []
  banners: any[] = [];
  spots: Spot[] = [];
  blogs: Blog[] = [];
  filteredSpots:Spot[] = []
  showcaseSpots: Spot[] = [];
  windowsWidth = window.innerWidth;
  currentPosition: google.maps.LatLngLiteral | undefined;
  display: any;
  questions:{expanded:boolean,body:string,title:string}[] = [
    {
      expanded:false,
      title:"What is the minimum age to participate in a tour?",
      body:"The minimum age to participate in a tour is 5 years old. Children under 18 years old must be accompanied by an adult."
    },
    {
      expanded:false,
      title:"What is the minimum age to participate in a tour?",
      body:"The minimum age to participate in a tour is 5 years old. Children under 18 years old must be accompanied by an adult."
    },
    {
      expanded:false,
      title:"What is the minimum age to participate in a tour?",
      body:"The minimum age to participate in a tour is 5 years old. Children under 18 years old must be accompanied by an adult."
    },
    {
      expanded:false,
      title:"What is the minimum age to participate in a tour?",
      body:"The minimum age to participate in a tour is 5 years old. Children under 18 years old must be accompanied by an adult."
    },
    {
      expanded:false,
      title:"What is the minimum age to participate in a tour?",
      body:"The minimum age to participate in a tour is 5 years old. Children under 18 years old must be accompanied by an adult."
    },
  ]
  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12,
  };
  mapOptions: google.maps.MapOptions = {
    disableDefaultUI: true,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
  }
  mapHeight: number = 200;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markers: marker[] = [];
  zoom = 20;
  locationForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    hours: new FormControl(0, Validators.required),
  });
  bookings: booking[] = [];
  places: any[] = [
    {
      name:'Rajashtan',
      image:'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmFqYXN0aGFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
    },
    {
      name:'Delhi',
      image:'https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60'
    },
    {
      name:'Gujarat',
      image:'https://images.unsplash.com/photo-1620103143245-9efb3e4a7553?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3VqYXJhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60'
    },
    {
      name:'Punjab',
      image:'https://images.unsplash.com/photo-1587899765642-3f8e3ea67852?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHVuamFifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
    },
  ];
  coverflowEffectOptions:CoverflowEffectOptions = {
    depth:300,
    rotate:0,
  }
  userBookingSubscription:Subscription = Subscription.EMPTY;
  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      this.center = event.latLng.toJSON();
    }
  }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
  ngOnDestroy(): void {
    this.userBookingSubscription.unsubscribe();
  }
  ngOnInit() {
    this.getTours();
    this.getSpots();
    this.getBanners();
    this.getBlogs();
    // this.updateSpots()
    this.authService.userAvailable.pipe(filter(d => d.uid)).subscribe((user) => {
      console.log("user",user);
      if(user){
        this.userBookingSubscription.unsubscribe();
        this.userBookingSubscription = this.databaseService.getCurrentUserBookings(user.uid).subscribe((data) => {
          this.bookings = data as booking[];
        })
      }
    })
  }

  openInfoWindow(marker: MapMarker,info:MapInfoWindow,markerData:marker) {
    this.selectedSpot = markerData.spot;
    info.open(marker);
    console.log("Triggered",markerData.spot);
    this.mapHeight = 250;
  }

  closeInfo(marker:marker){
    if(marker.spot.id == this.selectedSpot?.id){
      this.selectedSpot = undefined;
      this.mapHeight = 200;
    }
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
        spot:spot,
        position: {
          lat: spot.location.lat,
          lng: spot.location.lng,
        },
      };
    });
    // this.showcaseSpots = this.filteredSpots.map((spot) => {
    //   return {
    //     id:spot.id,
    //     name: spot.name,
    //     image: spot.images[0],
    //     location: spot.address,
    //     rating: spot.rating || 0,
    //     type: spot.category,
    //   }
    // })
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

  getBanners() {
    this.databaseService.banners().then((blogs)=>{
      blogs.forEach((element: any) => {
        this.banners.push({
          ...element.data(),
          id: element.id,
        });
        console.log("Banners",this.banners)
      });
    })
  }

  getTours(){
    this.databaseService.tours().then((res)=>{
      this.tours = []
      res.forEach((element: any) => {
        this.tours.push({
          ...element.data(),
          id: element.id,
        });
        console.log("this.tours",this.tours)
      });
    })
  }

  getBlogs(){
    this.databaseService.blogs().then((blogs)=>{
      blogs.forEach((element: any) => {
        this.blogs.push({
          ...element.data(),
          id: element.id,
        });
        console.log("Blogs",this.blogs)
      });
    })
  }

  clipText(text:string,maxLength:number){
    return text.length > maxLength ? text.substring(0,maxLength) + "..." : text;
  }
}
export interface marker {label:string,position:{lat:number,lng:number},spot:Spot}
