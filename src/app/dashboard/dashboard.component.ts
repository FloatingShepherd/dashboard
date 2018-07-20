import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { DataService } from '../data.service';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent{
  chart:Chart;

  constructor(private dataService: DataService) { }

  refreshChart(transactions: Transaction[]){
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: transactions.map(item => item.transId),
        datasets: [
          { 
            label: "Asking",
            backgroundColor: "#3e95cd",
            data: transactions.map(item => item.askingPrice)
          },
          { 
            label: "Sold",
            backgroundColor: "#8e5ea2",
            data: transactions.map(item => item.soldPrice)
          },
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Asking/sold price comparison'
        }
      }
    });
  }

  ngOnInit(){
    this.dataService.getTransactionData().subscribe(
      _trans => this.refreshChart(_trans),
    );
  }

  
}
