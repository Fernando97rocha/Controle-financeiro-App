import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Income } from '../../models/income-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  private incomeListUrl = 'http://localhost:8080/incomes/list';
  private newIncomeUrl = 'http://localhost:8080/incomes';

  constructor(private http: HttpClient) {}

  getIncomes () : Observable<Income[]> {
    return this.http.get<Income[]>(this.incomeListUrl);
  }

  addNewIncome (income: Income) {
    return this.http.post<Income>(`${this.newIncomeUrl}`, income)
  }

}
