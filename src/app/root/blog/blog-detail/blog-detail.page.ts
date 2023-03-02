import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/services/database/database.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.page.html',
  styleUrls: ['./blog-detail.page.scss'],
})
export class BlogDetailPage implements OnInit {
  
  public url: any = this.activatedRoute.snapshot.paramMap.get('id');
  public blog: any;
  constructor(private activatedRoute:ActivatedRoute, private database:DatabaseService ) { }

  ngOnInit() { 
    this.database.blogDetails(this.url).then((blog:any)=>{
      this.blog = blog.data();
      console.log(this.blog)
    })
  }

}
