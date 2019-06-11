import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo, Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/Operators';
import { Observable, Subscription } from 'rxjs';
import { ApolloQueryResult } from 'apollo-client';

export interface Booking {
  data?: { booking: any };
}

@Component({
  selector: 'af-find-trip-summary',
  templateUrl: './find-trip-summary.component.html'
})
export class FindTripSummaryComponent implements OnInit, OnDestroy {
  booking: any;
  loading = true;
  error: any;
  private BookingByID: Query = gql`
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
  private readonly bookingCode: Observable<string> = this.route.paramMap.pipe(
    map((params: ParamMap) => params.get('bookingCode') || '')
  );
  private query: Observable<ApolloQueryResult<any>> = this.bookingCode
    .pipe(
      switchMap((id: string) => {
        console.log(`id: ${id}`);
        return this.apollo.watchQuery<any>({
          query: this.BookingByID,
          variables: {
            bookingCode: id
          }
        }).valueChanges;
      })
    );
  private querySubscription: Subscription;

  constructor(private apollo: Apollo, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.querySubscription = this.query.subscribe(result => {
      this.booking = result.data.booking;
      this.loading = result.loading;
      this.error = result.errors;
    });
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }
}
