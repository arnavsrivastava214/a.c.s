import { TestBed } from '@angular/core/testing';

import { StkInBkRecdService } from './stk-in-bk-recd.service';

describe('StkInBkRecdService', () => {
  let service: StkInBkRecdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StkInBkRecdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
