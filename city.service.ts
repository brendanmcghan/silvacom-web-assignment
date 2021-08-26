import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { City } from './city';

@Injectable({  providedIn: 'root'})
export class CityService {
  private cityUrl = 'api/cities';
  httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  constructor(private http: HttpClient) { }

  getCities(): Observable<City[]>{
    return this.http.get<City[]>(this.cityUrl)
  }
}
