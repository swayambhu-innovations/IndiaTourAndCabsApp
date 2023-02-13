import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {

  constructor() { }
  Blogs =[

    {
      id: 1,
      title:'Blog   1',     
      blogImage:'https://static.toiimg.com/photo/msid-93474335,width-96,height-65.cms',
      description: 'Yes, there are waterfalls near Jaipur, even though, almost ', 
    
    },
    {
      id: 2,
      title:'Blog 2',
      blogImage:'https://th-thumbnailer.cdn-si-edu.com/CbddkFFO3OB80rRz83Iiuf-Z0FY=/1000x750/filters:no_upscale():focal(1471x1061:1472x1062)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg',
      description: 'Yes, there are waterfalls near Jaipur, even though, almost ',
    },{
      id: 3,
      title:'Blog 3',
      blogImage:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Konarka_Temple.jpg/1200px-Konarka_Temple.jpg',
      description: 'Yes, there are waterfalls near Jaipur, even though, almost ',
    },{
      id: 4,
      title:'Blog 4',
      blogImage:'https://chaloghumane.com/wp-content/uploads/2021/09/Rayagada-Tour.jpg',

      description: 'Yes, there are waterfalls near Jaipur, even though, almost ',

    }

  ]
  ngOnInit() {}

}
