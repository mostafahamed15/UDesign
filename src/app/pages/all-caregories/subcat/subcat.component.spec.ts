import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcatComponent } from './subcat.component';

describe('SubcatComponent', () => {
  let component: SubcatComponent;
  let fixture: ComponentFixture<SubcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
