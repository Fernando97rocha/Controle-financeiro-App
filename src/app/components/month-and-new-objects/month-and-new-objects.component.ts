import { Component, OnInit } from '@angular/core';
import { CreateIncomePopUpComponent } from '../create-income-pop-up/create-income-pop-up.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CreateExpensePopUpComponent } from '../create-expense-pop-up/create-expense-pop-up.component';
import { MonthsService } from '../../services/months.service';
import { AppServiceService } from '../../services/app-service.service';

@Component({
  selector: 'app-month-and-new-objects',
  standalone: true,
  imports: [MatDialogModule, CreateIncomePopUpComponent, CreateExpensePopUpComponent],
  templateUrl: './month-and-new-objects.component.html',
  styleUrl: './month-and-new-objects.component.css'
})
export class MonthAndNewObjectsComponent implements OnInit{

  public month: null | string = '';

  constructor(public dialog: MatDialog, private monthService: MonthsService, private appService: AppServiceService) {

  }
  ngOnInit(): void {
    this.showCurrentMonthName()

    
  }

  openDialogIncome(): void {
    const dialogRef = this.dialog.open(CreateIncomePopUpComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('the dialog was closed');
    })
  }

  openDialogExpense(): void {
    const dialogRef = this.dialog.open(CreateExpensePopUpComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('the dialog was closed');
    })
  }

  showCurrentMonthName() {
    this.monthService.currentMonth();
    this.month = this.monthService.currentMonth();    
  }

  showSelectedMonthName() {
    this.month
  }

  toBackwardMonth() {
    this.month = this.monthService.backwardMonth();

  }

  toFowardMonth() {
    this.month = this.monthService.forwardMonth();
    console.log(this.month, 'aqui')
    this.appService.putMonth(this.month);
  }
}
