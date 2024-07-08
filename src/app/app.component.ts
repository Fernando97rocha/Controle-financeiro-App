import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AmountDisplayComponent } from './components/amount-display/amount-display.component';
import { MonthAndNewObjectsComponent } from './components/month-and-new-objects/month-and-new-objects.component';
import { UserNameLoggedComponent } from './components/user-name-logged/user-name-logged.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    LoginComponent, 
    HomeComponent, 
    NavBarComponent, 
    AmountDisplayComponent,
    MonthAndNewObjectsComponent,
    UserNameLoggedComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'controle-financeiro-app';
}
