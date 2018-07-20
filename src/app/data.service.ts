import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {

  private dataSource = new BehaviorSubject<Transaction[]>([]);
  currentData = this.dataSource.asObservable();

  constructor() { }

  setTransactionData(transactions:Transaction[]):void{
    this.dataSource.next(transactions);
  }

  getTransactionData():Observable<Transaction[]>{
    return this.currentData;
  }
}
