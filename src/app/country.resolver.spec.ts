import { TestBed } from '@angular/core/testing';

import { CountryResolver } from './country.resolver';

describe('CountryResolverService', () => {
  let service: CountryResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
