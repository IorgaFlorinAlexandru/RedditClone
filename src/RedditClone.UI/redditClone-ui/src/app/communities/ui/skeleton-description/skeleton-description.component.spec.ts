import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonDescriptionComponent } from './skeleton-description.component';

describe('SkeletonDescriptionComponent', () => {
  let component: SkeletonDescriptionComponent;
  let fixture: ComponentFixture<SkeletonDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkeletonDescriptionComponent]
    });
    fixture = TestBed.createComponent(SkeletonDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
