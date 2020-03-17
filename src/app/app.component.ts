import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { All } from './all';
import { Country } from './country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  filteredByCountry: string = null;
  totalCount$: Observable<All> = this.api.getTotal();
  countriesCount$: Observable<Country[]> = this.api.getByCountries();
  selectedCountry: Country;

  constructor(public api: ApiService) {}

  onKey(event: any) {
    if (event.target.value.length > 3) {
      this.filteredByCountry = event.target.value;
    } else {
      this.filteredByCountry = null;
    }
  }

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
}
