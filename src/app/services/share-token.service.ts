import { Injectable, OnInit } from '@angular/core';
import { Token } from '../models/token-model';

@Injectable({
  providedIn: 'root'
})
export class ShareTokenService {

  token!: string | null;

  constructor() { }

  setToken(token: string) : void {
    this.token = token;
    localStorage.setItem("authToken", token);
  }

  getToken(): string | null{
    if (!this.token) {
      this.token = localStorage.getItem('authToken');
    }
    console.log(this.token)
    return this.token;
  }

}
