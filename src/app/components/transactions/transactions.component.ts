import { Component, OnInit } from '@angular/core';
import { Income } from '../../models/income-model';
import { CommonModule } from '@angular/common';
import { Expense } from '../../models/expense-model';
import { IncomeService } from '../../services/API/income.service';
import { ExpenseService } from '../../services/API/expense.service';
import { Category } from '../../models/category-model';
import { CategoryService } from '../../services/API/category.service';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent implements OnInit{

  incomes: Income[] = [];
  expenses: Expense[] = [];
  categories: Category[] = [];

  incomeValueSum = 0;
  expenseValueSum = 0;

  constructor(private incomeService: IncomeService, private expenseService: ExpenseService, private categoryService: CategoryService) {

  }


  incomeSum(income : Income) {
    return this.incomeValueSum += income.value;
  }

  expenseSum(expense : Expense) {
    return this.expenseValueSum += expense.value;
  }

  putCategoryNameIntoIncome(income: Income) {
    this.categories.forEach(category => {
      if(income.categoryId === category.id) {
        income.category = category.name
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
      
    this.expenseService.getExpenses().subscribe((data) => {
      this.expenses = data;
    })
  }
}
