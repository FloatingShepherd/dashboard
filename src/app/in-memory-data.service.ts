import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const transactions = [{
      transId: 'TRAN3211',
      area: 'G2GH',
      listDate: '2017-01-03',
      soldDate: '2017-01-05',
      daysOnMarket:3,
      askingPrice:760000,
      soldPrice:735000
    },
    {
      transId: 'TRAN3212',
      area: 'G2GE',
      listDate: '2017-01-03',
      soldDate: '2017-01-07',
      daysOnMarket:6,
      askingPrice:230000,
      soldPrice:335000
    },
    {
      transId: 'TRAN3213',
      area: 'G2GE',
      listDate: '2017-01-04',
      soldDate: '2017-01-05',
      daysOnMarket:2,
      askingPrice:260000,
      soldPrice:400000
    },
    {
      transId: 'TRAN3214',
      area: 'G2GH',
      listDate: '2017-01-04',
      soldDate: '2017-01-10',
      daysOnMarket:7,
      askingPrice:1560000,
      soldPrice:1555000
    },
    {
      transId: 'TRAN3215',
      area: 'G2GH',
      listDate: '2017-01-08',
      soldDate: '2017-01-11',
      daysOnMarket:4,
      askingPrice:910000,
      soldPrice:885000
    },
    {
      transId: 'TRAN3216',
      area: 'G2GG',
      listDate: '2017-01-13',
      soldDate: '2017-01-17',
      daysOnMarket:5,
      askingPrice:1330000,
      soldPrice:155000
    }];
    return {transactions};
  }
}
