import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostClassicComponent } from './post-classic.component';

describe('PostClassicComponent', () => {
  let component: PostClassicComponent;
  let fixture: ComponentFixture<PostClassicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostClassicComponent]
    });
    fixture = TestBed.createComponent(PostClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
