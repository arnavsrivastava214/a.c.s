import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleBillEditDeleteComponent } from './sale-bill-edit-delete.component';

describe('SaleBillEditDeleteComponent', () => {
  let component: SaleBillEditDeleteComponent;
  let fixture: ComponentFixture<SaleBillEditDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleBillEditDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleBillEditDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
