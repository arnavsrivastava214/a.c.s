import { TestBed } from '@angular/core/testing';

import { AcademicreportService } from './academicreport.service';

describe('AcademicreportService', () => {
  let service: AcademicreportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcademicreportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
