import { TestBed } from '@angular/core/testing';

import { AdsDataService } from './ads-data.service';

describe('AdsDataService', () => {
  let service: AdsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
