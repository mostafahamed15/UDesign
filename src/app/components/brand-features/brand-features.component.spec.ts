import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandFeaturesComponent } from './brand-features.component';

describe('BrandFeaturesComponent', () => {
  let component: BrandFeaturesComponent;
  let fixture: ComponentFixture<BrandFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
