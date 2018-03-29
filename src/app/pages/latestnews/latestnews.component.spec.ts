import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestnewsComponent } from './latestnews.component';

describe('LatestnewsComponent', () => {
  let component: LatestnewsComponent;
  let fixture: ComponentFixture<LatestnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
