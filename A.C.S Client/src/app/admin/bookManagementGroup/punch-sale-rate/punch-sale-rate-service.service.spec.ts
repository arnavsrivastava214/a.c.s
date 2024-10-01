import { TestBed } from '@angular/core/testing';

import { PunchSaleRateServiceService } from './punch-sale-rate-service.service';

describe('PunchSaleRateServiceService', () => {
  let service: PunchSaleRateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PunchSaleRateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
