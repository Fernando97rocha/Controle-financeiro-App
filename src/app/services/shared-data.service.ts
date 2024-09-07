import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
