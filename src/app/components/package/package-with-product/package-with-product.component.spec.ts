import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageWithProductComponent } from './package-with-product.component';

describe('PackageWithProductComponent', () => {
  let component: PackageWithProductComponent;
  let fixture: ComponentFixture<PackageWithProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageWithProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageWithProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
