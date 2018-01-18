import { HttpClient } from '@angular/common/http';
import { Category } from 'app/common/category.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {
    constructor(private httpClient: HttpClient) {}

    public LoadCategories() {
        return this.httpClient.get<Category[]>('api/categories.json');
    }
}
