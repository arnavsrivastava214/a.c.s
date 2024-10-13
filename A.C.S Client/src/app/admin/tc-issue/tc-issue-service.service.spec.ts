import { TestBed } from '@angular/core/testing';

import { TcIssueServiceService } from './tc-issue-service.service';

describe('TcIssueServiceService', () => {
  let service: TcIssueServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TcIssueServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
