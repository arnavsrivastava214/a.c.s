import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunchSaleRateComponent } from './punch-sale-rate.component';

describe('PunchSaleRateComponent', () => {
  let component: PunchSaleRateComponent;
  let fixture: ComponentFixture<PunchSaleRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PunchSaleRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PunchSaleRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
