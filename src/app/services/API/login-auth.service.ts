import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  loginString!: string;
  passwordString!: string;

  private loginUrL = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient) {}

  getData(login: string, password: string) {
    this.loginString = login;
    this.passwordString = password;
  }

  login(user : User) {
    this.http.post<User>(this.loginUrL, user);
  }


}
