import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { AmountDisplayComponent } from '../../components/amount-display/amount-display.component';
import { MonthAndNewObjectsComponent } from '../../components/month-and-new-objects/month-and-new-objects.component';
import { UserNameLoggedComponent } from '../../components/user-name-logged/user-name-logged.component';
import { TransactionsComponent } from '../../components/transactions/transactions.component';
import { FixedTransactionsComponent } from '../../components/fixed-transactions/fixed-transactions.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavBarComponent,
    AmountDisplayComponent,
    MonthAndNewObjectsComponent,
    UserNameLoggedComponent,
    TransactionsComponent,
    FixedTransactionsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
