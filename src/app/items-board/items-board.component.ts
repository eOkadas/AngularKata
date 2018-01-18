import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Category } from '../common/category.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-items-board',
  templateUrl: './items-board.component.html',
  styleUrls: ['./items-board.component.css']
})
export class ItemsBoardComponent implements OnInit {
categories: Observable<Category[]>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.categories = this.httpClient.get<Category[]>('api/categories.json');
  }

}
