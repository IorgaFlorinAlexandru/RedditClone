import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUpvoteButtonsComponent } from './post-upvote-buttons.component';

describe('PostUpvoteButtonsComponent', () => {
  let component: PostUpvoteButtonsComponent;
  let fixture: ComponentFixture<PostUpvoteButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostUpvoteButtonsComponent]
    });
    fixture = TestBed.createComponent(PostUpvoteButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
