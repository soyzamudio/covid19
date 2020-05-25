import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryResolver implements Resolve<any> {

  constructor(private api: ApiService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    const id = route.paramMap.get('id');
    // const data = this.api.getCountryData(id) || null;
    const data = this.api.getCountryTimeline(id).pipe(map(country => {
      const historical = country.map(date => {
        return {
          date: date.Date,
          cases: date.Confirmed,
          deaths: date.Deaths,
        };
      });

      return {
        data: country[country.length - 1],
        historical,
      };
    }));

    return data;
  }
}
