import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTripFormComponent } from './find-trip-form.component';

describe('FindTripFormComponent', () => {
  let component: FindTripFormComponent;
  let fixture: ComponentFixture<FindTripFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindTripFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTripFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
