import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandSallesOfComponent } from './brand-salles-of.component';

describe('BrandSallesOfComponent', () => {
  let component: BrandSallesOfComponent;
  let fixture: ComponentFixture<BrandSallesOfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandSallesOfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandSallesOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
