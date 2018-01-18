import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-board',
  templateUrl: './items-board.component.html',
  styleUrls: ['./items-board.component.css']
})
export class ItemsBoardComponent implements OnInit {
categories: Category[];

  constructor() { }

  ngOnInit() {
    this.categories = [
      {
        id: 1,
        name: 'Electronics',
        iconClass: 'fa fa-desktop fa-4x'
    },
    {
        id: 2,
        name: 'Women',
        iconClass: 'fa fa-female fa-4x'
    },
    {
        id: 3,
        name: 'Car',
        iconClass: 'fa fa-car fa-4x'
    },
    {
        'id': 4,
        'name': 'Home',
        'iconClass': 'fa fa-home fa-4x'
    },
    {
        id: 5,
        name: 'Books',
        iconClass: 'fa fa-book fa-4x'
    }
    ]
  }

}
export interface Category {
  id: number;
  name: string;
  iconClass: string;
}