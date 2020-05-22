import { Component, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { countries } from '../countries-es';
import * as moment from 'moment'; // add this 1 of 4

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements AfterViewChecked {
  country: Data = this.route.snapshot.data;

  // multi =  this.getCases();
  // view: any[] = [700, 300];

  // showLabels = true;
  // animations = true;
  // timeline = true;

  multi: any[];
  view: any[] = [1000, 400];
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Year';
  yAxisLabel = 'Population';
  timeline = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private route: ActivatedRoute) {
    console.log(this.country);
    Object.assign(this, { multi: this.getCases() });
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngAfterViewChecked() {
    window.scrollTo(0, 0);
  }

  processName(country: string) {
    return countries[country.charAt(0).toUpperCase() + country.substring(1)] || country;
  }

  getRatio(deaths: number, cases: number): number {
    return (deaths / cases) * 100;
  }

  getCases() {
    const obj = [{
      name: this.country.countryData.data.Country,
      series: this.country.countryData.historical.map(date => {
        return {
          name: moment(date.date).format('MMM Do YY'),
          value: date.cases,
        };
      }),
    }];

    return obj;
  }
}