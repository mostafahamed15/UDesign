import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByCategoriesComponent } from './product-by-categories.component';

describe('ProductByCategoriesComponent', () => {
  let component: ProductByCategoriesComponent;
  let fixture: ComponentFixture<ProductByCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductByCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductByCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
