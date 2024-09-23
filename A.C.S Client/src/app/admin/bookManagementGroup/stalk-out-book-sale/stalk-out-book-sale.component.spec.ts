import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StalkOutBookSaleComponent } from './stalk-out-book-sale.component';

describe('StalkOutBookSaleComponent', () => {
  let component: StalkOutBookSaleComponent;
  let fixture: ComponentFixture<StalkOutBookSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StalkOutBookSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StalkOutBookSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
