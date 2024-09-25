import { TestBed } from '@angular/core/testing';

import { AcademicRecServiceService } from './academic-rec-service.service';

describe('AcademicRecServiceService', () => {
  let service: AcademicRecServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcademicRecServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
