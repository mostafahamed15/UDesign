import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorOfficeComponent } from './interior-office.component';

describe('InteriorOfficeComponent', () => {
  let component: InteriorOfficeComponent;
  let fixture: ComponentFixture<InteriorOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteriorOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriorOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
