import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonthsService {

  month = '';
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
    console.log(this.month);
    const monthNumber = Number(this.month)
    return this.months[monthNumber-1]
  }


}
