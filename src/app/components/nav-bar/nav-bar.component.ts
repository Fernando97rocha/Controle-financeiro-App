import { Component } from '@angular/core';
import { UserNameLoggedComponent } from '../user-name-logged/user-name-logged.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    UserNameLoggedComponent
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
