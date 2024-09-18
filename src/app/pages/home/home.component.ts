import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { AmountDisplayComponent } from '../../components/amount-display/amount-display.component';
import { MonthAndNewObjectsComponent } from '../../components/month-and-new-objects/month-and-new-objects.component';
import { UserNameLoggedComponent } from '../../components/user-name-logged/user-name-logged.component';
import { TransactionsComponent } from '../../components/transactions/transactions.component';
import { FixedTransactionsComponent } from '../../components/fixed-transactions/fixed-transactions.component';
import { CreateIncomePopUpComponent } from '../../components/create-income-pop-up/create-income-pop-up.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavBarComponent,
    AmountDisplayComponent,
    MonthAndNewObjectsComponent,
    UserNameLoggedComponent,
    TransactionsComponent,
    FixedTransactionsComponent,
    CreateIncomePopUpComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {
      console.log('Ativou')
  }

}
