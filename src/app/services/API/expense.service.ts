import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Expense } from '../../models/expense-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {


  private expenseListUrl = 'http://localhost:8080/expenses/list';
  private newExpenseUrl = 'http://localhost:8080/expenses';

  constructor(private http: HttpClient) {}

  getExpenses () : Observable<Expense[]> {
    return this.http.get<Expense[]>(this.expenseListUrl);
  }

  addNewExpense (expense: Expense) {
    return this.http.post<Expense>(`${this.newExpenseUrl}`, expense)
  }
}
