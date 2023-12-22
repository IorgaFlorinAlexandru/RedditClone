import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingBarComponent } from './trending-bar.component';

describe('TrendingBarComponent', () => {
  let component: TrendingBarComponent;
  let fixture: ComponentFixture<TrendingBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingBarComponent]
    });
    fixture = TestBed.createComponent(TrendingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
