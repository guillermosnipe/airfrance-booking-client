import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/Operators';
import { Observable } from 'rxjs';
import { Subscription } from 'apollo-client/util/Observable';

export interface Booking {
  data?: { booking: any };
}

@Component({
  selector: 'af-find-trip-summary',
  templateUrl: './find-trip-summary.component.html'
})
export class FindTripSummaryComponent implements OnInit {
  booking: any;
  loading = true;
  error: any;
  querySubscription: Subscription;
  private readonly bookingCode: Observable<
    string | null
  > = this.route.paramMap.pipe(
    map((params: ParamMap) => params.get('bookingCode'))
  );

  private BookingByID = gql`
    query GetBookingById($bookingCode: ID!) {
      booking(bookingCode: $bookingCode) {
        bookingCode
        firstName
        lastName
        title
        originCity
        originAirport
        destinationCity
        destinationAirport
        localScheduledDeparture
        localScheduledArrival
      }
    }
  `;

  constructor(private apollo: Apollo, private route: ActivatedRoute) {}

  ngOnInit() {
    this.bookingCode.subscribe((id: string | null) => {
      if (id !== null) {
  this.apollo
    .watchQuery<any>({
      query: this.BookingByID,
      variables: {
        bookingCode: id
      }
    })
    .valueChanges.subscribe(result => {
      this.booking = result.data.booking;
      this.loading = result.loading;
      this.error = result.errors;
    });
      }
    });
  }
}
