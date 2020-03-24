import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Observable } from 'rxjs';
import { All } from '../all';
import { Country } from '../country';
import { ApiService } from '../api.service';
import { countries as countriesEs } from '../countries-es';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewChecked {
  filteredByCountry: string = null;
  totalCount$: Observable<All> = this.api.getTotal();
  countriesCount$: Observable<Country[]> = this.api.getByCountries();
  countriesSorted$ = this.countriesCount$.pipe(map(countries => countries.sort((x,y) => x.country < y.country ? -1 : 1)));
  countriesEs = countriesEs;
  sortName = null;
  sortValue = null;
  sorted = false;

  constructor(public api: ApiService) {}

  ngAfterViewChecked() {
    window.scrollTo(0, 0);
  }

  getRatio(deaths: number, cases: number): number {
    return (deaths / cases) * 100;
  }

  processName(country: Country) {
    country.countryES = countriesEs[country.country];
    return country.countryES || country.country;
  }

  sort(sort: { key: string; value: string }) {
    if (this.sorted && this.sortName === sort.key) {
      this.countriesCount$ =this.countriesCount$.pipe(map(countries => countries.reverse()));
    } else {
      this.sortName = sort.key;
      this.sortValue = sort.value;

      this.search();
      this.sorted = true;
    }
  }

  search() {
    this.countriesCount$ = this.api.getByCountries(this.sortName).pipe(map(countries => countries.reverse()));
  }
}
