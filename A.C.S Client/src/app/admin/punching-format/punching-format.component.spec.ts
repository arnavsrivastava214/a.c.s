import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunchingFormatComponent } from './punching-format.component';

describe('PunchingFormatComponent', () => {
  let component: PunchingFormatComponent;
  let fixture: ComponentFixture<PunchingFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PunchingFormatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PunchingFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
