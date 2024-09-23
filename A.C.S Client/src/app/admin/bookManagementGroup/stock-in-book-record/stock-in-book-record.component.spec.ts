import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockInBookRecordComponent } from './stock-in-book-record.component';

describe('StockInBookRecordComponent', () => {
  let component: StockInBookRecordComponent;
  let fixture: ComponentFixture<StockInBookRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockInBookRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockInBookRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
