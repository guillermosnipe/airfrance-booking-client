import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FindTripSummaryComponent } from './find-trip-summary.component';
import { ApolloTestingModule, ApolloTestingController } from 'apollo-angular/testing';

export interface Booking {
  firstName: string;
  lastName: string;
}


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

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch the proper graphQL data', () => {
    component.query.subscribe( (result) => {
      expect(result.data.booking.firstName).toEqual('RUUD');
      expect(result.data.booking.lastName).toEqual('HESP');
    });

    const op = controller.expectOne(component.BookingByID);

    // Respond with mock data, causing Observable to resolve.
    op.flush({
      data : {
        booking: {
          bookingCode: 'PZIGZ3',
          firstName: 'RUUD',
          lastName: 'HESP',
          title: 'MR',
          originCity: 'Amsterdam',
          originAirport: 'Schipol',
          destinationCity: 'Nice',
          destinationAirport: 'Cote D\'Azur Airport',
          localScheduledDeparture: '2016-10-14T09:35',
          localScheduledArrival: '2016-10-14T11:35'
        },
      }
    });
  });

  afterEach( () => {
    controller.verify();
  });
});
