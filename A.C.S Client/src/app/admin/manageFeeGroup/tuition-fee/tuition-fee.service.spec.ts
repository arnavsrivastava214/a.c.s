import { TestBed } from '@angular/core/testing';

import { TuitionFeeService } from './tuition-fee.service';

describe('TuitionFeeService', () => {
  let service: TuitionFeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TuitionFeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
