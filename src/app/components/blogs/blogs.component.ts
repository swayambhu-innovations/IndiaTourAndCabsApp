import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/services/database/database.service';
import { blogs } from 'src/structures/blog.structure';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {

  constructor(private database:DatabaseService) { }
  
  blogList:blogs[]=[];
  
  ngOnInit() {
    this.blogs();
  }

  blogs(){
    this.database.blogs().then((blogs)=>{
      blogs.forEach((element: any) => {
        this.blogList.push({
          ...element.data(),
          id: element.id,
        });
        console.log(this.blogList)
      });
    })
  }

}
