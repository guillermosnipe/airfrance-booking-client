import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FindTripSummaryComponent } from './find-trip-summary.component';
import { ApolloTestingModule, ApolloTestingController } from 'apollo-angular/testing';
describe('FindTripSummaryComponent', () => {
  let component: FindTripSummaryComponent;
  let fixture: ComponentFixture<FindTripSummaryComponent>;
  let controller: ApolloTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindTripSummaryComponent ],
      imports: [RouterTestingModule, ApolloTestingModule]
    })
    .compileComponents();

    // tslint:disable-next-line: deprecation
    controller = TestBed.get(ApolloTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTripSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach( () => {
    controller.verify();
  });
});
