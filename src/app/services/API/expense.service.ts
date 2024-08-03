import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Expense } from '../../models/expense-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private expenseUrl = 'http://localhost:8080/expenses/list';

  constructor(private http: HttpClient) { }

  getExpenses() : Observable<Expense[]> {
    return this.http.get<Expense[]>(this.expenseUrl)
  }
}
