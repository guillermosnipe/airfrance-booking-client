import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTripSummaryComponent } from './find-trip-summary.component';

describe('FindTripSummaryComponent', () => {
  let component: FindTripSummaryComponent;
  let fixture: ComponentFixture<FindTripSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindTripSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTripSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
