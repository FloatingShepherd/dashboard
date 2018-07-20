import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Transaction } from './transaction';

@Injectable({ providedIn: 'root' })
export class TransactionService {

  private transactionUrl = 'api/transactions';  // URL to web api

  constructor(
    private http: HttpClient) { }

  searchHttp(term:string):Observable<Transaction[]>{
    return this.http.get<Transaction[]>(`${this.transactionUrl}/?area=${term}`);
  }

  searchTransactions(terms: Observable<string>): Observable<Transaction[]> {
    return terms.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term => this.searchHttp(term))
    )
  }
}
