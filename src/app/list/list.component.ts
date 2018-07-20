import { Component, OnInit } from '@angular/core';

import { Transaction }  from '../transaction';
import { DataService }  from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  transactions: Transaction[];

  constructor(private dataService: DataService) { }

  ngOnInit(){
    this.dataService.getTransactionData().subscribe(
      _trans => this.transactions = _trans
    );
  }
}
