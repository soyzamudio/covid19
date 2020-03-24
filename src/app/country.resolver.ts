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
    const data = this.api.getCountryData(id);
    const timeline = this.api.getCountryTimeline(id).pipe(map(country => {
      const timeline = Object.keys(country.timeline.cases).map(date => {
        if (country.timeline.cases[date] > 0) {
          return {
            date: new Date(date).getTime(),
            cases: country.timeline.cases[date],
            deaths: country.timeline.deaths[date],
          };
        }
      }).filter(el => el != null);
      
      return {
        country: country.country,
        timeline,
      };
    }));

    console.log()

    let join = forkJoin(data, timeline).pipe(map((allResponses) => {
      return {
        data: allResponses[0],
        timeline: allResponses[1],
      };
    }));

    return join;
  }
}
