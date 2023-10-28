import { Component, OnInit } from '@angular/core';
import Fuse from 'fuse.js';
import { DatabaseService } from 'src/services/database/database.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.page.html',
  styleUrls: ['./tours.page.scss'],
})
export class ToursPage implements OnInit {

  Tours:any[] = [];
  fuseSearch: any;
  filteredTours: any[] = [];
  constructor(private database:DatabaseService) { }

  async ngOnInit() {
    await this.getTours();
    // this.filteredTours = this.Tours;
    this.fuseSearch = new Fuse(JSON.parse(JSON.stringify(this.Tours)), {
      keys: ['tourName', 'tourPrice'],
    })
  }

  search(event: any) {
    // console.log(event);
    if (!this.fuseSearch) {
      this.filteredTours = this.Tours
    }
    const result = this.fuseSearch.search(event.detail.value);
    console.log(result);
    this.filteredTours = result.map((item: any) => item.item);
  }

  async getTours(){
    let res = await this.database.tours()
    res.forEach((element: any) => {
      this.Tours.push({
        ...element.data(),
        id: element.id,
      });
      console.log(this.Tours)
    });
  }

}
