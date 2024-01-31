import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitySelectMenuComponent } from './community-select-menu.component';

describe('CommunitySelectMenuComponent', () => {
  let component: CommunitySelectMenuComponent;
  let fixture: ComponentFixture<CommunitySelectMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunitySelectMenuComponent]
    });
    fixture = TestBed.createComponent(CommunitySelectMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
