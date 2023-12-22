import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitPostPageComponent } from './submit-post-page.component';

describe('SubmitPostPageComponent', () => {
  let component: SubmitPostPageComponent;
  let fixture: ComponentFixture<SubmitPostPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitPostPageComponent]
    });
    fixture = TestBed.createComponent(SubmitPostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
