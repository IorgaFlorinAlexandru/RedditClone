import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostBarComponent } from './create-post-bar.component';

describe('CreatePostBarComponent', () => {
  let component: CreatePostBarComponent;
  let fixture: ComponentFixture<CreatePostBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePostBarComponent]
    });
    fixture = TestBed.createComponent(CreatePostBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
