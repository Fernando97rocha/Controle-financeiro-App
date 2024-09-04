import { Injectable } from '@angular/core';
import { Token } from '../models/token-model';

@Injectable({
  providedIn: 'root'
})
export class ShareTokenService {

  constructor() { }

  getToken(token: Token) {
    return token.token;
  }
}
