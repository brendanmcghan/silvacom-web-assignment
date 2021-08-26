import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { City } from './city';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    const cities = [
      { name: 'Dublin'},
      { name: 'Edinburgh'},
      { name: 'Copenhagen'},
      { name: 'Cracow'},
      { name: 'Prague'},
    ];
    return{cities};
  }
}
