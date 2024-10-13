import { TestBed } from '@angular/core/testing';

import { MasterReportServiceService } from './master-report-service.service';

describe('MasterReportServiceService', () => {
  let service: MasterReportServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterReportServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
