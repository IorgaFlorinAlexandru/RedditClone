import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesIconComponent } from './rules-icon.component';

describe('RulesIconComponent', () => {
  let component: RulesIconComponent;
  let fixture: ComponentFixture<RulesIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RulesIconComponent]
    });
    fixture = TestBed.createComponent(RulesIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
