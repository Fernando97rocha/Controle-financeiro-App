import { EventEmitter, Injectable } from '@angular/core';
import { Income } from '../models/income-model';
import { Category } from '../models/category-model';
import { Expense } from '../models/expense-model';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private incomes : Array<Income> = [];
  private expenses : Array<Expense> = [];
  private month : string = '';

  EmmitDataChangeIncome = new EventEmitter<any>();
  EmmitDataChangeExpense = new EventEmitter<any>();
  EmmitDataChangeMonth = new EventEmitter<any>();

  constructor() { }

  getIncomes() {
    return this.incomes;
  }

  putIncomes(income: Income): void {
    this.incomes.unshift(income);
    this.EmmitDataChangeIncome.emit(income);
  }

  getExpenses() {
    return this.expenses;
  }

  putExpenses(expense: Expense): void {
    this.expenses.unshift(expense);
    this.EmmitDataChangeExpense.emit(expense);
  }

  putMonth(month: string): void {
    this.month = month;
    this.EmmitDataChangeMonth.emit(month);
  }

  getMonth() {
    return this.month;
  }
}
