import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCompactComponent } from './post-compact.component';

describe('PostCompactComponent', () => {
  let component: PostCompactComponent;
  let fixture: ComponentFixture<PostCompactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostCompactComponent]
    });
    fixture = TestBed.createComponent(PostCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
