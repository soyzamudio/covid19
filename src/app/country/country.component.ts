import { Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { countries } from '../countries-es';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {
  country: Data = this.route.snapshot.data

  constructor(private route: ActivatedRoute) {
    console.log(this.country);
  }

  processName(country: string) {
    return countries[country.charAt(0).toUpperCase() + country.substring(1)] || country;
  }

  getRatio(deaths: number, cases: number): number {
    return (deaths / cases) * 100;
  }
}
