import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Income } from '../../models/income-model';
import { CommonModule } from '@angular/common';
import { Expense } from '../../models/expense-model';
import { IncomeService } from '../../services/API/income.service';
import { ExpenseService } from '../../services/API/expense.service';
import { Category } from '../../models/category-model';
import { CategoryService } from '../../services/API/category.service';
import { SharedDataService } from '../../services/shared-data.service';
import { AppServiceService } from '../../services/app-service.service';
import { Subscription } from 'rxjs';
import { log } from 'console';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent implements OnInit{

  private newIncome!: Income;
  private newExpense!: Expense;

  incomes: Income[] = [];
  expenses: Expense[] = [];
  categories: Category[] = [];

  constructor(private appService: AppServiceService,private incomeService: IncomeService, private expenseService: ExpenseService, private categoryService: CategoryService) {
  }

  putCategoryNameIntoIncome(income: Income) {
    this.categories.forEach(category => {
      if(income.categoryId === category.id) {
        income.category = category.name
      }
    })
  }

  putCategoryNameIntoExpense(expense: Expense) {
    this.categories.forEach(category => {
      if(expense.categoryId === category.id) {
        expense.category = category.name
      }
    })
  }

  ngOnInit(): void {

    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })

    this.incomeService.getIncomes().subscribe((data) => {
      this.incomes = data;

      this.incomes.forEach(income => {
        this.putCategoryNameIntoIncome(income);
      })
    })


    this.appService.EmmitDataChangeIncome.subscribe((obj: Income) => {
      if (obj.value >= 0) {
        this.newIncome = obj;
        this.incomes.push(this.newIncome)
      }
    })

    this.expenseService.getExpenses().subscribe((data) => {
      this.expenses = data;

      this.expenses.forEach(expense => {
        this.putCategoryNameIntoExpense(expense);
      })
    })

    this.appService.EmmitDataChangeExpense.subscribe((obj: Expense) => {
        if (obj.value <= 0) {
          this.newExpense = obj;
          this.expenses.push(this.newExpense)
        }

    })

  }

  deleteIncome(income: Income):void {

    const incomeId = income.id
    let index = 0;
    this.incomes.forEach(income => {
      if (income.id == incomeId ) {
        index = this.incomes.indexOf(income);
        this.incomeService.deleteIncome(income).subscribe();
        this.incomes.splice(index, 1);
        income.value *= -1;
        this.appService.putIncomes(income);
      }
    })
    
  }

  deleteExpense(expense: Expense):void {

    const expenseId = expense.id
    let index = 0;
    this.expenses.forEach(expense => {
      if (expense.id == expenseId ) {
        index = this.expenses.indexOf(expense);
        this.expenseService.deleteExpense(expense).subscribe();
        this.expenses.splice(index, 1);
        expense.value *= -1;
        this.appService.putExpenses(expense);
      }
    })
  }
}
