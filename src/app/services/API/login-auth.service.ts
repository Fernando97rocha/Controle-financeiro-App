import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  private LoginUrL = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient) {}

  login() {
    this.http.post
  }
}
