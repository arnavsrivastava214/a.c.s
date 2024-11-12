import { TestBed } from '@angular/core/testing';

import { ReportsGroupService } from './reports-group.service';

describe('ReportsGroupService', () => {
  let service: ReportsGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportsGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
