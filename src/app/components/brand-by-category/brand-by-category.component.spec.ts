import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandByCategoryComponent } from './brand-by-category.component';

describe('BrandByCategoryComponent', () => {
  let component: BrandByCategoryComponent;
  let fixture: ComponentFixture<BrandByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
