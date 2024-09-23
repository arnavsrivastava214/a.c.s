import { TestBed } from '@angular/core/testing';

import { ManageTeacherServiceService } from './admin/manage-teacher/manage-teacher-service.service';

describe('ManageTeacherServiceService', () => {
  let service: ManageTeacherServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageTeacherServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
