import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeService } from '../../services/API/income.service';
import { ExpenseService } from '../../services/API/expense.service';


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
  constructor(private incomeService: IncomeService, private  expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.incomeService.getIncomes().subscribe(data => {
      data.forEach(income => {
        this.incomeSum += income.value;
      })

      this.incomeSumToString = this.incomeSum.toFixed(2).replace(".", ",");
    })

    this.expenseService.getExpenses().subscribe(data => {
      data.forEach(income => {
        this.expenseSum += income.value;
      })

      this.expenseSum *= -1;
      this.expenseSumToString = this.expenseSum.toFixed(2).replace(".", ",");
    })
  }


}
