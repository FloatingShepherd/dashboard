import { Component } from '@angular/core';

import { Transaction }  from './transaction';
import { DataService }  from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Company name';

  constructor( private dataService: DataService){}

  modelChanged(event:Transaction[]){
    this.dataService.setTransactionData(event);
  }
}
