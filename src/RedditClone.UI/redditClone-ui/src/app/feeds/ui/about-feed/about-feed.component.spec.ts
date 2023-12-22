import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFeedComponent } from './about-feed.component';

describe('AboutFeedComponent', () => {
  let component: AboutFeedComponent;
  let fixture: ComponentFixture<AboutFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutFeedComponent]
    });
    fixture = TestBed.createComponent(AboutFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
