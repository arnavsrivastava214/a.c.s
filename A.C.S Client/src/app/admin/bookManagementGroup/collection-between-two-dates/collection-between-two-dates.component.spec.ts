import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionBetweenTwoDatesComponent } from './collection-between-two-dates.component';

describe('CollectionBetweenTwoDatesComponent', () => {
  let component: CollectionBetweenTwoDatesComponent;
  let fixture: ComponentFixture<CollectionBetweenTwoDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionBetweenTwoDatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionBetweenTwoDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
