import { CommonModule } from '@angular/common';
import { Component, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginAuthService } from '../../services/API/login-auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  login: string = '';
  password: string = '';

  constructor(private loginService: LoginAuthService) {}

  getDataToLogin() {
    console.log(this.login, this.password);
    const user = {
      login: this.login,
      password: this.password
    }

    this.loginService.login(user).subscribe(response => {
      console.log(response, "response");
      
      return response.token;
    })
  }

}
