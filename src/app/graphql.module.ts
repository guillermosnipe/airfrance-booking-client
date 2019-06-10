import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache} from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';

const uri = 'http://localhost:4000'; // <-- add the URL of the GraphQL server here

export function createApollo( httpLink: HttpLink ) {
  const http = httpLink.create({uri});
  const error = onError(({networkError}) => {
    console.log(networkError);
  });

  return {
    link: error.concat(http),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        errorPolicy: 'all'
      }
    }
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
