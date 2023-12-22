import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarButtonsComponent } from './navbar-buttons.component';

describe('NavbarButtonsComponent', () => {
  let component: NavbarButtonsComponent;
  let fixture: ComponentFixture<NavbarButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarButtonsComponent]
    });
    fixture = TestBed.createComponent(NavbarButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
