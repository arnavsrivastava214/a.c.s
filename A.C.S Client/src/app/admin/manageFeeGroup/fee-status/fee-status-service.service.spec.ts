import { TestBed } from '@angular/core/testing';

import { FeeStatusServiceService } from './fee-status-service.service';

describe('FeeStatusServiceService', () => {
  let service: FeeStatusServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeeStatusServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
