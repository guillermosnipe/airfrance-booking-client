import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FindTripSummaryComponent } from './find-trip-summary.component';
import { ApolloTestingModule } from 'apollo-angular/testing';
describe('FindTripSummaryComponent', () => {
  let component: FindTripSummaryComponent;
  let fixture: ComponentFixture<FindTripSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindTripSummaryComponent ],
      imports: [RouterTestingModule, ApolloTestingModule]
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
