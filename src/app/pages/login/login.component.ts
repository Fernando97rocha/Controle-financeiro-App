import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginAuthService } from '../../services/API/login-auth.service';
import { ShareTokenService } from '../../services/share-token.service';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent{

  login: string = '';
  password: string = '';

  constructor(private router: Router,private loginService: LoginAuthService, private shareTokenService: ShareTokenService) {}

  getDataToLogin() {
    const user = {
      login: this.login,
      password: this.password
    }

    this.loginService.login(user).subscribe(response => {
      this.shareTokenService.setToken(response.token);
      if(response.token !== null) {
        this.router.navigateByUrl('home')
      }
      
    })
    
  }

}
