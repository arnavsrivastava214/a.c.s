import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeStatusComponent } from './fee-status.component';

describe('FeeStatusComponent', () => {
  let component: FeeStatusComponent;
  let fixture: ComponentFixture<FeeStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
