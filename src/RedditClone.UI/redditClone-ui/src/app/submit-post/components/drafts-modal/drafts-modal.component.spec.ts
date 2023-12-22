import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftsModalComponent } from './drafts-modal.component';

describe('DraftsModalComponent', () => {
  let component: DraftsModalComponent;
  let fixture: ComponentFixture<DraftsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DraftsModalComponent]
    });
    fixture = TestBed.createComponent(DraftsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
