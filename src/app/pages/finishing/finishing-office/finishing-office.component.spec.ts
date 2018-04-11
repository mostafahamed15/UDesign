import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishingOfficeComponent } from './finishing-office.component';

describe('FinishingOfficeComponent', () => {
  let component: FinishingOfficeComponent;
  let fixture: ComponentFixture<FinishingOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishingOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishingOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
