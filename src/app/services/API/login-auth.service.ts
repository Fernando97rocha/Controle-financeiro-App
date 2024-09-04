import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user-model';
import { Token } from '../../models/token-model';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  private loginUrl = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient) {}

  login(user : User) {
    return this.http.post<Token>(`${this.loginUrl}`, user);
  }

}
