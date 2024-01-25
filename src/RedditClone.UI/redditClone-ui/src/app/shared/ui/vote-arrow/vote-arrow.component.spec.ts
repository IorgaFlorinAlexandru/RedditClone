import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteArrowComponent } from './vote-arrow.component';

describe('VoteArrowComponent', () => {
  let component: VoteArrowComponent;
  let fixture: ComponentFixture<VoteArrowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoteArrowComponent]
    });
    fixture = TestBed.createComponent(VoteArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
