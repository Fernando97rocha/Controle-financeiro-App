import { EventEmitter, Injectable } from '@angular/core';
import { Income } from '../models/income-model';
import { Category } from '../models/category-model';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private incomes : Array<Income> = [];

  EmmitDataChange = new EventEmitter<any>();

  constructor() { }

  getIncomes() {
    return this.incomes;
  }

  putIncomes(income: Income): void {
    this.incomes.unshift(income);
    this.EmmitDataChange.emit(income);
  }

}
