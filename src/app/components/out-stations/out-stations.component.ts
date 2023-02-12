import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-out-stations',
  templateUrl: './out-stations.component.html',
  styleUrls: ['./out-stations.component.scss'],
})
export class OutStationsComponent implements OnInit {
  Outstations = [
    {
      id: 1,
      name: 'Outstation 1',
      image:
        'https://t4.ftcdn.net/jpg/03/07/36/71/360_F_307367172_NVUQnGUVvMXmBxKrCJwTPd8gXn5yIcxV.jpg',
      location: 'Odisha',
    },
    {
      id: 2,
      name: 'Outstation 2',
      image:
        'https://storage.karmagroup.com/assets/karmagroup.com/blog/2018/01/jaipur1-940x671.jpg',
      location: 'Rajasthan',
    },
    {
      id: 3,
      name: 'Outstation 3',
      image: 'https://www.ibef.org/assets/images/states/Karnataka-2.jpg',
      location: 'Karnataka',
    },
    {
      id: 4,
      name: 'Outstation 3',
      image:
        'https://www.adotrip.com/public/images/state/master_images/5f3bb17fddc76-Uttar_Pradesh_Attractions.jpg',
      location: 'Uttar Pradesh',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
