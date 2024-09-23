import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceLeftComponent } from './balance-left.component';

describe('BalanceLeftComponent', () => {
  let component: BalanceLeftComponent;
  let fixture: ComponentFixture<BalanceLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
