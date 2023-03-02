import { Component, Input, OnInit } from '@angular/core';
import { blogs } from 'src/structures/blog.structure';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent implements OnInit {

  @Input() blog: blogs | any;

  constructor() { }

  ngOnInit() {}

}
