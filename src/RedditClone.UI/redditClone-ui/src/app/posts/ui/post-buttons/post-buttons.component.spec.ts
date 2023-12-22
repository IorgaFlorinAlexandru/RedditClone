import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostButtonsComponent } from './post-buttons.component';

describe('PostButtonsComponent', () => {
  let component: PostButtonsComponent;
  let fixture: ComponentFixture<PostButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostButtonsComponent]
    });
    fixture = TestBed.createComponent(PostButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
