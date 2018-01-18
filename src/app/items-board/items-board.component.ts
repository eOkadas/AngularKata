import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Category } from '../common/category.model';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from 'app/services/category.service';

@Component({
  selector: 'app-items-board',
  templateUrl: './items-board.component.html',
  styleUrls: ['./items-board.component.css']
})
export class ItemsBoardComponent implements OnInit {
categories: Observable<Category[]>;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.LoadCategories();
  }

}
