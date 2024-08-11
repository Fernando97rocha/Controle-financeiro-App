import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeService } from '../../services/API/income.service';
import { ExpenseService } from '../../services/API/expense.service';
import { AppServiceService } from '../../services/app-service.service';
import { Income } from '../../models/income-model';
import { Expense } from '../../models/expense-model';


@Component({
  selector: 'app-amount-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './amount-display.component.html',
  styleUrl: './amount-display.component.css'
})
export class AmountDisplayComponent implements OnInit{

  incomeSum: number = 0;
  expenseSum: number = 0;
  incomeSumToString!: string;
  expenseSumToString!: string;
  constructor(private appService: AppServiceService,private incomeService: IncomeService, private  expenseService: ExpenseService) {}

  ngOnInit(): void {
    //incomes
    this.incomeService.getIncomes().subscribe(data => {
      data.forEach(income => {
        this.incomeSum += income.value;
      })

      this.incomeSumToString = this.incomeSum.toFixed(2).replace(".", ",");
    })

    this.appService.EmmitDataChangeIncome.subscribe((obj: Income) => {
      this.incomeSum += obj.value;
      this.incomeSumToString = this.incomeSum.toFixed(2).replace(".", ",");
    })


    //expenses
    this.expenseService.getExpenses().subscribe(data => {
      data.forEach(expense => {
        this.expenseSum += expense.value;
      })

      this.expenseSum *= -1;
      this.expenseSumToString = this.expenseSum.toFixed(2).replace(".", ",");
    })

    this.appService.EmmitDataChangeExpense.subscribe((obj: Expense) => {
      this.expenseSum += obj.value;
      this.expenseSumToString = this.expenseSum.toFixed(2).replace(".", ",");
    })
  }


}
