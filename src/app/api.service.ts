import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../environments/environment';
import { All } from './all';
import { Observable, merge } from 'rxjs';
import { Country } from './country';
import { mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTotal(): Observable<All> {
    return this.http.get(`${env.baseUrl}/all`)
  }

  getByCountries(): Observable<Country[]> {
    return this.http.get(`${env.baseUrl}/countries`) as Observable<Country[]>
  }

  getCountryTimeline(country: string): Observable<any> {
    return this.http.get(`${env.baseUrl}/historical/${country}`)
  }

  getCountryData(country: string): Observable<any> {
    return this.http.get(`${env.baseUrl}/countries/${country}`);
  }
}
