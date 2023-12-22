import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonPostClassicComponent } from './skeleton-post-classic.component';

describe('SkeletonPostClassicComponent', () => {
  let component: SkeletonPostClassicComponent;
  let fixture: ComponentFixture<SkeletonPostClassicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkeletonPostClassicComponent]
    });
    fixture = TestBed.createComponent(SkeletonPostClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
