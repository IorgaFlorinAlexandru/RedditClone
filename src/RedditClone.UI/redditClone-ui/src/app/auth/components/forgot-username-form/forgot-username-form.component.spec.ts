import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotUsernameFormComponent } from './forgot-username-form.component';

describe('ForgotUsernameFormComponent', () => {
  let component: ForgotUsernameFormComponent;
  let fixture: ComponentFixture<ForgotUsernameFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotUsernameFormComponent]
    });
    fixture = TestBed.createComponent(ForgotUsernameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
