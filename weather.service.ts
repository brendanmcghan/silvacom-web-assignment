import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Weather } from './weather';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weatherUrlBeginning = 'https.//api.openweathermap.org/data/2.5/onecall?';
  private weatherUrlEnding = '&exclude=minutely,hourly,daily,alerts&appid=c3eefeec5b2f5155731f650e6030df86';
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getWeather(lat : String, long : String): Observable<Weather>{
    return this.http.get<Weather>(this.weatherUrlBeginning + 'lat=' + lat +'&lon=' + long + this.weatherUrlEnding);
  }
}
