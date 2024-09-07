import { Component } from '@angular/core';
import { LoginAuthService } from '../../services/API/login-auth.service';
import { response } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-name-logged',
  standalone: true,
  imports: [],
  templateUrl: './user-name-logged.component.html',
  styleUrl: './user-name-logged.component.css'
})
export class UserNameLoggedComponent {
  constructor(private router: Router) {

  }

  toLogout() {
    localStorage.clear();
    this.router.navigate(['login'])
  }
}
