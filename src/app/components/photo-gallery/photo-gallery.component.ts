import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
})
export class PhotoGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  Tours = [
    {
      id: 4,
      name: 'Tour 4',
      image: 'https://img.freepik.com/free-photo/female-tourists-hand-have-happy-travel-map_1150-7411.jpg',
      location: 'Taj Mahal',
      ratings:'4.5',
      type:'Travel'
    },
    {
      id: 1,
      name: 'Tour 1',
      image: 'https://thumbs.dreamstime.com/b/back-side-traveler-girl-searching-right-direction-map-traveling-along-asia-freedom-active-lifestyle-concept-back-side-197635139.jpg',
      location: 'Goa',
      ratings:'4.5',
      type:'Travel'
    },
    {
      id: 2,
      name: 'Tour 2',
      image: 'https://media.istockphoto.com/id/1285301614/photo/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-and-life-people-travel.jpg?s=612x612&w=0&k=20&c=0QW6GnkuFNYcPZhy26XVHuTc2avJTK8u6l_1iT0SlZk=',
      location: 'Hawaii',
      ratings:'4.5',
      type:'Travel'
    },
    {
      id: 3,
      name: 'Tour 3',
      image: 'https://thumbs.dreamstime.com/b/travel-trip-vacation-tourism-mockup-tools-close-up-compass-glass-water-note-pad-pen-toy-airplane-touristic-map-59549959.jpg',
      location: 'Maldives',
      ratings:'4.5',
      type:'Travel'
    },
   
  ]
}
