import { TestBed } from '@angular/core/testing';

import { PunchingFormatServiceService } from './punching-format-service.service';

describe('PunchingFormatServiceService', () => {
  let service: PunchingFormatServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PunchingFormatServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
