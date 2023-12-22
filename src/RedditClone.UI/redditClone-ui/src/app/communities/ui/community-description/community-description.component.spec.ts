import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityDescriptionComponent } from './community-description.component';

describe('CommunityDescriptionComponent', () => {
  let component: CommunityDescriptionComponent;
  let fixture: ComponentFixture<CommunityDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityDescriptionComponent]
    });
    fixture = TestBed.createComponent(CommunityDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
