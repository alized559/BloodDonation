import { TestBed } from '@angular/core/testing';

import { DonorsDataService } from './donors-data.service';

describe('DonorsDataService', () => {
  let service: DonorsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonorsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
