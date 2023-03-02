import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/services/database/database.service';
import { blogs } from 'src/structures/blog.structure';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  blogList:blogs[]=[];

  constructor(private database:DatabaseService) { }

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
