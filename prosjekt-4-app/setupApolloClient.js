import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

//Link to database and setup of client using ApolloClient
const httpLink = new HttpLink({
  uri: 'http://it2810-56.idi.ntnu.no:4000/graphql',
});

//Disabling caching from Apollo prevent app from displaying outdated ratings when browsing.
const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

const client = new ApolloClient({
link: httpLink,
cache: new InMemoryCache(),
defaultOptions: defaultOptions,
});


export default client;