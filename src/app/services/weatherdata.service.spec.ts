import { TestBed } from '@angular/core/testing';

import { WeatherdataService } from './weatherdata.service';

describe('WeatherdataService', () => {
  let service: WeatherdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
