import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteToHigherClassComponent } from './promote-to-higher-class.component';

describe('PromoteToHigherClassComponent', () => {
  let component: PromoteToHigherClassComponent;
  let fixture: ComponentFixture<PromoteToHigherClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoteToHigherClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromoteToHigherClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
