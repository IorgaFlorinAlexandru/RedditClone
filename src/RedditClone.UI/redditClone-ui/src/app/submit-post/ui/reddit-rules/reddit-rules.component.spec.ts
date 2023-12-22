import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditRulesComponent } from './reddit-rules.component';

describe('RedditRulesComponent', () => {
  let component: RedditRulesComponent;
  let fixture: ComponentFixture<RedditRulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedditRulesComponent]
    });
    fixture = TestBed.createComponent(RedditRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
