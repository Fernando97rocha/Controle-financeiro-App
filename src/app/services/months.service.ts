import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonthsService {

  month: string | null = '';
  months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]

  constructor() { }

  currentMonth() {
    const date = new Date();
    this.month = date.toISOString().slice(5,7);
    const monthNumber = Number(this.month)
    return this.months[monthNumber-1]
  }

  backwardMonthNumber() {
    let monthNumber = Number(this.month) - 1;
    this.month = String(monthNumber)
    if (monthNumber !== undefined) {
      return this.months[monthNumber - 1];
    }
    return null;
  }

  fowardMonthNumber() {
    let monthNumber = Number(this.month) + 1;
    this.month = String(monthNumber)
    if (monthNumber !== undefined) {
      return this.months[monthNumber - 1];
    }
    return null;
  }
}
