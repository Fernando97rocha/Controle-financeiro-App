import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../../models/category-model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryListUrl = 'http://localhost:8080/categories/list';
  private newCategoryUrl = 'http://localhost:8080/categories';

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get<Category[]>(this.categoryListUrl)
  }

  postNewCategory(category: Category) {
    return this.http.post<Category>(`${this.newCategoryUrl}`, category)
  }
}
