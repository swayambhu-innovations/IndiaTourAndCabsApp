import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-tour',
  templateUrl: './travel-tour.component.html',
  styleUrls: ['./travel-tour.component.scss'],
})
export class TravelTourComponent implements OnInit {
  Tours =[

    {
      id: 1,
      tourName:'Rajasthan tour by car',     
      tourImage:'https://static.toiimg.com/photo/msid-93474335,width-96,height-65.cms',
      tourPrice: 5000,
      tourDescription: 'Lorem ipsum dolor scinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eu lectus.',
      days: 3,
      night: 2,
      stoppage: 4,
    },{
      id: 2,  
      tourName:'Taj Mahal tour ',
      tourImage:'https://th-thumbnailer.cdn-si-edu.com/CbddkFFO3OB80rRz83Iiuf-Z0FY=/1000x750/filters:no_upscale():focal(1471x1061:1472x1062)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg',
      tourPrice: 6000,
      tourDescription: 'Lorem ipsum dolor scinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eu lectus.',
      days: 1,
      night: 0,
      stoppage: 2,
    },{
      id: 3,
      tourName:'Konark tour',
      tourImage:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Konarka_Temple.jpg/1200px-Konarka_Temple.jpg',
      tourPrice: 9000,
      tourDescription: 'Lorem ipsum dolor scinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eu lectus.',
      days: 3,
      night: 2,
      stoppage: 4,
    },{
      id: 4,
      tourName:'Raygada tour',
      tourImage:'https://chaloghumane.com/wp-content/uploads/2021/09/Rayagada-Tour.jpg',
      tourPrice: 1000,
       
      tourDescription: 'Lorem ipsum dolor scinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eu lectus.',
      days: 3,
      night: 2,
      stoppage: 4,

    }
  ]
  constructor() { }
 
  ngOnInit() {}

}
