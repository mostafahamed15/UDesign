import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCaregoriesComponent } from './all-caregories.component';

describe('AllCaregoriesComponent', () => {
  let component: AllCaregoriesComponent;
  let fixture: ComponentFixture<AllCaregoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCaregoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCaregoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
