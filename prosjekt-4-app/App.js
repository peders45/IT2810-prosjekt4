import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import MainView from './src/components/organisms/MainView';
import { ApolloProvider } from 'react-apollo';
import client from './setupApolloClient';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <MainView/>
      </Provider>
    </ApolloProvider>
  );
}
