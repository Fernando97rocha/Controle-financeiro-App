import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user-model';
import { Token } from '../../models/token-model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  private loginUrl = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient, private router: Router) {}

  login(user : User) {
    return this.http.post<Token>(`${this.loginUrl}`, user, {withCredentials: true});
  }

}
