import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FindTripModule } from './find-trip/find-trip.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Router, ActivatedRoute, Params } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FindTripModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Apollo, HttpLink],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const http = httpLink.create({ uri: 'http://localhost:4000' });
    const errorLink = onError(({ networkError }) => {
      if (networkError) {
        const queryParams: Params = { serverErrors: 'networkError' };
        this.router.navigate(['check-in'], { relativeTo: route, queryParams });
      }
    });

    apollo.create({
      link: errorLink.concat(http),
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          errorPolicy: 'all'
        }
      }
    });
  }
}
