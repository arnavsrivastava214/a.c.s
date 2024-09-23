import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcIssueComponent } from './tc-issue.component';

describe('TcIssueComponent', () => {
  let component: TcIssueComponent;
  let fixture: ComponentFixture<TcIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcIssueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TcIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
