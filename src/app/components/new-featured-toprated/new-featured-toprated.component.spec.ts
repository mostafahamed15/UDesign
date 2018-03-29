import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFeaturedTopratedComponent } from './new-featured-toprated.component';

describe('NewFeaturedTopratedComponent', () => {
  let component: NewFeaturedTopratedComponent;
  let fixture: ComponentFixture<NewFeaturedTopratedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFeaturedTopratedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFeaturedTopratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
