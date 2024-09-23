import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillAmendmentComponent } from './bill-amendment.component';

describe('BillAmendmentComponent', () => {
  let component: BillAmendmentComponent;
  let fixture: ComponentFixture<BillAmendmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillAmendmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillAmendmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
