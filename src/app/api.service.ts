import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment as env } from '../environments/environment';
import { All } from './all';
import { Observable } from 'rxjs';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTotal(): Observable<All> {
    return this.http.get(`${env.baseUrl}/all`)
  }

  getByCountries(sort?: string): Observable<Country[]> {
    let params: HttpParams = new HttpParams().set('sort', 'cases');

    if (sort) {
      params = new HttpParams().set('sort', sort);
    }

    return this.http.get(`${env.baseUrl}/countries`, { params }) as Observable<Country[]>
  }

  getCountryTimeline(country: string): Observable<any> {
    return this.http.get(`${env.baseUrl}/v2/historical/${country}`)
  }

  getCountryData(country: string): Observable<any> {
    return this.http.get(`${env.baseUrl}/countries/${country}`);
  }
}
