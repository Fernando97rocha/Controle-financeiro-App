import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareTokenService {

  token!: string | null;

  constructor() { }

  setToken(token: string) : void {
    this.token = token;
    console.log(this.token)
    if(typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem("authToken", token);
    }
    
  }

  getToken(): string | null{
    if (!this.token && typeof window !== 'undefined' && window.localStorage) {
      this.token = localStorage.getItem('authToken');
    }
    return this.token;
  }

}
