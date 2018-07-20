import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap, tap
 } from 'rxjs/operators';

import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ]
})
export class SearchComponent implements OnInit {
  @Output() modelChanged = new EventEmitter<Transaction[]>();

  private searchTerms$ = new Subject<string>();
  searchString:string;

  constructor(
    private transactionService: TransactionService,
  ) {}

  search(term: string): void {
    this.searchTerms$.next(term);
  }

  clear():void {
    this.searchString = '';
    this.searchTerms$.next('');
  }

  emitChange(transactions:Transaction[]):void {
    console.log(transactions);
    this.modelChanged.emit(transactions);
  }

  ngOnInit(): void {
    this.transactionService.searchTransactions(this.searchTerms$).subscribe((results) => this.emitChange(results));
    this.search('');
  }
}
