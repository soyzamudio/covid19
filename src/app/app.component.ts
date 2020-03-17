import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { All } from './all';
import { Country } from './country';
import { countries as countriesEs } from './countries-es';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  filteredByCountry: string = null;
  totalCount$: Observable<All> = this.api.getTotal();
  countriesCount$: Observable<Country[]> = this.api.getByCountries();
  countriesSorted$ = this.countriesCount$.pipe(map(countries => countries.sort((x,y) => x.country < y.country ? -1 : 1)));
  selectedCountry: Country;
  countriesEs = countriesEs;

  constructor(public api: ApiService) {}

  getRatio(deaths: number, cases: number): number {
    return (deaths / cases) * 100;
  }

  selectCountry(country: Country) {
    if (country === this.selectedCountry) {
      this.selectedCountry = null;
      return;
    }

    this.selectedCountry = country;
  }

  processName(country: Country) {
    return country.country = countriesEs[country.country] || country.country;
  }
}
