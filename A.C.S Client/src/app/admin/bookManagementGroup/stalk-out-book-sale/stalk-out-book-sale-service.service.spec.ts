import { TestBed } from '@angular/core/testing';

import { StalkOutBookSaleServiceService } from './stalk-out-book-sale-service.service';

describe('StalkOutBookSaleServiceService', () => {
  let service: StalkOutBookSaleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StalkOutBookSaleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
