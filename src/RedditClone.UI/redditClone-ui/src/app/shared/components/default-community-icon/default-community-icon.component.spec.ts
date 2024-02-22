import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCommunityIconComponent } from './default-community-icon.component';

describe('DefaultCommunityIconComponent', () => {
  let component: DefaultCommunityIconComponent;
  let fixture: ComponentFixture<DefaultCommunityIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DefaultCommunityIconComponent]
    });
    fixture = TestBed.createComponent(DefaultCommunityIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
