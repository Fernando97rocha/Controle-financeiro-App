import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Income } from './models/income-model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private dataSubject = new BehaviorSubject<any[]>([]);
  data$ = this.dataSubject.asObservable();

  addData(item: any) {
    const currentData = this.dataSubject.value;
    this.dataSubject.next([...currentData, item])
  }
}
