import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverPasswordComponentComponent } from './recover-password-component.component';

describe('RecoverPasswordComponentComponent', () => {
  let component: RecoverPasswordComponentComponent;
  let fixture: ComponentFixture<RecoverPasswordComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoverPasswordComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoverPasswordComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
