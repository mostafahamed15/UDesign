import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryPremiumComponent } from './try-premium.component';

describe('TryPremiumComponent', () => {
  let component: TryPremiumComponent;
  let fixture: ComponentFixture<TryPremiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryPremiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
