import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonPostCompactComponent } from './skeleton-post-compact.component';

describe('SkeletonPostCompactComponent', () => {
  let component: SkeletonPostCompactComponent;
  let fixture: ComponentFixture<SkeletonPostCompactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkeletonPostCompactComponent]
    });
    fixture = TestBed.createComponent(SkeletonPostCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
