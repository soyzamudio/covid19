import { Pipe, PipeTransform } from '@angular/core';
import { Country } from './country';
import { countries } from './countries-es';

@Pipe({
  name: 'byCountry',
})
export class ByCountryPipe implements PipeTransform {

  transform(value: any[], ...args: string[]): unknown {
    if (!args[0]) {
      return value;
    }
    
    return value.filter(country => country.Country.toLowerCase() === args[0].toLowerCase());
  }

}
