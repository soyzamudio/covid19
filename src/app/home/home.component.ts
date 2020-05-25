import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Observable } from 'rxjs';
import { All } from '../all';
import { Country } from '../country';
import { ApiService } from '../api.service';
import { countries as countriesEs } from '../countries-es';
import { map, take, first, single } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewChecked {
  filteredByCountry: string = null;
  summary$: any;
  // countriesCount$: Observable<Country[]> = this.api.getByCountries();
  // countriesSorted$ = this.summary$.pipe(map(countries => countries.Countries.sort((x,y) => x.Country < y.Country ? -1 : 1)));
  countriesEs = countriesEs;
  sortName = null;
  sortValue = null;
  sorted = false;

  constructor(public api: ApiService) {
    this.api.getTotal().pipe(take(1), map(res => {
      res.Countries = res.Countries.sort((a, b) => a.TotalConfirmed - b.TotalConfirmed).reverse();
      return res;
    })).subscribe((res => this.summary$ = res));
  }

  ngAfterViewChecked() {
    window.scrollTo(0, 0);
  }

  getRatio(deaths: number, cases: number): number {
    return (deaths / cases) * 100;
  }

  processName(country: any) {
    country.countryES = countriesEs[country.country];
    return country.countryES || country.Country;
  }

  sort(event: any) {
    // this.sortValue = sort.value;

    // if (this.sorted && this.sortName === sort.key && this.sortValue) {
    //   this.countriesCount$ =this.countriesCount$.pipe(map(countries => countries.reverse()));
    // } else if (!this.sorted) {
    //   this.sortName = sort.key;
    //   this.sortValue = sort.value;

    //   this.search();
    //   this.sorted = true;
    // } else {
    //   this.sortName = null;
    //   this.search();
    //   this.sorted = false;
    // }
  }
}
