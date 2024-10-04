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

  backwardMonth() {
    let monthNumber = Number(this.month) - 1;
    this.month = String(monthNumber)
    console.log(this.month)
    return this.months[monthNumber - 1];
  }

  forwardMonth() {
    let monthNumber = Number(this.month) + 1;
    this.month = String(monthNumber)
    console.log(this.month)
    return this.months[monthNumber - 1];
  }

  getSelectedMonth() {
    const monthObj = {
      numb: this.month,
      name: this.months[Number(this.month) - 1]
    }

    return monthObj;
  }
}
